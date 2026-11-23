# Guía de pantallas

Fuente del asistente (Agrobot). La lee `scripts/generar_grafo.py`: cada `##` es una pantalla con su ruta y cada `###` un tema.
Si cambia una pantalla del front, actualizar su sección y regenerar el grafo.

## Barra de navegación (todas las pantallas) [/*]

### Dónde está cada cosa
La barra de arriba tiene: "AgroControl" (vuelve al inicio), "Lotes", "Siembras", "Labores", "Cosechas", "Campañas", "Insumos", "Rinde" y "Catálogos". El rol Admin ve además "Usuarios". A la derecha está tu nombre y "Salir" para cerrar sesión.
"Catálogos" abre un menú con "Semillas", "Insumos" y "Labores de mantenimiento".
Dónde se crea cada cosa: un lote en "Lotes" con "Nuevo lote"; una campaña en "Lotes" con "Asignar lote"; una semilla en "Catálogos", "Semillas", con "Nueva semilla"; un insumo en "Catálogos", "Insumos", con "Nuevo insumo"; una labor en "Catálogos", "Labores de mantenimiento", con "Nueva labor"; una siembra en "Siembras"; una labor realizada en "Labores"; una cosecha en "Cosechas"; un usuario en "Usuarios".

### Diferencia entre Insumos y Catálogos
"Insumos" en la barra es un tablero de consulta del stock de semillas e insumos: no se carga nada ahí, aunque tiene accesos a editar. "Catálogos", "Insumos" es donde se crean, modifican, dan de baja y reactivan los insumos.

### Pasos, volver atrás y cancelar
Las pantallas de registro tienen un indicador de pasos arriba. Para volver a un paso anterior, hacé clic en su nombre. Nada se guarda hasta confirmar en el último paso. Para abandonar, usá "Cancelar", "Cancelar registro", "Cancelar registración" o "Cancelar asignación" según la pantalla, y confirmá con "Sí, cancelar". "No, volver" cierra el mensaje sin cambios.

### Tablas, filtros y orden
En las tablas con casilla, hacé clic en la fila para elegirla. "Filtrar" y "Ordenar" abren un menú que se aplica al elegir una opción. Si una tabla no puede cargar los datos, muestra el error y el botón "Reintentar".

### Qué puede hacer cada rol
Admin: todo, incluida la sección "Usuarios". Ingeniero: todo menos "Usuarios". Productor: solo consultar; ve el aviso "Modo consulta: tu rol no permite modificar información." y no se muestran los botones de cargar, modificar, dar de baja ni registrar. Los tres roles pueden usar el asistente.

## Inicio de sesión [/login]

### Ingresar al sistema
Completá "Correo electrónico" y "Contraseña" y hacé clic en "Ingresar". "Ver" muestra la contraseña. "Recordarme en este dispositivo" mantiene la sesión al cerrar el navegador. Si los datos no son correctos aparece "Credenciales inválidas". No hay recuperación de contraseña en esta pantalla: la reinicia el administrador desde "Usuarios". La sesión dura un día.

## Inicio [/]

### Qué muestra
Es la pantalla de bienvenida, con tu nombre. No tiene acciones: usá la barra de navegación.

## Lotes [/lotes]

### Qué muestra la pantalla Lotes
La tabla "Todos los lotes" con lote, zona, superficie, distancia entre surcos y estado: "Libre", "En uso", "Sembrado" o "Cosechado". "Filtrar" permite elegir por estado y "Ordenar" por "Número de lote", "Mayor superficie" o "Menor superficie". Botones: "Asignar lote", "Nuevo lote" y "Modificar" en cada fila.

### Crear un lote nuevo (cargar, agregar o dar de alta un lote)
1. En la barra de navegación, hacé clic en "Lotes".
2. Hacé clic en "Nuevo lote".
3. Completá "Número de lote", "Zona", "Superficie (ha)" y "Distancia entre surcos".
4. Hacé clic en "Crear lote".
El lote queda en estado "Libre". El número tiene que ser entero, mayor a 0 y no estar repetido (si no, avisa "Ya existe el Lote …"); la superficie y la distancia tienen que ser mayores a 0.

### Modificar un lote
En "Lotes", hacé clic en "Modificar" en la fila del lote, cambiá "Zona", "Superficie (ha)" o "Distancia entre surcos" y hacé clic en "Guardar cambios". El número de lote no se puede cambiar.

### Eliminar un lote o cambiar su estado a mano
No hay una opción para eliminar lotes en la pantalla. El estado tampoco se cambia a mano: cambia solo al asignar el lote (En uso), registrar la siembra (Sembrado), registrar la cosecha (Cosechado), agregar un segundo cultivo (En uso) y cerrar la campaña (Libre).

## Asignar lote [/lotes/asignar]

### Crear una campaña asignando un lote
1. En "Lotes", hacé clic en "Asignar lote".
2. Marcá un lote en "Lotes libres" y hacé clic en "Seleccionar".
3. Marcá una semilla en "Semillas disponibles" y hacé clic en "Seleccionar". Solo aparecen semillas activas con stock.
4. Revisá "Fecha de inicio de campaña" y "Temporada" (se completa con la estación de la semilla y se puede cambiar).
5. Hacé clic en "Confirmar asignación" y después en "Sí, asignar".
La campaña queda creada y el lote pasa a "En uso". Ya se puede registrar la siembra.

