// Contenido del módulo Manipulación DOM - MEJORADO PARA PRINCIPIANTES
export const domManipulation = {
  1: {
    titulo: 'Introducción al DOM',
    teoria: `¡Bienvenido al DOM! Aquí es donde JavaScript y HTML se encuentran.

 ¿QUÉ ES EL DOM?

DOM significa "Document Object Model" (Modelo de Objeto del Documento).

Imagina que tu página HTML es como un árbol familiar:
• El \<html\> es el abuelo
• El \<body\> es el padre
• Los \<div\>, \<p\>, \<h1\> son los hijos
• Y así sucesivamente...

El DOM es la forma en que JavaScript "ve" este árbol.
Le permite encontrar, modificar, agregar y eliminar elementos HTML.

 EJEMPLO VISUAL

Tu HTML:
\<body\>
    \<h1\>Título\</h1\>
    \<p\>Párrafo\</p\>
\</body\>

JavaScript lo ve como:
document
   body
        h1 → "Título"
        p → "Párrafo"

 ¿PARA QUÉ SIRVE?

• Cambiar el texto de un elemento
• Cambiar colores, tamaños, estilos
• Mostrar u ocultar elementos
• Agregar nuevos elementos
• Eliminar elementos
• Responder a clics y otros eventos

 ENCONTRAR ELEMENTOS

El primer paso SIEMPRE es encontrar el elemento que quieres modificar.

Para esto usamos:
document.querySelector("selector")   → Encuentra EL PRIMERO
document.querySelectorAll("selector") → Encuentra TODOS

Los selectores son IGUALES a los de CSS:
• "#miId"      → Elemento con id="miId"
• ".miClase"   → Elementos con class="miClase"
• "p"          → Todos los \<p\>
• "div.card"   → Divs con clase "card"`,

    ejemplos: `<!--  HTML de ejemplo -->
<!DOCTYPE html>
<html>
<body>
    <h1 id="titulo">Mi Página</h1>
    <p class="descripcion">Este es un párrafo.</p>
    <p class="descripcion">Este es otro párrafo.</p>
    <button id="miBoton">Haz clic</button>
    
    <script src="script.js"></script>
</body>
</html>

//  script.js

//  ENCONTRAR UN ELEMENTO (el primero que coincida)

const titulo = document.querySelector("#titulo");
console.log(titulo); // Muestra: <h1 id="titulo">Mi Página</h1>

const primerParrafo = document.querySelector(".descripcion");
console.log(primerParrafo); // Muestra el PRIMER párrafo

const boton = document.querySelector("#miBoton");
console.log(boton);

//  ENCONTRAR VARIOS ELEMENTOS (todos los que coincidan)

const todosLosParrafos = document.querySelectorAll(".descripcion");
console.log(todosLosParrafos); // NodeList con 2 párrafos
console.log(todosLosParrafos.length); // 2

//  RECORRER VARIOS ELEMENTOS

todosLosParrafos.forEach((parrafo, indice) => {
    console.log(\`Párrafo \${indice + 1}:\`, parrafo.textContent);
});
// Párrafo 1: Este es un párrafo.
// Párrafo 2: Este es otro párrafo.

//  VERIFICAR SI UN ELEMENTO EXISTE

const elementoQueNoExiste = document.querySelector("#noExiste");
console.log(elementoQueNoExiste); // null

//  Siempre verifica antes de usar
if (elementoQueNoExiste) {
    console.log("Encontrado");
} else {
    console.log("No existe"); // ← Este se ejecuta
}

//  TIP: Guarda los elementos en variables para no buscarlos cada vez
const elementos = {
    titulo: document.querySelector("#titulo"),
    parrafos: document.querySelectorAll(".descripcion"),
    boton: document.querySelector("#miBoton")
};`,

    ejercicio: `<!--  EJERCICIO: Practica seleccionar elementos

Imagina este HTML: -->

<nav id="navegacion">
    <a href="#" class="nav-link activo">Inicio</a>
    <a href="#" class="nav-link">Productos</a>
    <a href="#" class="nav-link">Contacto</a>
</nav>

<main>
    <h1 class="titulo-principal">Bienvenido</h1>
    <input type="text" id="buscar" placeholder="Buscar...">
    <button class="btn btn-primary">Buscar</button>
</main>

//  Tu tarea: Escribe los selectores correctos

// 1. Selecciona el nav por su ID
const nav = document.querySelector(""); // ← Completa

// 2. Selecciona TODOS los enlaces de navegación
const enlaces = document.querySelectorAll(""); // ← Completa

// 3. Selecciona el enlace que tiene la clase "activo"
const enlaceActivo = document.querySelector(""); // ← Completa

// 4. Selecciona el h1
const titulo = document.querySelector(""); // ← Completa

// 5. Selecciona el input de búsqueda
const inputBuscar = document.querySelector(""); // ← Completa

// 6. Selecciona el botón
const boton = document.querySelector(""); // ← Completa

// Muestra cuántos enlaces hay
console.log("Total de enlaces:", enlaces.length);`,

    solucion: `//  SOLUCIÓN

// 1. Nav por ID (usa #)
const nav = document.querySelector("#navegacion");

// 2. Todos los enlaces (clase .nav-link)
const enlaces = document.querySelectorAll(".nav-link");

// 3. Enlace activo (clase compuesta)
const enlaceActivo = document.querySelector(".nav-link.activo");

// 4. El h1 (por clase o etiqueta)
const titulo = document.querySelector(".titulo-principal");
// También funciona: document.querySelector("h1")

// 5. Input de búsqueda (por ID)
const inputBuscar = document.querySelector("#buscar");

// 6. Botón (por clase)
const boton = document.querySelector(".btn-primary");
// También funciona: document.querySelector("button")

// Verificar resultados
console.log("Nav:", nav);
console.log("Enlaces:", enlaces.length, "encontrados");
console.log("Enlace activo:", enlaceActivo.textContent);
console.log("Título:", titulo.textContent);
console.log("Input:", inputBuscar.placeholder);
console.log("Botón:", boton.textContent);

//  SELECTORES COMUNES:
// #id        → Elemento con ese ID
// .clase     → Elementos con esa clase
// etiqueta   → Elementos de esa etiqueta (p, div, h1)
// .clase1.clase2 → Elemento con AMBAS clases`,

    buenasPracticas: [
      'Siempre pon el <script> al final del <body>',
      'Usa IDs para elementos únicos, clases para grupos',
      'Guarda elementos en variables para reutilizarlos',
      'Verifica que el elemento existe antes de usarlo',
      'querySelector para uno, querySelectorAll para varios',
      'Los selectores son iguales a los de CSS'
    ]
  },

  2: {
    titulo: 'Modificar Contenido y Estilos',
    teoria: `Una vez que encuentras un elemento, puedes modificarlo.

 CAMBIAR TEXTO

.textContent → Cambia o lee el TEXTO de un elemento
Es la forma más segura de trabajar con texto.

Ejemplo:
titulo.textContent = "Nuevo título";
console.log(titulo.textContent); // "Nuevo título"

 También existe .innerHTML pero es MENOS SEGURO
porque puede ejecutar código malicioso si viene de usuarios.
Úsalo solo cuando necesites insertar HTML.

 CAMBIAR ESTILOS

Puedes cambiar cualquier estilo CSS usando:
elemento.style.propiedad = "valor";

¡IMPORTANTE! Las propiedades con guión se escriben en camelCase:
background-color → backgroundColor
font-size → fontSize
border-radius → borderRadius

Ejemplo:
titulo.style.color = "red";
titulo.style.fontSize = "24px";
titulo.style.backgroundColor = "#f0f0f0";

 TRABAJAR CON CLASES (mejor que estilos inline)

Es MEJOR agregar/quitar clases CSS que cambiar estilos directamente.

elemento.classList.add("clase")     → Agrega una clase
elemento.classList.remove("clase")  → Quita una clase
elemento.classList.toggle("clase")  → Agrega si no existe, quita si existe
elemento.classList.contains("clase") → ¿Tiene la clase? true/false

Ejemplo:
boton.classList.add("activo");
boton.classList.remove("desactivado");
boton.classList.toggle("visible"); // Alterna`,

    ejemplos: `//  HTML
// <h1 id="titulo">Texto original</h1>
// <button id="boton" class="btn">Click</button>

const titulo = document.querySelector("#titulo");
const boton = document.querySelector("#boton");

//  CAMBIAR TEXTO

// Leer el texto actual
console.log(titulo.textContent); // "Texto original"

// Cambiar el texto
titulo.textContent = "¡Nuevo título!";
console.log(titulo.textContent); // "¡Nuevo título!"

// Con variables
const nombreUsuario = "María";
titulo.textContent = \`Bienvenida, \${nombreUsuario}\`;

//  CAMBIAR ESTILOS DIRECTAMENTE

titulo.style.color = "#8b5cf6";        // Color morado
titulo.style.fontSize = "2rem";         // Tamaño
titulo.style.textAlign = "center";      // Centrar
titulo.style.padding = "1rem";          // Espaciado
titulo.style.backgroundColor = "rgba(139, 92, 246, 0.1)";

//  TRABAJAR CON CLASES (recomendado)

// Agregar clase
boton.classList.add("activo");
boton.classList.add("grande", "primario"); // Varias a la vez

// Quitar clase
boton.classList.remove("inactivo");

// Toggle: agrega si no existe, quita si existe
boton.classList.toggle("visible");

// Verificar si tiene una clase
if (boton.classList.contains("activo")) {
    console.log("El botón está activo");
}

// Ver todas las clases
console.log(boton.classList); // DOMTokenList ["btn", "activo", ...]

//  CAMBIAR ATRIBUTOS

const imagen = document.querySelector("img");
const enlace = document.querySelector("a");

// Cambiar src de imagen
imagen.src = "nueva-imagen.jpg";
imagen.alt = "Descripción de la imagen";

// Cambiar href de enlace
enlace.href = "https://google.com";
enlace.target = "_blank"; // Abrir en nueva pestaña

// Atributos personalizados (data-*)
boton.dataset.id = "123";
boton.dataset.accion = "comprar";
// Crea: <button data-id="123" data-accion="comprar">`,

    ejercicio: `<!--  EJERCICIO: Actualizar una tarjeta de producto -->

<div id="producto" class="card">
    <img src="placeholder.jpg" alt="Producto" id="imagen">
    <h3 id="nombre">Nombre del producto</h3>
    <p id="precio">$0.00</p>
    <span id="estado" class="badge">Disponible</span>
</div>

<style>
    .oferta { border: 2px solid #10b981; }
    .agotado { opacity: 0.5; }
    .badge-oferta { background: #10b981; color: white; }
    .badge-agotado { background: #ef4444; color: white; }
</style>

//  Actualiza la tarjeta con estos datos:

const datosProducto = {
    nombre: "Auriculares Bluetooth",
    precio: 79.99,
    imagen: "auriculares.jpg",
    enOferta: true,
    agotado: false
};

// 1. Selecciona los elementos
const card = document.querySelector("#producto");
const imgProducto = document.querySelector("#imagen");
const nombreProducto = document.querySelector("#nombre");
const precioProducto = document.querySelector("#precio");
const estadoProducto = document.querySelector("#estado");

// 2. Cambia el nombre del producto
// Tu código aquí

// 3. Cambia el precio (formato: "$79.99")
// Tu código aquí

// 4. Cambia la imagen (src y alt)
// Tu código aquí

// 5. Si está en oferta:
//    - Agrega clase "oferta" a la card
//    - Cambia el color del precio a verde (#10b981)
// Tu código aquí

// 6. Cambia el texto del estado según disponibilidad
//    " ¡En oferta!" o " Agotado" o " Disponible"
// Tu código aquí`,

    solucion: `//  SOLUCIÓN

const datosProducto = {
    nombre: "Auriculares Bluetooth",
    precio: 79.99,
    imagen: "auriculares.jpg",
    enOferta: true,
    agotado: false
};

// 1. Seleccionar elementos
const card = document.querySelector("#producto");
const imgProducto = document.querySelector("#imagen");
const nombreProducto = document.querySelector("#nombre");
const precioProducto = document.querySelector("#precio");
const estadoProducto = document.querySelector("#estado");

// 2. Cambiar nombre
nombreProducto.textContent = datosProducto.nombre;

// 3. Cambiar precio con formato
precioProducto.textContent = \`$\${datosProducto.precio.toFixed(2)}\`;

// 4. Cambiar imagen
imgProducto.src = datosProducto.imagen;
imgProducto.alt = datosProducto.nombre;

// 5. Si está en oferta, agregar clase y cambiar color
if (datosProducto.enOferta) {
    card.classList.add("oferta");
    precioProducto.style.color = "#10b981";
    precioProducto.style.fontWeight = "bold";
}

// 6. Actualizar estado
if (datosProducto.agotado) {
    estadoProducto.textContent = " Agotado";
    estadoProducto.classList.add("badge-agotado");
    card.classList.add("agotado");
} else if (datosProducto.enOferta) {
    estadoProducto.textContent = " ¡En oferta!";
    estadoProducto.classList.add("badge-oferta");
} else {
    estadoProducto.textContent = " Disponible";
}

console.log(" Producto actualizado:", datosProducto.nombre);`,

    buenasPracticas: [
      'Usa textContent para texto (seguro contra XSS)',
      'Evita innerHTML con datos de usuarios',
      'Prefiere classList sobre cambiar estilos inline',
      'Define estilos en CSS, alterna con clases desde JS',
      'Usa .toFixed(2) para formatear precios',
      'Guarda selectores en variables para reutilizarlos'
    ]
  },

  3: {
    titulo: 'Eventos',
    teoria: `Los EVENTOS hacen tu página INTERACTIVA.

 ¿QUÉ ES UN EVENTO?
Es algo que "pasa" en la página:
• El usuario hace clic en un botón
• El usuario escribe en un input
• El usuario mueve el mouse
• La página termina de cargar

 EVENTOS MÁS COMUNES

MOUSE:
• click     → Clic del mouse
• dblclick  → Doble clic
• mouseenter → El mouse entra al elemento
• mouseleave → El mouse sale del elemento

TECLADO:
• keydown → Se presiona una tecla
• keyup   → Se suelta una tecla

FORMULARIOS:
• input   → El valor del input cambia (en tiempo real)
• change  → El valor cambió Y se salió del campo
• submit  → Se envía el formulario
• focus   → El campo recibe el foco
• blur    → El campo pierde el foco

 CÓMO AGREGAR UN EVENTO

elemento.addEventListener("evento", función);

Ejemplo:
boton.addEventListener("click", () => {
    console.log("¡Hiciste clic!");
});

 EL OBJETO EVENT

Cuando agregas un evento, la función recibe información sobre él:

boton.addEventListener("click", (event) => {
    console.log(event.target);  // El elemento que se clickeó
});

input.addEventListener("input", (event) => {
    console.log(event.target.value); // Lo que escribió el usuario
});

 PREVENIR COMPORTAMIENTO POR DEFECTO

Algunos elementos tienen comportamientos automáticos:
• \<form\> recarga la página al enviar
• \<a\> navega a otra página

Para evitarlo:
event.preventDefault();`,

    ejemplos: `//  HTML
// <button id="miBoton">Haz clic</button>
// <input id="miInput" type="text" placeholder="Escribe...">
// <form id="miForm">...</form>

const boton = document.querySelector("#miBoton");
const input = document.querySelector("#miInput");
const formulario = document.querySelector("#miForm");

//  EVENTO CLICK

boton.addEventListener("click", () => {
    console.log("¡Clic!");
    boton.textContent = "¡Clickeado!";
});

//  CLICK CON INFORMACIÓN DEL EVENTO

boton.addEventListener("click", (event) => {
    console.log("Elemento clickeado:", event.target);
    console.log("Posición X:", event.clientX);
    console.log("Posición Y:", event.clientY);
});

//  EVENTO INPUT (tiempo real mientras escribe)

input.addEventListener("input", (event) => {
    const texto = event.target.value;
    console.log("Escribiendo:", texto);
    console.log("Caracteres:", texto.length);
});

//  EVENTO KEYDOWN (detectar teclas específicas)

input.addEventListener("keydown", (event) => {
    console.log("Tecla presionada:", event.key);
    
    if (event.key === "Enter") {
        console.log("¡Enter presionado!");
        // Hacer algo cuando presiona Enter
    }
    
    if (event.key === "Escape") {
        input.value = ""; // Limpiar el campo
    }
});

//  EVENTO SUBMIT (enviar formulario)

formulario.addEventListener("submit", (event) => {
    //  Evitar que recargue la página
    event.preventDefault();
    
    console.log("Formulario enviado");
    // Aquí procesas los datos del formulario
});

//  HOVER (mouseenter y mouseleave)

boton.addEventListener("mouseenter", () => {
    boton.style.transform = "scale(1.1)";
    boton.style.backgroundColor = "#8b5cf6";
});

boton.addEventListener("mouseleave", () => {
    boton.style.transform = "scale(1)";
    boton.style.backgroundColor = "";
});

//  MÚLTIPLES ELEMENTOS (mismo evento para varios)

const botones = document.querySelectorAll(".btn");

botones.forEach(btn => {
    btn.addEventListener("click", (event) => {
        const textoBoton = event.target.textContent;
        console.log("Botón clickeado:", textoBoton);
    });
});`,

    ejercicio: `<!--  EJERCICIO: Crear un contador interactivo -->

<div id="app">
    <h2 id="numero">0</h2>
    <button id="restar"> Restar</button>
    <button id="reset"> Reset</button>
    <button id="sumar"> Sumar</button>
</div>

//  Tu tarea:

// 1. Selecciona los elementos
const numeroDisplay = document.querySelector("#numero");
const btnRestar = document.querySelector("#restar");
const btnReset = document.querySelector("#reset");
const btnSumar = document.querySelector("#sumar");

// 2. Crea una variable para guardar el contador
let contador = 0;

// 3. Crea una función que actualice el display
//    - Muestra el número en numeroDisplay
//    - Si es positivo, color verde
//    - Si es negativo, color rojo
//    - Si es cero, color blanco

const actualizarDisplay = () => {
    // Tu código aquí
};

// 4. Agrega evento click a btnSumar
//    Debe aumentar contador en 1 y actualizar display

// Tu código aquí

// 5. Agrega evento click a btnRestar
//    Debe disminuir contador en 1 y actualizar display

// Tu código aquí

// 6. Agrega evento click a btnReset
//    Debe poner contador en 0 y actualizar display

// Tu código aquí`,

    solucion: `//  SOLUCIÓN

// 1. Seleccionar elementos
const numeroDisplay = document.querySelector("#numero");
const btnRestar = document.querySelector("#restar");
const btnReset = document.querySelector("#reset");
const btnSumar = document.querySelector("#sumar");

// 2. Variable del contador
let contador = 0;

// 3. Función para actualizar el display
const actualizarDisplay = () => {
    // Mostrar el número
    numeroDisplay.textContent = contador;
    
    // Cambiar color según el valor
    if (contador > 0) {
        numeroDisplay.style.color = "#10b981"; // Verde
    } else if (contador < 0) {
        numeroDisplay.style.color = "#ef4444"; // Rojo
    } else {
        numeroDisplay.style.color = "#ffffff"; // Blanco
    }
    
    // Animación pequeña
    numeroDisplay.style.transform = "scale(1.2)";
    setTimeout(() => {
        numeroDisplay.style.transform = "scale(1)";
    }, 150);
};

// 4. Evento para sumar
btnSumar.addEventListener("click", () => {
    contador = contador + 1;  // o: contador++
    actualizarDisplay();
});

// 5. Evento para restar
btnRestar.addEventListener("click", () => {
    contador = contador - 1;  // o: contador--
    actualizarDisplay();
});

// 6. Evento para reset
btnReset.addEventListener("click", () => {
    contador = 0;
    actualizarDisplay();
});

//  BONUS: También funciona con teclado
document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowUp" || event.key === "+") {
        contador++;
        actualizarDisplay();
    } else if (event.key === "ArrowDown" || event.key === "-") {
        contador--;
        actualizarDisplay();
    } else if (event.key === "r" || event.key === "0") {
        contador = 0;
        actualizarDisplay();
    }
});

console.log(" Contador listo. Usa los botones o las flechas ↑↓");`,

    buenasPracticas: [
      'Usa addEventListener, nunca onclick en HTML',
      'Guarda el estado en variables de JavaScript',
      'Crea funciones separadas para actualizar la UI',
      'Usa event.preventDefault() en formularios',
      'event.target te dice qué elemento disparó el evento',
      'Agrega eventos después de que el DOM esté listo'
    ]
  },

  4: {
    titulo: 'Crear Elementos Dinámicamente',
    teoria: `Puedes crear elementos HTML desde JavaScript y agregarlos a la página.

 ¿PARA QUÉ SIRVE?
• Agregar items a una lista
• Crear tarjetas de productos
• Mostrar mensajes de notificación
• Generar contenido desde datos

 CREAR UN ELEMENTO

const nuevoDiv = document.createElement("div");
// Esto crea: <div></div> (vacío, no está en la página aún)

 CONFIGURAR EL ELEMENTO

nuevoDiv.textContent = "Hola";
nuevoDiv.className = "mi-clase";
nuevoDiv.id = "mi-id";

 AGREGARLO A LA PÁGINA

const contenedor = document.querySelector("#contenedor");
contenedor.appendChild(nuevoDiv);  // Lo agrega al final

También puedes usar:
contenedor.prepend(nuevoDiv);      // Al inicio
contenedor.before(nuevoDiv);       // Antes del contenedor
contenedor.after(nuevoDiv);        // Después del contenedor

 ELIMINAR UN ELEMENTO

elemento.remove();   // Forma moderna
// o
padre.removeChild(elemento); // Forma antigua

 ALTERNATIVA: innerHTML con template literals
Para estructuras complejas, a veces es más fácil:

contenedor.innerHTML = \`
    <div class="card">
        <h3>\${titulo}</h3>
        <p>\${descripcion}</p>
    </div>
\`;

 Pero cuidado: innerHTML reemplaza TODO el contenido.
Para agregar sin reemplazar, usa createElement.`,

    ejemplos: `//  CREAR ELEMENTO SIMPLE

const nuevoParrafo = document.createElement("p");
nuevoParrafo.textContent = "Este es un párrafo nuevo";
nuevoParrafo.className = "parrafo-destacado";

const contenedor = document.querySelector("#app");
contenedor.appendChild(nuevoParrafo);

//  CREAR ESTRUCTURA MÁS COMPLEJA

const crearTarjeta = (titulo, descripcion, precio) => {
    // Crear el contenedor principal
    const card = document.createElement("div");
    card.className = "card";
    
    // Crear elementos internos
    const h3 = document.createElement("h3");
    h3.textContent = titulo;
    
    const p = document.createElement("p");
    p.textContent = descripcion;
    
    const span = document.createElement("span");
    span.textContent = \`$\${precio}\`;
    span.className = "precio";
    
    // Armar la estructura
    card.appendChild(h3);
    card.appendChild(p);
    card.appendChild(span);
    
    return card;
};

// Usar la función
const miTarjeta = crearTarjeta("Laptop", "Core i7 16GB RAM", 1200);
contenedor.appendChild(miTarjeta);

//  FORMA MÁS CORTA CON innerHTML

const crearTarjetaRapido = (titulo, descripcion, precio) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = \`
        <h3>\${titulo}</h3>
        <p>\${descripcion}</p>
        <span class="precio">$\${precio}</span>
        <button class="btn-comprar">Comprar</button>
    \`;
    
    // Agregar evento al botón
    const btnComprar = card.querySelector(".btn-comprar");
    btnComprar.addEventListener("click", () => {
        alert(\`¡Agregaste \${titulo} al carrito!\`);
    });
    
    return card;
};

//  CREAR LISTA DESDE UN ARRAY

const productos = ["Laptop", "Mouse", "Teclado", "Monitor"];
const lista = document.querySelector("#lista-productos");

productos.forEach((producto, index) => {
    const li = document.createElement("li");
    li.textContent = \`\${index + 1}. \${producto}\`;
    lista.appendChild(li);
});

//  ELIMINAR ELEMENTO

const btnEliminar = document.querySelector("#eliminar");
btnEliminar.addEventListener("click", () => {
    const ultimoElemento = lista.querySelector("li:last-child");
    if (ultimoElemento) {
        ultimoElemento.remove();
    }
});`,

    ejercicio: `<!--  EJERCICIO: Lista de tareas dinámica -->

<div id="todo-app">
    <input id="nueva-tarea" type="text" placeholder="Nueva tarea...">
    <button id="agregar">Agregar</button>
    <ul id="lista-tareas"></ul>
    <p id="contador">0 tareas</p>
</div>

//  Tu tarea:

// 1. Selecciona los elementos
const inputTarea = document.querySelector("#nueva-tarea");
const btnAgregar = document.querySelector("#agregar");
const listaTareas = document.querySelector("#lista-tareas");
const contador = document.querySelector("#contador");

// 2. Crea una función actualizarContador()
//    que muestre cuántas tareas hay en la lista

const actualizarContador = () => {
    // Pista: usa listaTareas.children.length
};

// 3. Crea una función crearTarea(texto) que:
//    - Cree un <li> con el texto
//    - Agregue un botón "" para eliminar
//    - Al hacer clic en la tarea, táchala (toggle clase "completada")
//    - Al hacer clic en , elimine la tarea

const crearTarea = (texto) => {
    // Tu código aquí
};

// 4. Agrega evento al botón "Agregar":
//    - Si el input está vacío, muestra alerta
//    - Si tiene texto, crea la tarea y limpia el input

// Tu código aquí

// 5. Agrega evento al input:
//    - Si presiona Enter, agrega la tarea

// Tu código aquí`,

    solucion: `//  SOLUCIÓN

// 1. Seleccionar elementos
const inputTarea = document.querySelector("#nueva-tarea");
const btnAgregar = document.querySelector("#agregar");
const listaTareas = document.querySelector("#lista-tareas");
const contador = document.querySelector("#contador");

// 2. Función para actualizar contador
const actualizarContador = () => {
    const total = listaTareas.children.length;
    const completadas = listaTareas.querySelectorAll(".completada").length;
    contador.textContent = \`\${completadas}/\${total} completadas\`;
};

// 3. Función para crear tarea
const crearTarea = (texto) => {
    const li = document.createElement("li");
    li.className = "tarea";
    
    // Span con el texto
    const span = document.createElement("span");
    span.textContent = texto;
    span.className = "tarea-texto";
    
    // Botón de eliminar
    const btnEliminar = document.createElement("button");
    btnEliminar.textContent = "";
    btnEliminar.className = "btn-eliminar";
    
    // Evento: clic en el texto = marcar/desmarcar
    span.addEventListener("click", () => {
        li.classList.toggle("completada");
        actualizarContador();
    });
    
    // Evento: clic en  = eliminar
    btnEliminar.addEventListener("click", () => {
        li.remove();
        actualizarContador();
    });
    
    // Armar el li
    li.appendChild(span);
    li.appendChild(btnEliminar);
    
    return li;
};

// Función para agregar tarea
const agregarTarea = () => {
    const texto = inputTarea.value.trim();
    
    if (!texto) {
        alert("Escribe una tarea primero");
        inputTarea.focus();
        return;
    }
    
    const nuevaTarea = crearTarea(texto);
    listaTareas.appendChild(nuevaTarea);
    
    // Limpiar input y actualizar contador
    inputTarea.value = "";
    inputTarea.focus();
    actualizarContador();
};

// 4. Evento en botón Agregar
btnAgregar.addEventListener("click", agregarTarea);

// 5. Evento en input (Enter)
inputTarea.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        agregarTarea();
    }
});

// Inicializar contador
actualizarContador();

console.log(" App de tareas lista");`,

    buenasPracticas: [
      'Crea funciones reutilizables para crear elementos',
      'Agrega eventos ANTES de insertar en el DOM',
      'Valida inputs antes de crear elementos',
      'Usa clases CSS para estilos, no estilos inline',
      'Actualiza contadores/estados después de cambios',
      'Siempre limpia inputs después de usarlos'
    ]
  }
};
