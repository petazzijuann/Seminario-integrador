"""Genera src/chat/grafo.ts: el grafo de conocimiento que usa el asistente.

Uso (desde backend/):  python scripts/generar_grafo.py <carpeta de documentación>
Requiere: pip install python-docx pymupdf
Volver a ejecutarlo cada vez que cambie la documentación.

Nodos:    fragmentos (secciones de la última versión de cada documento) y conceptos
          (casos de uso, entidades, pantallas, estados).
Aristas:  fragmento -> concepto que menciona (con peso) y concepto <-> concepto.
"""
import glob, json, os, re, sys, unicodedata
import docx, pymupdf
from docx.table import Table

RAIZ = sys.argv[1]
SALIDA = os.path.join(os.path.dirname(__file__), '..', 'src', 'chat', 'grafo.ts')
MAX = 1100  # caracteres por fragmento

# (carpeta, prefijo de archivo, nombre, peso). Solo documentos útiles para el usuario final.
FUENTES = [
    ('Manual de Usuario', r'MU_', 'Manual de usuario', 1.3),
    ('Casos de Uso', r'CU-\d\d_', 'Caso de uso', 1.0),
    ('Requerimientos', r'RQ_ReglasDeNegocio', 'Reglas de negocio', 1.0),
    ('Requerimientos', r'RQ_ChatbotYDashboards', 'Requerimientos', 0.8),
    ('Requerimientos', r'RQ_Vision', 'Visión (alcance previsto, puede no estar implementado)', 0.5),
    ('Minutas', r'Minuta_', 'Minuta', 0.6),
    ('Maquinas de Estado', r'ME-', 'Máquina de estados', 0.8),
]
OMITIR = re.compile(
    r'historial|historia de versiones|índice|indice|contenido|integrantes|participantes|link d|'
    r'diccionario de datos|cuestiones|referencias|documentos relacionados|perfil|stakeholder|fecha:|^tema', re.I)

CONCEPTOS = {
    'cu:00': ('CU-00 Administrar campaña agrícola', ['administrar campaña', 'proceso principal']),
    'cu:01': ('CU-01 Asignar lote', ['asignar lote', 'asignar un lote', 'cuu1']),
    'cu:02': ('CU-02 Registrar siembra', ['registrar siembra', 'registrar una siembra', 'cuu2']),
    'cu:03': ('CU-03 Registrar labor', ['registrar labor', 'registrar una labor', 'cuu3', 'labor de mantenimiento']),
    'cu:04': ('CU-04 Registrar cosecha', ['registrar cosecha', 'registrar una cosecha', 'cuu4']),
    'cu:05': ('CU-05 Cerrar campaña', ['cerrar campaña', 'cerrar una campaña', 'cierre de campaña', 'cierro', 'cuu5']),
    'cu:06': ('CU-06 Eliminar campaña', ['eliminar campaña', 'baja de la campaña', 'cuu6']),
    'cu:07': ('CU-07 Eliminar insumo', ['eliminar insumo', 'eliminar un insumo', 'baja del insumo', 'baja un insumo', 'cuu7']),
    'cu:08': ('CU-08 Eliminar semilla', ['eliminar semilla', 'eliminar una semilla', 'baja una semilla', 'baja de la semilla', 'cuu8']),
    'cu:09': ('CU-09 Consultar asistente', ['agrobot', 'asistente', 'cuu9']),
    'cu:10': ('CU-10 Consultar rinde', ['consultar rinde', 'cuu10', 'costo por tonelada']),
    'cu:11': ('CU-11 Consultar stock', ['consultar stock', 'cuu11', 'stock bajo', 'reponer', 'comprar']),
    'ent:lote': ('Lote', ['lote', 'lotes']),
    'ent:semilla': ('Semilla', ['semilla', 'semillas']),
    'ent:insumo': ('Insumo', ['insumo', 'insumos', 'fertilizante', 'herbicida', 'insecticida']),
    'ent:campania': ('Campaña', ['campaña', 'campañas']),
    'ent:siembra': ('Siembra', ['siembra', 'siembras', 'sembrar']),
    'ent:labor': ('Labor', ['labor', 'labores']),
    'ent:cosecha': ('Cosecha', ['cosecha', 'cosechas', 'cosechar']),
    'ent:percance': ('Percance', ['percance', 'percances', 'granizo']),
    'ent:usuario': ('Usuario y roles', ['usuario', 'usuarios', 'rol', 'roles', 'contraseña', 'cuenta']),
    'con:doble': ('Doble cultivo', ['doble cultivo', 'segundo cultivo']),
    'con:barbecho': ('Barbecho', ['barbecho']),
    'con:stock': ('Stock', ['stock']),
    'con:rinde': ('Rinde', ['rinde', 'rendimiento']),
    'con:costo': ('Costos', ['costo', 'costos', 'inversion']),
    'con:humedad': ('Humedad', ['humedad']),
    'con:sesion': ('Inicio de sesión', ['iniciar sesion', 'inicio de sesion', 'ingresar al sistema', 'logueado']),
    'pan:catalogos': ('Pantalla Catálogos', ['catalogos', 'catalogo', 'reactivar', 'baja']),
    'pan:insumos': ('Pantalla Insumos', ['“insumos”']),
    'pan:rinde': ('Pantalla Rinde', ['“rinde”']),
    'est:libre': ('Lote Libre', ['libre', 'disponible']),
    'est:enuso': ('Lote En uso', ['en uso']),
    'est:sembrado': ('Lote Sembrado', ['sembrado']),
    'est:cosechado': ('Lote Cosechado', ['cosechado']),
}
RELACIONES = [
    ('cu:00', 'cu:01'), ('cu:00', 'cu:02'), ('cu:00', 'cu:03'), ('cu:00', 'cu:04'), ('cu:00', 'cu:05'),
    ('cu:01', 'ent:lote'), ('cu:01', 'ent:semilla'), ('cu:01', 'ent:campania'), ('cu:01', 'est:enuso'),
    ('cu:02', 'ent:siembra'), ('cu:02', 'ent:percance'), ('cu:02', 'est:sembrado'), ('cu:02', 'con:stock'),
    ('cu:03', 'ent:labor'), ('cu:03', 'ent:insumo'), ('cu:03', 'con:stock'),
    ('cu:04', 'ent:cosecha'), ('cu:04', 'con:humedad'), ('cu:04', 'est:cosechado'),
    ('cu:05', 'ent:campania'), ('cu:05', 'est:libre'), ('cu:05', 'con:doble'),
    ('cu:06', 'ent:campania'), ('cu:07', 'ent:insumo'), ('cu:07', 'pan:catalogos'),
    ('cu:08', 'ent:semilla'), ('cu:08', 'pan:catalogos'),
    ('cu:10', 'pan:rinde'), ('cu:10', 'con:rinde'), ('cu:10', 'con:costo'),
    ('cu:11', 'pan:insumos'), ('cu:11', 'con:stock'), ('ent:usuario', 'con:sesion'),
]