### Por qué no aparece un lote o una semilla al asignar
Solo aparecen los lotes en estado "Libre": si dice "No hay lotes libres", cerrá una campaña o creá un lote nuevo en "Lotes". Solo aparecen las semillas activas con stock: si dice "No hay semillas con stock", cargá stock en "Catálogos", "Semillas".

## Registrar siembra [/siembras]

### Pasos para registrar una siembra
1. En "Siembras", marcá el lote en "Lotes en uso" y hacé clic en "Seleccionar".
2. Completá "Cantidad de semillas … sembradas (t)" (toneladas enteras) y "Fecha de finalización de siembra".
3. Si hubo problemas, "Añadir percance" y completá descripción, fecha y costo. "Eliminar" lo quita.
4. Hacé clic en "Revisar siembra", controlá el resumen, hacé clic en "Registrar siembra" y en "Sí, registrar". "Modificar" vuelve a los datos.
Se descuenta el stock de la semilla y el lote pasa a "Sembrado".

### Agregar stock de semilla durante la siembra
En el paso "Cargar siembra", en el panel "Stock de …", hacé clic en "Modificar stock", ingresá "Toneladas a agregar" (enteras) y hacé clic en "Agregar". Se guarda al registrar la siembra.

### Por qué no puedo registrar la siembra
Si dice "No hay lotes en uso", primero asigná un lote. Si dice "Supera el stock disponible", bajá la cantidad o sumá stock con "Modificar stock". La cantidad tiene que ser un número entero de toneladas mayor a 0. Cada percance necesita descripción, fecha y un costo de 0 o más.

## Percance general [/siembras/percance]

### Registrar un percance en varios lotes (granizo, inundación)
1. En "Siembras", hacé clic en "Percance general".
2. Marcá los lotes afectados, o "Elegir todos", y hacé clic en "Seleccionar (…)".
3. Completá "Descripción", "Fecha del percance" y "Costo total ($)". El costo se reparte según la superficie y podés corregir el monto de cada lote.
4. Hacé clic en "Siguiente", en "Registrar percance" y en "Sí, registrar".
Los lotes siguen "Sembrado" y el costo cuenta en el rinde. Solo aparecen lotes sembrados de campañas abiertas.

## Registrar labor [/labores]

### Pasos para registrar una labor de mantenimiento
1. En "Labores", marcá el lote en "Lotes sembrados" y hacé clic en "Seleccionar".
2. Marcá la labor y hacé clic en "Seleccionar". Si no existe, creala con "Nueva labor": completá "Labor" y "Costo base ($)" y hacé clic en "Guardar".
3. En "Insumos utilizados", elegí cada insumo y su cantidad. "Agregar insumo" suma una fila y "Quitar" la saca. Completá "Fecha de la labor". Sin insumos, se registra solo el costo base.
4. Hacé clic en "Siguiente", en "Registrar labor" y en "Sí, registrar".
Se descuenta el stock de cada insumo y el costo se imputa a la campaña.

### Por qué no puedo registrar la labor
Solo aparecen lotes en estado "Sembrado" con campaña abierta. "Stock insuficiente de …": bajá la cantidad o cargá stock en "Catálogos", "Insumos". Las cantidades son enteras y mayores a 0. Los insumos sin stock no se pueden elegir. Las labores dadas de baja no aparecen.

## Registrar cosecha [/cosechas]

### Pasos para registrar una cosecha
1. En "Cosechas", marcá el lote en "Lotes para cosechar" y hacé clic en "Seleccionar".
2. Completá "Cantidad cosechada por hectárea (kg/ha)", "Humedad obtenida (%)" y "Fecha de cosecha". El panel "Rinde total" calcula los kilos del lote.
3. Hacé clic en "Siguiente", en "Registrar cosecha" y en "Sí, registrar".
El lote pasa a "Cosechado".

### Por qué no puedo registrar la cosecha
"No hay lotes en condiciones de cosecha": solo se cosechan lotes "Sembrado" de campañas abiertas. Los kilos por hectárea tienen que ser mayores a 0 y la humedad estar entre 0 y 100.

## Cerrar campaña [/campanias]

### Pasos para cerrar una campaña
1. En "Campañas", marcá la campaña en "Campañas abiertas" y hacé clic en "Seleccionar".
2. Revisá "Lotes de la campaña" y hacé clic en "Cerrar campaña".
3. Confirmá con "Sí, cerrar". No se puede deshacer.
La campaña pasa a "Cerrada", los lotes vuelven a "Libre" y los resultados se ven en "Rinde".

### Por qué no puedo cerrar la campaña
Todos los lotes tienen que estar en "Cosechado". Si aparece "Hay lotes sin cosechar", registrá primero la cosecha de los lotes pendientes.

