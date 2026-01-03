// Contenido del módulo Bootstrap 5 - MEJORADO PARA PRINCIPIANTES
export const bootstrapModule = {
  1: {
    titulo: '¿Qué es Bootstrap? + Instalación',
    teoria: `¡Bienvenido a Bootstrap! Es hora de hacer tus páginas bonitas RÁPIDO.

🤔 ¿QUÉ ES BOOTSTRAP?

Bootstrap es una "caja de herramientas" de CSS y JavaScript ya creados.
En vez de escribir TODO el CSS desde cero, usas clases que ya existen.

Ejemplo SIN Bootstrap:
\`\`\`css
.mi-boton {
    background: #007bff;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}
\`\`\`

Con Bootstrap, solo escribes:
\`\`\`html
<button class="btn btn-primary">Mi Botón</button>
\`\`\`

¡Ya está! Bootstrap tiene el CSS listo.

🚀 ¿POR QUÉ USARLO?

1. AHORRO DE TIEMPO - No escribes CSS básico
2. RESPONSIVE - Se adapta a móvil/tablet/desktop automáticamente
3. CONSISTENCIA - Todo se ve profesional y uniforme
4. COMPATIBILIDAD - Funciona en todos los navegadores

📦 CÓMO INSTALAR BOOTSTRAP

La forma más fácil es usar el CDN (un link que trae Bootstrap de internet).

Copia esto en tu <head>:
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">

Y esto antes de cerrar </body>:
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>

💡 El CSS es obligatorio. El JS es opcional (solo para componentes interactivos).`,

    ejemplos: `<!-- 📄 PLANTILLA BÁSICA CON BOOTSTRAP -->

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mi Primera Página con Bootstrap</title>
    
    <!-- 👇 CSS DE BOOTSTRAP (obligatorio) -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
    
    <!-- 📦 Este div usa el contenedor de Bootstrap -->
    <div class="container">
        <h1 class="text-primary">¡Hola Bootstrap!</h1>
        <p class="lead">Este texto tiene una clase de Bootstrap.</p>
        
        <button class="btn btn-primary">Botón Primario</button>
        <button class="btn btn-success">Botón Verde</button>
        <button class="btn btn-danger">Botón Rojo</button>
    </div>
    
    <!-- 👇 JAVASCRIPT DE BOOTSTRAP (opcional, para componentes interactivos) -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>

<!-- 
🎯 EXPLICACIÓN DE LAS CLASES:

container    → Centra el contenido con márgenes automáticos
text-primary → Color del texto azul (color principal de Bootstrap)
lead         → Texto de párrafo más grande/destacado
btn          → Clase base para botones
btn-primary  → Botón azul
btn-success  → Botón verde
btn-danger   → Botón rojo
-->`,

    ejercicio: `<!-- 🎯 EJERCICIO: Crea tu primera página con Bootstrap

1. Copia la plantilla básica de arriba
2. Guárdala como index.html
3. Ábrela en el navegador
4. Modifica lo siguiente:

   a) Cambia el título de la página
   b) Agrega un párrafo más con la clase "text-muted"
   c) Agrega un botón amarillo (btn-warning)
   d) Agrega un botón con borde (btn-outline-primary)

5. Refresca el navegador y observa los resultados

PISTA para d): Los botones "outline" solo tienen borde:
btn-outline-primary, btn-outline-success, etc.
-->`,

    solucion: `<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mi Portafolio</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
    
    <div class="container mt-5">
        <h1 class="text-primary">¡Bienvenido a mi página!</h1>
        <p class="lead">Esta es mi primera página usando Bootstrap 5.</p>
        <p class="text-muted">Este texto tiene un color más suave.</p>
        
        <div class="mt-3">
            <button class="btn btn-primary">Primario</button>
            <button class="btn btn-success">Verde</button>
            <button class="btn btn-danger">Rojo</button>
            <button class="btn btn-warning">Amarillo</button>
            <button class="btn btn-outline-primary">Solo Borde</button>
        </div>
    </div>
    
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>

<!-- 
💡 NOTA: mt-5 significa "margin-top: 5"
   Verás más de esto en la lección de utilidades
-->`,

    buenasPracticas: [
      'Siempre incluye el meta viewport para responsive',
      'El CSS de Bootstrap va en el <head>',
      'El JavaScript de Bootstrap va antes de </body>',
      'Usa la versión más reciente del CDN',
      'No olvides class="container" para centrar contenido',
      'Combina múltiples clases: class="btn btn-primary"'
    ]
  },

  2: {
    titulo: 'Sistema de Grid (Columnas)',
    teoria: `El GRID es la base de los layouts en Bootstrap.

📐 CONCEPTO BÁSICO

Bootstrap divide la pantalla en 12 COLUMNAS invisibles.
Tú decides cuántas columnas ocupa cada elemento.

12 columnas = 100% del ancho
6 columnas = 50% del ancho
4 columnas = 33% del ancho
3 columnas = 25% del ancho

📦 ESTRUCTURA OBLIGATORIA

container → row → col

<div class="container">    ← Contenedor
    <div class="row">       ← Fila (siempre necesaria)
        <div class="col-6">A</div>  ← Columna (50%)
        <div class="col-6">B</div>  ← Columna (50%)
    </div>
</div>

📱 BREAKPOINTS (puntos de quiebre)

Bootstrap cambia el diseño según el tamaño de pantalla:

col-     → Todos los tamaños
col-sm-  → ≥576px (móvil grande)
col-md-  → ≥768px (tablet)
col-lg-  → ≥992px (desktop)
col-xl-  → ≥1200px (desktop grande)
col-xxl- → ≥1400px (pantallas muy grandes)

EJEMPLO RESPONSIVE:
col-12 col-md-6 col-lg-4

Esto significa:
• En móvil: 12 columnas (100%)
• En tablet: 6 columnas (50%)
• En desktop: 4 columnas (33%)

🎯 PENSAR "MOBILE FIRST"
Bootstrap diseña primero para móvil.
Las clases sin prefijo (col-12) aplican desde móvil hacia arriba.`,

    ejemplos: `<!-- 📐 DOS COLUMNAS IGUALES -->

<div class="container">
    <div class="row">
        <div class="col-md-6">
            Columna izquierda (50% en tablet+)
        </div>
        <div class="col-md-6">
            Columna derecha (50% en tablet+)
        </div>
    </div>
</div>

<!-- 📐 TRES COLUMNAS -->

<div class="container">
    <div class="row">
        <div class="col-12 col-md-4">Una</div>
        <div class="col-12 col-md-4">Dos</div>
        <div class="col-12 col-md-4">Tres</div>
    </div>
</div>
<!-- 
En móvil: cada una ocupa 100% (una debajo de otra)
En tablet+: cada una ocupa 33% (las 3 en una fila)
-->

<!-- 📐 LAYOUT RESPONSIVE COMPLETO -->

<div class="container">
    <div class="row">
        <!-- En móvil: 100% | En tablet: 50% | En desktop: 25% -->
        <div class="col-12 col-md-6 col-lg-3">
            <div class="card">Producto 1</div>
        </div>
        <div class="col-12 col-md-6 col-lg-3">
            <div class="card">Producto 2</div>
        </div>
        <div class="col-12 col-md-6 col-lg-3">
            <div class="card">Producto 3</div>
        </div>
        <div class="col-12 col-md-6 col-lg-3">
            <div class="card">Producto 4</div>
        </div>
    </div>
</div>

<!-- 📐 ESPACIO ENTRE COLUMNAS (gap) -->

<div class="container">
    <div class="row g-4">  <!-- g-4 = gap de tamaño 4 -->
        <div class="col-6">Con espacio</div>
        <div class="col-6">Con espacio</div>
    </div>
</div>

<!-- g-0 a g-5 | gx-* (horizontal) | gy-* (vertical) -->

<!-- 📐 CENTRAR UNA COLUMNA -->

<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-6">
            Esta columna está centrada
        </div>
    </div>
</div>`,

    ejercicio: `<!-- 🎯 EJERCICIO: Crear galería de productos responsive

Crea una galería que muestre:
- 1 producto por fila en MÓVIL
- 2 productos por fila en TABLET
- 4 productos por fila en DESKTOP

Cada producto debe ser una tarjeta con:
- Imagen (usa placeholder: https://via.placeholder.com/300x200)
- Nombre del producto
- Precio
- Botón "Comprar"

PISTA: Usa las clases col-12 col-md-6 col-lg-3
-->

<div class="container py-4">
    <h2 class="text-center mb-4">Nuestros Productos</h2>
    
    <div class="row g-4">
        
        <!-- Producto 1 (completa los demás) -->
        <div class="">  <!-- ← Agrega las clases de columna -->
            <div class="card h-100">
                <img src="https://via.placeholder.com/300x200" class="card-img-top" alt="Producto">
                <div class="card-body">
                    <h5 class="card-title">Producto 1</h5>
                    <p class="card-text text-success fw-bold">$99.00</p>
                    <button class="btn btn-primary w-100">Comprar</button>
                </div>
            </div>
        </div>
        
        <!-- Producto 2, 3 y 4 aquí... -->
        
    </div>
</div>`,

    solucion: `<div class="container py-4">
    <h2 class="text-center mb-4">Nuestros Productos</h2>
    
    <div class="row g-4">
        
        <!-- Producto 1 -->
        <div class="col-12 col-md-6 col-lg-3">
            <div class="card h-100">
                <img src="https://via.placeholder.com/300x200" class="card-img-top" alt="Laptop">
                <div class="card-body">
                    <h5 class="card-title">Laptop Pro</h5>
                    <p class="card-text text-success fw-bold">$1,299.00</p>
                    <button class="btn btn-primary w-100">Comprar</button>
                </div>
            </div>
        </div>
        
        <!-- Producto 2 -->
        <div class="col-12 col-md-6 col-lg-3">
            <div class="card h-100">
                <img src="https://via.placeholder.com/300x200" class="card-img-top" alt="Mouse">
                <div class="card-body">
                    <h5 class="card-title">Mouse Gaming</h5>
                    <p class="card-text text-success fw-bold">$59.00</p>
                    <button class="btn btn-primary w-100">Comprar</button>
                </div>
            </div>
        </div>
        
        <!-- Producto 3 -->
        <div class="col-12 col-md-6 col-lg-3">
            <div class="card h-100">
                <img src="https://via.placeholder.com/300x200" class="card-img-top" alt="Teclado">
                <div class="card-body">
                    <h5 class="card-title">Teclado Mecánico</h5>
                    <p class="card-text text-success fw-bold">$129.00</p>
                    <button class="btn btn-primary w-100">Comprar</button>
                </div>
            </div>
        </div>
        
        <!-- Producto 4 -->
        <div class="col-12 col-md-6 col-lg-3">
            <div class="card h-100">
                <img src="https://via.placeholder.com/300x200" class="card-img-top" alt="Auriculares">
                <div class="card-body">
                    <h5 class="card-title">Auriculares Pro</h5>
                    <p class="card-text text-success fw-bold">$199.00</p>
                    <button class="btn btn-primary w-100">Comprar</button>
                </div>
            </div>
        </div>
        
    </div>
</div>

<!-- 
📋 EXPLICACIÓN:

col-12     → 100% del ancho (1 por fila en móvil)
col-md-6   → 50% del ancho (2 por fila en tablet)
col-lg-3   → 25% del ancho (4 por fila en desktop)

g-4        → Espacio entre las tarjetas
h-100      → Altura 100% (todas las cards igual altura)
w-100      → Ancho 100% (botón ocupa todo el ancho)
fw-bold    → Font weight bold (negrita)
-->`,

    buenasPracticas: [
      'Siempre usa container > row > col',
      'Diseña pensando primero en móvil (col-12 primero)',
      'Usa g-* para espaciado entre columnas',
      'h-100 hace que las cards tengan la misma altura',
      'Las 12 columnas deben sumar en cada fila',
      'justify-content-center centra las columnas'
    ]
  },

  3: {
    titulo: 'Componentes: Cards, Buttons, Alerts',
    teoria: `Bootstrap incluye COMPONENTES listos para usar.

🎴 CARDS (Tarjetas)
Las cards son contenedores versátiles para mostrar contenido.

Estructura básica:
<div class="card">
    <img src="..." class="card-img-top">  ← Imagen arriba
    <div class="card-body">                ← Cuerpo
        <h5 class="card-title">Título</h5>
        <p class="card-text">Texto</p>
        <a href="#" class="btn btn-primary">Acción</a>
    </div>
</div>

🔘 BUTTONS (Botones)
Clases: btn + btn-{color}

Colores disponibles:
btn-primary   → Azul (acción principal)
btn-secondary → Gris
btn-success   → Verde
btn-danger    → Rojo
btn-warning   → Amarillo
btn-info      → Celeste
btn-light     → Blanco
btn-dark      → Negro

Variantes outline (solo borde):
btn-outline-primary, btn-outline-success, etc.

Tamaños:
btn-lg → Grande
btn-sm → Pequeño

⚠️ ALERTS (Alertas)
Mensajes de notificación para el usuario.

<div class="alert alert-success">¡Éxito!</div>
<div class="alert alert-danger">Error</div>
<div class="alert alert-warning">Advertencia</div>
<div class="alert alert-info">Información</div>

📝 BADGES (Etiquetas)
Pequeñas etiquetas para destacar información.

<span class="badge bg-primary">Nuevo</span>
<span class="badge bg-danger">5</span>`,

    ejemplos: `<!-- 🎴 CARD COMPLETA -->

<div class="card" style="width: 18rem;">
    <img src="producto.jpg" class="card-img-top" alt="Producto">
    <div class="card-body">
        <h5 class="card-title">Auriculares Bluetooth</h5>
        <p class="card-text">Auriculares inalámbricos con cancelación de ruido.</p>
        <p class="h4 text-success">$79.99</p>
    </div>
    <div class="card-footer">
        <button class="btn btn-primary w-100">Añadir al carrito</button>
    </div>
</div>

<!-- 🎴 CARD HORIZONTAL -->

<div class="card mb-3" style="max-width: 540px;">
    <div class="row g-0">
        <div class="col-md-4">
            <img src="imagen.jpg" class="img-fluid rounded-start" alt="...">
        </div>
        <div class="col-md-8">
            <div class="card-body">
                <h5 class="card-title">Título</h5>
                <p class="card-text">Descripción del contenido.</p>
            </div>
        </div>
    </div>
</div>

<!-- 🔘 GRUPO DE BOTONES -->

<div class="btn-group" role="group">
    <button class="btn btn-primary">Izquierda</button>
    <button class="btn btn-primary">Centro</button>
    <button class="btn btn-primary">Derecha</button>
</div>

<!-- 🔘 BOTONES DE DIFERENTES TAMAÑOS -->

<button class="btn btn-primary btn-sm">Pequeño</button>
<button class="btn btn-primary">Normal</button>
<button class="btn btn-primary btn-lg">Grande</button>

<!-- ⚠️ ALERT DISMISSIBLE (con X para cerrar) -->

<div class="alert alert-success alert-dismissible fade show" role="alert">
    <strong>¡Éxito!</strong> Tu pedido ha sido procesado.
    <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
</div>

<!-- ⚠️ ALERT CON ICONO Y TEXTO -->

<div class="alert alert-danger d-flex align-items-center" role="alert">
    <span class="me-2">⚠️</span>
    <div>Ha ocurrido un error. Por favor intenta de nuevo.</div>
</div>

<!-- 📝 BADGES EN DIFERENTES LUGARES -->

<h3>Notificaciones <span class="badge bg-danger">5</span></h3>

<button class="btn btn-primary">
    Carrito <span class="badge bg-light text-dark">3</span>
</button>`,

    ejercicio: `<!-- 🎯 EJERCICIO: Crear tarjeta de perfil de usuario

Crea una card que muestre:
- Imagen de perfil circular
- Nombre del usuario
- Título/profesión
- Badge de estado (Activo/Inactivo)
- Estadísticas (posts, seguidores, siguiendo)
- Botón "Seguir" y botón "Mensaje"

PISTAS:
- rounded-circle hace la imagen circular
- d-flex, justify-content-center para centrar
- row y col para las estadísticas
- btn-outline-* para el botón secundario
-->

<div class="card text-center" style="width: 20rem;">
    <div class="card-body">
        
        <!-- Imagen de perfil (circular) -->
        <!-- Tu código aquí -->
        
        <!-- Nombre y título -->
        <!-- Tu código aquí -->
        
        <!-- Badge de estado -->
        <!-- Tu código aquí -->
        
        <!-- Estadísticas en 3 columnas -->
        <!-- Tu código aquí -->
        
        <!-- Botones -->
        <!-- Tu código aquí -->
        
    </div>
</div>`,

    solucion: `<div class="card text-center" style="width: 20rem;">
    <div class="card-body">
        
        <!-- Imagen de perfil circular -->
        <img src="https://via.placeholder.com/100" 
             class="rounded-circle mb-3" 
             alt="Avatar"
             style="width: 100px; height: 100px; object-fit: cover;">
        
        <!-- Nombre y título -->
        <h5 class="card-title mb-0">María García</h5>
        <p class="text-muted">Desarrolladora Frontend</p>
        
        <!-- Badge de estado -->
        <span class="badge bg-success mb-3">
            🟢 Activo
        </span>
        
        <!-- Estadísticas -->
        <div class="row text-center mb-3">
            <div class="col">
                <h5 class="mb-0">152</h5>
                <small class="text-muted">Posts</small>
            </div>
            <div class="col">
                <h5 class="mb-0">2.4k</h5>
                <small class="text-muted">Seguidores</small>
            </div>
            <div class="col">
                <h5 class="mb-0">180</h5>
                <small class="text-muted">Siguiendo</small>
            </div>
        </div>
        
        <!-- Botones -->
        <div class="d-grid gap-2">
            <button class="btn btn-primary">
                ➕ Seguir
            </button>
            <button class="btn btn-outline-secondary">
                ✉️ Mensaje
            </button>
        </div>
        
    </div>
</div>

<!-- 
📋 CLASES USADAS:

rounded-circle  → Imagen circular
mb-3            → Margin bottom nivel 3
text-muted      → Texto gris
d-grid          → Display grid (botones apilados)
gap-2           → Espacio entre botones
-->`,

    buenasPracticas: [
      'card-body es obligatorio para el padding interno',
      'Usa card-footer para acciones/botones',
      'h-100 iguala la altura de múltiples cards',
      'w-100 hace que botones ocupen todo el ancho',
      'd-grid gap-2 para botones apilados',
      'Combina badges con otros elementos'
    ]
  },

  4: {
    titulo: 'Utilidades: Espaciado, Colores, Flexbox',
    teoria: `Las UTILIDADES son clases pequeñas para ajustes rápidos.

📐 ESPACIADO (Margin y Padding)

Formato: {propiedad}{lado}-{tamaño}

Propiedad:
m = margin
p = padding

Lado:
t = top (arriba)
b = bottom (abajo)
s = start (izquierda)
e = end (derecha)
x = horizontal (izquierda + derecha)
y = vertical (arriba + abajo)
(nada) = todos los lados

Tamaño: 0, 1, 2, 3, 4, 5, auto

EJEMPLOS:
mt-3  → margin-top: 1rem
px-4  → padding-left y padding-right: 1.5rem
mb-0  → margin-bottom: 0
p-5   → padding en todos los lados: 3rem

🎨 COLORES

Texto: text-{color}
Fondo: bg-{color}

Colores: primary, secondary, success, danger, warning, info, light, dark, white, muted

text-primary  → Texto azul
bg-dark       → Fondo negro
text-white    → Texto blanco

📝 TEXTO

text-center   → Centrar texto
text-start    → Alinear izquierda
text-end      → Alinear derecha
fw-bold       → Negrita
fw-light      → Delgada
fs-1 a fs-6   → Tamaño de fuente (1 = más grande)
text-uppercase → MAYÚSCULAS

📦 DISPLAY Y FLEXBOX

d-none        → Ocultar
d-block       → Mostrar como bloque
d-flex        → Activar flexbox
d-grid        → Activar grid

justify-content-center  → Centrar horizontalmente
align-items-center      → Centrar verticalmente
flex-column             → Dirección vertical`,

    ejemplos: `<!-- 📐 ESPACIADO -->

<div class="p-4 mb-3 bg-light">
    Padding 4, margin-bottom 3, fondo gris
</div>

<div class="mt-5 mx-auto" style="width: 300px;">
    Margin top 5, centrado horizontalmente
</div>

<!-- 🎨 COLORES -->

<p class="text-primary">Texto azul primario</p>
<p class="text-success">Texto verde éxito</p>
<p class="text-danger">Texto rojo peligro</p>
<p class="text-muted">Texto gris apagado</p>

<div class="bg-dark text-white p-3">
    Fondo negro, texto blanco
</div>

<div class="bg-warning text-dark p-3">
    Fondo amarillo, texto negro
</div>

<!-- 📝 TEXTO -->

<h1 class="text-center">Título centrado</h1>
<p class="fw-bold">Texto en negrita</p>
<p class="fs-4">Texto más grande</p>
<p class="text-uppercase text-muted">mayúsculas gris</p>

<!-- 📦 FLEXBOX -->

<!-- Centrar horizontal y verticalmente -->
<div class="d-flex justify-content-center align-items-center" style="height: 200px;">
    <p>Estoy centrado</p>
</div>

<!-- Espacio entre elementos -->
<div class="d-flex justify-content-between">
    <span>Izquierda</span>
    <span>Derecha</span>
</div>

<!-- Columna en vez de fila -->
<div class="d-flex flex-column gap-2">
    <button class="btn btn-primary">Uno</button>
    <button class="btn btn-primary">Dos</button>
    <button class="btn btn-primary">Tres</button>
</div>

<!-- 📱 CLASES RESPONSIVE -->

<!-- Solo visible en tablet+ -->
<div class="d-none d-md-block">
    Solo se ve en pantallas medianas o más grandes
</div>

<!-- Solo visible en móvil -->
<div class="d-block d-md-none">
    Solo se ve en pantallas pequeñas
</div>

<!-- Espaciado responsive -->
<div class="p-2 p-md-4 p-lg-5">
    Padding: 2 en móvil, 4 en tablet, 5 en desktop
</div>`,

    ejercicio: `<!-- 🎯 EJERCICIO: Crear un footer responsive

Requisitos:
- Fondo oscuro (bg-dark) con texto claro (text-light)
- Padding vertical de 5 (py-5)
- 3 secciones: Logo, Enlaces, Redes sociales
- En móvil: todo centrado y apilado
- En desktop: las 3 secciones en una fila

PISTAS:
- text-center text-md-start para alinear responsive
- d-flex justify-content-center justify-content-md-end
- list-unstyled quita los bullets de las listas
-->

<footer>
    <div class="container">
        <div class="row">
            
            <!-- Logo y descripción -->
            <div>
                <!-- Tu código aquí -->
            </div>
            
            <!-- Enlaces -->
            <div>
                <!-- Tu código aquí -->
            </div>
            
            <!-- Redes sociales -->
            <div>
                <!-- Tu código aquí -->
            </div>
            
        </div>
        
        <!-- Línea de copyright -->
        <hr>
        <p>© 2024 Mi Empresa</p>
        
    </div>
</footer>`,

    solucion: `<footer class="bg-dark text-light py-5">
    <div class="container">
        <div class="row gy-4">
            
            <!-- Logo y descripción -->
            <div class="col-12 col-md-4 text-center text-md-start">
                <h4 class="fw-bold mb-3">
                    <span class="text-primary">Mi</span>Empresa
                </h4>
                <p class="text-secondary">
                    Soluciones tecnológicas para el mundo moderno.
                </p>
            </div>
            
            <!-- Enlaces -->
            <div class="col-12 col-md-4 text-center">
                <h6 class="text-uppercase fw-bold mb-3">Enlaces</h6>
                <ul class="list-unstyled">
                    <li class="mb-2">
                        <a href="#" class="text-secondary text-decoration-none">Inicio</a>
                    </li>
                    <li class="mb-2">
                        <a href="#" class="text-secondary text-decoration-none">Servicios</a>
                    </li>
                    <li class="mb-2">
                        <a href="#" class="text-secondary text-decoration-none">Contacto</a>
                    </li>
                </ul>
            </div>
            
            <!-- Redes sociales -->
            <div class="col-12 col-md-4 text-center text-md-end">
                <h6 class="text-uppercase fw-bold mb-3">Síguenos</h6>
                <div class="d-flex justify-content-center justify-content-md-end gap-3">
                    <a href="#" class="text-light fs-4">📘</a>
                    <a href="#" class="text-light fs-4">🐦</a>
                    <a href="#" class="text-light fs-4">📸</a>
                    <a href="#" class="text-light fs-4">💼</a>
                </div>
            </div>
            
        </div>
        
        <hr class="my-4 border-secondary">
        
        <p class="text-center text-secondary mb-0">
            © 2024 MiEmpresa. Todos los derechos reservados.
        </p>
        
    </div>
</footer>

<!-- 
📋 UTILIDADES USADAS:

py-5            → Padding vertical grande
gy-4            → Gap vertical entre columnas
text-center text-md-start → Centrado en móvil, izquierda en tablet+
text-uppercase  → Texto en mayúsculas
text-decoration-none → Sin subrayado en links
list-unstyled   → Lista sin bullets
gap-3           → Espacio entre iconos
fs-4            → Font-size nivel 4
-->`,

    buenasPracticas: [
      'Memoriza m=margin, p=padding, t=top, b=bottom',
      'Los tamaños van de 0 a 5 (0, 0.25rem, 0.5rem, 1rem, 1.5rem, 3rem)',
      'Usa d-none d-md-block para ocultar/mostrar en responsive',
      'text-muted es genial para texto secundario',
      'Combina justify-content y align-items para centrar',
      'Las clases -md-*, -lg-* solo aplican desde ese breakpoint'
    ]
  }
};