def norm(s):
    s = unicodedata.normalize('NFD', s.lower())
    return ''.join(c for c in s if unicodedata.category(c) != 'Mn')


def ultima(carpeta, patron):
    """Última versión de cada documento de la carpeta (docx antes que pdf)."""
    mejores = {}
    for f in glob.glob(os.path.join(RAIZ, carpeta, 'v*', '*')):
        m = re.match(rf'({patron}.*?)_v(\d+)\.(docx|pdf)$', os.path.basename(f))
        if not m:
            continue
        v = (int(m[2]), m[3] == 'docx')
        if m[1] not in mejores or v > mejores[m[1]][0]:
            mejores[m[1]] = (v, f)
    return sorted((k, f) for k, (_, f) in mejores.items())


def secciones_docx(f):
    titulo, cuerpo = '', []
    for x in docx.Document(f).iter_inner_content():
        if isinstance(x, Table):
            for fila in x.rows:
                celdas = []
                for c in fila.cells:
                    t = ' '.join(c.text.split())
                    if t and (not celdas or celdas[-1] != t):
                        celdas.append(t)
                cuerpo.append(' | '.join(celdas))
            continue
        t, est = ' '.join(x.text.split()), x.style.name
        if not t or est.lower().startswith(('toc', 'caption')):
            continue
        if est.startswith('Heading') or t.startswith('Historial de versiones'):
            yield titulo, cuerpo
            titulo, cuerpo = t, []
        else:
            cuerpo.append(t)
    yield titulo, cuerpo


TITULO_PDF = re.compile(
    r'^(Meta|Actores|Precondiciones de (sistema|negocio)|(Evento )?Disparador|Flujo de sucesos|'
    r'Camino( B[aá]sico| Alternativo)?|Alternativo|Postcondiciones de (sistema|negocio)|'
    r'Cuestiones (Abiertas|Cerradas)|Diccionario de datos|Historial de versiones|'
    r'Descripción del Documento|Reglas de negocio|Integrantes|[IÍ]ndice|Contenido):?$', re.I)


def secciones_pdf(f):
    titulo, cuerpo = 'Indice', []
    for p in pymupdf.open(f):
        for l in p.get_text().split('\n'):
            l = ' '.join(l.replace('​', '').split())
            if not l or re.fullmatch(r'\d+', l) or '....' in l:
                continue
            if TITULO_PDF.match(l):
                yield titulo, cuerpo
                if l.lower().startswith('historial'):
                    return  # va al final y repite palabras que parecen títulos
                titulo, cuerpo = l, []
            else:
                cuerpo.append(l)
    yield titulo, cuerpo