### Agregar un segundo cultivo (doble cultivo)
En "Campañas", seleccioná la campaña y, en la fila de un lote cosechado, hacé clic en "Agregar segundo cultivo". Elegí la semilla (activa, con stock y distinta a la primera) y hacé clic en "Agregar cultivo". El lote vuelve a "En uso" y ya se puede registrar la siembra. Cada lote admite hasta dos cultivos por campaña.

### Eliminar una campaña
En la pantalla "Campañas" no hay una opción para eliminar campañas: solo cerrarlas.

## Insumos: tablero de stock [/insumos]

### Qué muestra el tablero de stock
Indicadores "Valor total en stock", "Semillas activas", "Insumos" y "Para reponer", y las tablas "Semillas" e "Insumos" con situación, stock, precio, valor, usado, usos, promedio y para cuántos usos alcanza. "Filtrar" muestra solo activos o todos; "Ordenar" permite "Lo más urgente primero", "Mayor valor en stock" o "Nombre". "Editar semillas" y "Editar insumos" llevan a Catálogos.

### Qué significan Sin stock, Stock bajo, Con stock y Sin consumo
"Sin stock": no queda nada. "Stock bajo": según el consumo promedio alcanza para menos de 2 siembras o labores. "Con stock": alcanza para 2 o más. "Sin consumo": todavía no se usó y no se puede estimar. "Para reponer" reúne lo que está sin stock o con stock bajo.

## Rinde [/rinde]

### Qué muestra el tablero de rinde
Los resultados de las campañas cerradas. Arriba se elige "Lote", "Campaña", "Cultivo" y "Comparar con" (la campaña anterior o el promedio del mismo lote). Muestra seis indicadores (producción, rinde, inversión por hectárea, costo por tonelada, multiplicación de semilla y kilos por cada $1.000), el reparto "En qué se fue la plata", gráficos, "Histórico de campañas" y "Lotes de …". Hacer clic en una columna de un gráfico o en una fila del histórico elige esa campaña.

### Mensajes del tablero de rinde
"Todavía no hay campañas cerradas": primero hay que cerrar una campaña. "No hay campañas para ese filtro": cambiá el lote o el cultivo. "Es la primera campaña cerrada de este lote": no hay contra qué comparar. No se muestran ingresos ni ganancias porque el sistema no registra precios de venta. No hay opción para exportar.

## Catálogo de semillas [/catalogos/semillas]

### Crear o modificar una semilla y cargar su stock
En "Catálogos", "Semillas", hacé clic en "Nueva semilla" (o "Modificar" en una fila). Completá "Nombre", "Estación" (Verano o Invierno), "Stock (t)" en toneladas enteras y "Precio por tonelada ($)". Guardá con "Crear semilla" o "Guardar cambios". Solo las semillas activas con stock se ofrecen al asignar un lote.

### Dar de baja o reactivar una semilla
En la fila, "Dar de baja" y después "Sí, dar de baja": pasa a "Inactiva" y deja de ofrecerse; no se borra. Para reactivarla, "Filtrar", "Inactivas" y "Reactivar" (sin confirmación).

## Catálogo de insumos [/catalogos/insumos]

### Crear o modificar un insumo y cargar su stock
En "Catálogos", "Insumos", hacé clic en "Nuevo insumo" (o "Modificar" en una fila). Completá "Nombre", "Stock" (entero, 0 o más) y "Precio unitario ($)". Guardá con "Crear insumo" o "Guardar cambios". Para cambiar el precio o sumar stock, usá "Modificar".

### Dar de baja o reactivar un insumo
En la fila, "Dar de baja" y después "Sí, dar de baja": pasa a "Inactiva" y deja de estar disponible; no se elimina. Para reactivarlo, "Filtrar", "Inactivos" y "Reactivar" (sin confirmación).

## Catálogo de labores de mantenimiento [/catalogos/labores]

### Crear o modificar una labor
En "Catálogos", "Labores de mantenimiento", hacé clic en "Nueva labor" (o "Modificar" en una fila). Completá "Labor" y "Costo base ($)" (0 o más) y guardá con "Crear labor" o "Guardar cambios". El costo base se suma al de los insumos. También se puede crear una desde "Labores", con "Nueva labor".

### Dar de baja o reactivar una labor
En la fila, "Dar de baja" y después "Sí, dar de baja": pasa a "Inactiva" y deja de ofrecerse al registrar labores. Para reactivarla, "Filtrar", "Inactivas" y "Reactivar" (sin confirmación).

## Usuarios [/usuarios]

### Crear un usuario y asignar su rol
Solo el rol Admin ve esta pantalla. En "Usuarios", completá "Nombre completo", "Correo electrónico", "Contraseña inicial" y "Rol", y hacé clic en "Crear usuario". Si el correo ya existe aparece "El email ya está registrado".

### Reiniciar una contraseña
Solo el rol Admin. En la tabla "Usuarios", hacé clic en "Reiniciar contraseña" en la fila, completá "Nueva contraseña" y "Confirmar contraseña", y hacé clic en "Reiniciar contraseña". Si olvidaste tu contraseña o querés cambiarla, pedíselo al administrador: no hay una pantalla para cambiar la propia.

### Modificar o eliminar un usuario
En la pantalla "Usuarios" no hay opciones para modificar ni eliminar cuentas existentes.
