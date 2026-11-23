// Archivo generado por scripts/generar_grafo.py. No editar a mano.
import type { Grafo } from './conocimiento.js'

export const GRAFO: Grafo = {
"fragmentos": [
{
"fuente": "Manual de usuario",
"titulo": "1. Introducción > 1.1 Objetivo del manual",
"texto": "Este manual enseña a usar AgroControl para llevar adelante una campaña agrícola completa: ingresar al sistema, asignar un lote, registrar la siembra, las labores de mantenimiento, los percances y la cosecha, y cerrar la campaña. También explica cómo consultar el stock y el rinde de las campañas cerradas, y cómo administrar los usuarios y consultar al asistente Agrobot. Está pensado para que pueda operar el sistema sin experiencia previa, siguiendo paso a paso las pantallas de la aplicación.",
"peso": 1.3,
"id": 0,
"conceptos": {
"cu:01": 1,
"cu:09": 2,
"ent:lote": 1,
"ent:campania": 3,
"ent:siembra": 1,
"ent:labor": 1,
"ent:cosecha": 1,
"ent:percance": 1,
"ent:usuario": 2,
"con:stock": 1,
"con:rinde": 1,
"con:sesion": 1
}
},
{
"fuente": "Manual de usuario",
"titulo": "1. Introducción > 1.2 A quién está dirigido",
"texto": "El manual está organizado por actor. Cada persona entra con su propia cuenta y lo que puede hacer depende de su rol (sección 2.3):\nIngeniero Agrónomo (rol “Ingeniero”): actor principal de los casos de uso que se describen.\nProductor (rol “Productor”): informa al ingeniero que una siembra o una cosecha se realizó. Además, puede ingresar al sistema para consultar la información, sin modificarla.\nAdministrador (rol “Admin”): tiene los mismos permisos que el ingeniero y, además, crea las cuentas de usuario y reinicia contraseñas (sección 12).",
"peso": 1.3,
"id": 1,
"conceptos": {
"ent:siembra": 1,
"ent:cosecha": 1,
"ent:usuario": 7,
"con:sesion": 1
}
},
{
"fuente": "Manual de usuario",
"titulo": "1. Introducción > 1.3 Cómo leer este manual",
"texto": "La sección 2 explica cómo ingresar y qué permite cada rol. La sección 3 explica el proceso completo y en qué orden se usan las funciones. Léalas primero.\nLas secciones 4 a 8 describen cada caso de uso: su meta, cuándo usarlo, qué tiene que existir antes y los pasos a seguir.\nLas secciones 9 a 13 describen las funciones complementarias: percance general, stock, rinde, usuarios y el asistente.\nLos pasos de cada acción están numerados y deben realizarse en ese orden.\nLos nombres de botones, campos, pantallas y opciones del sistema se escriben entre comillas, por ejemplo “Seleccionar”.\nLos términos del negocio agropecuario (lote, campaña, labor, insumo) se definen en el Glosario (sección 14).\nLas figuras usan datos de ejemplo. Los lotes, semillas, insumos y usuarios que vea en su sistema pueden ser otros.\nEn esta versión se describe el escenario básico de cada caso de uso y el agregado de un segundo cultivo (sección 8.4). Los demás caminos alternativos se documentarán en una versión posterior del manual.",
"peso": 1.3,
"id": 2,
"conceptos": {
"cu:09": 1,
"ent:lote": 2,
"ent:semilla": 1,
"ent:insumo": 2,
"ent:campania": 1,
"ent:labor": 1,
"ent:percance": 1,
"ent:usuario": 4,
"con:doble": 1,
"con:stock": 1,
"con:rinde": 1
}
},
{
"fuente": "Manual de usuario",
"titulo": "1. Introducción > 1.4 Novedades de esta versión",
"texto": "Novedad | Qué cambia para usted | Sección\nAsistente Agrobot | Puede consultar a un asistente por chat desde cualquier pantalla, con cualquier rol. | 13\nInsumos | Accesos directos para editar semillas e insumos. Solo se consideran los activos. Si los datos no se pueden cargar, los indicadores muestran “—”. | 10\nRinde | Si ninguna campaña coincide con los filtros, el sistema lo avisa. | 11\nCatálogos | Se pueden dar de baja y reactivar semillas, insumos y labores. | 10.1\nLotes | Cómo crear y modificar lotes. | 4.4",
"peso": 1.3,
"id": 3,
"conceptos": {
"cu:09": 3,
"ent:lote": 2,
"ent:semilla": 2,
"ent:insumo": 3,
"ent:campania": 1,
"ent:labor": 1,
"ent:usuario": 2,
"con:rinde": 1,
"pan:catalogos": 3
}
},
{
"fuente": "Manual de usuario",
"titulo": "2. Acceso al sistema",
"texto": "AgroControl es una aplicación web: no requiere instalación. Se usa desde un navegador moderno (Chrome, Firefox o Edge) con conexión a internet. Para ingresar necesita una cuenta, que le crea el administrador del sistema (sección 12).",
"peso": 1.3,
"id": 4,
"conceptos": {
"ent:usuario": 2
}
},
{
"fuente": "Manual de usuario",
"titulo": "2. Acceso al sistema > 2.1 Iniciar sesión",
"texto": "Abra el navegador e ingrese a seminario-integrador-frontend-ochre.vercel.app.\nEl sistema muestra la pantalla de inicio de sesión (Figura 1).\nEn “Correo electrónico” y “Contraseña”, ingrese sus datos. Con “Ver” puede mostrar la contraseña que escribió.\nOpcional: marque “Recordarme en este dispositivo” para no tener que ingresar de nuevo al cerrar el navegador. No lo marque en una computadora compartida.\nHaga clic en “Ingresar”.\nSi los datos no son correctos, el sistema muestra el mensaje “Credenciales inválidas”. Si olvidó su contraseña, pídale al administrador que la reinicie (sección 12.2).\nResultado: el sistema abre la pantalla de bienvenida con su nombre (Figura 2). La sesión dura un día; cuando vence, el sistema vuelve a pedirle sus datos.",
"peso": 1.3,
"id": 5,
"conceptos": {
"ent:usuario": 4,
"con:sesion": 2
}
},
{
"fuente": "Manual de usuario",
"titulo": "2. Acceso al sistema > 2.2 Barra de navegación",
"texto": "Use la barra de navegación superior para moverse entre las secciones que correspondan a la etapa en que se encuentra la producción (Figura 3). Al hacer clic en “AgroControl” vuelve a la pantalla de bienvenida.\nLa barra de navegación tiene estas secciones:\nSección | Para qué se usa | Caso de uso\n“Lotes” | Ver los lotes y su estado. Desde aquí se accede a “Asignar lote”, para crear una campaña nueva. | CUU1\n“Siembras” | Registrar la siembra de un lote en uso. Desde aquí se accede a “Percance general”. | CUU2\n“Labores” | Registrar una labor de mantenimiento en un lote sembrado. | CUU3\n“Cosechas” | Registrar la cosecha de un lote sembrado. | CUU4\n“Campañas” | Cerrar una campaña abierta o agregar un segundo cultivo. | CUU5\n“Insumos” | Consultar el stock de semillas e insumos. | CUU11\n“Rinde” | Consultar los resultados de las campañas cerradas. | CUU10\n“Catálogos” | Consultar, cargar, modificar, dar de baja y reactivar semillas, insumos y labores de mantenimiento. | —\n“Usuarios” | Crear cuentas y reiniciar contraseñas. Solo aparece para el rol Admin. | —",
"peso": 1.3,
"id": 6,
"conceptos": {
"cu:01": 2,
"cu:02": 1,
"cu:03": 3,
"cu:04": 1,
"cu:05": 2,
"cu:10": 1,
"cu:11": 1,
"ent:lote": 6,
"ent:semilla": 2,
"ent:insumo": 3,
"ent:campania": 4,
"ent:siembra": 2,
"ent:labor": 3,
"ent:cosecha": 2,
"ent:percance": 1,
"ent:usuario": 3,
"con:doble": 1,
"con:stock": 1,
"con:rinde": 1,
"pan:catalogos": 3,
"pan:insumos": 1,
"pan:rinde": 1,
"est:enuso": 1,
"est:sembrado": 2
}
},
{
"fuente": "Manual de usuario",
"titulo": "2. Acceso al sistema > 2.2 Barra de navegación",
"texto": "Todas las pantallas de los casos de uso tienen la misma estructura: un indicador de pasos arriba (por ejemplo “Seleccionar lote”, “Seleccionar semilla”, “Confirmar asignación”), un panel lateral izquierdo con lo elegido hasta el momento y la zona de trabajo a la derecha. Nada se guarda hasta que confirme la operación en el último paso. Para volver a un paso anterior, haga clic sobre su nombre en el indicador de pasos.\nPara abandonar una operación, use “Cancelar”, “Cancelar registro”, “Cancelar registración” o “Cancelar asignación”, según la pantalla, y confirme con “Sí, cancelar”. Con “No, volver” se cierra el mensaje sin cambios. Si una tabla no puede cargar los datos, use “Reintentar”.\nEn todas las pantallas, abajo a la derecha, hay un botón redondo que abre el chat con el asistente Agrobot (sección 13).",
"peso": 1.3,
"id": 7,
"conceptos": {
"cu:09": 2,
"ent:lote": 1,
"ent:semilla": 1,
"ent:usuario": 1
}
},
{
"fuente": "Manual de usuario",
"titulo": "2. Acceso al sistema > 2.3 Roles y permisos",
"texto": "Rol | Qué puede hacer\nAdmin | Todas las funciones operativas y, además, la sección “Usuarios”.\nIngeniero | Todas las funciones operativas: casos de uso, percances, consultas y catálogos. No ve la sección “Usuarios”.\nProductor | Solo consultar. Puede recorrer las pantallas, pero no cargar ni modificar información.\nCuando ingresa con el rol Productor, el sistema muestra el aviso “Modo consulta: tu rol no permite modificar información.” y oculta los botones de acción, los formularios y el indicador de pasos. Los botones “Filtrar” y “Ordenar” siguen disponibles (Figura 4).\nEl asistente Agrobot (sección 13) está disponible para los tres roles.",
"peso": 1.3,
"id": 8,
"conceptos": {
"cu:09": 2,
"ent:percance": 1,
"ent:usuario": 8,
"pan:catalogos": 1,
"est:libre": 1
}
},
{
"fuente": "Manual de usuario",
"titulo": "2. Acceso al sistema > 2.4 Cerrar sesión",
"texto": "Haga clic en “Salir”, a la derecha de la barra de navegación, junto a su nombre. El sistema vuelve a la pantalla de inicio de sesión. Hágalo siempre al terminar si usa una computadora compartida.",
"peso": 1.3,
"id": 9,
"conceptos": {
"ent:usuario": 1,
"con:sesion": 1
}
},
{
"fuente": "Manual de usuario",
"titulo": "3. Proceso principal: Administrar campaña agrícola",
"texto": "Una campaña recorre cinco funciones del sistema, siempre en el mismo orden. Cada una cambia el estado del lote, y ese estado decide qué lotes aparecen en la pantalla siguiente. Si después de la cosecha se hace un segundo cultivo en el mismo lote, el lote vuelve a “En uso” y repite los pasos de siembra, labores y cosecha dentro de la misma campaña.\nOrden | Función | Estado del lote antes | Estado del lote después | Sección\n1 | Asignar lote | Libre | En uso | 4\n2 | Registrar siembra | En uso | Sembrado | 5\n3 | Registrar labor (se repite hasta la cosecha) | Sembrado | 6\n— | Percance general (cuando ocurre, opcional) | Sembrado | 9\n4 | Registrar cosecha | Sembrado | Cosechado | 7\n— | Agregar segundo cultivo (opcional, hasta uno por lote) | Cosechado | En uso | 8.4\n5 | Cerrar campaña | Cosechado | Libre | 8\nAntes de empezar, el sistema debe tener cargados los lotes (sección “Lotes”), las semillas con su stock, los insumos con su stock y precio, y las labores de mantenimiento (sección “Catálogos”). Además, el barbecho debe estar realizado y la tierra en condiciones de siembra.",
"peso": 1.3,
"id": 10,
"conceptos": {
"cu:00": 2,
"cu:01": 1,
"cu:02": 1,
"cu:03": 1,
"cu:04": 1,
"cu:05": 1,
"ent:lote": 10,
"ent:semilla": 1,
"ent:insumo": 1,
"ent:campania": 4,
"ent:siembra": 3,
"ent:labor": 3,
"ent:cosecha": 4,
"ent:percance": 1,
"ent:usuario": 1,
"con:doble": 2,
"con:barbecho": 1,
"con:stock": 2,
"pan:catalogos": 1,
"est:libre": 2,
"est:enuso": 4,
"est:sembrado": 4,
"est:cosechado": 3
}
},
{
"fuente": "Manual de usuario",
"titulo": "3. Proceso principal: Administrar campaña agrícola",
"texto": "Las secciones “Insumos” y “Rinde” son de consulta: puede abrirlas en cualquier momento y no cambian el estado de ningún lote.",
"peso": 1.3,
"id": 11,
"conceptos": {
"cu:00": 2,
"ent:lote": 1,
"ent:insumo": 1,
"ent:campania": 1,
"ent:usuario": 1,
"con:rinde": 1,
"pan:insumos": 1,
"pan:rinde": 1
}
},
{
"fuente": "Manual de usuario",
"titulo": "4. Asignar lote",
"texto": "Meta: asignar un lote libre y su semilla para dar inicio a una nueva campaña.\nCuándo usarlo: cuando decide comenzar una campaña y necesita definir qué lote va a usar y qué semilla va a sembrar.\nAntes de empezar: la tierra debe estar en condiciones de siembra y debe existir al menos un lote en estado “Libre” y una semilla con stock.",
"peso": 1.3,
"id": 12,
"conceptos": {
"cu:01": 2,
"ent:lote": 4,
"ent:semilla": 3,
"ent:campania": 2,
"ent:siembra": 2,
"ent:usuario": 1,
"con:stock": 1,
"est:libre": 2
}
},
{
"fuente": "Manual de usuario",
"titulo": "4. Asignar lote > 4.1 Seleccionar el lote",
"texto": "En la barra de navegación, haga clic en “Lotes”.\nHaga clic en el botón “Asignar lote”. El sistema muestra la tabla “Lotes libres”, con los lotes que no tienen un cultivo activo (Figura 5).\nOpcional: use “Ordenar” para ver primero los lotes de “Mayor superficie” o de “Menor superficie”.\nMarque la casilla del lote que va a usar. El panel izquierdo muestra su zona y superficie (Figura 6).\nHaga clic en “Seleccionar”.",
"peso": 1.3,
"id": 13,
"conceptos": {
"cu:01": 2,
"ent:lote": 8,
"ent:usuario": 1
}
},
{
"fuente": "Manual de usuario",
"titulo": "4. Asignar lote > 4.2 Seleccionar la semilla",
"texto": "El sistema muestra la tabla “Semillas disponibles”, con las semillas activas que tienen stock (Figura 7).\nOpcional: use “Filtrar” para ver solo semillas de “Verano” o de “Invierno”, y “Ordenar” para verlas por “Mayor stock” o “Menor stock”.\nMarque la casilla de la semilla a sembrar.\nHaga clic en “Seleccionar”.",
"peso": 1.3,
"id": 14,
"conceptos": {
"cu:01": 1,
"ent:lote": 1,
"ent:semilla": 5,
"ent:siembra": 1,
"ent:usuario": 1,
"con:stock": 3
}
},
{
"fuente": "Manual de usuario",
"titulo": "4. Asignar lote > 4.3 Confirmar la asignación",
"texto": "El sistema muestra el “Detalle de la campaña” con el lote, la superficie, la zona y la semilla elegidos (Figura 8).\nEn “Fecha de inicio de campaña”, elija la fecha. Por defecto aparece la fecha del día. El nombre de la campaña se arma con el año de inicio, por ejemplo 2026/2027.\nRevise la “Temporada”. El sistema la completa con la estación de la semilla; puede cambiarla si hace falta.\nHaga clic en “Confirmar asignación”.\nEn el mensaje “¿Asignar el Lote … a …?”, haga clic en “Sí, asignar” (Figura 9).\nEl sistema muestra el mensaje “Campaña … creada en el Lote …”. Haga clic en “Cerrar”.\nResultado: queda creada la campaña con el lote y la semilla, y el lote pasa a estado “En uso”. El paso siguiente es registrar la siembra (sección 5).",
"peso": 1.3,
"id": 15,
"conceptos": {
"cu:01": 1,
"ent:lote": 6,
"ent:semilla": 3,
"ent:campania": 5,
"ent:siembra": 1,
"ent:usuario": 1,
"est:enuso": 1
}
},
{
"fuente": "Manual de usuario",
"titulo": "4. Asignar lote > 4.4 Crear y modificar lotes",
"texto": "Para asignar un lote, primero tiene que estar creado. Para crearlo:\nEn la barra de navegación, haga clic en “Lotes” (Figura 10).\nHaga clic en “Nuevo lote”.\nComplete “Número de lote”, “Zona”, “Superficie (ha)” y “Distancia entre surcos” (Figura 11).\nHaga clic en “Crear lote”. El sistema confirma con el mensaje “Lote … creado en estado Libre.”.\nEl número debe ser entero, mayor a 0 y no estar repetido. La superficie y la distancia deben ser mayores a 0.\nPara modificar un lote, haga clic en “Modificar” en su fila, cambie los datos y haga clic en “Guardar cambios”. El número no se puede cambiar. El estado cambia solo con las operaciones del sistema y no hay una opción para eliminar lotes.",
"peso": 1.3,
"id": 16,
"conceptos": {
"cu:01": 2,
"ent:lote": 10,
"ent:usuario": 1,
"est:libre": 1
}
},
{
"fuente": "Manual de usuario",
"titulo": "5. Registrar siembra",
"texto": "Meta: registrar los datos de la siembra realizada en un lote de una campaña.\nCuándo usarlo: cuando el Productor le informa que terminó la siembra en el lote.\nAntes de empezar: el lote debe estar en estado “En uso” (sección 4) y la semilla asignada debe tener stock cargado.",
"peso": 1.3,
"id": 17,
"conceptos": {
"cu:02": 1,
"ent:lote": 3,
"ent:semilla": 1,
"ent:campania": 1,
"ent:siembra": 3,
"ent:usuario": 1,
"con:stock": 1,
"est:enuso": 1
}
},
{
"fuente": "Manual de usuario",
"titulo": "5. Registrar siembra > 5.1 Seleccionar el lote",
"texto": "En la barra de navegación, haga clic en “Siembras”. El sistema muestra la tabla “Lotes en uso”, con la zona, el cultivo asignado y la superficie de cada lote (Figura 12).\nOpcional: use “Filtrar” para ver solo un cultivo o una zona, y “Ordenar” para ordenarlos por zona, cultivo o superficie.\nMarque la casilla del lote donde terminó la siembra.\nHaga clic en “Seleccionar”.\nEl botón “Percance general” de esta pantalla sirve para registrar un percance que afectó a varios lotes ya sembrados (sección 9).",
"peso": 1.3,
"id": 18,
"conceptos": {
"cu:02": 1,
"ent:lote": 5,
"ent:siembra": 3,
"ent:percance": 2,
"ent:usuario": 1,
"est:enuso": 1
}
},
{
"fuente": "Manual de usuario",
"titulo": "5. Registrar siembra > 5.2 Cargar los datos de la siembra",
"texto": "En “Cantidad de semillas … sembradas (t)”, ingrese las toneladas sembradas, en números enteros. El panel “Stock de …” muestra el stock actual, lo que va a sembrar y lo que queda después de la siembra (Figura 13).\nEn “Fecha de finalización de siembra”, elija la fecha en que terminó la siembra.\nHaga clic en “Revisar siembra”.\nDentro de este paso también puede:\nAgregar stock de semilla: si el stock no alcanza, haga clic en “Modificar stock”, ingrese las “Toneladas a agregar” y haga clic en “Agregar” (Figura 14). El ajuste se guarda recién al registrar la siembra.\nCargar un percance: si algo salió mal durante la siembra (por ejemplo, una máquina rota), haga clic en “Añadir percance” y complete “Descripción”, “Fecha” y “Costo ($)”. Para quitarlo, haga clic en “Eliminar”.",
"peso": 1.3,
"id": 19,
"conceptos": {
"cu:02": 1,
"ent:semilla": 2,
"ent:siembra": 9,
"ent:percance": 2,
"ent:usuario": 1,
"con:stock": 5,
"con:costo": 1
}
},
{
"fuente": "Manual de usuario",
"titulo": "5. Registrar siembra > 5.3 Confirmar la siembra",
"texto": "El sistema muestra el resumen “Confirmar siembra”: semilla, cantidad sembrada, fecha, stock después de sembrar y percances (Figura 15). Si necesita corregir algo, haga clic en “Modificar”.\nHaga clic en “Registrar siembra”.\nEn el mensaje “¿Registrar esta siembra?”, haga clic en “Sí, registrar” (Figura 16).\nEl sistema muestra el mensaje “Siembra registrada en el Lote …”. Haga clic en “Cerrar”.\nResultado: queda registrada la siembra, se descuentan del stock las toneladas sembradas y el lote pasa a estado “Sembrado”. Comienza la etapa de mantenimiento del cultivo (sección 6).",
"peso": 1.3,
"id": 20,
"conceptos": {
"cu:02": 2,
"ent:lote": 2,
"ent:semilla": 1,
"ent:siembra": 8,
"ent:percance": 1,
"ent:usuario": 1,
"con:stock": 2,
"est:sembrado": 1
}
},
{
"fuente": "Manual de usuario",
"titulo": "6. Registrar labor (CUU3)",
"texto": "Meta: registrar una labor de mantenimiento realizada sobre un lote sembrado, con los insumos que se usaron.\nCuándo usarlo: cada vez que se realiza una labor de mantenimiento entre la siembra y la cosecha, por ejemplo una fertilización o una aplicación de herbicida o insecticida. Esta función se repite tantas veces como labores se hagan.\nAntes de empezar: el lote debe estar en estado “Sembrado” (sección 5), con su campaña abierta, y los insumos deben tener stock cargado.",
"peso": 1.3,
"id": 21,
"conceptos": {
"cu:03": 5,
"ent:lote": 2,
"ent:insumo": 4,
"ent:campania": 1,
"ent:siembra": 1,
"ent:labor": 4,
"ent:cosecha": 1,
"ent:usuario": 1,
"con:stock": 1,
"est:sembrado": 2
}
},
{
"fuente": "Manual de usuario",
"titulo": "6. Registrar labor (CUU3) > 6.1 Seleccionar el lote",
"texto": "En la barra de navegación, haga clic en “Labores”. El sistema muestra la tabla “Lotes sembrados” (Figura 17).\nOpcional: use “Ordenar” para ver primero los lotes de mayor o menor superficie.\nMarque la casilla del lote donde se hizo la labor.\nHaga clic en “Seleccionar”.",
"peso": 1.3,
"id": 22,
"conceptos": {
"cu:03": 2,
"ent:lote": 4,
"ent:labor": 3,
"ent:usuario": 1
}
},
{
"fuente": "Manual de usuario",
"titulo": "6. Registrar labor (CUU3) > 6.2 Seleccionar la labor",
"texto": "El sistema muestra la tabla “Labores” con su costo base. El panel “Detalle campaña” muestra el lote, la semilla y la campaña (Figura 18).\nMarque la casilla de la labor realizada.\nHaga clic en “Seleccionar”.\nSi la labor no está en la lista, haga clic en “Nueva labor”, complete “Labor” y “Costo base ($)” y guárdela. La nueva labor queda disponible para seleccionarla.",
"peso": 1.3,
"id": 23,
"conceptos": {
"cu:03": 2,
"ent:lote": 1,
"ent:semilla": 1,
"ent:campania": 2,
"ent:labor": 8,
"ent:usuario": 1,
"con:costo": 2,
"est:libre": 1
}
},
{
"fuente": "Manual de usuario",
"titulo": "6. Registrar labor (CUU3) > 6.3 Cargar los insumos",
"texto": "En la tabla “Insumos utilizados”, elija el insumo en la lista desplegable “Insumo”. El sistema muestra su stock y su precio unitario (Figura 19).\nEn “Cantidad”, ingrese la cantidad usada. El sistema calcula el subtotal y el “Costo de insumos”.\nPara cargar otro insumo, haga clic en “Agregar insumo” y repita los pasos 1 y 2. Para sacar una fila, haga clic en “Quitar”.\nEn “Fecha de la labor”, elija la fecha en que se realizó.\nHaga clic en “Siguiente”.\nEl panel “Costos” muestra en todo momento el costo de los insumos, el costo base de la labor y el total. Si la cantidad supera el stock de un insumo, el sistema lo indica y no permite avanzar.",
"peso": 1.3,
"id": 24,
"conceptos": {
"cu:03": 2,
"ent:insumo": 9,
"ent:labor": 3,
"ent:usuario": 1,
"con:stock": 2,
"con:costo": 4
}
},
{
"fuente": "Manual de usuario",
"titulo": "6. Registrar labor (CUU3) > 6.4 Confirmar la labor",
"texto": "El sistema muestra el resumen “Confirmar labor”: insumos, cantidades, subtotales y costo total (Figura 20). Si necesita corregir algo, haga clic en “Modificar”.\nHaga clic en “Registrar labor”.\nEn el mensaje “¿Registrar esta labor?”, haga clic en “Sí, registrar” (Figura 21).\nEl sistema muestra el mensaje “Labor registrada en el Lote …”. Haga clic en “Cerrar”.\nResultado: queda registrada la labor de mantenimiento, su costo se suma a la campaña y se descuenta del stock la cantidad de cada insumo. El lote sigue en estado “Sembrado” hasta la cosecha (sección 7).",
"peso": 1.3,
"id": 25,
"conceptos": {
"cu:03": 4,
"ent:lote": 2,
"ent:insumo": 2,
"ent:campania": 1,
"ent:labor": 7,
"ent:cosecha": 1,
"ent:usuario": 1,
"con:stock": 1,
"con:costo": 2,
"est:sembrado": 1
}
},
{
"fuente": "Manual de usuario",
"titulo": "7. Registrar cosecha",
"texto": "Meta: registrar la cantidad cosechada por hectárea y la humedad de un lote en su campaña.\nCuándo usarlo: cuando el Productor le informa que la cosecha del lote fue realizada.\nAntes de empezar: el lote debe estar en estado “Sembrado” y su campaña debe estar abierta.",
"peso": 1.3,
"id": 26,
"conceptos": {
"cu:04": 1,
"ent:lote": 3,
"ent:campania": 2,
"ent:cosecha": 2,
"ent:usuario": 1,
"con:humedad": 1,
"est:sembrado": 1
}
},
{
"fuente": "Manual de usuario",
"titulo": "7. Registrar cosecha > 7.1 Seleccionar el lote",
"texto": "En la barra de navegación, haga clic en “Cosechas”. El sistema muestra la tabla “Lotes para cosechar”, con el cultivo, la campaña y la superficie de cada lote (Figura 22).\nOpcional: use “Filtrar” para ver solo una semilla y “Ordenar” para ordenarlos por superficie.\nMarque la casilla del lote cosechado.\nHaga clic en “Seleccionar”.",
"peso": 1.3,
"id": 27,
"conceptos": {
"cu:04": 1,
"ent:lote": 4,
"ent:semilla": 1,
"ent:campania": 1,
"ent:cosecha": 3,
"ent:usuario": 1,
"est:cosechado": 1
}
},
{
"fuente": "Manual de usuario",
"titulo": "7. Registrar cosecha > 7.2 Cargar los datos de la cosecha",
"texto": "En “Cantidad cosechada por hectárea (kg/ha)”, ingrese los kilos obtenidos por hectárea.\nEn “Humedad obtenida (%)”, ingrese la humedad del grano, entre 0 y 100. Puede usar coma para los decimales, por ejemplo 13,5.\nEn “Fecha de cosecha”, elija la fecha.\nHaga clic en “Siguiente”.\nEl panel “Rinde total” calcula los kilos totales del lote multiplicando los kilos por hectárea por la superficie (Figura 23).",
"peso": 1.3,
"id": 28,
"conceptos": {
"cu:04": 1,
"ent:lote": 1,
"ent:cosecha": 3,
"ent:usuario": 1,
"con:rinde": 1,
"con:humedad": 2
}
},
{
"fuente": "Manual de usuario",
"titulo": "7. Registrar cosecha > 7.3 Confirmar la cosecha",
"texto": "El sistema muestra el resumen “Confirmar cosecha”: lote, fecha, cantidad por hectárea, humedad y rinde total estimado (Figura 24). Si necesita corregir algo, haga clic en “Modificar”.\nHaga clic en “Registrar cosecha”.\nEn el mensaje “¿Registrar esta cosecha?”, haga clic en “Sí, registrar” (Figura 25).\nEl sistema muestra el mensaje “Lote … cosechado” con el rinde total. Haga clic en “Cerrar”.\nResultado: queda registrada la cosecha del lote en la campaña y el lote pasa a estado “Cosechado”. Puede agregar un segundo cultivo (sección 8.4) o cerrar la campaña (sección 8).",
"peso": 1.3,
"id": 29,
"conceptos": {
"cu:04": 2,
"ent:lote": 4,
"ent:campania": 2,
"ent:cosecha": 6,
"ent:usuario": 1,
"con:doble": 1,
"con:rinde": 2,
"con:humedad": 1,
"est:cosechado": 2
}
},
{
"fuente": "Manual de usuario",
"titulo": "8. Cerrar campaña (CUU5)",
"texto": "Meta: cerrar una campaña abierta una vez terminado el ciclo productivo, liberando sus lotes.\nCuándo usarlo: cuando todos los lotes de la campaña fueron cosechados y quiere dar por finalizado el ciclo.\nAntes de empezar: la campaña debe estar abierta y todos sus lotes en estado “Cosechado” (sección 7).",
"peso": 1.3,
"id": 30,
"conceptos": {
"cu:05": 3,
"ent:lote": 3,
"ent:campania": 4,
"ent:usuario": 1,
"est:cosechado": 1
}
},
{
"fuente": "Manual de usuario",
"titulo": "8. Cerrar campaña (CUU5) > 8.1 Seleccionar la campaña",
"texto": "En la barra de navegación, haga clic en “Campañas”. El sistema muestra la tabla “Campañas abiertas”, con la temporada, la fecha de inicio y los lotes de cada una con su estado (Figura 26).\nOpcional: use “Ordenar” para ver primero las campañas “Más recientes” o “Más antiguas”.\nMarque la casilla de la campaña a cerrar.\nHaga clic en “Seleccionar”.",
"peso": 1.3,
"id": 31,
"conceptos": {
"cu:05": 2,
"ent:lote": 1,
"ent:campania": 6,
"ent:usuario": 1
}
},
{
"fuente": "Manual de usuario",
"titulo": "8. Cerrar campaña (CUU5) > 8.2 Revisar la campaña",
"texto": "El sistema muestra la tabla “Lotes de la campaña” con el cultivo, el estado, la semilla, lo sembrado y lo cosechado de cada lote (Figura 27). Un lote con dos cultivos aparece en dos filas: “Cultivo 1” y “Cultivo 2”.\nVerifique que todos los lotes estén en estado “Cosechado”. Si alguno no lo está, el sistema muestra el aviso “Hay lotes sin cosechar” y la campaña no se puede cerrar todavía.\nSi va a hacer un segundo cultivo en un lote, agréguelo ahora (sección 8.4). Al cerrar la campaña ya no es posible.\nHaga clic en “Cerrar campaña”.\nPor el momento, esta pantalla muestra el aviso “Humedad pendiente” y la columna “Humedad” sin datos. La humedad de cada cosecha puede consultarse en “Rinde” una vez cerrada la campaña (sección 11).",
"peso": 1.3,
"id": 32,
"conceptos": {
"cu:05": 3,
"ent:lote": 6,
"ent:semilla": 1,
"ent:campania": 7,
"ent:cosecha": 2,
"ent:usuario": 1,
"con:doble": 1,
"con:rinde": 1,
"con:humedad": 3,
"pan:rinde": 1,
"est:sembrado": 1,
"est:cosechado": 2
}
},
{
"fuente": "Manual de usuario",
"titulo": "8. Cerrar campaña (CUU5) > 8.3 Confirmar el cierre",
"texto": "En el mensaje “¿Cerrar la campaña …?”, lea qué lotes vuelven a quedar libres y haga clic en “Sí, cerrar” (Figura 28). Esta operación no se puede deshacer.\nEl sistema muestra el mensaje “Campaña … cerrada”. Haga clic en “Cerrar”.\nResultado: la campaña queda en estado “Cerrada” y sus resultados pasan a verse en “Rinde” (sección 11). Sus lotes vuelven a estado “Libre” y pueden asignarse a una nueva campaña (sección 4).",
"peso": 1.3,
"id": 33,
"conceptos": {
"cu:05": 2,
"ent:lote": 2,
"ent:campania": 5,
"ent:usuario": 1,
"con:rinde": 1,
"pan:rinde": 1,
"est:libre": 1
}
},
{
"fuente": "Manual de usuario",
"titulo": "8. Cerrar campaña (CUU5) > 8.4 Agregar un segundo cultivo (doble cultivo)",
"texto": "Meta: hacer un segundo cultivo en un lote ya cosechado, dentro de la misma campaña.\nCuándo usarlo: cuando terminó la cosecha del primer cultivo y decide volver a sembrar el lote antes de dar por finalizada la campaña.\nAntes de empezar: la campaña debe estar abierta, el lote debe estar “Cosechado” y tener un solo cultivo en la campaña, y debe existir otra semilla activa con stock, distinta a la del primer cultivo. Cada lote admite hasta dos cultivos por campaña.\nEn “Campañas”, seleccione la campaña (sección 8.1).\nEn la tabla “Lotes de la campaña”, haga clic en “Agregar segundo cultivo” en la fila del lote.\nEn la ventana “Segundo cultivo en el Lote …”, elija la semilla en la lista “Semilla” (Figura 29).\nHaga clic en “Agregar cultivo”.\nEl sistema muestra el mensaje “Segundo cultivo agregado al Lote …” (Figura 30). Haga clic en “Registrar siembra” para continuar con la sección 5, o en “Cerrar” para hacerlo más tarde.",
"peso": 1.3,
"id": 34,
"conceptos": {
"cu:02": 1,
"cu:05": 2,
"ent:lote": 8,
"ent:semilla": 3,
"ent:campania": 9,
"ent:siembra": 2,
"ent:cosecha": 1,
"ent:usuario": 1,
"con:doble": 6,
"con:stock": 1,
"est:cosechado": 2
}
},
{
"fuente": "Manual de usuario",
"titulo": "8. Cerrar campaña (CUU5) > 8.4 Agregar un segundo cultivo (doble cultivo)",
"texto": "Resultado: el lote vuelve a estado “En uso” y la tabla muestra sus dos cultivos (Figura 31). El stock de la semilla se descuenta recién al registrar la siembra. Repita las secciones 5, 6 y 7 para el segundo cultivo. La campaña no se puede cerrar hasta que el lote vuelva a estar “Cosechado”.",
"peso": 1.3,
"id": 35,
"conceptos": {
"cu:05": 2,
"ent:lote": 2,
"ent:semilla": 1,
"ent:campania": 2,
"ent:siembra": 1,
"ent:usuario": 1,
"con:doble": 3,
"con:stock": 1,
"est:enuso": 1,
"est:cosechado": 1
}
},
{
"fuente": "Manual de usuario",
"titulo": "9. Percance general",
"texto": "Meta: registrar un mismo percance que afectó a varios lotes sembrados y repartir su costo entre ellos.\nCuándo usarlo: cuando ocurre un problema que alcanza a más de un lote, como un granizo o una inundación. Para un problema ocurrido durante la siembra de un lote, use “Añadir percance” (sección 5.2).\nAntes de empezar: debe haber al menos un lote en estado “Sembrado”, con su campaña abierta.",
"peso": 1.3,
"id": 36,
"conceptos": {
"ent:lote": 4,
"ent:campania": 1,
"ent:siembra": 1,
"ent:percance": 4,
"ent:usuario": 1,
"con:costo": 1,
"est:sembrado": 1
}
},
{
"fuente": "Manual de usuario",
"titulo": "9. Percance general > 9.1 Seleccionar los lotes",
"texto": "En la barra de navegación, haga clic en “Siembras” y luego en el botón “Percance general”. El sistema muestra la tabla “Lotes sembrados”.\nMarque las casillas de todos los lotes afectados, o haga clic en “Elegir todos”. El panel “Lotes afectados” muestra la superficie total (Figura 32).\nHaga clic en “Seleccionar (…)”.",
"peso": 1.3,
"id": 37,
"conceptos": {
"ent:lote": 4,
"ent:siembra": 1,
"ent:percance": 2,
"ent:usuario": 1
}
},
{
"fuente": "Manual de usuario",
"titulo": "9. Percance general > 9.2 Cargar los datos del percance",
"texto": "En “Descripción”, indique qué ocurrió, por ejemplo “Granizo”.\nEn “Fecha del percance”, elija la fecha.\nEn “Costo total ($)”, ingrese el costo. El sistema lo reparte entre los lotes según la superficie de cada uno (Figura 33).\nOpcional: corrija el monto de un lote en la columna “Costo ($)”. Al hacerlo, el costo total pasa a ser la suma de los montos.\nHaga clic en “Siguiente”.",
"peso": 1.3,
"id": 38,
"conceptos": {
"ent:lote": 2,
"ent:percance": 4,
"ent:usuario": 1,
"con:costo": 4
}
},
{
"fuente": "Manual de usuario",
"titulo": "9. Percance general > 9.3 Confirmar el percance",
"texto": "El sistema muestra el resumen “Confirmar percance”: descripción, fecha, lotes afectados y costo de cada uno (Figura 34). Si necesita corregir algo, haga clic en “Modificar”.\nHaga clic en “Registrar percance”.\nEn el mensaje “¿Registrar el percance en … lotes?”, haga clic en “Sí, registrar” (Figura 35).\nEl sistema muestra el mensaje “Percance registrado en … lotes”. Haga clic en “Cerrar”.\nSi mientras tanto algún lote dejó de estar disponible (porque se cosechó o se cerró su campaña), el sistema lo informa en “Lotes que ya no están disponibles” y vuelve a la lista actualizada.\nResultado: queda registrado un único percance con el costo que le corresponde a cada lote. Los lotes siguen en estado “Sembrado” y el costo se suma al rubro “Percances” de cada lote en “Rinde” (sección 11).",
"peso": 1.3,
"id": 39,
"conceptos": {
"ent:lote": 8,
"ent:campania": 1,
"ent:percance": 8,
"ent:usuario": 1,
"con:rinde": 1,
"con:costo": 3,
"pan:rinde": 1,
"est:libre": 1,
"est:sembrado": 1
}
},
{
"fuente": "Manual de usuario",
"titulo": "10. Consultar stock (Insumos)",
"texto": "Meta: saber qué semillas e insumos hay disponibles, cuánto valen y para cuántos usos más alcanzan.\nCuándo usarlo: antes de planificar una siembra o una labor, o para decidir qué hay que reponer.\nAntes de empezar: deben estar cargadas las semillas y los insumos (sección “Catálogos”).\nEn la barra de navegación, haga clic en “Insumos” (Figura 36).\nMire los indicadores de arriba: “Valor total en stock”, “Semillas activas”, “Insumos” y “Para reponer”. Este último lista lo que está sin stock o con stock bajo.\nRevise las tablas “Semillas” e “Insumos”: stock, precio, valor en stock, cantidad usada, usos, promedio por uso y para cuántos usos más alcanza.\nOpcional: use “Ordenar” para ver “Lo más urgente primero”, “Mayor valor en stock” o por “Nombre”. En “Semillas”, use “Filtrar” para ver “Solo activas” o “Todas”.\nLa columna “Situación” resume el estado de cada producto:\nSituación | Significado\nSin stock | No queda stock.\nStock bajo | Según el consumo promedio, alcanza para menos de 2 siembras o labores.\nCon stock | Según el consumo promedio, alcanza para 2 o más siembras o labores.",
"peso": 1.3,
"id": 40,
"conceptos": {
"cu:11": 5,
"ent:semilla": 5,
"ent:insumo": 6,
"ent:siembra": 3,
"ent:labor": 3,
"ent:usuario": 1,
"con:stock": 11,
"pan:catalogos": 1,
"pan:insumos": 3
}
},
{
"fuente": "Manual de usuario",
"titulo": "10. Consultar stock (Insumos)",
"texto": "Sin consumo | Tiene stock, pero todavía no se usó, así que no se puede estimar para cuánto alcanza.\nEsta pantalla es solo de consulta. Para cargar stock o cambiar precios, use “Editar semillas” o “Editar insumos” (no se muestran en modo consulta), o vaya a “Catálogos” (sección 10.1). Si no se pueden cargar los datos, el sistema muestra el error, los indicadores quedan en “—” con la nota “Datos no disponibles” y puede usar “Reintentar”.\nLos indicadores y las tablas consideran solo las semillas y los insumos activos. Para ver también los dados de baja, use “Filtrar” y elija “Todas” en “Semillas” o “Todos” en “Insumos”.",
"peso": 1.3,
"id": 41,
"conceptos": {
"cu:11": 1,
"ent:semilla": 3,
"ent:insumo": 4,
"ent:usuario": 1,
"con:stock": 3,
"pan:catalogos": 2,
"pan:insumos": 1
}
},
{
"fuente": "Manual de usuario",
"titulo": "10. Consultar stock (Insumos) > 10.1 Administrar catálogos: cargar, modificar, dar de baja y reactivar",
"texto": "En “Catálogos” se administran las semillas, los insumos y las labores de mantenimiento. Dar de baja no elimina el registro: pasa a estado “Inactiva”, deja de estar disponible y conserva el historial. No está disponible en modo consulta.\nPara cargar o modificar:\nEn la barra de navegación, haga clic en “Catálogos” y elija “Semillas”, “Insumos” o “Labores de mantenimiento”.\nHaga clic en “Nueva semilla”, “Nuevo insumo” o “Nueva labor”. Para cambiar un registro existente, haga clic en “Modificar” en su fila.\nComplete los datos y haga clic en “Crear semilla”, “Crear insumo” o “Crear labor”, o en “Guardar cambios” si está modificando.\nDe una semilla se cargan “Nombre”, “Estación”, “Stock (t)” y “Precio por tonelada ($)”. De un insumo, “Nombre”, “Stock” y “Precio unitario ($)”. De una labor, “Labor” y “Costo base ($)”. El stock se ingresa en números enteros. Para sumar stock o cambiar un precio, use “Modificar”.\nPara dar de baja una semilla, un insumo o una labor:\nEn el catálogo, haga clic en “Dar de baja” en la fila que corresponda.",
"peso": 1.3,
"id": 42,
"conceptos": {
"cu:08": 1,
"cu:11": 1,
"ent:semilla": 6,
"ent:insumo": 7,
"ent:labor": 7,
"ent:usuario": 1,
"con:stock": 5,
"con:costo": 1,
"pan:catalogos": 9,
"pan:insumos": 1,
"est:libre": 2
}
},
{
"fuente": "Manual de usuario",
"titulo": "10. Consultar stock (Insumos) > 10.1 Administrar catálogos: cargar, modificar, dar de baja y reactivar",
"texto": "En el mensaje “¿Dar de baja …?”, haga clic en “Sí, dar de baja” (Figura 38).\nPara reactivar lo que se dio de baja:\nEn el catálogo, haga clic en “Filtrar” y elija “Inactivas” (en “Insumos”, “Inactivos”).\nHaga clic en “Reactivar” en la fila que corresponda. El registro vuelve a estar activo en el momento, sin pedir confirmación.\nUna labor dada de baja deja de ofrecerse al registrar labores.",
"peso": 1.3,
"id": 43,
"conceptos": {
"cu:11": 1,
"ent:insumo": 2,
"ent:labor": 2,
"ent:usuario": 1,
"con:stock": 1,
"pan:catalogos": 10,
"pan:insumos": 1
}
},
{
"fuente": "Manual de usuario",
"titulo": "11. Consultar rinde",
"texto": "Meta: ver cuánto se invirtió, cuánto se cosechó y cuánto costó cada tonelada en las campañas cerradas, y compararlo con campañas anteriores del mismo lote.\nCuándo usarlo: después de cerrar una campaña, para evaluar sus resultados.\nAntes de empezar: debe existir al menos una campaña cerrada (sección 8). Si no hay ninguna, el sistema muestra “Todavía no hay campañas cerradas”.\nEn la barra de navegación, haga clic en “Rinde”. El sistema abre la campaña cerrada más reciente (Figura 39).\nOpcional: use los selectores de arriba para elegir “Lote”, “Campaña” y “Cultivo”.\nEn “Comparar con”, elija “Campaña anterior del mismo lote” o “Promedio del mismo lote”.\nLea los indicadores y el reparto de costos “En qué se fue la plata”.\nOpcional: revise los gráficos (Figura 40) y las tablas (Figura 41). Al hacer clic en una campaña de la tabla “Histórico de campañas”, el tablero pasa a mostrarla.",
"peso": 1.3,
"id": 44,
"conceptos": {
"cu:05": 1,
"cu:10": 1,
"ent:lote": 4,
"ent:campania": 10,
"ent:usuario": 1,
"con:rinde": 2,
"con:costo": 2,
"pan:rinde": 1
}
},
{
"fuente": "Manual de usuario",
"titulo": "11. Consultar rinde",
"texto": "Si ninguna campaña coincide con los filtros elegidos, el sistema avisa “No hay campañas para ese filtro”. Cambie alguno de los filtros para continuar. También puede elegir una campaña haciendo clic en su columna en los gráficos.\nCada indicador muestra su variación contra lo elegido en “Comparar con”, en verde si el resultado mejora y en rojo si empeora:\nIndicador | Qué mide | Mejor si…\nProducción | Toneladas cosechadas. | Sube\nRinde | Kilos cosechados por hectárea. | Sube\nInversión por hectárea | Total invertido dividido por la superficie. | Baja\nCosto por tonelada | Total invertido dividido por las toneladas producidas. | Baja\nMultiplicación de semilla | Cuántas veces se multiplicó lo sembrado. | Sube\nKilos por cada $1.000 | Kilos producidos por cada $1.000 invertidos. Muestra también la humedad promedio. | Sube",
"peso": 1.3,
"id": 45,
"conceptos": {
"cu:10": 2,
"ent:semilla": 1,
"ent:campania": 3,
"ent:usuario": 1,
"con:rinde": 2,
"con:costo": 2,
"con:humedad": 1,
"pan:catalogos": 2,
"est:sembrado": 1
}
},
{
"fuente": "Manual de usuario",
"titulo": "11. Consultar rinde",
"texto": "Cómo se calculan los costos: los insumos y percances quedan guardados con su costo del momento. La semilla y el costo base de las labores se valoran con el precio actual del catálogo, así que si cambió desde la campaña, el número puede diferir. El sistema no registra precios de venta, por lo que no calcula ingresos ni ganancias.\nCon doble cultivo, la superficie del lote se cuenta una sola vez por campaña, mientras que el rinde promedio se calcula por hectárea cultivada.",
"peso": 1.3,
"id": 46,
"conceptos": {
"cu:10": 1,
"ent:lote": 1,
"ent:semilla": 1,
"ent:insumo": 1,
"ent:campania": 2,
"ent:labor": 1,
"ent:percance": 1,
"ent:usuario": 2,
"con:doble": 1,
"con:rinde": 2,
"con:costo": 3,
"pan:catalogos": 1
}
},
{
"fuente": "Manual de usuario",
"titulo": "12. Administrar usuarios",
"texto": "Meta: dar acceso al sistema a las personas del equipo y asignarles un rol.\nCuándo usarlo: cuando alguien necesita una cuenta o perdió su contraseña.\nAntes de empezar: debe ingresar con el rol Admin. La sección “Usuarios” no aparece para los demás roles.",
"peso": 1.3,
"id": 47,
"conceptos": {
"ent:usuario": 8
}
},
{
"fuente": "Manual de usuario",
"titulo": "12. Administrar usuarios > 12.1 Crear un usuario",
"texto": "En la barra de navegación, haga clic en “Usuarios” (Figura 42).\nComplete “Nombre completo”, “Correo electrónico” y “Contraseña inicial”.\nEn “Rol”, elija “Admin”, “Ingeniero” o “Productor” (sección 2.3).\nHaga clic en “Crear usuario”. El sistema confirma con el mensaje “El usuario … fue creado.” y lo agrega a la tabla “Usuarios”.\nComuníquele a la persona su correo y su contraseña inicial por un medio seguro.\nSi el correo ya está en uso, el sistema muestra “El email ya está registrado” y no crea la cuenta.",
"peso": 1.3,
"id": 48,
"conceptos": {
"ent:usuario": 11,
"est:enuso": 1
}
},
{
"fuente": "Manual de usuario",
"titulo": "12. Administrar usuarios > 12.2 Reiniciar una contraseña",
"texto": "En la tabla “Usuarios”, haga clic en “Reiniciar contraseña” en la fila de la persona.\nIngrese la “Nueva contraseña” y repítala en “Confirmar contraseña” (Figura 43).\nHaga clic en “Reiniciar contraseña”. El sistema confirma con el mensaje “Se restableció la contraseña de …”.\nComuníquele a la persona la nueva contraseña por un medio seguro.\nDesde esta pantalla no se pueden modificar ni eliminar cuentas existentes.",
"peso": 1.3,
"id": 49,
"conceptos": {
"ent:usuario": 10
}
},
{
"fuente": "Manual de usuario",
"titulo": "13. Consultar al asistente (Agrobot)",
"texto": "Meta: obtener respuesta a una consulta.\nCuándo usarlo: cuando tenga una duda, desde cualquier pantalla.\nAntes de empezar: debe haber iniciado sesión. Lo pueden usar los tres roles.",
"peso": 1.3,
"id": 50,
"conceptos": {
"cu:09": 2,
"ent:usuario": 2
}
},
{
"fuente": "Manual de usuario",
"titulo": "13. Consultar al asistente (Agrobot) > 13.1 Abrir el chat",
"texto": "Haga clic en el botón redondo, abajo a la derecha (Figura 44).\nEl sistema abre el panel “Agrobot”, con el robot y el campo de mensaje listo para escribir. Mientras no haya mensajes, indica sobre qué puede consultar.",
"peso": 1.3,
"id": 51,
"conceptos": {
"cu:09": 3,
"ent:usuario": 1
}
},
{
"fuente": "Manual de usuario",
"titulo": "13. Consultar al asistente (Agrobot) > 13.2 Enviar una consulta",
"texto": "Escriba su consulta en “Escribí un mensaje…”. Con Shift+Enter agrega una línea. El máximo es de 500 caracteres.\nHaga clic en el botón de la flecha o presione Enter. Con el mensaje vacío, el botón está deshabilitado.\nEl sistema muestra su mensaje a la derecha, un indicador mientras el asistente escribe y luego la respuesta a la izquierda (Figura 45).\nSi no se obtiene respuesta, el sistema lo informa en el panel. Su mensaje queda visible y puede volver a intentarlo.",
"peso": 1.3,
"id": 52,
"conceptos": {
"cu:09": 3,
"ent:usuario": 1
}
},
{
"fuente": "Manual de usuario",
"titulo": "13. Consultar al asistente (Agrobot) > 13.3 Qué puede consultar",
"texto": "Cómo usar AgroControl, dónde está cada función y qué hacer en la pantalla actual. Por ejemplo: “¿Dónde creo un lote?” o “¿Qué hago acá?”.\nLos datos cargados: stock y qué falta reponer, lotes, campañas, siembras, labores, cosechas, percances, rinde y costos. Por ejemplo: “¿Qué falta comprar?”.\nLo que figura en la documentación del sistema. Por ejemplo: “¿Cuándo se siembra la soja?”.\nEl asistente no responde temas ajenos a AgroControl (Figura 47) y no carga, modifica ni borra información. Si no encuentra lo consultado, lo indica. Si ingresa con el rol Productor y pregunta cómo cargar algo, le recuerda que su rol solo permite consultar.\nVerifique los datos importantes en la pantalla correspondiente antes de tomar una decisión. Puede enviar hasta 8 mensajes por minuto; si se alcanza el límite, espere un momento y vuelva a intentar.",
"peso": 1.3,
"id": 53,
"conceptos": {
"cu:09": 3,
"cu:11": 2,
"ent:lote": 2,
"ent:campania": 1,
"ent:siembra": 2,
"ent:labor": 1,
"ent:cosecha": 1,
"ent:percance": 1,
"ent:usuario": 3,
"con:stock": 1,
"con:rinde": 1,
"con:costo": 1
}
},
{
"fuente": "Manual de usuario",
"titulo": "13. Consultar al asistente (Agrobot) > 13.4 Cerrar el chat",
"texto": "Haga clic en la “X” del panel, en el botón redondo (en pantallas grandes) o presione Escape.\nResultado: el panel se oculta. La conversación se conserva al cambiar de pantalla, y se pierde al recargar la página o cerrar sesión.\nSi en su dispositivo configuró menos movimiento, el robot queda quieto y las animaciones se reducen.",
"peso": 1.3,
"id": 54,
"conceptos": {
"cu:09": 2,
"ent:usuario": 1
}
},
{
"fuente": "Manual de usuario",
"titulo": "14. Glosario",
"texto": "Término | Significado\nAgrobot | Nombre del asistente de AgroControl.\nAsistente | Función de chat que responde consultas sobre AgroControl y sus datos.\nBaja | Cambio de estado a “Inactiva”: el registro deja de estar disponible, pero no se elimina.\nBarbecho | Preparación del suelo antes de la siembra para dejarlo en condiciones óptimas.\nCampaña | Ciclo productivo de un lote dentro de un período. Se nombra por el año de inicio, por ejemplo 2026/2027. Puede estar “Abierta” o “Cerrada”.\nCosecha | Recolección del cultivo al final del ciclo. Se registra en kilos por hectárea y porcentaje de humedad.\nCosto base | Costo fijo de una labor de mantenimiento, sin contar los insumos.\nCU / CUU / CUR | Caso de uso / caso de uso de usuario / caso de uso resumen. Describen las metas que el usuario cumple con el sistema.\nDoble cultivo | Segundo cultivo realizado en un mismo lote, dentro de la misma campaña, después de cosechar el primero.\nEstación | Temporada a la que pertenece una semilla: “Verano” o “Invierno”.",
"peso": 1.3,
"id": 55,
"conceptos": {
"cu:03": 1,
"cu:09": 3,
"ent:lote": 2,
"ent:semilla": 1,
"ent:insumo": 1,
"ent:campania": 2,
"ent:siembra": 1,
"ent:labor": 1,
"ent:cosecha": 2,
"ent:usuario": 3,
"con:doble": 2,
"con:barbecho": 1,
"con:costo": 2,
"con:humedad": 1,
"pan:catalogos": 1,
"est:libre": 1
}
},
{
"fuente": "Manual de usuario",
"titulo": "14. Glosario",
"texto": "Estado del lote | Situación del lote en la campaña: “Libre” (sin cultivo), “En uso” (asignado), “Sembrado” o “Cosechado”.\nha | Hectárea, unidad de superficie de los lotes.\nHumedad | Porcentaje de agua del grano al momento de la cosecha.\nIndicador | Tarjeta que resume un valor de un tablero y, si corresponde, su variación.\nInsumo | Producto usado en una labor: fertilizantes, herbicidas, insecticidas, etc.\nkg/ha | Kilos cosechados por hectárea.\nLabor de mantenimiento | Tarea realizada sobre un lote sembrado hasta la cosecha, como una fertilización o una aplicación de herbicida o insecticida.\nLote | Unidad productiva mínima del campo, medida en hectáreas.\nModo consulta | Forma de uso del rol Productor: permite ver la información, pero no cargarla ni modificarla.\nPercance | Problema ocurrido en un cultivo (por ejemplo, una máquina rota durante la siembra), registrado con su fecha y costo.\nPercance general | Percance que afecta a varios lotes sembrados, como un granizo. Su costo se reparte entre ellos.",
"peso": 1.3,
"id": 56,
"conceptos": {
"cu:03": 1,
"ent:lote": 6,
"ent:insumo": 3,
"ent:campania": 1,
"ent:siembra": 1,
"ent:labor": 2,
"ent:cosecha": 2,
"ent:percance": 4,
"ent:usuario": 2,
"con:costo": 2,
"con:humedad": 1,
"est:libre": 1,
"est:enuso": 1,
"est:sembrado": 2,
"est:cosechado": 1
}
},
{
"fuente": "Manual de usuario",
"titulo": "14. Glosario",
"texto": "Rinde | Kilos cosechados por hectárea. En la sección “Rinde”, se muestra junto con los costos de las campañas cerradas.\nRinde total | Producción total de un lote: kilos por hectárea multiplicados por la superficie.\nRol | Perfil de una cuenta que define qué puede hacer en el sistema: “Admin”, “Ingeniero” o “Productor”.\nSiembra | Implantación de la semilla en el lote. Se registra en toneladas sembradas.\nStock | Cantidad disponible de una semilla o insumo. Se descuenta al registrar siembras y labores.\nStock bajo | Aviso que indica que, según el consumo promedio, el stock alcanza para menos de 2 siembras o labores.\nt | Tonelada, unidad del stock de semillas.\nTablero | Pantalla que reúne indicadores, gráficos y tablas: “Insumos” y “Rinde”.",
"peso": 1.3,
"id": 57,
"conceptos": {
"cu:11": 1,
"ent:lote": 2,
"ent:semilla": 3,
"ent:insumo": 2,
"ent:campania": 1,
"ent:siembra": 3,
"ent:labor": 2,
"ent:usuario": 3,
"con:stock": 4,
"con:rinde": 4,
"con:costo": 1,
"pan:insumos": 1,
"pan:rinde": 2,
"est:libre": 1
}
},
{
"fuente": "Caso de uso CU-00 Administrar Campania Agricola",
"titulo": "Meta",
"texto": "Obtener registro de las labores y sus costos durante una campaña de un lote en específico para generar el margen bruto del mismo.",
"peso": 1.0,
"id": 58,
"conceptos": {
"ent:lote": 1,
"ent:campania": 1,
"ent:labor": 1,
"con:costo": 1
}
},
{
"fuente": "Caso de uso CU-00 Administrar Campania Agricola",
"titulo": "Actores",
"texto": "Primario: Ingeniero Agropecuario.\nOtros: Productor.",
"peso": 1.0,
"id": 59,
"conceptos": {}
},
{
"fuente": "Caso de uso CU-00 Administrar Campania Agricola",
"titulo": "Precondiciones (De sistema)",
"texto": "Los Lotes están cargados en el sistema junto con la superficie por hectárea de cada lote.\nLos insumos y sus tipos están cargados en el sistema.\nEl stock de los insumos está cargado en el sistema.\nLas labores disponibles están cargadas en el sistema de forma predeterminada.",
"peso": 1.0,
"id": 60,
"conceptos": {
"ent:lote": 2,
"ent:insumo": 2,
"ent:labor": 1,
"con:stock": 1
}
},
{
"fuente": "Caso de uso CU-00 Administrar Campania Agricola",
"titulo": "Precondiciones (De Negocio)",
"texto": "Existen fechas optimas de siembra.\nExisten condiciones climáticas favorables para el inicio de la siembra.\nDisponibilidad de maquinaria y semilla para la siembra.\nEl barbecho esta realizado y la tierra se encuentran en condiciones de siembra.",
"peso": 1.0,
"id": 61,
"conceptos": {
"ent:semilla": 1,
"ent:siembra": 4,
"con:barbecho": 1
}
},
{
"fuente": "Caso de uso CU-00 Administrar Campania Agricola",
"titulo": "Disparador",
"texto": "Llega la época de siembra y el ingeniero agrónomo decide planificar la campaña del lote.",
"peso": 1.0,
"id": 62,
"conceptos": {
"ent:lote": 1,
"ent:campania": 1,
"ent:siembra": 1
}
},
{
"fuente": "Caso de uso CU-00 Administrar Campania Agricola",
"titulo": "Camino Basico",
"texto": "El ingeniero agrónomo define el lote y semilla y notifica al productor invocando < CUU1 – “Asignar Lote”>.\nEl productor realiza la siembra y notifica al ingeniero, el mismo indica los datos de la labor invocando < CUU2 – “Registrar Siembra”>.\n[REPETIR HASTA LA FECHA DE COSECHA] El productor realiza la labor de mantenimiento y la notifica al ingeniero agrónomo. El mismo registra la labor de mantenimiento invocando <CUU3 – “Registrar labor de mantenimiento”>.\nEl productor, llegada la fecha de cosecha, notifica al ingeniero cantidades cosechadas por hectárea del lote, el mismo indica los datos de la cosecha invocando < CUU4 – “Registrar Cosecha”>.\nEl ingeniero agrónomo indica cierre del lote invocando < CUU5 – “Cerrar Campaña”>.",
"peso": 1.0,
"id": 63,
"conceptos": {
"cu:01": 2,
"cu:02": 2,
"cu:03": 5,
"cu:04": 2,
"cu:05": 2,
"ent:lote": 4,
"ent:semilla": 1,
"ent:campania": 1,
"ent:siembra": 2,
"ent:labor": 4,
"ent:cosecha": 4
}
},
{
"fuente": "Caso de uso CU-00 Administrar Campania Agricola",
"titulo": "Camino Alternativo",
"texto": "4.a<previo> Se pierde la cosecha por accidente:\n4.a.1 El productor notifica la pérdida del cultivo. El ingeniero agrónomo indica cierre de lote invocando <CUU5 – “Cerrar Campaña”>.\n5.a<previo> El productor decide realizar doble cultivo:\n5.a.1 – El productor realiza el barbecho intermedio y lo notifica al Ingeniero Agrónomo. El mismo carga dicha labor invocando <CUU3 – Registrar Labor de Mantenimiento>.\n5.a.2 – Se repiten los pasos 1 al 4 invocando.\n5.a.3 - El ingeniero agrónomo indica el cierre del lote invocando < CUU5 – “Cerrar Campaña” >.",
"peso": 1.0,
"id": 64,
"conceptos": {
"cu:03": 3,
"cu:05": 4,
"ent:lote": 2,
"ent:campania": 2,
"ent:labor": 2,
"ent:cosecha": 1,
"con:doble": 1,
"con:barbecho": 1
}
},
{
"fuente": "Caso de uso CU-00 Administrar Campania Agricola",
"titulo": "Postcondiciones (De Sistema)",
"texto": "Éxito: La campaña ingresada está registrada. El stock de los insumos esta actualizado. El margen bruto del lote esta registrado.\nFracaso: La campaña ingresada está registrada con rinde 0, el registro de labores e insumos utilizados hasta el cierre esta conservado.\nÉxito Alternativo: La campaña ingresada está registrada con doble cultivo, el margen bruto de cada cultivo individual esta registrado.",
"peso": 1.0,
"id": 65,
"conceptos": {
"ent:lote": 1,
"ent:insumo": 2,
"ent:campania": 3,
"ent:labor": 1,
"con:doble": 1,
"con:stock": 1,
"con:rinde": 1
}
},
{
"fuente": "Caso de uso CU-00 Administrar Campania Agricola",
"titulo": "Postcondiciones (De Negocio)",
"texto": "Éxito: El productor obtiene el margen bruto de la campaña para así evaluar futuras decisiones.\nFracaso: Se Pierde el cultivo del lote, causando pérdidas económicas significativas.\nÉxito Alternativo: El productor obtiene el margen bruto de cada cultivo individual y de la campaña completa.",
"peso": 1.0,
"id": 66,
"conceptos": {
"ent:lote": 1,
"ent:campania": 2
}
},
{
"fuente": "Caso de uso CU-01 Asignar Lote",
"titulo": "Meta",
"texto": "Asignar un lote y su semilla correspondiente para dar inicio a la campaña.",
"peso": 1.0,
"id": 67,
"conceptos": {
"cu:01": 2,
"ent:lote": 2,
"ent:semilla": 1,
"ent:campania": 1
}
},
{
"fuente": "Caso de uso CU-01 Asignar Lote",
"titulo": "Actores",
"texto": "Principal: Ingeniero Agrónomo",
"peso": 1.0,
"id": 68,
"conceptos": {
"cu:01": 1,
"ent:lote": 1
}
},
{
"fuente": "Caso de uso CU-01 Asignar Lote",
"titulo": "Precondiciones de sistema",
"texto": "•\nLos Lotes están cargados en el sistema junto con la superficie por hectárea de\ncada lote.\n•\nLas semillas disponibles están cargadas en el sistema.\n•\nEl stock de cada semilla está cargado en el sistema.",
"peso": 1.0,
"id": 69,
"conceptos": {
"cu:01": 1,
"ent:lote": 3,
"ent:semilla": 2,
"con:stock": 1
}
},
{
"fuente": "Caso de uso CU-01 Asignar Lote",
"titulo": "Precondiciones de negocio",
"texto": "• La tierra se encuentra en condiciones de siembra.\n• Las condiciones climáticas son ideales para la siembra.",
"peso": 1.0,
"id": 70,
"conceptos": {
"cu:01": 1,
"ent:lote": 1,
"ent:siembra": 2
}
},
{
"fuente": "Caso de uso CU-01 Asignar Lote",
"titulo": "Evento Disparador",
"texto": "El ingeniero agrónomo decide comenzar una nueva campaña y necesita definir\nel lote a utilizar.",
"peso": 1.0,
"id": 71,
"conceptos": {
"cu:01": 1,
"ent:lote": 2,
"ent:campania": 1
}
},
{
"fuente": "Caso de uso CU-01 Asignar Lote",
"titulo": "Flujo de sucesos",
"texto": "1. El ingeniero agrónomo solicita ver los lotes disponibles para la siembra.\nEl sistema los busca y muestra todos los lotes que no estén ocupados con\nun cultivo actualmente.\n2. El ingeniero agrónomo selecciona el lote a utilizar. El sistema valida la\nselección y busca las semillas con stock disponible para ese lote y, si\nexisten, las muestra para su selección.\n3. El ingeniero agrónomo selecciona la semilla a cultivar y confirma la\nasignación. El sistema registra la nueva campaña, asocia la semilla\nseleccionada al lote, cambia el estado del lote a “En uso” y actualiza los\nlotes libres, notificando el éxito de la operación al ingeniero agrónomo.",
"peso": 1.0,
"id": 72,
"conceptos": {
"cu:01": 1,
"ent:lote": 8,
"ent:semilla": 3,
"ent:campania": 1,
"ent:siembra": 1,
"con:stock": 1,
"est:libre": 1,
"est:enuso": 1
}
},
{
"fuente": "Caso de uso CU-01 Asignar Lote",
"titulo": "Camino Alternativo",
"texto": "1.a<Durante> No hay lotes disponibles para la siembra:\n1.a.1 – El sistema informa que no hay lotes libres para asignar.\n1.a.2 – El sistema finaliza el caso de uso.\n2.a<Durante> No hay stock de semillas disponibles:\n2.a.1 – El sistema informa que no hay semillas con stock disponible para\nrealizar la siembra del lote seleccionado.\n2.a.2 – El sistema no realiza ninguna asignación y finaliza el caso de uso.\n3.a<Previo > El ingeniero Agrónomo cancela la asignación al lote:\n3.a.1 – Finaliza el caso de uso sin registrar la información.",
"peso": 1.0,
"id": 73,
"conceptos": {
"cu:01": 1,
"ent:lote": 5,
"ent:semilla": 2,
"ent:siembra": 2,
"con:stock": 2,
"est:libre": 1
}
},
{
"fuente": "Caso de uso CU-01 Asignar Lote",
"titulo": "Postcondiciones de sistema",
"texto": "Éxito: El sistema registra la nueva campaña, vinculando el lote con su semilla, y\ncambia el estado del lote a “En uso”.\nFracaso: <El sistema permanece en el estado anterior>\nÉxito Alternativo: <No hay>:",
"peso": 1.0,
"id": 74,
"conceptos": {
"cu:01": 1,
"ent:lote": 3,
"ent:semilla": 1,
"ent:campania": 1,
"est:enuso": 1
}
},
{
"fuente": "Caso de uso CU-01 Asignar Lote",
"titulo": "Postcondiciones de negocio",
"texto": "Éxito: Queda definida la campaña, con el lote y la semilla a cultivar.\nFracaso: No queda definido el lote ni la semilla, no pudiendo iniciar con la\nsiembra.\nÉxito Alternativo: <No hay>:",
"peso": 1.0,
"id": 75,
"conceptos": {
"cu:01": 1,
"ent:lote": 3,
"ent:semilla": 2,
"ent:campania": 1,
"ent:siembra": 1
}
},
{
"fuente": "Caso de uso CU-02 Registrar Siembra",
"titulo": "Meta",
"texto": "Obtener el registro final de los datos de una siembra en un lote determinado.",
"peso": 1.0,
"id": 76,
"conceptos": {
"cu:02": 1,
"ent:lote": 1,
"ent:siembra": 2
}
},
{
"fuente": "Caso de uso CU-02 Registrar Siembra",
"titulo": "Actores",
"texto": "Principal: Ingeniero Agrónomo",
"peso": 1.0,
"id": 77,
"conceptos": {
"cu:02": 1,
"ent:siembra": 1
}
},
{
"fuente": "Caso de uso CU-02 Registrar Siembra",
"titulo": "Precondiciones de sistema",
"texto": "• La semilla seleccionada está cargada en el sistema.\n• El stock de cada tipo de insumo está cargado en el sistema.\n• Hay lotes con el estado “en uso” cargados en el sistema.",
"peso": 1.0,
"id": 78,
"conceptos": {
"cu:02": 1,
"ent:lote": 1,
"ent:semilla": 1,
"ent:insumo": 1,
"ent:siembra": 1,
"con:stock": 1,
"est:enuso": 1
}
},
{
"fuente": "Caso de uso CU-02 Registrar Siembra",
"titulo": "Precondiciones de negocio",
"texto": "• Finalizó la etapa de siembra en el lote.",
"peso": 1.0,
"id": 79,
"conceptos": {
"cu:02": 1,
"ent:lote": 1,
"ent:siembra": 2
}
},
{
"fuente": "Caso de uso CU-02 Registrar Siembra",
"titulo": "Evento Disparador",
"texto": "El productor notifica al ingeniero sobre la realización de la siembra.",
"peso": 1.0,
"id": 80,
"conceptos": {
"cu:02": 1,
"ent:siembra": 2
}
},
{
"fuente": "Caso de uso CU-02 Registrar Siembra",
"titulo": "Camino Basico",
"texto": "1. El ingeniero agrónomo solicita registrar una siembra. El sistema busca y\nmuestra los lotes que se encuentran en estado “En uso”. El ingeniero agrónomo\nselecciona el lote correspondiente.\n2. El ingeniero agrónomo ingresa la cantidad de semillas utilizadas (en Tn). El\nsistema calcula el consumo y muestra al ingeniero agrónomo el stock actual junto\ncon los datos ingresados.\n3. El ingeniero agrónomo confirma la operación. El sistema registra\ndefinitivamente la siembra, cambia el estado del lote a “Sembrado”, descuenta\nlos insumos consumidos del inventario real y notifica el éxito de la operación.",
"peso": 1.0,
"id": 81,
"conceptos": {
"cu:02": 2,
"ent:lote": 3,
"ent:semilla": 1,
"ent:insumo": 1,
"ent:siembra": 3,
"con:stock": 1,
"est:enuso": 1,
"est:sembrado": 1
}
},
{
"fuente": "Caso de uso CU-02 Registrar Siembra",
"titulo": "Alternativo",
"texto": "2.a <Previo> El ingeniero agrónomo desea ajustar el stock de los insumos:\n2.a.1 – El sistema informa el stock actual disponible. El ingeniero\nagrónomo ingresa la cantidad adicional correspondiente, el sistema lo\nregistra.\n2.b <Previo> Ocurrió un percance durante el proceso de siembra en el lote:\n2.b.1 – El ingeniero agrónomo ingresa el detalle del problema (o los\nproblemas) y el costo asociado a cada uno. El sistema retiene\ntemporalmente estos datos para adjuntarlos al registro final de la labor.\n3.a<Previo> El ingeniero agrónomo desea modificar los datos ingresados:\n3.a.1 – El sistema habilita la edición de la información. 3.a.2 – El ingeniero\nagrónomo realiza las modificaciones correspondientes. El sistema registra\nlas modificaciones.\n3.b <Durante> El ingeniero cancela la registración:\n3.b.1 – El sistema descarta los datos temporales ingresados y finaliza el\ncaso de uso sin realizar modificaciones.",
"peso": 1.0,
"id": 82,
"conceptos": {
"cu:02": 1,
"ent:lote": 1,
"ent:insumo": 1,
"ent:siembra": 2,
"ent:labor": 1,
"ent:percance": 1,
"con:stock": 2,
"con:costo": 1,
"est:libre": 1
}
},
{
"fuente": "Caso de uso CU-02 Registrar Siembra",
"titulo": "Postcondiciones de sistema",
"texto": "Éxito: El sistema registra el detalle de la siembra exitosa, y cambia el estado del\nlote a “Sembrado”.\nFracaso: El sistema no realiza ninguna registración de siembra y permanece en\nel estado anterior.\nÉxito Alternativo: El sistema registra el detalle de la siembra con percances, y\ncambia el estado del lote a “Sembrado”.",
"peso": 1.0,
"id": 83,
"conceptos": {
"cu:02": 1,
"ent:lote": 2,
"ent:siembra": 4,
"ent:percance": 1,
"est:sembrado": 2
}
},
{
"fuente": "Caso de uso CU-02 Registrar Siembra",
"titulo": "Postcondiciones de negocio",
"texto": "Éxito: Queda finalizada la siembra y comienza la etapa del mantenimiento del\ncultivo.\nFracaso: <No hay>\nÉxito Alternativo: <No hay>",
"peso": 1.0,
"id": 84,
"conceptos": {
"cu:02": 1,
"ent:siembra": 2
}
},
{
"fuente": "Caso de uso CU-03 Registrar Labor",
"titulo": "Meta",
"texto": "Registrar una labor de mantenimiento realizada sobre un lote activo durante una campaña en curso.",
"peso": 1.0,
"id": 85,
"conceptos": {
"cu:03": 3,
"ent:lote": 1,
"ent:campania": 1,
"ent:labor": 2
}
},
{
"fuente": "Caso de uso CU-03 Registrar Labor",
"titulo": "Actores",
"texto": "Principal: Ingeniero Agrónomo.\nOtros: Productor",
"peso": 1.0,
"id": 86,
"conceptos": {
"cu:03": 1,
"ent:labor": 1
}
},
{
"fuente": "Caso de uso CU-03 Registrar Labor",
"titulo": "Precondiciones de sistema",
"texto": "• Existen Lotes registrados con estado sembrado.\n• Existen Campañas registradas con estado Abierto.\n• Existen Tipos de Labor registrados con estado Activa.\n• Existen Productos registrados",
"peso": 1.0,
"id": 87,
"conceptos": {
"cu:03": 1,
"ent:lote": 1,
"ent:campania": 1,
"ent:labor": 2,
"est:sembrado": 1
}
},
{
"fuente": "Caso de uso CU-03 Registrar Labor",
"titulo": "Precondiciones de negocio",
"texto": "• El lote tiene un cultivo activo en el campo.\n• La campaña asociada al lote se encuentra en curso.",
"peso": 1.0,
"id": 88,
"conceptos": {
"cu:03": 1,
"ent:lote": 2,
"ent:campania": 1,
"ent:labor": 1
}
},
{
"fuente": "Caso de uso CU-03 Registrar Labor",
"titulo": "Disparador",
"texto": "El Ingeniero Agrónomo decide registrar una labor de mantenimiento realizada sobre un lote activo.",
"peso": 1.0,
"id": 89,
"conceptos": {
"cu:03": 3,
"ent:lote": 1,
"ent:labor": 2
}
},
{
"fuente": "Caso de uso CU-03 Registrar Labor",
"titulo": "Camino Básico",
"texto": "1. El ingeniero agrónomo solicita ver los lotes sembrados para registrar la labor de mantenimiento. El sistema busca y muestra los lotes con campañas activas y sembrados.\n2. El ingeniero agrónomo selecciona el lote sembrado. El sistema valida la selección y muestra los datos de la campaña y el listado de tipos de labor activos.\n3. El Ingeniero Agropecuario selecciona el tipo de labor realizada, el sistema registra la labor y muestra el listado de productos disponibles.\n4. El ingeniero agrónomo selecciona el insumo y la cantidad utilizada. El sistema valida la disponibilidad de stock en memoria y retiene los datos ingresados.\n5. El ingeniero agrónomo confirma el registro de la labor. El sistema registra definitivamente la labor de mantenimiento, asocia los costos a la campaña, descuenta la cantidad del stock del insumo y notifica el éxito de la operación.",
"peso": 1.0,
"id": 90,
"conceptos": {
"cu:03": 3,
"ent:lote": 3,
"ent:insumo": 2,
"ent:campania": 3,
"ent:labor": 7,
"con:stock": 2,
"con:costo": 1,
"est:sembrado": 1
}
},
{
"fuente": "Caso de uso CU-03 Registrar Labor",
"titulo": "Camino Alternativo",
"texto": "1.a < Durante > No existen lotes con campañas activas:\n1.a.1 – El sistema informa que no hay lotes con campañas activas en estado \"Sembrado\".\n1.a.2 – El sistema finaliza el caso de uso.\n4.a < Previo > El insumo no tiene stock suficiente:\n4.a.1 – El sistema advierte que el stock actual es insuficiente para cubrir la cantidad declarada.\n4.a.2 – El sistema finaliza el caso de uso.\n5.a < Previo > El ingeniero agrónomo cancela la operación:\n5.a.1 – El ingeniero agrónomo decide cancelar el registro.\n5.a.2 – El sistema descarta los datos temporales ingresados y finaliza el caso de uso sin realizar modificaciones.\n5.b < Durante > La labor fue dada de baja:\n5.b.1 – El sistema informa que la labor está inactiva y no registra la información.",
"peso": 1.0,
"id": 91,
"conceptos": {
"cu:03": 1,
"ent:lote": 2,
"ent:insumo": 1,
"ent:campania": 2,
"ent:labor": 3,
"con:stock": 2,
"pan:catalogos": 1,
"est:sembrado": 1
}
},
{
"fuente": "Caso de uso CU-03 Registrar Labor",
"titulo": "Postcondiciones de sistema",
"texto": "Éxito: La Labor de Mantenimiento ingresada está registrada y asociada al Lote y la Siembra activa.\nFracaso: <El sistema permanece en el estado anterior>\nÉxito Alternativo: <No hay>",
"peso": 1.0,
"id": 92,
"conceptos": {
"cu:03": 2,
"ent:lote": 1,
"ent:siembra": 1,
"ent:labor": 2
}
},
{
"fuente": "Caso de uso CU-03 Registrar Labor",
"titulo": "Postcondiciones de negocio",
"texto": "Éxito: La labor de mantenimiento del cultivo ha sido registrada.\nFracaso: La labor de mantenimiento del cultivo no ha sido registrada.\nÉxito Alternativo: <No hay>",
"peso": 1.0,
"id": 93,
"conceptos": {
"cu:03": 3,
"ent:labor": 3
}
},
{
"fuente": "Caso de uso CU-04 Registrar Cosecha",
"titulo": "Meta",
"texto": "Registrar la cantidad cosechada por hectárea de un lote en una campaña\ndeterminada.",
"peso": 1.0,
"id": 94,
"conceptos": {
"cu:04": 1,
"ent:lote": 1,
"ent:campania": 1,
"ent:cosecha": 1
}
},
{
"fuente": "Caso de uso CU-04 Registrar Cosecha",
"titulo": "Actores",
"texto": "Principal: Ingeniero Agrónomo",
"peso": 1.0,
"id": 95,
"conceptos": {
"cu:04": 1,
"ent:cosecha": 1
}
},
{
"fuente": "Caso de uso CU-04 Registrar Cosecha",
"titulo": "Precondiciones de sistema",
"texto": "● Los lotes están cargados en el sistema junto con la superficie por hectárea\nde cada lote.\n● Las campañas activas están registradas en el sistema.\n● Las labores realizadas durante la campaña están registradas en el\nsistema.\n● El lote posee un cultivo asignado en un lote dentro de la campaña.",
"peso": 1.0,
"id": 96,
"conceptos": {
"cu:04": 1,
"ent:lote": 4,
"ent:campania": 3,
"ent:labor": 1,
"ent:cosecha": 1
}
},
{
"fuente": "Caso de uso CU-04 Registrar Cosecha",
"titulo": "Precondiciones de negocio",
"texto": "● La tierra se encuentra en condiciones de cosecha.\n● Las condiciones climáticas son ideales para la cosecha.",
"peso": 1.0,
"id": 97,
"conceptos": {
"cu:04": 1,
"ent:cosecha": 3
}
},
{
"fuente": "Caso de uso CU-04 Registrar Cosecha",
"titulo": "Evento Disparador",
"texto": "El productor informa al ingeniero agrónomo que la cosecha del lote fue realizada\ny deben registrarse los datos obtenidos.",
"peso": 1.0,
"id": 98,
"conceptos": {
"cu:04": 1,
"ent:lote": 1,
"ent:cosecha": 2
}
},
{
"fuente": "Caso de uso CU-04 Registrar Cosecha",
"titulo": "Camino Básico",
"texto": "1. El ingeniero agrónomo solicita ver los lotes en condiciones de cosecha. El\nsistema busca y muestra los lotes con campañas activas y listos para\ncosechar.\n2. El ingeniero agrónomo selecciona el lote cosechado. El sistema muestra\nlos datos de la campaña y del cultivo correspondientes.\n3. El ingeniero agrónomo ingresa la cantidad cosechada por hectárea y la\nhumedad obtenida del cultivo, confirmando el registro de la cosecha.El\nsistema registra los datos de la cosecha en la campaña correspondiente.",
"peso": 1.0,
"id": 99,
"conceptos": {
"cu:04": 1,
"ent:lote": 3,
"ent:campania": 3,
"ent:cosecha": 5,
"con:humedad": 1,
"est:cosechado": 1
}
},
{
"fuente": "Caso de uso CU-04 Registrar Cosecha",
"titulo": "Camino Alternativo",
"texto": "1.a<Durante> No hay lotes disponibles para cosecha:\n1.a.1 – El sistema informa que no existen lotes con cultivos en condiciones\nde cosecha.\n1.a.2 – El sistema finaliza el caso de uso.\n2.a<Durante> El lote no posee una campaña activa:\n2.a.1 – El sistema informa que no es posible registrar la cosecha para ese\nlote.\n2.a.2 – El sistema finaliza el caso de uso.\n3.a<Previo> El ingeniero agrónomo cancela el registro de la cosecha:\n3.a.1 – El sistema descarta los datos ingresados y finaliza el caso de uso.",
"peso": 1.0,
"id": 100,
"conceptos": {
"cu:04": 1,
"ent:lote": 4,
"ent:campania": 1,
"ent:cosecha": 5
}
},
{
"fuente": "Caso de uso CU-04 Registrar Cosecha",
"titulo": "Postcondiciones de sistema",
"texto": "Éxito: El sistema registra la cosecha del lote en la campaña correspondiente y\nactualiza el rendimiento obtenido por hectárea.\nFracaso: El sistema no registra los datos de la cosecha del lote.\nÉxito Alternativo: <No hay>:",
"peso": 1.0,
"id": 101,
"conceptos": {
"cu:04": 1,
"ent:lote": 2,
"ent:campania": 1,
"ent:cosecha": 3,
"con:rinde": 1
}
},
{
"fuente": "Caso de uso CU-04 Registrar Cosecha",
"titulo": "Postcondiciones de negocio",
"texto": "Éxito: Queda registrada la cantidad cosechada del cultivo del lote en la campaña\ncorrespondiente.\nFracaso: No queda registrada la cosecha del cultivo del lote.\nÉxito Alternativo: <No hay>:",
"peso": 1.0,
"id": 102,
"conceptos": {
"cu:04": 1,
"ent:lote": 2,
"ent:campania": 1,
"ent:cosecha": 2
}
},
{
"fuente": "Caso de uso CU-05 Cerrar Campania",
"titulo": "Meta",
"texto": "Cerrar una campaña agrícola activa una vez finalizado el ciclo productivo, registrando el\ncierre de todos los lotes asociados.",
"peso": 1.0,
"id": 103,
"conceptos": {
"cu:05": 1,
"ent:lote": 1,
"ent:campania": 1
}
},
{
"fuente": "Caso de uso CU-05 Cerrar Campania",
"titulo": "Actores",
"texto": "Principal: Ingeniero Agrónomo\nOtros: Productor",
"peso": 1.0,
"id": 104,
"conceptos": {}
},
{
"fuente": "Caso de uso CU-05 Cerrar Campania",
"titulo": "Precondiciones de sistema",
"texto": "• Existe al menos una Campaña registrada con estado Abierto.\n•\nExisten Lotes asociados a la campaña con estado Cosechado.",
"peso": 1.0,
"id": 105,
"conceptos": {
"ent:lote": 1,
"ent:campania": 2,
"est:cosechado": 1
}
},
{
"fuente": "Caso de uso CU-05 Cerrar Campania",
"titulo": "Precondiciones de negocio",
"texto": "El ciclo productivo de la campaña ha concluido.\nTodos los lotes activos de la campaña han sido procesados (labores finalizadas).",
"peso": 1.0,
"id": 106,
"conceptos": {
"ent:lote": 1,
"ent:campania": 2,
"ent:labor": 1
}
},
{
"fuente": "Caso de uso CU-05 Cerrar Campania",
"titulo": "Disparador",
"texto": "El Ingeniero Agrónomo decide cerrar una campaña activa una vez finalizado el ciclo\nproductivo.",
"peso": 1.0,
"id": 107,
"conceptos": {
"cu:05": 1,
"ent:campania": 1
}
},
{
"fuente": "Caso de uso CU-05 Cerrar Campania",
"titulo": "Camino Básico",
"texto": "1. El Ingeniero Agrónomo solicita ver las campañas activas. El sistema busca y muestra\nlas campañas con estado Abierto.\n2. El Ingeniero Agrónomo selecciona la campaña a cerrar. El sistema muestra los datos\ngenerales de la campaña y el estado de su lote asociado.\n3. El Ingeniero Agrónomo confirma el cierre. El sistema valida que el lote se encuentre\nen estado \"Cosechado\".\n4. El sistema actualiza el estado de la campaña a \"Cerrada\", cambia el estado de los\nlotes asociados a \"Libre\", y muestra un mensaje de confirmación de éxito de la\noperación.",
"peso": 1.0,
"id": 108,
"conceptos": {
"ent:lote": 3,
"ent:campania": 5,
"est:libre": 1,
"est:cosechado": 1
}
},
{
"fuente": "Caso de uso CU-05 Cerrar Campania",
"titulo": "Camino Alternativo",
"texto": "4a<Durante>. El Ingeniero Agrónomo cancela el cierre de campaña\n4.a.1 – El Ingeniero Agrónomo decide cancelar el cierre de la campaña.\n4.a.2 – El sistema deja la campaña con estado “Abierto” y finaliza el caso de uso.",
"peso": 1.0,
"id": 109,
"conceptos": {
"cu:05": 1,
"ent:campania": 3
}
},
{
"fuente": "Caso de uso CU-05 Cerrar Campania",
"titulo": "Postcondiciones de sistema",
"texto": "Éxito: La Campaña ha sido cerrada y todos los Lotes asociados han sido actualizados a\nestado Libre.\nFracaso: <El sistema permanece sin cambios>\nÉxito Alternativo: <vacío>",
"peso": 1.0,
"id": 110,
"conceptos": {
"ent:lote": 1,
"ent:campania": 1,
"est:libre": 1
}
},
{
"fuente": "Caso de uso CU-05 Cerrar Campania",
"titulo": "Postcondiciones de negocio",
"texto": "Éxito: El ciclo productivo de la campaña ha sido registrado como finalizado.\nFracaso: La campaña no ha sido cerrada.\nÉxito Alternativo: <No hay>:",
"peso": 1.0,
"id": 111,
"conceptos": {
"ent:campania": 2
}
},
{
"fuente": "Caso de uso CU-07 Eliminar Insumo",
"titulo": "Meta",
"texto": "Dar de baja un insumo registrado en el sistema.",
"peso": 1.0,
"id": 112,
"conceptos": {
"cu:07": 2,
"ent:insumo": 2,
"pan:catalogos": 1
}
},
{
"fuente": "Caso de uso CU-07 Eliminar Insumo",
"titulo": "Actores",
"texto": "Principal: Ingeniero Agrónomo",
"peso": 1.0,
"id": 113,
"conceptos": {
"cu:07": 1,
"ent:insumo": 1
}
},
{
"fuente": "Caso de uso CU-07 Eliminar Insumo",
"titulo": "Precondiciones de sistema",
"texto": "• Existen insumos registrados en el sistema.\n• El insumo que se desea dar de baja se encuentra registrado.",
"peso": 1.0,
"id": 114,
"conceptos": {
"cu:07": 1,
"ent:insumo": 3,
"pan:catalogos": 1
}
},
{
"fuente": "Caso de uso CU-07 Eliminar Insumo",
"titulo": "Precondiciones de negocio",
"texto": "• El insumo se encuentra disponible para ser dado de baja.",
"peso": 1.0,
"id": 115,
"conceptos": {
"cu:07": 1,
"ent:insumo": 2,
"pan:catalogos": 1,
"est:libre": 1
}
},
{
"fuente": "Caso de uso CU-07 Eliminar Insumo",
"titulo": "Evento Disparador",
"texto": "El ingeniero agrónomo decide dar de baja un insumo registrado en el sistema.",
"peso": 1.0,
"id": 116,
"conceptos": {
"cu:07": 2,
"ent:insumo": 2,
"pan:catalogos": 1
}
},
{
"fuente": "Caso de uso CU-07 Eliminar Insumo",
"titulo": "Camino Básico",
"texto": "1. El ingeniero agrónomo solicita visualizar los insumos registrados. El sistema busca y muestra los insumos disponibles.\n2. El ingeniero agrónomo selecciona el insumo que desea dar de baja. El sistema muestra la información del insumo seleccionado y solicita la confirmación de la operación.\n3. El ingeniero agrónomo confirma la baja del insumo. El sistema registra la baja cambiando el estado del insumo a “Inactiva”.",
"peso": 1.0,
"id": 117,
"conceptos": {
"cu:07": 2,
"ent:insumo": 7,
"pan:catalogos": 3
}
},
{
"fuente": "Caso de uso CU-07 Eliminar Insumo",
"titulo": "Camino Alternativo",
"texto": "1.a <Durante> No existen insumos registrados:\n1.a.1 El sistema informa que no existen insumos registrados y finaliza el caso de uso.\n2.a <Previo> El ingeniero agrónomo desea reactivar un insumo dado de baja:\n2.a.1 El ingeniero agrónomo filtra los insumos inactivos y selecciona reactivar. El sistema cambia el estado del insumo a “Activa” y finaliza el caso de uso.\n3.a <Previo> El ingeniero agrónomo cancela la operación:\n3.a.1 El sistema cancela la operación y finaliza el caso de uso.",
"peso": 1.0,
"id": 118,
"conceptos": {
"cu:07": 1,
"ent:insumo": 6,
"pan:catalogos": 3
}
},
{
"fuente": "Caso de uso CU-07 Eliminar Insumo",
"titulo": "Postcondiciones de sistema",
"texto": "Éxito: El sistema cambia el estado del insumo a “Inactiva”.\nFracaso: El sistema no registró la baja del insumo y sigue disponible para su selección.\nÉxito Alternativo: El sistema cambia el estado del insumo a “Activa”.",
"peso": 1.0,
"id": 119,
"conceptos": {
"cu:07": 2,
"ent:insumo": 4,
"pan:catalogos": 1,
"est:libre": 1
}
},
{
"fuente": "Caso de uso CU-07 Eliminar Insumo",
"titulo": "Postcondiciones de negocio",
"texto": "Éxito: El insumo deja de estar disponible para su utilización en el sistema.\nFracaso: El insumo continúa disponible para su utilización en el sistema.\nÉxito Alternativo: El insumo vuelve a estar disponible para su utilización en el sistema.",
"peso": 1.0,
"id": 120,
"conceptos": {
"cu:07": 1,
"ent:insumo": 4,
"est:libre": 3
}
},
{
"fuente": "Caso de uso CU-09 Consultar Asistente",
"titulo": "Meta",
"texto": "Obtener una respuesta del asistente Agrobot a una consulta.",
"peso": 1.0,
"id": 121,
"conceptos": {
"cu:09": 3
}
},
{
"fuente": "Caso de uso CU-09 Consultar Asistente",
"titulo": "Actores",
"texto": "Principal: Ingeniero Agrónomo\nOtros: Productor, Administrador",
"peso": 1.0,
"id": 122,
"conceptos": {
"cu:09": 1
}
},
{
"fuente": "Caso de uso CU-09 Consultar Asistente",
"titulo": "Precondiciones de sistema",
"texto": "• El usuario se encuentra logueado en el sistema.\n• El servicio del asistente está disponible.",
"peso": 1.0,
"id": 123,
"conceptos": {
"cu:09": 2,
"ent:usuario": 1,
"con:sesion": 1,
"est:libre": 1
}
},
{
"fuente": "Caso de uso CU-09 Consultar Asistente",
"titulo": "Evento Disparador",
"texto": "El usuario tiene una consulta y decide realizarla al asistente.",
"peso": 1.0,
"id": 124,
"conceptos": {
"cu:09": 2,
"ent:usuario": 1
}
},
{
"fuente": "Caso de uso CU-09 Consultar Asistente",
"titulo": "Camino Básico",
"texto": "1. El usuario abre el chat. El sistema muestra el panel del asistente con la conversación de la sesión actual, si existe.\n2. El usuario escribe su consulta y la envía. El sistema muestra el mensaje, verifica que trate sobre AgroControl, reúne la documentación y los datos necesarios, y muestra la respuesta del asistente. [REPETIR MIENTRAS EL USUARIO TENGA CONSULTAS]\n3. El usuario cierra el chat. El sistema oculta el panel y conserva la conversación mientras no se recargue la página ni se cierre la sesión.",
"peso": 1.0,
"id": 125,
"conceptos": {
"cu:09": 3,
"ent:usuario": 4
}
},
{
"fuente": "Caso de uso CU-09 Consultar Asistente",
"titulo": "Camino Alternativo",
"texto": "2.a<Previo> El usuario no desea realizar la consulta:\n2.a.1 – El usuario cierra el chat. El sistema oculta el panel y finaliza el caso de uso.\n2.b<Previo> El mensaje está vacío:\n2.b.1 – El sistema no permite enviarlo.\n2.c<Durante> No se obtiene respuesta del asistente:\n2.c.1 – El sistema informa el error y conserva el mensaje en la conversación. El usuario puede enviar otro mensaje o cerrar el chat.\n2.d<Durante> La consulta no trata sobre AgroControl:\n2.d.1 – El sistema informa que solo responde sobre AgroControl y no realiza la consulta.\n2.e<Durante> El Productor consulta cómo cargar o modificar información:\n2.e.1 – El sistema antepone a la respuesta el aviso de que su rol solo permite consultar.\n2.f<Durante> La información solicitada no está registrada ni documentada:\n2.f.1 – El sistema informa que no la encuentra.\n2.g<Previo> Se supera el límite de mensajes por minuto o el cupo del servicio:\n2.g.1 – El sistema informa el límite y permite intentar más tarde.",
"peso": 1.0,
"id": 126,
"conceptos": {
"cu:09": 2,
"ent:usuario": 4
}
},
{
"fuente": "Caso de uso CU-09 Consultar Asistente",
"titulo": "Postcondiciones de sistema",
"texto": "Éxito: La consulta y su respuesta quedan visibles en la conversación de la sesión actual.\nFracaso: La consulta queda visible sin respuesta y el sistema informa el error. No se modifica información del sistema.\nÉxito Alternativo: <No hay>",
"peso": 1.0,
"id": 127,
"conceptos": {
"cu:09": 1
}
},
{
"fuente": "Caso de uso CU-09 Consultar Asistente",
"titulo": "Postcondiciones de negocio",
"texto": "Éxito: El usuario obtiene respuesta a su consulta.\nFracaso: El usuario no obtiene respuesta a su consulta.\nÉxito Alternativo: <No hay>",
"peso": 1.0,
"id": 128,
"conceptos": {
"cu:09": 1,
"ent:usuario": 2
}
},
{
"fuente": "Caso de uso CU-10 Consultar Rinde",
"titulo": "Meta",
"texto": "Conocer la producción, la inversión y los costos de las campañas cerradas y compararlos con los de campañas anteriores del mismo lote.",
"peso": 1.0,
"id": 129,
"conceptos": {
"cu:10": 1,
"ent:lote": 1,
"ent:campania": 2,
"con:rinde": 1,
"con:costo": 2
}
},
{
"fuente": "Caso de uso CU-10 Consultar Rinde",
"titulo": "Actores",
"texto": "Principal: Ingeniero Agrónomo\nOtros: Productor, Administrador",
"peso": 1.0,
"id": 130,
"conceptos": {
"cu:10": 1,
"con:rinde": 1
}
},
{
"fuente": "Caso de uso CU-10 Consultar Rinde",
"titulo": "Precondiciones de sistema",
"texto": "• El usuario se encuentra logueado en el sistema.\n• Existe al menos una campaña registrada con estado \"Cerrada\".",
"peso": 1.0,
"id": 131,
"conceptos": {
"cu:10": 1,
"ent:campania": 1,
"ent:usuario": 1,
"con:rinde": 1,
"con:sesion": 1
}
},
{
"fuente": "Caso de uso CU-10 Consultar Rinde",
"titulo": "Precondiciones de negocio",
"texto": "• El ciclo productivo de la campaña ha concluido.",
"peso": 1.0,
"id": 132,
"conceptos": {
"cu:10": 1,
"ent:campania": 1,
"con:rinde": 1
}
},
{
"fuente": "Caso de uso CU-10 Consultar Rinde",
"titulo": "Evento Disparador",
"texto": "El usuario decide evaluar los resultados de una campaña.",
"peso": 1.0,
"id": 133,
"conceptos": {
"cu:10": 1,
"ent:campania": 1,
"ent:usuario": 1,
"con:rinde": 1
}
},
{
"fuente": "Caso de uso CU-10 Consultar Rinde",
"titulo": "Camino Básico",
"texto": "1. El usuario solicita ver el rinde. El sistema busca las campañas cerradas, calcula sus indicadores y muestra el tablero de la más reciente, comparado con la campaña anterior de cada lote: indicadores, reparto de costos, gráficos, histórico de campañas y lotes de la campaña.\n2. El usuario selecciona el lote, la campaña o el cultivo. El sistema filtra los datos, recalcula los indicadores y muestra el tablero actualizado.",
"peso": 1.0,
"id": 134,
"conceptos": {
"cu:10": 1,
"ent:lote": 3,
"ent:campania": 5,
"ent:usuario": 2,
"con:rinde": 2,
"con:costo": 1
}
},
{
"fuente": "Caso de uso CU-10 Consultar Rinde",
"titulo": "Camino Alternativo",
"texto": "1.a<Durante> No existen campañas cerradas:\n1.a.1 – El sistema informa que todavía no hay campañas cerradas y finaliza el caso de uso.\n1.b<Durante> No se pueden obtener los datos:\n1.b.1 – El sistema informa el error y permite reintentar.\n1.c<Posterior> La campaña no tiene otra anterior del mismo lote:\n1.c.1 – El sistema informa que no hay contra qué comparar y muestra los indicadores sin variación.\n2.a<Previo> El usuario decide comparar con el promedio:\n2.a.1 – El usuario selecciona \"Promedio del mismo lote\". El sistema recalcula las variaciones contra el promedio de las otras campañas de los mismos lotes.\n2.b<Previo> El usuario selecciona la campaña desde un gráfico o el histórico:\n2.b.1 – El sistema muestra el tablero de la campaña seleccionada.\n2.c<Durante> No hay campañas para los filtros seleccionados:\n2.c.1 – El sistema informa que no hay campañas para ese filtro y mantiene disponibles los filtros.",
"peso": 1.0,
"id": 135,
"conceptos": {
"cu:10": 1,
"ent:lote": 3,
"ent:campania": 8,
"ent:usuario": 3,
"con:rinde": 1
}
},
{
"fuente": "Caso de uso CU-10 Consultar Rinde",
"titulo": "Postcondiciones de sistema",
"texto": "Éxito: El sistema muestra el tablero de la campaña seleccionada. No se modifica información.\nFracaso: El sistema no muestra el tablero e informa el motivo.\nÉxito Alternativo: El sistema muestra el tablero sin comparación.",
"peso": 1.0,
"id": 136,
"conceptos": {
"cu:10": 1,
"ent:campania": 1,
"con:rinde": 1
}
},
{
"fuente": "Caso de uso CU-10 Consultar Rinde",
"titulo": "Postcondiciones de negocio",
"texto": "Éxito: El usuario cuenta con información para evaluar la campaña y tomar futuras decisiones.\nFracaso: El usuario no cuenta con la información de la campaña.\nÉxito Alternativo: El usuario conoce los resultados, sin referencia de campañas anteriores.",
"peso": 1.0,
"id": 137,
"conceptos": {
"cu:10": 1,
"ent:campania": 3,
"ent:usuario": 5,
"con:rinde": 1
}
},
{
"fuente": "Caso de uso CU-11 Consultar Stock",
"titulo": "Meta",
"texto": "Conocer el stock de semillas e insumos, su valor y para cuántos usos más alcanza.",
"peso": 1.0,
"id": 138,
"conceptos": {
"cu:11": 1,
"ent:semilla": 1,
"ent:insumo": 1,
"con:stock": 2
}
},
{
"fuente": "Caso de uso CU-11 Consultar Stock",
"titulo": "Actores",
"texto": "Principal: Ingeniero Agrónomo\nOtros: Productor, Administrador",
"peso": 1.0,
"id": 139,
"conceptos": {
"cu:11": 1,
"con:stock": 1
}
},
{
"fuente": "Caso de uso CU-11 Consultar Stock",
"titulo": "Precondiciones de sistema",
"texto": "• El usuario se encuentra logueado en el sistema.\n• Las semillas y los insumos están cargados en el sistema.",
"peso": 1.0,
"id": 140,
"conceptos": {
"cu:11": 1,
"ent:semilla": 1,
"ent:insumo": 1,
"ent:usuario": 1,
"con:stock": 1,
"con:sesion": 1
}
},
{
"fuente": "Caso de uso CU-11 Consultar Stock",
"titulo": "Evento Disparador",
"texto": "El usuario decide conocer la disponibilidad de semillas e insumos, por ejemplo antes de planificar una siembra o una labor.",
"peso": 1.0,
"id": 141,
"conceptos": {
"cu:11": 1,
"ent:semilla": 1,
"ent:insumo": 1,
"ent:siembra": 1,
"ent:labor": 1,
"ent:usuario": 1,
"con:stock": 1
}
},
{
"fuente": "Caso de uso CU-11 Consultar Stock",
"titulo": "Camino Básico",
"texto": "1. El usuario solicita ver el stock. El sistema busca las semillas y los insumos, calcula el consumo promedio y la situación de cada uno, y muestra los indicadores, las semillas activas y los insumos activos, primero los más urgentes. Los indicadores consideran solo los activos.\n2. El usuario selecciona el orden de una tabla. El sistema la muestra ordenada según lo seleccionado.",
"peso": 1.0,
"id": 142,
"conceptos": {
"cu:11": 1,
"ent:semilla": 2,
"ent:insumo": 2,
"ent:usuario": 2,
"con:stock": 2
}
},
{
"fuente": "Caso de uso CU-11 Consultar Stock",
"titulo": "Camino Alternativo",
"texto": "1.a<Durante> No hay semillas o insumos activos:\n1.a.1 – El sistema lo informa en la tabla correspondiente.\n1.b<Durante> No se pueden obtener los datos:\n1.b.1 – El sistema informa el error, muestra los indicadores sin dato y permite reintentar.\n2.a<Previo> El usuario desea ver también las semillas o los insumos inactivos:\n2.a.1 – El usuario selecciona \"Todas\" en las semillas o \"Todos\" en los insumos. El sistema los muestra.\n2.b<Previo> El usuario desea editar las semillas o los insumos:\n2.b.1 – El usuario selecciona \"Editar semillas\" o \"Editar insumos\". El sistema muestra el catálogo correspondiente y finaliza el caso de uso. Esta opción no está disponible para el Productor.",
"peso": 1.0,
"id": 143,
"conceptos": {
"cu:11": 1,
"ent:semilla": 5,
"ent:insumo": 5,
"ent:usuario": 4,
"con:stock": 1,
"pan:catalogos": 1,
"est:libre": 1
}
},
{
"fuente": "Caso de uso CU-11 Consultar Stock",
"titulo": "Postcondiciones de sistema",
"texto": "Éxito: El sistema muestra el stock y la situación de cada semilla e insumo. No se modifica información.\nFracaso: El sistema no muestra el stock e informa el motivo.\nÉxito Alternativo: <No hay>",
"peso": 1.0,
"id": 144,
"conceptos": {
"cu:11": 1,
"ent:semilla": 1,
"ent:insumo": 1,
"con:stock": 3
}
},
{
"fuente": "Caso de uso CU-11 Consultar Stock",
"titulo": "Postcondiciones de negocio",
"texto": "Éxito: El usuario sabe de qué dispone y qué debe reponer.\nFracaso: El usuario no conoce la disponibilidad de semillas e insumos.\nÉxito Alternativo: <No hay>",
"peso": 1.0,
"id": 145,
"conceptos": {
"cu:11": 2,
"ent:semilla": 1,
"ent:insumo": 1,
"ent:usuario": 2,
"con:stock": 1
}
},
{
"fuente": "Reglas de negocio",
"titulo": "Descripción del Documento",
"texto": "En este documento se listarán las reglas de negocio que se infirieron de las múltiples\ncharlas con el ingeniero agrónomo y del desarrollo de los documentos.",
"peso": 1.0,
"id": 146,
"conceptos": {}
},
{
"fuente": "Reglas de negocio",
"titulo": "Reglas de negocio",
"texto": "• RN01: Un Lote no debe tener más de un cultivo activo de manera simultánea.\n• RN02: La siembra de un cultivo debe realizarse dentro de su fecha optima\npredefinida y con el barbecho previamente realizado.\n• RN02: Toda semilla debe pertenecer a una temporada predeterminada.\n• RN03: Toda semilla tiene una fecha optima de siembra.\n• RN04: El cierre de campaña debe realizarse una vez finalizada la cosecha del\ncultivo y cierre del lote.\n• RN05: Un lote puede albergar más de un cultivo en el tiempo.\n• RN06: Una campaña de doble cultivo inicia con la siembra del primer cultivo de\ninvierno y finaliza con la cosecha del segundo cultivo de verano.\n• RN07: Una campaña corresponde al ciclo productivo de un lote dentro de un\nperíodo determinado.\n• RN08: Una campaña puede contemplar uno o dos cultivos de manera secuencial\n(doble cultivo).\n• RN09: En un esquema de doble cultivo, el segundo cultivo solo puede iniciarse\nuna vez finalizada la cosecha del primero.\n• RN10: Una campaña se considera finalizada cuando se realiza la cosecha del\núltimo cultivo y se cierra el lote.",
"peso": 1.0,
"id": 147,
"conceptos": {
"cu:05": 1,
"ent:lote": 5,
"ent:semilla": 2,
"ent:campania": 5,
"ent:siembra": 3,
"ent:cosecha": 4,
"con:doble": 5,
"con:barbecho": 1
}
},
{
"fuente": "Reglas de negocio",
"titulo": "Reglas de negocio",
"texto": "• RN11: En caso de doble cultivo, el análisis debe contemplar tanto resultados\nindividuales por cultivo como resultados consolidados del lote.",
"peso": 1.0,
"id": 148,
"conceptos": {
"ent:lote": 1,
"con:doble": 1
}
},
{
"fuente": "Requerimientos",
"titulo": "Requerimientos funcionales",
"texto": "Código | Descripción | Caso de uso\nRF-01 | El sistema debe permitir abrir y cerrar el chat del asistente desde cualquier pantalla con sesión iniciada. | CU-09\nRF-02 | El sistema debe permitir enviar mensajes no vacíos y mostrar la respuesta del asistente. | CU-09\nRF-03 | El sistema debe conservar la conversación al cambiar de pantalla, hasta recargar la página o cerrar sesión. | CU-09\nRF-04 | El sistema debe informar si no se obtiene respuesta del asistente. | CU-09\nRF-05 | El asistente debe estar disponible para los tres roles. | CU-09\nRF-06 | El sistema debe mostrar, por campaña cerrada: producción, rinde, inversión por hectárea, costo por tonelada, multiplicación de semilla y kilos por cada $1.000. | CU-10\nRF-07 | El sistema debe mostrar el reparto de costos en semilla, labores, insumos y percances. | CU-10\nRF-08 | El sistema debe graficar costo por tonelada, rinde e inversión por hectárea de hasta las últimas 12 campañas. | CU-10\nRF-09 | El sistema debe permitir filtrar el rinde por lote, campaña y cultivo, e informar si no hay coincidencias. | CU-10",
"peso": 0.8,
"id": 149,
"conceptos": {
"cu:09": 4,
"cu:10": 2,
"ent:lote": 1,
"ent:semilla": 2,
"ent:insumo": 1,
"ent:campania": 3,
"ent:labor": 1,
"ent:percance": 1,
"ent:usuario": 1,
"con:rinde": 3,
"con:costo": 5,
"est:libre": 1
}
},
{
"fuente": "Requerimientos",
"titulo": "Requerimientos funcionales",
"texto": "RF-10 | El sistema debe comparar la campaña con la anterior o con el promedio del mismo lote. | CU-10\nRF-11 | El sistema debe mostrar el histórico de campañas y el detalle por lote. | CU-10\nRF-12 | El sistema debe mostrar el valor total en stock, las semillas activas, los insumos activos y los productos activos a reponer. | CU-11\nRF-13 | El sistema debe estimar para cuántos usos alcanza cada producto y clasificarlo en \"Sin stock\", \"Stock bajo\" (menos de 2 usos), \"Con stock\" o \"Sin consumo\". | CU-11\nRF-14 | El sistema debe permitir ordenar por urgencia, valor o nombre, y filtrar las semillas y los insumos por estado. | CU-11\nRF-15 | Los tableros deben ser de solo lectura y accesibles para los tres roles. | CU-10, CU-11\nRF-16 | El asistente debe verificar que la consulta trate sobre AgroControl y rechazar los temas ajenos. | CU-09\nRF-17 | El asistente debe responder únicamente con la documentación y los datos del sistema, e informar cuando no encuentra lo solicitado. | CU-09",
"peso": 0.8,
"id": 150,
"conceptos": {
"cu:09": 2,
"cu:11": 2,
"ent:lote": 2,
"ent:semilla": 2,
"ent:insumo": 2,
"ent:campania": 2,
"ent:usuario": 1,
"con:stock": 4
}
},
{
"fuente": "Requerimientos",
"titulo": "Requerimientos funcionales",
"texto": "RF-18 | El asistente debe poder consultar stock, lotes, campañas, labores, siembras, cosechas, percances y rinde, sin modificar datos ni acceder a los usuarios. | CU-09\nRF-19 | El asistente debe avisar al Productor que su rol solo permite consultar cuando pregunte cómo cargar o modificar información. | CU-09\nRF-20 | El sistema no debe almacenar las conversaciones. | CU-09",
"peso": 0.8,
"id": 151,
"conceptos": {
"cu:09": 2,
"cu:11": 1,
"ent:lote": 1,
"ent:campania": 1,
"ent:siembra": 1,
"ent:labor": 1,
"ent:cosecha": 1,
"ent:percance": 1,
"ent:usuario": 2,
"con:stock": 1,
"con:rinde": 1
}
},
{
"fuente": "Requerimientos",
"titulo": "Requerimientos no funcionales",
"texto": "Código | Tipo | Descripción\nRNF-01 | Animaciones | El robot flota, sigue el puntero, parpadea y reacciona a cada mensaje. El panel y los mensajes se muestran con transiciones.\nRNF-02 | Animaciones | Si el usuario configuró movimiento reducido, se suprimen los desplazamientos y quedan solo fundidos y el parpadeo e iluminación de los ojos del robot.\nRNF-03 | Desempeño | El robot 3D se carga recién en la primera apertura del chat, separado de la carga inicial, y su animación se pausa con el chat cerrado.\nRNF-04 | Desempeño | La consulta de los tableros debe completarse en menos de 5 segundos bajo condiciones normales de uso (según Visión 8.3).\nRNF-05 | Accesibilidad | El chat debe poder operarse con teclado: foco en el mensaje al abrir, Enter envía, Shift+Enter agrega una línea y Escape cierra y devuelve el foco al botón.\nRNF-06 | Accesibilidad | Los controles del chat y las columnas de los gráficos deben tener descripción textual, y los mensajes nuevos deben anunciarse a lectores de pantalla.",
"peso": 0.8,
"id": 152,
"conceptos": {
"ent:usuario": 1
}
},
{
"fuente": "Requerimientos",
"titulo": "Requerimientos no funcionales",
"texto": "RNF-07 | Accesibilidad | Las variaciones de los indicadores no deben comunicarse solo con color: incluyen flecha y texto.\nRNF-08 | Adaptabilidad | En pantallas de hasta 640 px el chat ocupa casi todo el ancho y se ajusta al teclado; los indicadores se muestran de a dos. Hasta 900 px los gráficos se apilan.\nRNF-09 | Seguridad | Los datos de los tableros requieren un token válido y un rol habilitado.\nRNF-10 | Seguridad | Las consultas del asistente a la base se ejecutan en transacciones de solo lectura. La clave del servicio externo se guarda solo en el servidor.\nRNF-11 | Seguridad | Los datos necesarios para cada respuesta se envían a un servicio externo de lenguaje; no se envían usuarios ni contraseñas.\nRNF-12 | Desempeño | Cada usuario puede enviar hasta 8 mensajes por minuto, de hasta 500 caracteres. El límite se controla por instancia del servidor.\nRNF-13 | Desempeño | La documentación se consulta desde un grafo generado previamente, sin leer los documentos en cada consulta.",
"peso": 0.8,
"id": 153,
"conceptos": {
"cu:09": 1,
"ent:usuario": 3
}
},
{
"fuente": "Requerimientos",
"titulo": "Cálculo de los indicadores",
"texto": "Indicador | Cálculo\nProducción | Suma de kilos por hectárea × superficie, en toneladas.\nRinde | Kilos totales / hectáreas cosechadas.\nInversión por hectárea | Costo total / superficie. En doble cultivo, la superficie del lote se cuenta una vez por campaña.\nCosto por tonelada | Costo total / toneladas producidas.\nMultiplicación de semilla | Toneladas producidas / toneladas sembradas.\nKilos por cada $1.000 | Kilos producidos / (costo total / 1.000).\nCosto total | Semilla (cantidad sembrada × precio actual) + labores (costo base actual) + insumos y percances (costo registrado).\nAlcanza para | Stock / (consumido / usos).\nValor en stock | Stock × precio actual.",
"peso": 0.8,
"id": 154,
"conceptos": {
"cu:10": 1,
"ent:lote": 1,
"ent:semilla": 2,
"ent:insumo": 1,
"ent:campania": 1,
"ent:labor": 1,
"ent:percance": 1,
"ent:usuario": 1,
"con:doble": 1,
"con:stock": 3,
"con:rinde": 1,
"con:costo": 8
}
},
{
"fuente": "Visión (alcance previsto, puede no estar implementado)",
"titulo": "1 - Introducción > 1.1 Propósito del documento",
"texto": "El propósito de este documento es recoger, analizar y definir las necesidades de alto nivel y las características del sistema AgroControl, una plataforma web destinada a la gestión productiva de unidades agropecuarias.",
"peso": 0.5,
"id": 155,
"conceptos": {}
},
{
"fuente": "Visión (alcance previsto, puede no estar implementado)",
"titulo": "1 - Introducción > 1.2 Alcance",
"texto": "El documento Visión se ocupa del sistema AgroControl, orientado a la gestión de lotes, campañas, labores técnicas e insumos agropecuarios. Este documento será utilizado como referencia en la cátedra de Introducción a la Práctica Profesional.",
"peso": 0.5,
"id": 156,
"conceptos": {
"ent:lote": 1,
"ent:insumo": 1,
"ent:campania": 1,
"ent:labor": 1
}
},
{
"fuente": "Visión (alcance previsto, puede no estar implementado)",
"titulo": "1 - Introducción > 1.3 Definiciones, Acrónimos y Abreviaciones",
"texto": "Lote: unidad productiva mínima del sistema, identificada geográficamente dentro de una explotación agropecuaria.\nCampaña: período productivo asociado a uno o más cultivos dentro de un lote, pudiendo incluir esquemas de doble cultivo (invierno/verano).\nLabor / Intervención técnica: acción realizada sobre un lote (siembra, fumigación, fertilización, cosecha, etc.).\nInsumo: material utilizado en una intervención técnica (fertilizantes, herbicidas, insecticidas, semillas, etc.).\nCU: Caso de Uso.",
"peso": 0.5,
"id": 157,
"conceptos": {
"ent:lote": 3,
"ent:semilla": 1,
"ent:insumo": 1,
"ent:campania": 1,
"ent:siembra": 1,
"ent:labor": 1,
"ent:cosecha": 1,
"con:doble": 1
}
},
{
"fuente": "Visión (alcance previsto, puede no estar implementado)",
"titulo": "1 - Introducción > 1.5 Visión general del documento",
"texto": "En la sección 2 se describe el posicionamiento del producto con una definición resumida del problema y la posición particular que ocupará en el mercado. En la sección 3 se describen los interesados y los usuarios afectados por el producto. En la sección 4 se realiza una visión general del producto. En la sección 5 se mencionan las características del producto. En la sección 6 se destacan las restricciones. En la sección 7 se mencionan las precedencias y prioridades. En la sección 8 se describen los atributos de calidad del producto.",
"peso": 0.5,
"id": 158,
"conceptos": {
"ent:usuario": 1
}
},
{
"fuente": "Visión (alcance previsto, puede no estar implementado)",
"titulo": "2 - Posicionamiento > 2.1 Sentencia que define el problema",
"texto": "El problema de: | Dispersión y pérdida de información sobre labores e insumos aplicados en cada lote. Impossibilidad de calcular con precisión el costo por hectárea. Ausencia de historial por lote que permita comparar campañas. Falta de control de stock de insumos. Dificultad para medir la rentabilidad por cultivo y campaña.\nAfecta a: | Productores agropecuarios e ingenieros agrónomos.\nEl impacto del mismo es: | Decisiones productivas y económicas basadas en información incompleta o incorrecta. Sobrestock o faltante de insumos. Imposibilidad de identificar qué cultivos o prácticas son más rentables.\nUna solución satisfactoria sería: | Centralizar en una plataforma web el registro de todas las intervenciones técnicas, el consumo de insumos y los costos por lote y campaña, habilitando la generación automática de informes de rendimiento y rentabilidad.",
"peso": 0.5,
"id": 159,
"conceptos": {
"ent:lote": 3,
"ent:insumo": 4,
"ent:campania": 3,
"ent:labor": 1,
"con:stock": 1,
"con:rinde": 1,
"con:costo": 2
}
},
{
"fuente": "Visión (alcance previsto, puede no estar implementado)",
"titulo": "2 - Posicionamiento > 2.2 Sentencia que define la posición del Producto",
"texto": "Para: | Productores agropecuarios e ingenieros agrónomos.\nQuienes: | Gestionan y asesoran explotaciones agropecuarias.\nEl producto: | AgroControl es un sistema web\nQue: | Permitirá registrar labores técnicas, controlar el stock de insumos y calcular costos y rendimientos por lote y campaña.\nA diferencia de: | El proceso manual actual basado en planillas y registros en papel.\nNuestro producto: | Centralizará toda la información productiva, permitirá el seguimiento completo del ciclo de cada lote a lo largo de sus campañas, automatizará el cálculo de costos, ingresos y márgenes, y habilitará el análisis histórico y la comparación de campañas, facilitando la toma de decisiones productivas y económicas basadas en datos.",
"peso": 0.5,
"id": 160,
"conceptos": {
"ent:lote": 2,
"ent:insumo": 1,
"ent:campania": 3,
"ent:labor": 1,
"con:stock": 1,
"con:costo": 2
}
},
{
"fuente": "Visión (alcance previsto, puede no estar implementado)",
"titulo": "2 - Posicionamiento > 3.1 Características del mercado",
"texto": "El mercado objetivo son los productores agropecuarios y los ingenieros agrónomos que operan en el sector agrícola de la región. Ambos perfiles poseen conocimientos básicos de informática y acceso a dispositivos con conexión a internet.\nLa versión inicial del sistema estará orientada a explotaciones agropecuarias de pequeña y mediana escala. Cada productor podrá gestionar una cantidad ilimitada de lotes y campañas. La plataforma es de acceso web, sin requerir instalación local.",
"peso": 0.5,
"id": 161,
"conceptos": {
"ent:lote": 1,
"ent:campania": 1
}
},
{
"fuente": "Visión (alcance previsto, puede no estar implementado)",
"titulo": "2 - Posicionamiento > 3.2 Resumen de Interesados que no son usuarios",
"texto": "Nombre | Descripción | Responsabilidades\nProductor Agropecuario | Propietario o responsable de la explotación agropecuaria | Define las políticas de gestión de lotes y campañas. Responsable de la toma de decisiones productivas y económicas.",
"peso": 0.5,
"id": 162,
"conceptos": {
"ent:lote": 1,
"ent:campania": 1,
"ent:usuario": 1
}
},
{
"fuente": "Visión (alcance previsto, puede no estar implementado)",
"titulo": "2 - Posicionamiento > 3.3 Resumen de Usuarios",
"texto": "Nombre | Descripción | Responsabilidades\nProductor Agropecuario | Propietario o responsable de la explotación agropecuaria | Registrar labores, insumos y costos por lote. Consultar informes de rendimiento y rentabilidad.\nIngeniero Agrónomo | Profesional técnico y asesor del productor | Registrar intervenciones técnicas. Consultar historial de labores y consumo de insumos por lote y campaña.",
"peso": 0.5,
"id": 163,
"conceptos": {
"ent:lote": 2,
"ent:insumo": 2,
"ent:campania": 1,
"ent:labor": 2,
"ent:usuario": 1,
"con:rinde": 1,
"con:costo": 1
}
},
{
"fuente": "Visión (alcance previsto, puede no estar implementado)",
"titulo": "2 - Posicionamiento > 3.4 Entorno del usuario",
"texto": "Tanto los productores como los ingenieros agrónomos cuentan con acceso a internet desde computadoras de escritorio, portátiles o dispositivos móviles. El sistema es de naturaleza web y no requiere operación fuera de línea.\nEl uso del sistema se concentra en los períodos de siembra, aplicaciones y cosecha, con picos de actividad durante las campañas activas. El sistema actual es un proceso completamente manual, basado en planillas de cálculo (Como Excel) o registros en papel, sin integración entre lotes ni campañas, generando así perdida de información importante.",
"peso": 0.5,
"id": 164,
"conceptos": {
"ent:lote": 1,
"ent:campania": 2,
"ent:siembra": 1,
"ent:cosecha": 1,
"ent:usuario": 1
}
},
{
"fuente": "Visión (alcance previsto, puede no estar implementado)",
"titulo": "Dueño del campo",
"texto": "Representante: | A determinar\nDescripción | Propietario o responsable del terreno. Posee conocimientos básicos de informática.\nTipo | Stakeholder principal\nResponsabilidades | Define las políticas de gestión de lotes y campañas. Responsable final de la toma de decisiones económicas y aprobación de presupuestos.\nCriterios de éxito | Contar con información centralizada y precisa sobre costos, insumos y rendimiento por lote y campaña.\nParticipación | Revisor de requerimientos. Aprobación del sistema.\nEntregables | No\nComentarios / problemas | No",
"peso": 0.5,
"id": 165,
"conceptos": {
"ent:lote": 2,
"ent:insumo": 1,
"ent:campania": 2,
"con:rinde": 1,
"con:costo": 1
}
},
{
"fuente": "Visión (alcance previsto, puede no estar implementado)",
"titulo": "Productor Agropecuario",
"texto": "Representante | A determinar\nDescripción | Posee conocimientos básicos de informática y manejo de herramientas web.\nTipo | Usuario principal\nResponsabilidades | Registrar labores, insumos y costos por lote. Consultar informes de rendimiento y rentabilidad.\nCriterios de éxito | Que el sistema centralice toda la información productiva y calcule automáticamente los costos por hectárea.\nParticipación | Revisor de requerimientos y pruebas de aceptación.\nEntregables | Informes de costo por hectárea, rendimiento y rentabilidad por campaña.\nComentarios / problemas | No",
"peso": 0.5,
"id": 166,
"conceptos": {
"ent:lote": 1,
"ent:insumo": 1,
"ent:campania": 1,
"ent:labor": 1,
"ent:usuario": 1,
"con:rinde": 2,
"con:costo": 3
}
},
{
"fuente": "Visión (alcance previsto, puede no estar implementado)",
"titulo": "Ingeniero Agrónomo",
"texto": "Representante | A determinar\nDescripción | Profesional con conocimientos técnicos agronómicos y manejo de herramientas digitales.\nTipo | Usuario secundario\nResponsabilidades | Registrar intervenciones técnicas. Consultar historial de labores y consumo de insumos por lote y campaña.\nCriterios de éxito | Que el sistema registre con precisión cada intervención y permita consultar el historial técnico de cada lote.\nParticipación | Revisor de requerimientos y pruebas de aceptación.\nEntregables | Historial de labores e insumos por lote y campaña.\nComentarios / problemas | No",
"peso": 0.5,
"id": 167,
"conceptos": {
"ent:lote": 3,
"ent:insumo": 2,
"ent:campania": 2,
"ent:labor": 2,
"ent:usuario": 1
}
},
{
"fuente": "Visión (alcance previsto, puede no estar implementado)",
"titulo": "2 - Posicionamiento > 3.8 Alternativas y competencia",
"texto": "Existen en el mercado herramientas de gestión agropecuaria como Agroinsider, Kilimo y AgriTask, orientadas principalmente a grandes explotaciones con integración satelital y sensores IoT. Dichas herramientas presentan alta complejidad de implementación y costo elevado para productores medianos.\nAgroControl se diferencia por su simplicidad de uso, orientación a la gestión granular por lote y campaña, y por ser una solución web accesible sin infraestructura adicional.",
"peso": 0.5,
"id": 168,
"conceptos": {
"ent:lote": 1,
"ent:campania": 1,
"con:costo": 1
}
},
{
"fuente": "Visión (alcance previsto, puede no estar implementado)",
"titulo": "4 - Visión general del producto",
"texto": "Esta sección proporciona una vista de alto nivel de las capacidades del sistema AgroControl.",
"peso": 0.5,
"id": 169,
"conceptos": {}
},
{
"fuente": "Visión (alcance previsto, puede no estar implementado)",
"titulo": "4 - Visión general del producto > 4.1 Perspectiva del producto",
"texto": "AgroControl sustituirá el proceso manual actual de registro de labores e insumos, centralizado en planillas de cálculo y registros en papel, por una plataforma web integrada que permita el seguimiento completo de cada lote a lo largo de sus campañas, así asegurando la integridad de los datos en el tiempo y evitar pérdidas de información.",
"peso": 0.5,
"id": 170,
"conceptos": {
"ent:lote": 1,
"ent:insumo": 1,
"ent:campania": 1,
"ent:labor": 1
}
},
{
"fuente": "Visión (alcance previsto, puede no estar implementado)",
"titulo": "4 - Visión general del producto > 4.2 Resumen de los principales beneficios",
"texto": "Beneficio | Características del sistema\nGestión integral del ciclo productivo del lote | CU Asignar Lote CU Cerrar Campaña\nRegistro y control de la implantación del cultivo | CU Registro y control de la implantación del cultivo\nSeguimiento de labores y mantenimiento del lote | CU Registrar Labor de Mantenimiento\nComparación histórica entre campañas | CU Comparar campañas CU Informe de rendimiento por período\nRegistro del rendimiento productivo | CU Registrar Cosecha",
"peso": 0.5,
"id": 171,
"conceptos": {
"cu:01": 1,
"cu:03": 2,
"cu:04": 1,
"cu:05": 1,
"ent:lote": 3,
"ent:campania": 3,
"ent:labor": 2,
"ent:cosecha": 1,
"con:rinde": 2
}
},
{
"fuente": "Visión (alcance previsto, puede no estar implementado)",
"titulo": "4 - Visión general del producto > 4.3 Presuposiciones y dependencias",
"texto": "Se supone que el financiamiento del proyecto estará disponible para su desarrollo. La implementación del sistema se realizaría durante el año 2026. Se asume que los usuarios cuentan con acceso a internet y dispositivos compatibles con navegadores web modernos.",
"peso": 0.5,
"id": 172,
"conceptos": {
"ent:usuario": 1,
"est:libre": 1
}
},
{
"fuente": "Visión (alcance previsto, puede no estar implementado)",
"titulo": "4 - Visión general del producto > 4.4 Costos y Precios",
"texto": "No completado en esta versión del documento.",
"peso": 0.5,
"id": 173,
"conceptos": {
"con:costo": 1
}
},
{
"fuente": "Visión (alcance previsto, puede no estar implementado)",
"titulo": "4 - Visión general del producto > 4.5 Licencias e instalación",
"texto": "El sistema será desarrollado con software libre, de acuerdo con la política de la Facultad. No se requiere instalación local por parte del usuario, ya que el acceso es completamente vía web.",
"peso": 0.5,
"id": 174,
"conceptos": {
"ent:usuario": 1,
"est:libre": 1
}
},
{
"fuente": "Visión (alcance previsto, puede no estar implementado)",
"titulo": "5 - Características del producto",
"texto": "En esta sección se definen y describen las características del sistema AgroControl. Las características son las capacidades de alto nivel del sistema necesarias para ofrecer beneficios a los usuarios.",
"peso": 0.5,
"id": 175,
"conceptos": {
"ent:usuario": 1
}
},
{
"fuente": "Visión (alcance previsto, puede no estar implementado)",
"titulo": "Registrar labor en lote",
"texto": "El usuario selecciona la campaña activa, el lote y el tipo de labor\n(por ejemplo: barbecho, siembra, fertilización, aplicación de herbicidas,\naplicación de insecticidas, cosecha).\nEl sistema verifica que el lote tenga un cultivo asignado y que haya stock suficiente del insumo a utilizar.\nEl usuario ingresa los insumos, cantidades y costos.\nEl sistema registra la intervención, descuenta el stock y emite un comprobante.",
"peso": 0.5,
"id": 176,
"conceptos": {
"cu:03": 1,
"ent:lote": 3,
"ent:insumo": 2,
"ent:campania": 1,
"ent:siembra": 1,
"ent:labor": 2,
"ent:cosecha": 1,
"ent:usuario": 2,
"con:barbecho": 1,
"con:stock": 2,
"con:costo": 1
}
},
{
"fuente": "Visión (alcance previsto, puede no estar implementado)",
"titulo": "Registrar insumo",
"texto": "El usuario ingresa los datos del insumo (tipo, cantidad, costo unitario, descripción, etc). El sistema lo registra en el inventario.",
"peso": 0.5,
"id": 177,
"conceptos": {
"ent:insumo": 2,
"ent:usuario": 1,
"con:costo": 1
}
},
{
"fuente": "Visión (alcance previsto, puede no estar implementado)",
"titulo": "Consultar y controlar stock",
"texto": "El sistema verifica la disponibilidad de stock al momento de registrar una intervención. Si el stock es insuficiente, notifica el error al usuario.",
"peso": 0.5,
"id": 178,
"conceptos": {
"ent:usuario": 1,
"con:stock": 3
}
},
{
"fuente": "Visión (alcance previsto, puede no estar implementado)",
"titulo": "Mantenimiento de lotes",
"texto": "El usuario ingresa o modifica los datos de un lote (nombre, superficie en hectáreas). El sistema los registra.",
"peso": 0.5,
"id": 179,
"conceptos": {
"ent:lote": 2,
"ent:usuario": 1
}
},
{
"fuente": "Visión (alcance previsto, puede no estar implementado)",
"titulo": "Mantenimiento de campañas",
"texto": "El usuario crea una campaña asociada a un lote y un cultivo. El sistema permite cambiar el cultivo entre campañas y mantiene el historial de campañas anteriores. El sistema valida que no exista más de un cultivo activo simultáneamente para un mismo lote.",
"peso": 0.5,
"id": 180,
"conceptos": {
"ent:lote": 2,
"ent:campania": 4,
"ent:usuario": 1
}
},
{
"fuente": "Visión (alcance previsto, puede no estar implementado)",
"titulo": "Mantenimiento de cultivos y variedades",
"texto": "El usuario puede consultar el catálogo predefinido de cultivos y variedades. Si el cultivo o variedad requerida no existe, el usuario puede incorporarlo al catálogo.",
"peso": 0.5,
"id": 181,
"conceptos": {
"ent:usuario": 2,
"pan:catalogos": 2
}
},
{
"fuente": "Visión (alcance previsto, puede no estar implementado)",
"titulo": "Mantenimiento de insumos",
"texto": "El usuario puede consultar y ampliar el catálogo de insumos disponibles en el sistema.",
"peso": 0.5,
"id": 182,
"conceptos": {
"ent:insumo": 2,
"ent:usuario": 1,
"pan:catalogos": 1
}
},
{
"fuente": "Visión (alcance previsto, puede no estar implementado)",
"titulo": "Informe de costo por hectárea",
"texto": "El usuario selecciona un lote y una campaña. El sistema calcula y muestra el costo total por hectárea desagregado por tipo de labor e insumo.",
"peso": 0.5,
"id": 183,
"conceptos": {
"ent:lote": 1,
"ent:insumo": 1,
"ent:campania": 1,
"ent:labor": 1,
"ent:usuario": 1,
"con:costo": 2
}
},
{
"fuente": "Visión (alcance previsto, puede no estar implementado)",
"titulo": "Informe de rendimiento y rentabilidad",
"texto": "El usuario selecciona un período. El sistema genera un informe con el rendimiento por lote, los costos, las ganancias y la comparación entre campañas.\nInforme de ingresos por lote\nEl usuario selecciona un lote y una campaña. El sistema calcula y muestra\nlos ingresos brutos generados a partir de la producción obtenida.\nDetalle de insumos por campaña\nEl usuario selecciona un lote y una campaña. El sistema muestra el detalle\nde todos los insumos utilizados, incluyendo tipo, cantidad y costo total\nasociado a cada intervención.\nInforme de margen bruto\nEl usuario selecciona un lote y una campaña. El sistema calcula el margen\nbruto total, considerando los ingresos y los costos asociados.\nInforme de labores por campaña\nEl usuario selecciona un lote y una campaña. El sistema muestra el listado\nde todas las labores realizadas, indicando tipo de labor, fecha e insumos utilizados.\nEn campañas con doble cultivo, los informes permitirán visualizar\ntanto los resultados consolidados de la campaña como el detalle\nindividual por cada cultivo.",
"peso": 0.5,
"id": 184,
"conceptos": {
"ent:lote": 6,
"ent:insumo": 3,
"ent:campania": 9,
"ent:labor": 3,
"ent:usuario": 5,
"con:doble": 1,
"con:rinde": 2,
"con:costo": 3
}
},
{
"fuente": "Visión (alcance previsto, puede no estar implementado)",
"titulo": "Tablero de rinde",
"texto": "El usuario consulta las campañas cerradas y las filtra por lote, campaña y cultivo. El sistema muestra indicadores, gráficos y la comparación con otras campañas del mismo lote.",
"peso": 0.5,
"id": 185,
"conceptos": {
"ent:lote": 2,
"ent:campania": 3,
"ent:usuario": 1,
"con:rinde": 1
}
},
{
"fuente": "Visión (alcance previsto, puede no estar implementado)",
"titulo": "Tablero de stock",
"texto": "El usuario consulta las semillas e insumos. El sistema muestra su stock, su valor, para cuántos usos alcanza y qué se debe reponer.",
"peso": 0.5,
"id": 186,
"conceptos": {
"cu:11": 1,
"ent:semilla": 1,
"ent:insumo": 1,
"ent:usuario": 1,
"con:stock": 2
}
},
{
"fuente": "Visión (alcance previsto, puede no estar implementado)",
"titulo": "Consultar asistente",
"texto": "El usuario abre el chat desde cualquier pantalla, escribe una consulta y el asistente Agrobot la responde.",
"peso": 0.5,
"id": 187,
"conceptos": {
"cu:09": 3,
"ent:usuario": 1
}
},
{
"fuente": "Visión (alcance previsto, puede no estar implementado)",
"titulo": "6 - Restricciones",
"texto": "El sistema deberá ser desarrollado con software libre, de acuerdo con la política de la Facultad.\nEl sistema es exclusivamente de tipo web. No se contempla versión de escritorio ni funcionamiento fuera de línea.\nNo se incluyen como funciones del sistema: la reserva de insumos, la integración con sistemas contables externos, la asignación de maquinaria o personal a labores, ni la gestión de compras de insumos.\nUn lote no podrá tener más de un cultivo activo en simultáneo dentro de una misma campaña. El sistema deberá validar esta condición al momento de registrar una campaña o asignar un cultivo a un lote.\nEl sistema gestionará únicamente el control interno del stock de insumos, registrando altas, consumos y disponibilidad asociada a las intervenciones técnicas. No se incluye la gestión de compras, proveedores, pagos ni procesos logísticos vinculados al abastecimiento de insumos.",
"peso": 0.5,
"id": 188,
"conceptos": {
"ent:lote": 2,
"ent:insumo": 4,
"ent:campania": 2,
"ent:labor": 1,
"con:stock": 1,
"est:libre": 1
}
},
{
"fuente": "Visión (alcance previsto, puede no estar implementado)",
"titulo": "7 - Precedencias y prioridades",
"texto": "El proceso principal y de mayor prioridad es la gestión de intervenciones técnicas por lote, ya que es la actividad más frecuente y la que alimenta todos los informes de costos y rendimiento. En segundo orden de prioridad se ubica la gestión de insumos y stock, seguida de la gestión de lotes y campañas. Los informes y análisis comparativos tienen prioridad deseable.",
"peso": 0.5,
"id": 189,
"conceptos": {
"cu:00": 1,
"ent:lote": 2,
"ent:insumo": 1,
"ent:campania": 1,
"con:stock": 1,
"con:rinde": 1,
"con:costo": 1
}
},
{
"fuente": "Visión (alcance previsto, puede no estar implementado)",
"titulo": "8 - Otros Requerimientos del Producto > 8.1 Requerimientos del sistema",
"texto": "El sistema deberá funcionar sobre infraestructura compatible con software libre. El acceso será mediante navegadores web modernos (Chrome, Firefox, Edge) sin requerir instalación adicional en el cliente.",
"peso": 0.5,
"id": 190,
"conceptos": {
"est:libre": 1
}
},
{
"fuente": "Visión (alcance previsto, puede no estar implementado)",
"titulo": "8 - Otros Requerimientos del Producto > 8.2 Requerimientos de Seguridad",
"texto": "Para utilizar el sistema el usuario debe autenticarse con usuario y contraseña. El sistema habilitará las funciones correspondientes al perfil del usuario (productor o ingeniero agrónomo).",
"peso": 0.5,
"id": 191,
"conceptos": {
"ent:usuario": 4
}
},
{
"fuente": "Visión (alcance previsto, puede no estar implementado)",
"titulo": "8 - Otros Requerimientos del Producto > 8.3 Requerimientos de Desempeño",
"texto": "El registro de una intervención técnica y la consulta de informes deberán completarse en menos de 5 segundos bajo condiciones normales de uso.",
"peso": 0.5,
"id": 192,
"conceptos": {}
},
{
"fuente": "Visión (alcance previsto, puede no estar implementado)",
"titulo": "8 - Otros Requerimientos del Producto > 8.4 Requerimientos de Disponibilidad",
"texto": "El sistema deberá estar disponible 24 horas al día los 7 días a la semana (24×7), con no más de un 10% de tiempo de inactividad programado.",
"peso": 0.5,
"id": 193,
"conceptos": {
"est:libre": 1
}
},
{
"fuente": "Visión (alcance previsto, puede no estar implementado)",
"titulo": "8 - Otros Requerimientos del Producto > 8.5 Requerimientos de Usabilidad",
"texto": "El sistema debe ser intuitivo y fácil de usar para usuarios con conocimientos básicos de informática. No se requerirá capacitación formal para su operación cotidiana. El sistema deberá incluir mensajes de error claros y ayuda contextual en línea.\nEl asistente y los tableros deberán poder utilizarse desde dispositivos móviles, con teclado y con movimiento reducido.",
"peso": 0.5,
"id": 194,
"conceptos": {
"cu:09": 1,
"ent:usuario": 1
}
},
{
"fuente": "Visión (alcance previsto, puede no estar implementado)",
"titulo": "8 - Otros Requerimientos del Producto > 8.6 Requisitos de documentación",
"texto": "No completado en esta versión del documento.",
"peso": 0.5,
"id": 195,
"conceptos": {}
},
{
"fuente": "Visión (alcance previsto, puede no estar implementado)",
"titulo": "8 - Otros Requerimientos del Producto > 8.7 Estándares aplicables",
"texto": "No completado en esta versión del documento.",
"peso": 0.5,
"id": 196,
"conceptos": {}
},
{
"fuente": "Minuta",
"titulo": "Descripción Del Negocio",
"texto": "La producción agropecuaria de la zona se organiza y estructura en base a campañas agrícolas, las cuales contemplan, generalmente, dos años (Por ejemplo, Campaña 2025/2026). Cada campaña corresponde a un lote, el cual es medido en hectáreas, y este es la unidad productiva fundamental del negocio. En un lote puede haber, como máximo, un cultivo en simultaneo, pero ese lote puede usarse para varios cultivos en el tiempo.\nLas semillas que se utilizan en un cultivo corresponden a temporadas en específico, dividas en temporadas de invierno y de verano, generando así la posibilidad de un doble cultivo en el mismo lote y campaña.\nUn proceso agrícola comienza con la planificación y la preparación del suelo, llamado “Barbecho previo”, el cual se encarga de preparar el suelo para que este en óptimas condiciones para la siembra. Una vez este realizado el barbecho previo, y las condiciones climáticas sean las ideales para la siembra, el procedimiento que se sigue es el siguiente:",
"peso": 0.6,
"id": 197,
"conceptos": {
"ent:lote": 4,
"ent:semilla": 1,
"ent:campania": 4,
"ent:siembra": 2,
"con:doble": 1,
"con:barbecho": 2
}
},
{
"fuente": "Minuta",
"titulo": "Descripción Del Negocio",
"texto": "1 – Se selecciona el Lote a utilizar, y se define la semilla a sembrar dependiendo de la temporada, es decir, si hacer siembra de invierno o de verano.\n2 – Al momento de la siembra se suelen aplicar fertilizantes, la siembra se realiza siguiendo parámetros específicos como la distancia entre surcos, que suele ser de 52,5 cm.\n3 – Hasta la fecha de la cosecha, se realizan labores de mantenimiento al cultivo, estas labores son:\nAplicar Herbicidas: La aplicación del mismo depende del tamaño de la maleza y cobertura.\nAplicar Fertilizante: Siempre se hace en la siembra, y durante el mantenimiento se realiza un análisis del suelo, el cual analiza los minerales de la tierra para determinar cuánto usar del fertilizante.\nAplicar Insecticida: Suele ser la labor más dinámica, ya que se basa en la cantidad de insectos en el momento (como convenio, si hay 1 insecto por metro de surco, se aplica el insumo).",
"peso": 0.6,
"id": 198,
"conceptos": {
"ent:lote": 1,
"ent:semilla": 1,
"ent:insumo": 4,
"ent:siembra": 5,
"ent:labor": 3,
"ent:cosecha": 1
}
},
{
"fuente": "Minuta",
"titulo": "Descripción Del Negocio",
"texto": "4 – El ciclo productivo termina con la cosecha, evaluando la cantidad de kilos cosechados por hectárea y la humedad del mismo, una vez se realiza la cosecha, se puede dar por finalizada la campaña, cerrando el lote.\nEn general, una campaña corresponde a un cultivo singular en un lote, sin embargo, hay ocasiones donde se realiza un doble cultivo, el cual consiste en sembrar en las dos temporadas, invierno y verano. En este caso, la campaña se da por finalizada cuando se cierra el lote después del segundo cultivo.\nCuando hay doble cultivo, entre la cosecha del primer cultivo y la siembra del segundo, se realiza un “Barbecho intermedio”, que consta de preparar la tierra para la segunda siembra.",
"peso": 0.6,
"id": 199,
"conceptos": {
"ent:lote": 3,
"ent:campania": 3,
"ent:siembra": 3,
"ent:cosecha": 3,
"con:doble": 3,
"con:barbecho": 1,
"con:humedad": 1
}
},
{
"fuente": "Minuta",
"titulo": "Descripción Del Sistema",
"texto": "AgroControl está diseñado para que el productor agropecuario pueda realizar el seguimiento detallado de sus unidades productivas (lotes) a lo largo de cada campaña. El sistema permitirá la gestión granular por hectárea, cultivo y variedad de semilla, centralizando el registro de todas las intervenciones técnicas y el consumo de insumos (fertilizantes, insecticidas, herbicidas, etc).\nEl ingeniero agrónomo nos comentó que sería de gran utilidad que el sistema contemplara la gestión del stock de los insumos utilizados en cada labor, como así también permitir el registro de las labores realizadas en cada etapa de la campaña, calculando los gastos totales de cada intervención.\nAdemás, el ingeniero agrónomo nos habló sobre la posibilidad de consultar campañas anteriores para poder comparar entre ellas, ante esto, el sistema registrará el historial de los lotes y sus respectivas campañas, permitiendo realizar consultas y comparativas a lo largo del tiempo.",
"peso": 0.6,
"id": 200,
"conceptos": {
"ent:lote": 2,
"ent:semilla": 1,
"ent:insumo": 2,
"ent:campania": 4,
"ent:labor": 2,
"con:stock": 1
}
},
{
"fuente": "Minuta",
"titulo": "Descripción Del Sistema",
"texto": "El sistema deberá registrar tanto los lotes y sus atributos (como la cantidad de hectáreas) como la semilla y sus tipos, incluyendo el stock de cada una. Además, deberá contar con labores predefinidas para su carga ágil. Durante la charla, el ingeniero agrónomo nos comentó que las labores más comunes son:\nSiembra.\nAplicación de Fertilizante.\nAplicación de Herbicida.\nAplicación de Insecticida.\nCosecha.\nCada insumo utilizado durante una labor estará registrado en el sistema junto con su stock asociado.",
"peso": 0.6,
"id": 201,
"conceptos": {
"ent:lote": 1,
"ent:semilla": 1,
"ent:insumo": 4,
"ent:siembra": 1,
"ent:labor": 3,
"ent:cosecha": 1,
"con:stock": 2
}
},
{
"fuente": "Minuta",
"titulo": "Reglas de negocio",
"texto": "Derivada de la charla con el ingeniero agrónomo, podemos aclarar las siguientes reglas de negocio:\nRN01: Un Lote no debe tener más de un cultivo activo de manera simultánea.\nRN02: La siembra de un cultivo debe realizarse dentro de su fecha optima predefinida y con el barbecho previamente realizado.\nRN02: Toda semilla debe pertenecer a una temporada predeterminada.\nRN03: Toda semilla tiene una fecha optima de siembra.\nRN04: El cierre de campaña debe realizarse una vez finalizada la cosecha del cultivo y cierre del lote.\nRN05: Un lote puede albergar más de un cultivo en el tiempo.\nRN06: Una campaña de doble cultivo inicia con la siembra del primer cultivo de invierno y finaliza con la cosecha del segundo cultivo de verano.\nRN07: Una campaña corresponde al ciclo productivo de un lote dentro de un período determinado.\nRN08: Una campaña puede contemplar uno o dos cultivos de manera secuencial (doble cultivo).\nRN09: En un esquema de doble cultivo, el segundo cultivo solo puede iniciarse una vez finalizada la cosecha del primero.",
"peso": 0.6,
"id": 202,
"conceptos": {
"cu:05": 1,
"ent:lote": 4,
"ent:semilla": 2,
"ent:campania": 4,
"ent:siembra": 3,
"ent:cosecha": 3,
"con:doble": 5,
"con:barbecho": 1
}
},
{
"fuente": "Minuta",
"titulo": "Reglas de negocio",
"texto": "RN10: Una campaña se considera finalizada cuando se realiza la cosecha del último cultivo y se cierra el lote.\nRN-11: En caso de doble cultivo, el análisis debe contemplar tanto resultados individuales por cultivo como resultados consolidados del lote.",
"peso": 0.6,
"id": 203,
"conceptos": {
"ent:lote": 2,
"ent:campania": 1,
"ent:cosecha": 1,
"con:doble": 1
}
},
{
"fuente": "Minuta",
"titulo": "Informes Solicitados",
"texto": "Durante la charla con el ingeniero agrónomo, nos comentó que sería de gran utilidad que el sistema genere los siguientes informes:\nInforme de ingresos brutos por lote.\nDetalle de insumos utilizados durante la campaña (Tipo de insumo, cantidad y costo final).\nRendimiento de cosecha por lote y campaña (Kilos por hectárea).\nInforme del margen bruto y rentabilidad total del cultivo por lote.\nInforme de Labores realizadas por campaña (tipo de labor,\nNota: En el caso de registrarse un doble cultivo, el informe económico del lote incluirá tanto el margen bruto consolidado de la campaña completa, como los márgenes individuales de cada uno de los cultivos.\nDichos informes tendrán como destinatario final al Productor Agropecuario, quien los utilizará para evaluar la rentabilidad de las unidades productivas y respaldar la toma de futuras decisiones económicas.",
"peso": 0.6,
"id": 204,
"conceptos": {
"ent:lote": 4,
"ent:insumo": 2,
"ent:campania": 4,
"ent:labor": 2,
"ent:cosecha": 1,
"con:doble": 1,
"con:rinde": 1,
"con:costo": 1
}
},
{
"fuente": "Minuta",
"titulo": "Fuera de Alcance",
"texto": "Para simplificar el trabajo, se excluyen las siguientes funciones que son comunes en el sector agropecuario. No se incluirá como funciones del sistema:\nGestión de mermas físicas (Volátil, Humedad, Zarandeos).\nGestión de seguros contra siniestros (Por ejemplo, granizo).\nGestión de fletes para la comercialización del producto.\nGestión de compra y pago de insumos.\nGestión de asignación de personal a maquinarias.",
"peso": 0.6,
"id": 205,
"conceptos": {
"ent:insumo": 1,
"ent:percance": 1,
"con:humedad": 1
}
},
{
"fuente": "Máquina de estados ME-Campania",
"titulo": "Estados y transiciones",
"texto": "flowchart TD\n  ini(( )) -->|EL INGENIERO DECIDE ABRIR LA CAMPAÑA| A(ABIERTA)\n  A -->|EL INGENIERO DECIDE CERRAR LA CAMPAÑA| C(CERRADA)\n  C -->|EL INGENIERO DECIDE BORRAR LA CAMPAÑA| B((\"●\"))\n  C --> fin(((\" \")))\n",
"peso": 0.8,
"id": 206,
"conceptos": {
"ent:campania": 3
}
},
{
"fuente": "Máquina de estados ME-Chatbot",
"titulo": "Estados y transiciones",
"texto": "flowchart TD\n  ini(( )) -->|EL USUARIO INICIA SESIÓN| SA(CERRADO SIN ABRIR)\n  SA -->|EL USUARIO ABRE EL CHAT| A(ABIERTO)\n  A -->|EL USUARIO ENVÍA UN MENSAJE| E(ESPERANDO RESPUESTA)\n  E -->|EL ASISTENTE RESPONDE| A\n  E -->|FALLA LA CONSULTA| A\n  A -->|EL USUARIO CIERRA EL CHAT| C(CERRADO)\n  C -->|EL USUARIO ABRE EL CHAT| A\n  SA -->|EL USUARIO CIERRA SESIÓN| fin(((\" \")))\n  C -->|EL USUARIO CIERRA SESIÓN| fin\n  A -->|EL USUARIO CIERRA SESIÓN| fin\n",
"peso": 0.8,
"id": 207,
"conceptos": {
"cu:09": 1,
"ent:usuario": 8
}
},
{
"fuente": "Máquina de estados ME-Insumo",
"titulo": "Estados y transiciones",
"texto": "flowchart TD\n  ini(( )) --> CS\n  subgraph G[\" \"]\n    CS(CON STOCK)\n    SS(SIN STOCK)\n  end\n  X{ }\n  CS -->|EL INGENIERO DECIDE REGISTRAR LA LABOR| X\n  X -->|EL INSUMO SE QUEDA SIN STOCK| SS\n  X -->|EL INSUMO SE ENCUENTRA CON STOCK| CS\n  SS -->|EL INGENIERO ACTUALIZA EL STOCK| CS\n  G -->|EL INGENIERO DECIDE DESAHABILITAR EL INSUMO| I(INACTIVA)\n  G --> fin(((\" \")))\n",
"peso": 0.8,
"id": 208,
"conceptos": {
"ent:insumo": 4,
"ent:labor": 1,
"con:stock": 5
}
},
{
"fuente": "Máquina de estados ME-Lote",
"titulo": "Estados y transiciones",
"texto": "flowchart TD\n  ini(( )) --> D(DISPONIBLE)\n  D --> fin(((\" \")))\n  D -->|EL INGENIERO DECIDE SEMBRAR EN EL LOTE ELEGIDO| U(EN USO)\n  U -->|EL INGENIERO DECIDE REGISTRAR LA SIEMBRA| S(SEMBRADO)\n  S -->|EL INGENIERO DECIDE REGISTRAR LA COSECHA| C(COSECHADO)\n  C -->|EL INGENIERO DECIDE REALIZAR DOBLE CULTIVO| U\n  C -->|EL INGENIERO DECIDE CERRAR LA CAMPAÑA| D\n",
"peso": 0.8,
"id": 209,
"conceptos": {
"ent:lote": 2,
"ent:campania": 1,
"ent:siembra": 2,
"ent:cosecha": 1,
"con:doble": 1,
"est:libre": 1,
"est:enuso": 1,
"est:sembrado": 1,
"est:cosechado": 1
}
},
{
"fuente": "Máquina de estados ME-Semilla",
"titulo": "Estados y transiciones",
"texto": "flowchart TD\n  ini(( )) --> CS\n  subgraph G[\" \"]\n    CS(CON STOCK)\n    SS(SIN STOCK)\n  end\n  X{ }\n  CS -->|EL INGENIERO DECIDE REGISTRAR LA SIEMBRA| X\n  X -->|LA SEMILLA SE QUEDA SIN STOCK| SS\n  X -->|LA SEMILLA SE ENCUENTRA CON STOCK| CS\n  SS -->|EL INGENIERO ACTUALIZA EL STOCK| CS\n  G -->|EL INGENIERO DECIDE DESAHABILITAR LA SEMILLA| I(INACTIVA)\n  G --> fin(((\" \")))\n",
"peso": 0.8,
"id": 210,
"conceptos": {
"ent:semilla": 4,
"ent:siembra": 1,
"con:stock": 5
}
},
{
"fuente": "Guía de pantallas",
"titulo": "Barra de navegación (todas las pantallas) > Dónde está cada cosa",
"texto": "La barra de arriba tiene: \"AgroControl\" (vuelve al inicio), \"Lotes\", \"Siembras\", \"Labores\", \"Cosechas\", \"Campañas\", \"Insumos\", \"Rinde\" y \"Catálogos\". El rol Admin ve además \"Usuarios\". A la derecha está tu nombre y \"Salir\" para cerrar sesión.\n\"Catálogos\" abre un menú con \"Semillas\", \"Insumos\" y \"Labores de mantenimiento\".\nDónde se crea cada cosa: un lote en \"Lotes\" con \"Nuevo lote\"; una campaña en \"Lotes\" con \"Asignar lote\"; una semilla en \"Catálogos\", \"Semillas\", con \"Nueva semilla\"; un insumo en \"Catálogos\", \"Insumos\", con \"Nuevo insumo\"; una labor en \"Catálogos\", \"Labores de mantenimiento\", con \"Nueva labor\"; una siembra en \"Siembras\"; una labor realizada en \"Labores\"; una cosecha en \"Cosechas\"; un usuario en \"Usuarios\".",
"peso": 1.4,
"ruta": "/*",
"id": 211,
"conceptos": {
"cu:01": 1,
"ent:lote": 6,
"ent:semilla": 4,
"ent:insumo": 5,
"ent:campania": 2,
"ent:siembra": 3,
"ent:labor": 7,
"ent:cosecha": 3,
"ent:usuario": 4,
"con:rinde": 1,
"pan:catalogos": 5
}
},
{
"fuente": "Guía de pantallas",
"titulo": "Barra de navegación (todas las pantallas) > Diferencia entre Insumos y Catálogos",
"texto": "\"Insumos\" en la barra es un tablero de consulta del stock de semillas e insumos: no se carga nada ahí, aunque tiene accesos a editar. \"Catálogos\", \"Insumos\" es donde se crean, modifican, dan de baja y reactivan los insumos.",
"peso": 1.4,
"ruta": "/*",
"id": 212,
"conceptos": {
"ent:semilla": 1,
"ent:insumo": 5,
"con:stock": 1,
"pan:catalogos": 3
}
},
{
"fuente": "Guía de pantallas",
"titulo": "Barra de navegación (todas las pantallas) > Pasos, volver atrás y cancelar",
"texto": "Las pantallas de registro tienen un indicador de pasos arriba. Para volver a un paso anterior, hacé clic en su nombre. Nada se guarda hasta confirmar en el último paso. Para abandonar, usá \"Cancelar\", \"Cancelar registro\", \"Cancelar registración\" o \"Cancelar asignación\" según la pantalla, y confirmá con \"Sí, cancelar\". \"No, volver\" cierra el mensaje sin cambios.",
"peso": 1.4,
"ruta": "/*",
"id": 213,
"conceptos": {}
},
{
"fuente": "Guía de pantallas",
"titulo": "Barra de navegación (todas las pantallas) > Tablas, filtros y orden",
"texto": "En las tablas con casilla, hacé clic en la fila para elegirla. \"Filtrar\" y \"Ordenar\" abren un menú que se aplica al elegir una opción. Si una tabla no puede cargar los datos, muestra el error y el botón \"Reintentar\".",
"peso": 1.4,
"ruta": "/*",
"id": 214,
"conceptos": {}
},
{
"fuente": "Guía de pantallas",
"titulo": "Barra de navegación (todas las pantallas) > Qué puede hacer cada rol",
"texto": "Admin: todo, incluida la sección \"Usuarios\". Ingeniero: todo menos \"Usuarios\". Productor: solo consultar; ve el aviso \"Modo consulta: tu rol no permite modificar información.\" y no se muestran los botones de cargar, modificar, dar de baja ni registrar. Los tres roles pueden usar el asistente.",
"peso": 1.4,
"ruta": "/*",
"id": 215,
"conceptos": {
"cu:09": 1,
"ent:usuario": 5,
"pan:catalogos": 1
}
},
{
"fuente": "Guía de pantallas",
"titulo": "Inicio de sesión > Ingresar al sistema",
"texto": "Completá \"Correo electrónico\" y \"Contraseña\" y hacé clic en \"Ingresar\". \"Ver\" muestra la contraseña. \"Recordarme en este dispositivo\" mantiene la sesión al cerrar el navegador. Si los datos no son correctos aparece \"Credenciales inválidas\". No hay recuperación de contraseña en esta pantalla: la reinicia el administrador desde \"Usuarios\". La sesión dura un día.",
"peso": 1.4,
"ruta": "/login",
"id": 216,
"conceptos": {
"ent:usuario": 4,
"con:sesion": 2
}
},
{
"fuente": "Guía de pantallas",
"titulo": "Inicio > Qué muestra",
"texto": "Es la pantalla de bienvenida, con tu nombre. No tiene acciones: usá la barra de navegación.",
"peso": 1.4,
"ruta": "/",
"id": 217,
"conceptos": {}
},
{
"fuente": "Guía de pantallas",
"titulo": "Lotes > Qué muestra la pantalla Lotes",
"texto": "La tabla \"Todos los lotes\" con lote, zona, superficie, distancia entre surcos y estado: \"Libre\", \"En uso\", \"Sembrado\" o \"Cosechado\". \"Filtrar\" permite elegir por estado y \"Ordenar\" por \"Número de lote\", \"Mayor superficie\" o \"Menor superficie\". Botones: \"Asignar lote\", \"Nuevo lote\" y \"Modificar\" en cada fila.",
"peso": 1.4,
"ruta": "/lotes",
"id": 218,
"conceptos": {
"cu:01": 1,
"ent:lote": 7,
"est:libre": 1,
"est:enuso": 1,
"est:sembrado": 1,
"est:cosechado": 1
}
},
{
"fuente": "Guía de pantallas",
"titulo": "Lotes > Crear un lote nuevo (cargar, agregar o dar de alta un lote)",
"texto": "1. En la barra de navegación, hacé clic en \"Lotes\".\n2. Hacé clic en \"Nuevo lote\".\n3. Completá \"Número de lote\", \"Zona\", \"Superficie (ha)\" y \"Distancia entre surcos\".\n4. Hacé clic en \"Crear lote\".\nEl lote queda en estado \"Libre\". El número tiene que ser entero, mayor a 0 y no estar repetido (si no, avisa \"Ya existe el Lote …\"); la superficie y la distancia tienen que ser mayores a 0.",
"peso": 1.4,
"ruta": "/lotes",
"id": 219,
"conceptos": {
"ent:lote": 9,
"est:libre": 1
}
},
{
"fuente": "Guía de pantallas",
"titulo": "Lotes > Modificar un lote",
"texto": "En \"Lotes\", hacé clic en \"Modificar\" en la fila del lote, cambiá \"Zona\", \"Superficie (ha)\" o \"Distancia entre surcos\" y hacé clic en \"Guardar cambios\". El número de lote no se puede cambiar.",
"peso": 1.4,
"ruta": "/lotes",
"id": 220,
"conceptos": {
"ent:lote": 5
}
},
{
"fuente": "Guía de pantallas",
"titulo": "Lotes > Eliminar un lote o cambiar su estado a mano",
"texto": "No hay una opción para eliminar lotes en la pantalla. El estado tampoco se cambia a mano: cambia solo al asignar el lote (En uso), registrar la siembra (Sembrado), registrar la cosecha (Cosechado), agregar un segundo cultivo (En uso) y cerrar la campaña (Libre).",
"peso": 1.4,
"ruta": "/lotes",
"id": 221,
"conceptos": {
"ent:lote": 4,
"ent:campania": 1,
"ent:siembra": 1,
"ent:cosecha": 1,
"con:doble": 1,
"est:libre": 1,
"est:enuso": 2,
"est:sembrado": 1,
"est:cosechado": 1
}
},
{
"fuente": "Guía de pantallas",
"titulo": "Asignar lote > Crear una campaña asignando un lote",
"texto": "1. En \"Lotes\", hacé clic en \"Asignar lote\".\n2. Marcá un lote en \"Lotes libres\" y hacé clic en \"Seleccionar\".\n3. Marcá una semilla en \"Semillas disponibles\" y hacé clic en \"Seleccionar\". Solo aparecen semillas activas con stock.\n4. Revisá \"Fecha de inicio de campaña\" y \"Temporada\" (se completa con la estación de la semilla y se puede cambiar).\n5. Hacé clic en \"Confirmar asignación\" y después en \"Sí, asignar\".\nLa campaña queda creada y el lote pasa a \"En uso\". Ya se puede registrar la siembra.",
"peso": 1.4,
"ruta": "/lotes/asignar",
"id": 222,
"conceptos": {
"cu:01": 2,
"ent:lote": 7,
"ent:semilla": 4,
"ent:campania": 3,
"ent:siembra": 1,
"con:stock": 1,
"est:enuso": 1
}
},
{
"fuente": "Guía de pantallas",
"titulo": "Asignar lote > Por qué no aparece un lote o una semilla al asignar",
"texto": "Solo aparecen los lotes en estado \"Libre\": si dice \"No hay lotes libres\", cerrá una campaña o creá un lote nuevo en \"Lotes\". Solo aparecen las semillas activas con stock: si dice \"No hay semillas con stock\", cargá stock en \"Catálogos\", \"Semillas\".",
"peso": 1.4,
"ruta": "/lotes/asignar",
"id": 223,
"conceptos": {
"cu:01": 1,
"ent:lote": 6,
"ent:semilla": 4,
"ent:campania": 1,
"con:stock": 3,
"pan:catalogos": 1,
"est:libre": 1
}
},
{
"fuente": "Guía de pantallas",
"titulo": "Registrar siembra > Pasos para registrar una siembra",
"texto": "1. En \"Siembras\", marcá el lote en \"Lotes en uso\" y hacé clic en \"Seleccionar\".\n2. Completá \"Cantidad de semillas … sembradas (t)\" (toneladas enteras) y \"Fecha de finalización de siembra\".\n3. Si hubo problemas, \"Añadir percance\" y completá descripción, fecha y costo. \"Eliminar\" lo quita.\n4. Hacé clic en \"Revisar siembra\", controlá el resumen, hacé clic en \"Registrar siembra\" y en \"Sí, registrar\". \"Modificar\" vuelve a los datos.\nSe descuenta el stock de la semilla y el lote pasa a \"Sembrado\".",
"peso": 1.4,
"ruta": "/siembras",
"id": 224,
"conceptos": {
"cu:02": 3,
"ent:lote": 3,
"ent:semilla": 2,
"ent:siembra": 6,
"ent:percance": 1,
"con:stock": 1,
"con:costo": 1,
"est:enuso": 1,
"est:sembrado": 1
}
},
{
"fuente": "Guía de pantallas",
"titulo": "Registrar siembra > Agregar stock de semilla durante la siembra",
"texto": "En el paso \"Cargar siembra\", en el panel \"Stock de …\", hacé clic en \"Modificar stock\", ingresá \"Toneladas a agregar\" (enteras) y hacé clic en \"Agregar\". Se guarda al registrar la siembra.",
"peso": 1.4,
"ruta": "/siembras",
"id": 225,
"conceptos": {
"cu:02": 1,
"ent:semilla": 1,
"ent:siembra": 4,
"con:stock": 3
}
},
{
"fuente": "Guía de pantallas",
"titulo": "Registrar siembra > Por qué no puedo registrar la siembra",
"texto": "Si dice \"No hay lotes en uso\", primero asigná un lote. Si dice \"Supera el stock disponible\", bajá la cantidad o sumá stock con \"Modificar stock\". La cantidad tiene que ser un número entero de toneladas mayor a 0. Cada percance necesita descripción, fecha y un costo de 0 o más.",
"peso": 1.4,
"ruta": "/siembras",
"id": 226,
"conceptos": {
"cu:02": 1,
"ent:lote": 2,
"ent:siembra": 2,
"ent:percance": 1,
"con:stock": 3,
"con:costo": 1,
"pan:catalogos": 1,
"est:libre": 1,
"est:enuso": 1
}
},
{
"fuente": "Guía de pantallas",
"titulo": "Percance general > Registrar un percance en varios lotes (granizo, inundación)",
"texto": "1. En \"Siembras\", hacé clic en \"Percance general\".\n2. Marcá los lotes afectados, o \"Elegir todos\", y hacé clic en \"Seleccionar (…)\".\n3. Completá \"Descripción\", \"Fecha del percance\" y \"Costo total ($)\". El costo se reparte según la superficie y podés corregir el monto de cada lote.\n4. Hacé clic en \"Siguiente\", en \"Registrar percance\" y en \"Sí, registrar\".\nLos lotes siguen \"Sembrado\" y el costo cuenta en el rinde. Solo aparecen lotes sembrados de campañas abiertas.",
"peso": 1.4,
"ruta": "/siembras/percance",
"id": 227,
"conceptos": {
"ent:lote": 5,
"ent:campania": 1,
"ent:siembra": 1,
"ent:percance": 6,
"ent:usuario": 1,
"con:rinde": 1,
"con:costo": 3,
"est:sembrado": 1
}
},
{
"fuente": "Guía de pantallas",
"titulo": "Registrar labor > Pasos para registrar una labor de mantenimiento",
"texto": "1. En \"Labores\", marcá el lote en \"Lotes sembrados\" y hacé clic en \"Seleccionar\".\n2. Marcá la labor y hacé clic en \"Seleccionar\". Si no existe, creala con \"Nueva labor\": completá \"Labor\" y \"Costo base ($)\" y hacé clic en \"Guardar\".\n3. En \"Insumos utilizados\", elegí cada insumo y su cantidad. \"Agregar insumo\" suma una fila y \"Quitar\" la saca. Completá \"Fecha de la labor\". Sin insumos, se registra solo el costo base.\n4. Hacé clic en \"Siguiente\", en \"Registrar labor\" y en \"Sí, registrar\".\nSe descuenta el stock de cada insumo y el costo se imputa a la campaña.",
"peso": 1.4,
"ruta": "/labores",
"id": 228,
"conceptos": {
"cu:03": 4,
"ent:lote": 2,
"ent:insumo": 5,
"ent:campania": 1,
"ent:labor": 8,
"con:stock": 1,
"con:costo": 3
}
},
{
"fuente": "Guía de pantallas",
"titulo": "Registrar labor > Por qué no puedo registrar la labor",
"texto": "Solo aparecen lotes en estado \"Sembrado\" con campaña abierta. \"Stock insuficiente de …\": bajá la cantidad o cargá stock en \"Catálogos\", \"Insumos\". Las cantidades son enteras y mayores a 0. Los insumos sin stock no se pueden elegir. Las labores dadas de baja no aparecen.",
"peso": 1.4,
"ruta": "/labores",
"id": 229,
"conceptos": {
"cu:03": 1,
"ent:lote": 1,
"ent:insumo": 2,
"ent:campania": 1,
"ent:labor": 3,
"con:stock": 3,
"pan:catalogos": 3,
"est:sembrado": 1
}
},
{
"fuente": "Guía de pantallas",
"titulo": "Registrar cosecha > Pasos para registrar una cosecha",
"texto": "1. En \"Cosechas\", marcá el lote en \"Lotes para cosechar\" y hacé clic en \"Seleccionar\".\n2. Completá \"Cantidad cosechada por hectárea (kg/ha)\", \"Humedad obtenida (%)\" y \"Fecha de cosecha\". El panel \"Rinde total\" calcula los kilos del lote.\n3. Hacé clic en \"Siguiente\", en \"Registrar cosecha\" y en \"Sí, registrar\".\nEl lote pasa a \"Cosechado\".",
"peso": 1.4,
"ruta": "/cosechas",
"id": 230,
"conceptos": {
"cu:04": 3,
"ent:lote": 4,
"ent:cosecha": 6,
"con:rinde": 1,
"con:humedad": 1,
"est:cosechado": 1
}
},
{
"fuente": "Guía de pantallas",
"titulo": "Registrar cosecha > Por qué no puedo registrar la cosecha",
"texto": "\"No hay lotes en condiciones de cosecha\": solo se cosechan lotes \"Sembrado\" de campañas abiertas. Los kilos por hectárea tienen que ser mayores a 0 y la humedad estar entre 0 y 100.",
"peso": 1.4,
"ruta": "/cosechas",
"id": 231,
"conceptos": {
"cu:04": 1,
"ent:lote": 2,
"ent:campania": 1,
"ent:cosecha": 3,
"con:humedad": 1,
"est:sembrado": 1
}
},
{
"fuente": "Guía de pantallas",
"titulo": "Cerrar campaña > Pasos para cerrar una campaña",
"texto": "1. En \"Campañas\", marcá la campaña en \"Campañas abiertas\" y hacé clic en \"Seleccionar\".\n2. Revisá \"Lotes de la campaña\" y hacé clic en \"Cerrar campaña\".\n3. Confirmá con \"Sí, cerrar\". No se puede deshacer.\nLa campaña pasa a \"Cerrada\", los lotes vuelven a \"Libre\" y los resultados se ven en \"Rinde\".",
"peso": 1.4,
"ruta": "/campanias",
"id": 232,
"conceptos": {
"cu:05": 3,
"ent:lote": 2,
"ent:campania": 8,
"con:rinde": 1,
"est:libre": 1
}
},
{
"fuente": "Guía de pantallas",
"titulo": "Cerrar campaña > Por qué no puedo cerrar la campaña",
"texto": "Todos los lotes tienen que estar en \"Cosechado\". Si aparece \"Hay lotes sin cosechar\", registrá primero la cosecha de los lotes pendientes.",
"peso": 1.4,
"ruta": "/campanias",
"id": 233,
"conceptos": {
"cu:05": 1,
"ent:lote": 3,
"ent:campania": 2,
"ent:cosecha": 2,
"est:cosechado": 1
}
},
{
"fuente": "Guía de pantallas",
"titulo": "Cerrar campaña > Agregar un segundo cultivo (doble cultivo)",
"texto": "En \"Campañas\", seleccioná la campaña y, en la fila de un lote cosechado, hacé clic en \"Agregar segundo cultivo\". Elegí la semilla (activa, con stock y distinta a la primera) y hacé clic en \"Agregar cultivo\". El lote vuelve a \"En uso\" y ya se puede registrar la siembra. Cada lote admite hasta dos cultivos por campaña.",
"peso": 1.4,
"ruta": "/campanias",
"id": 234,
"conceptos": {
"cu:05": 1,
"ent:lote": 3,
"ent:semilla": 1,
"ent:campania": 4,
"ent:siembra": 1,
"con:doble": 3,
"con:stock": 1,
"est:enuso": 1,
"est:cosechado": 1
}
},
{
"fuente": "Guía de pantallas",
"titulo": "Cerrar campaña > Eliminar una campaña",
"texto": "En la pantalla \"Campañas\" no hay una opción para eliminar campañas: solo cerrarlas.",
"peso": 1.4,
"ruta": "/campanias",
"id": 235,
"conceptos": {
"cu:05": 1,
"ent:campania": 4
}
},
{
"fuente": "Guía de pantallas",
"titulo": "Insumos: tablero de stock > Qué muestra el tablero de stock",
"texto": "Indicadores \"Valor total en stock\", \"Semillas activas\", \"Insumos\" y \"Para reponer\", y las tablas \"Semillas\" e \"Insumos\" con situación, stock, precio, valor, usado, usos, promedio y para cuántos usos alcanza. \"Filtrar\" muestra solo activos o todos; \"Ordenar\" permite \"Lo más urgente primero\", \"Mayor valor en stock\" o \"Nombre\". \"Editar semillas\" y \"Editar insumos\" llevan a Catálogos.",
"peso": 1.4,
"ruta": "/insumos",
"id": 236,
"conceptos": {
"cu:11": 1,
"ent:semilla": 3,
"ent:insumo": 4,
"con:stock": 5,
"pan:catalogos": 1
}
},
{
"fuente": "Guía de pantallas",
"titulo": "Insumos: tablero de stock > Qué significan Sin stock, Stock bajo, Con stock y Sin consumo",
"texto": "\"Sin stock\": no queda nada. \"Stock bajo\": según el consumo promedio alcanza para menos de 2 siembras o labores. \"Con stock\": alcanza para 2 o más. \"Sin consumo\": todavía no se usó y no se puede estimar. \"Para reponer\" reúne lo que está sin stock o con stock bajo.",
"peso": 1.4,
"ruta": "/insumos",
"id": 237,
"conceptos": {
"cu:11": 4,
"ent:insumo": 1,
"ent:siembra": 1,
"ent:labor": 1,
"con:stock": 9
}
},
{
"fuente": "Guía de pantallas",
"titulo": "Rinde > Qué muestra el tablero de rinde",
"texto": "Los resultados de las campañas cerradas. Arriba se elige \"Lote\", \"Campaña\", \"Cultivo\" y \"Comparar con\" (la campaña anterior o el promedio del mismo lote). Muestra seis indicadores (producción, rinde, inversión por hectárea, costo por tonelada, multiplicación de semilla y kilos por cada $1.000), el reparto \"En qué se fue la plata\", gráficos, \"Histórico de campañas\" y \"Lotes de …\". Hacer clic en una columna de un gráfico o en una fila del histórico elige esa campaña.",
"peso": 1.4,
"ruta": "/rinde",
"id": 238,
"conceptos": {
"cu:10": 1,
"ent:lote": 3,
"ent:semilla": 1,
"ent:campania": 5,
"con:rinde": 3,
"con:costo": 2
}
},
{
"fuente": "Guía de pantallas",
"titulo": "Rinde > Mensajes del tablero de rinde",
"texto": "\"Todavía no hay campañas cerradas\": primero hay que cerrar una campaña. \"No hay campañas para ese filtro\": cambiá el lote o el cultivo. \"Es la primera campaña cerrada de este lote\": no hay contra qué comparar. No se muestran ingresos ni ganancias porque el sistema no registra precios de venta. No hay opción para exportar.",
"peso": 1.4,
"ruta": "/rinde",
"id": 239,
"conceptos": {
"cu:05": 1,
"ent:lote": 2,
"ent:campania": 4,
"con:rinde": 2
}
},
{
"fuente": "Guía de pantallas",
"titulo": "Catálogo de semillas > Crear o modificar una semilla y cargar su stock",
"texto": "En \"Catálogos\", \"Semillas\", hacé clic en \"Nueva semilla\" (o \"Modificar\" en una fila). Completá \"Nombre\", \"Estación\" (Verano o Invierno), \"Stock (t)\" en toneladas enteras y \"Precio por tonelada ($)\". Guardá con \"Crear semilla\" o \"Guardar cambios\". Solo las semillas activas con stock se ofrecen al asignar un lote.",
"peso": 1.4,
"ruta": "/catalogos/semillas",
"id": 240,
"conceptos": {
"cu:01": 1,
"ent:lote": 1,
"ent:semilla": 6,
"con:stock": 3,
"pan:catalogos": 2
}
},
{
"fuente": "Guía de pantallas",
"titulo": "Catálogo de semillas > Dar de baja o reactivar una semilla",
"texto": "En la fila, \"Dar de baja\" y después \"Sí, dar de baja\": pasa a \"Inactiva\" y deja de ofrecerse; no se borra. Para reactivarla, \"Filtrar\", \"Inactivas\" y \"Reactivar\" (sin confirmación).",
"peso": 1.4,
"ruta": "/catalogos/semillas",
"id": 241,
"conceptos": {
"ent:semilla": 2,
"pan:catalogos": 6
}
},
{
"fuente": "Guía de pantallas",
"titulo": "Catálogo de insumos > Crear o modificar un insumo y cargar su stock",
"texto": "En \"Catálogos\", \"Insumos\", hacé clic en \"Nuevo insumo\" (o \"Modificar\" en una fila). Completá \"Nombre\", \"Stock\" (entero, 0 o más) y \"Precio unitario ($)\". Guardá con \"Crear insumo\" o \"Guardar cambios\". Para cambiar el precio o sumar stock, usá \"Modificar\".",
"peso": 1.4,
"ruta": "/catalogos/insumos",
"id": 242,
"conceptos": {
"ent:insumo": 5,
"con:stock": 3,
"pan:catalogos": 2
}
},
{
"fuente": "Guía de pantallas",
"titulo": "Catálogo de insumos > Dar de baja o reactivar un insumo",
"texto": "En la fila, \"Dar de baja\" y después \"Sí, dar de baja\": pasa a \"Inactiva\" y deja de estar disponible; no se elimina. Para reactivarlo, \"Filtrar\", \"Inactivos\" y \"Reactivar\" (sin confirmación).",
"peso": 1.4,
"ruta": "/catalogos/insumos",
"id": 243,
"conceptos": {
"ent:insumo": 2,
"pan:catalogos": 6,
"est:libre": 1
}
},
{
"fuente": "Guía de pantallas",
"titulo": "Catálogo de labores de mantenimiento > Crear o modificar una labor",
"texto": "En \"Catálogos\", \"Labores de mantenimiento\", hacé clic en \"Nueva labor\" (o \"Modificar\" en una fila). Completá \"Labor\" y \"Costo base ($)\" (0 o más) y guardá con \"Crear labor\" o \"Guardar cambios\". El costo base se suma al de los insumos. También se puede crear una desde \"Labores\", con \"Nueva labor\".",
"peso": 1.4,
"ruta": "/catalogos/labores",
"id": 244,
"conceptos": {
"ent:insumo": 1,
"ent:labor": 8,
"con:costo": 2,
"pan:catalogos": 2
}
},
{
"fuente": "Guía de pantallas",
"titulo": "Catálogo de labores de mantenimiento > Dar de baja o reactivar una labor",
"texto": "En la fila, \"Dar de baja\" y después \"Sí, dar de baja\": pasa a \"Inactiva\" y deja de ofrecerse al registrar labores. Para reactivarla, \"Filtrar\", \"Inactivas\" y \"Reactivar\" (sin confirmación).",
"peso": 1.4,
"ruta": "/catalogos/labores",
"id": 245,
"conceptos": {
"ent:labor": 3,
"pan:catalogos": 6
}
},
{
"fuente": "Guía de pantallas",
"titulo": "Usuarios > Crear un usuario y asignar su rol",
"texto": "Solo el rol Admin ve esta pantalla. En \"Usuarios\", completá \"Nombre completo\", \"Correo electrónico\", \"Contraseña inicial\" y \"Rol\", y hacé clic en \"Crear usuario\". Si el correo ya existe aparece \"El email ya está registrado\".",
"peso": 1.4,
"ruta": "/usuarios",
"id": 246,
"conceptos": {
"ent:usuario": 8
}
},
{
"fuente": "Guía de pantallas",
"titulo": "Usuarios > Reiniciar una contraseña",
"texto": "Solo el rol Admin. En la tabla \"Usuarios\", hacé clic en \"Reiniciar contraseña\" en la fila, completá \"Nueva contraseña\" y \"Confirmar contraseña\", y hacé clic en \"Reiniciar contraseña\". Si olvidaste tu contraseña o querés cambiarla, pedíselo al administrador: no hay una pantalla para cambiar la propia.",
"peso": 1.4,
"ruta": "/usuarios",
"id": 247,
"conceptos": {
"ent:usuario": 9
}
},
{
"fuente": "Guía de pantallas",
"titulo": "Usuarios > Modificar o eliminar un usuario",
"texto": "En la pantalla \"Usuarios\" no hay opciones para modificar ni eliminar cuentas existentes.",
"peso": 1.4,
"ruta": "/usuarios",
"id": 248,
"conceptos": {
"ent:usuario": 3
}
},
{
"fuente": "Charla con el ingeniero agrónomo",
"titulo": "ANOTACIONES TERCER CHARLA",
"texto": "PRECONDICIONES (Negocio):\nCada cultivo tiene su fecha optima predefinida (para sembrar), condicones de suelo, climaticas\nBarbecho ya hecho (aplicacion de herbicidas) semilla lista, disponibilidad de la maquina, y el lote,",
"peso": 0.9,
"id": 249,
"conceptos": {
"ent:lote": 1,
"ent:semilla": 1,
"ent:siembra": 1,
"con:barbecho": 1
}
},
{
"fuente": "Charla con el ingeniero agrónomo",
"titulo": "Tema campaña",
"texto": "cierra el lote de un cultivo, se cierra la campaña.\nCuando se hace el barbecho y se siembra devuelta, abre otra campaña.\nUn lote: trigo-soja, es una campaña del lote.\nUn lote por campaña (un lote = doble cultivo)\nCampañas se nombran de a 2 años (ejemplo campaña 2024-2025)\nUna campaña es el doble cultivo, arranca con la siembra del trigo (primer cultivo), termina con la cosecha del segundo cultivo",
"peso": 0.9,
"id": 250,
"conceptos": {
"ent:lote": 5,
"ent:campania": 8,
"ent:siembra": 2,
"ent:cosecha": 1,
"con:doble": 3,
"con:barbecho": 1
}
},
{
"fuente": "Charla con el ingeniero agrónomo",
"titulo": "Tema doble cultivo",
"texto": "costos doble cultivo: Hace falta analisis por cultivo (para saber como le fue a cada uno de los cultivos) y un analisis por lote.",
"peso": 0.9,
"id": 251,
"conceptos": {
"ent:lote": 1,
"con:doble": 2,
"con:costo": 1
}
},
{
"fuente": "Charla con el ingeniero agrónomo",
"titulo": "Posible pasos a tener en cuenta en camino basico",
"texto": "Primer cosa que se hace es el barbecho (Puede ser una precondicion)\ninicio campaña - barchecho - siembra - cosecha - barbecho - siembra - cosecha - cierre de campaña",
"peso": 0.9,
"id": 252,
"conceptos": {
"cu:05": 1,
"ent:campania": 2,
"ent:siembra": 2,
"ent:cosecha": 2,
"ent:usuario": 1,
"con:barbecho": 2
}
},
{
"fuente": "Charla con el ingeniero agrónomo",
"titulo": "Anotaciones de segunda charla",
"texto": "Cuando se termina de cosechar la soja – cierra campaña (el lote).\nDespués de que se coseche la soja, y ese lote va a maíz, todos esos costos se atribuyen al maíz (Controlan malezas, se mantiene el campo limpio) hasta que se siembra el maíz.",
"peso": 0.9,
"id": 253,
"conceptos": {
"ent:lote": 2,
"ent:campania": 1,
"ent:siembra": 1,
"ent:cosecha": 1,
"con:costo": 1
}
},
{
"fuente": "Charla con el ingeniero agrónomo",
"titulo": "Tema Herencia",
"texto": "Cultivos de invierno – Cultivos de verano en esta zona (Soja, trigo). En la campaña agrícola hay doble cultivo, por ejemplo, trigo-soja; hay que definir si analizar por lote o por cultivo.\nMaíz (verano): siembra en septiembre, cosecha en marzo.\nSoja (verano): siembra en noviembre, cosecha en abril.\nTrigo (invierno): siembra a fines de mayo/principios de junio, cosecha a principios de noviembre/fines de diciembre.\nCebada, avena, lenteja: (invierno).\nVarían las condiciones.",
"peso": 0.9,
"id": 254,
"conceptos": {
"ent:lote": 1,
"ent:campania": 1,
"ent:siembra": 3,
"ent:cosecha": 3,
"con:doble": 1
}
},
{
"fuente": "Charla con el ingeniero agrónomo",
"titulo": "Proceso Principal",
"texto": "1. Elegir lote.\n2. Sembrar.\n3. Aplicar fertilizante: (Haciendo el estudio de tierra o no).\n4. Aplicar insumos: (barbecho, dependiendo de las condiciones).\n5. Monitorear Insectos: (si hay, insecticida; si no, no aplicar).\n6. Cosechar.\n7. Fuera del alcance: Sacar humedad, suciedad, zaranda (procesos post-cosecha).\n8. Cerrar lote.",
"peso": 0.9,
"id": 255,
"conceptos": {
"cu:00": 1,
"ent:lote": 2,
"ent:insumo": 3,
"ent:siembra": 1,
"ent:cosecha": 2,
"con:barbecho": 1,
"con:humedad": 1
}
},
{
"fuente": "Charla con el ingeniero agrónomo",
"titulo": "Cuando utilizar el barbecho (cuidar hasta la siembra)",
"texto": "Herbicida: Depende del tamaño de maleza y cobertura. Estadio de maleza para tomar decisión.\nFertilizante: Análisis de suelo para saber la fertilidad del lote; según los minerales, los kilos a utilizar varían. SE HACE A LA SIEMBRA.\nInsecticidas: Manejo dinámico (ej. Bralex). Si hay 1 chinche por metro de surco se aplica, sino no.",
"peso": 0.9,
"id": 256,
"conceptos": {
"ent:lote": 1,
"ent:insumo": 2,
"ent:siembra": 2,
"con:barbecho": 1
}
},
{
"fuente": "Charla con el ingeniero agrónomo",
"titulo": "Atributos importantes para las clases",
"texto": "Distancia entre surcos: 52.5 cm (Dato a guardar como atributo de siembra). Permite calcular semillas por metro y semillas por hectárea.\nManejo de Stock: Control de insumos disponibles.\nParámetros de cosecha: Kilos por hectárea, Humedad de la cosecha, Rendimiento por lote.",
"peso": 0.9,
"id": 257,
"conceptos": {
"ent:lote": 1,
"ent:semilla": 2,
"ent:insumo": 1,
"ent:siembra": 1,
"ent:cosecha": 2,
"con:stock": 1,
"con:rinde": 1,
"con:humedad": 1
}
}
],
"pantallas": {
"/login": "Inicio de sesión",
"/": "Inicio",
"/lotes": "Lotes",
"/lotes/asignar": "Asignar lote",
"/siembras": "Registrar siembra",
"/siembras/percance": "Percance general",
"/labores": "Registrar labor",
"/cosechas": "Registrar cosecha",
"/campanias": "Cerrar campaña",
"/insumos": "Insumos: tablero de stock",
"/rinde": "Rinde",
"/catalogos/semillas": "Catálogo de semillas",
"/catalogos/insumos": "Catálogo de insumos",
"/catalogos/labores": "Catálogo de labores de mantenimiento",
"/usuarios": "Usuarios"
},
"conceptos": {
"cu:00": {
"nombre": "CU-00 Administrar campaña agrícola",
"alias": [
"administrar campana",
"proceso principal"
],
"vecinos": [
"cu:01",
"cu:02",
"cu:03",
"cu:04",
"cu:05"
]
},
"cu:01": {
"nombre": "CU-01 Asignar lote",
"alias": [
"asignar lote",
"asignar un lote",
"cuu1"
],
"vecinos": [
"cu:00",
"ent:lote",
"ent:semilla",
"ent:campania",
"est:enuso"
]
},
"cu:02": {
"nombre": "CU-02 Registrar siembra",
"alias": [
"registrar siembra",
"registrar una siembra",
"cuu2"
],
"vecinos": [
"cu:00",
"ent:siembra",
"ent:percance",
"est:sembrado",
"con:stock"
]
},
"cu:03": {
"nombre": "CU-03 Registrar labor",
"alias": [
"registrar labor",
"registrar una labor",
"cuu3",
"labor de mantenimiento"
],
"vecinos": [
"cu:00",
"ent:labor",
"ent:insumo",
"con:stock"
]
},
"cu:04": {
"nombre": "CU-04 Registrar cosecha",
"alias": [
"registrar cosecha",
"registrar una cosecha",
"cuu4"
],
"vecinos": [
"cu:00",
"ent:cosecha",
"con:humedad",
"est:cosechado"
]
},
"cu:05": {
"nombre": "CU-05 Cerrar campaña",
"alias": [
"cerrar campana",
"cerrar una campana",
"cierre de campana",
"cierro",
"cuu5"
],
"vecinos": [
"cu:00",
"ent:campania",
"est:libre",
"con:doble"
]
},
"cu:06": {
"nombre": "CU-06 Eliminar campaña",
"alias": [
"eliminar campana",
"baja de la campana",
"cuu6"
],
"vecinos": [
"ent:campania"
]
},
"cu:07": {
"nombre": "CU-07 Eliminar insumo",
"alias": [
"eliminar insumo",
"eliminar un insumo",
"baja del insumo",
"baja un insumo",
"cuu7"
],
"vecinos": [
"ent:insumo",
"pan:catalogos"
]
},
"cu:08": {
"nombre": "CU-08 Eliminar semilla",
"alias": [
"eliminar semilla",
"eliminar una semilla",
"baja una semilla",
"baja de la semilla",
"cuu8"
],
"vecinos": [
"ent:semilla",
"pan:catalogos"
]
},
"cu:09": {
"nombre": "CU-09 Consultar asistente",
"alias": [
"agrobot",
"asistente",
"cuu9"
],
"vecinos": []
},
"cu:10": {
"nombre": "CU-10 Consultar rinde",
"alias": [
"consultar rinde",
"cuu10",
"costo por tonelada"
],
"vecinos": [
"pan:rinde",
"con:rinde",
"con:costo"
]
},
"cu:11": {
"nombre": "CU-11 Consultar stock",
"alias": [
"consultar stock",
"cuu11",
"stock bajo",
"reponer",
"comprar"
],
"vecinos": [
"pan:insumos",
"con:stock"
]
},
"ent:lote": {
"nombre": "Lote",
"alias": [
"lote",
"lotes"
],
"vecinos": [
"cu:01"
]
},
"ent:semilla": {
"nombre": "Semilla",
"alias": [
"semilla",
"semillas"
],
"vecinos": [
"cu:01",
"cu:08"
]
},
"ent:insumo": {
"nombre": "Insumo",
"alias": [
"insumo",
"insumos",
"fertilizante",
"herbicida",
"insecticida"
],
"vecinos": [
"cu:03",
"cu:07"
]
},
"ent:campania": {
"nombre": "Campaña",
"alias": [
"campana",
"campanas"
],
"vecinos": [
"cu:01",
"cu:05",
"cu:06"
]
},
"ent:siembra": {
"nombre": "Siembra",
"alias": [
"siembra",
"siembras",
"sembrar"
],
"vecinos": [
"cu:02"
]
},
"ent:labor": {
"nombre": "Labor",
"alias": [
"labor",
"labores"
],
"vecinos": [
"cu:03"
]
},
"ent:cosecha": {
"nombre": "Cosecha",
"alias": [
"cosecha",
"cosechas",
"cosechar"
],
"vecinos": [
"cu:04"
]
},
"ent:percance": {
"nombre": "Percance",
"alias": [
"percance",
"percances",
"granizo"
],
"vecinos": [
"cu:02"
]
},
"ent:usuario": {
"nombre": "Usuario y roles",
"alias": [
"usuario",
"usuarios",
"rol",
"roles",
"contrasena",
"cuenta"
],
"vecinos": [
"con:sesion"
]
},
"con:doble": {
"nombre": "Doble cultivo",
"alias": [
"doble cultivo",
"segundo cultivo"
],
"vecinos": [
"cu:05"
]
},
"con:barbecho": {
"nombre": "Barbecho",
"alias": [
"barbecho"
],
"vecinos": []
},
"con:stock": {
"nombre": "Stock",
"alias": [
"stock"
],
"vecinos": [
"cu:02",
"cu:03",
"cu:11"
]
},
"con:rinde": {
"nombre": "Rinde",
"alias": [
"rinde",
"rendimiento"
],
"vecinos": [
"cu:10"
]
},
"con:costo": {
"nombre": "Costos",
"alias": [
"costo",
"costos",
"inversion"
],
"vecinos": [
"cu:10"
]
},
"con:humedad": {
"nombre": "Humedad",
"alias": [
"humedad"
],
"vecinos": [
"cu:04"
]
},
"con:sesion": {
"nombre": "Inicio de sesión",
"alias": [
"iniciar sesion",
"inicio de sesion",
"ingresar al sistema",
"logueado"
],
"vecinos": [
"ent:usuario"
]
},
"pan:catalogos": {
"nombre": "Pantalla Catálogos",
"alias": [
"catalogos",
"catalogo",
"reactivar",
"baja"
],
"vecinos": [
"cu:07",
"cu:08"
]
},
"pan:insumos": {
"nombre": "Pantalla Insumos",
"alias": [
"“insumos”"
],
"vecinos": [
"cu:11"
]
},
"pan:rinde": {
"nombre": "Pantalla Rinde",
"alias": [
"“rinde”"
],
"vecinos": [
"cu:10"
]
},
"est:libre": {
"nombre": "Lote Libre",
"alias": [
"libre",
"disponible"
],
"vecinos": [
"cu:05"
]
},
"est:enuso": {
"nombre": "Lote En uso",
"alias": [
"en uso"
],
"vecinos": [
"cu:01"
]
},
"est:sembrado": {
"nombre": "Lote Sembrado",
"alias": [
"sembrado"
],
"vecinos": [
"cu:02"
]
},
"est:cosechado": {
"nombre": "Lote Cosechado",
"alias": [
"cosechado"
],
"vecinos": [
"cu:04"
]
}
}
}