def partir(lineas):
    actual = ''
    for l in lineas:
        while len(l) > MAX:
            if actual:
                yield actual
                actual = ''
            yield l[:MAX]
            l = l[MAX:]
        if len(actual) + len(l) > MAX:
            yield actual
            actual = ''
        actual += ('\n' if actual else '') + l
    if len(actual) > 25:
        yield actual


fragmentos = []
for carpeta, patron, tipo, peso in FUENTES:
    for clave, f in ultima(carpeta, patron):
        nombre = f"{tipo} {re.sub(r'(?<=[a-z])(?=[A-Z])', ' ', clave.replace('_', ' '))}" if clave[:2] in ('CU', 'ME') else tipo
        mmd = f.rsplit('.', 1)[0] + '.mmd'
        if clave.startswith('ME-') and os.path.exists(mmd):
            with open(mmd, encoding='utf8') as s:
                t = re.sub(r'<br/?>', ' ', s.read())
            fragmentos.append(dict(fuente=nombre, titulo='Estados y transiciones', texto=t[:MAX], peso=peso))
            continue
        h1 = ''
        for titulo, cuerpo in (secciones_docx if f.endswith('docx') else secciones_pdf)(f):
            if not titulo or OMITIR.search(titulo):
                continue
            if re.match(r'^\d+(\.| -)\s', titulo):
                h1 = titulo
            rotulo = f'{h1} > {titulo}' if h1 and titulo != h1 and re.match(r'^\d+\.\d', titulo) else titulo
            for t in partir(cuerpo):
                fragmentos.append(dict(fuente=nombre, titulo=rotulo.rstrip(':'), texto=t, peso=peso))

# Guía de pantallas: cada '## Pantalla [ruta]' y sus temas '###'.
pantallas, tema, cuerpo = {}, '', []
with open(os.path.join(os.path.dirname(__file__), '..', 'src', 'chat', 'pantallas.md'), encoding='utf8') as s:
    lineas = [l.strip() for l in s] + ['## fin [/fin]']
pantalla = ruta = ''
for l in lineas:
    if l.startswith('##'):
        if tema:
            for t in partir(cuerpo):
                fragmentos.append(dict(fuente='Guía de pantallas', titulo=f'{pantalla} > {tema}', texto=t, peso=1.4, ruta=ruta))
        tema, cuerpo = '', []
        if l.startswith('###'):
            tema = l.lstrip('# ')
        else:
            pantalla, ruta = re.match(r'## (.+) \[(.+)\]$', l).groups()
            if ruta not in ('/*', '/fin'):
                pantallas[ruta] = pantalla
    elif l and tema:
        cuerpo.append(l)

# Anotaciones de las charlas con el ingeniero agrónomo (raíz del repo).
for nota in sorted(glob.glob(os.path.join(os.path.dirname(__file__), '..', '..', 'Anotaciones*.md'))):
    titulo, cuerpo = '', []
    with open(nota, encoding='utf8') as s:
        lineas = [l.strip().replace('**', '') for l in s] + ['# fin']
    for l in lineas:
        if l.startswith('#'):
            if titulo:
                for t in partir(cuerpo):
                    fragmentos.append(dict(fuente='Charla con el ingeniero agrónomo', titulo=titulo, texto=t, peso=0.9))
            titulo, cuerpo = l.lstrip('# ').rstrip(':'), []
        elif l:
            cuerpo.append(l.lstrip('* '))

for i, f in enumerate(fragmentos):
    n = norm(f"{f['fuente']} {f['titulo']} {f['texto']}")
    f['id'] = i
    f['conceptos'] = {}
    for c, (_, alias) in CONCEPTOS.items():
        k = sum(len(re.findall(rf'(?<!\w){re.escape(norm(a))}(?!\w)', n)) for a in alias)
        if k:
            f['conceptos'][c] = k

vecinos = {c: [] for c in CONCEPTOS}
for a, b in RELACIONES:
    vecinos[a].append(b)
    vecinos[b].append(a)
grafo = dict(
    fragmentos=fragmentos,
    pantallas=pantallas,
    conceptos={c: dict(nombre=n, alias=[norm(a) for a in al], vecinos=vecinos[c]) for c, (n, al) in CONCEPTOS.items()},
)
with open(SALIDA, 'w', encoding='utf8', newline='\n') as s:
    s.write("// Archivo generado por scripts/generar_grafo.py. No editar a mano.\n")
    s.write("import type { Grafo } from './conocimiento.js'\n\nexport const GRAFO: Grafo = ")
    s.write(json.dumps(grafo, ensure_ascii=False, indent=0))
    s.write('\n')
print(len(fragmentos), 'fragmentos,', len(CONCEPTOS), 'conceptos,', sum(len(f['conceptos']) for f in fragmentos) + len(RELACIONES), 'aristas')
for x in sorted({f['fuente'] for f in fragmentos}):
    print(' -', x, sum(f['fuente'] == x for f in fragmentos))
