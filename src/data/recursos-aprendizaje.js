// Quizzes interactivos para cada módulo
export const quizzes = {
    'js-fundamentos': [
        {
            id: 1,
            pregunta: '¿Cuál es la diferencia principal entre const y let?',
            opciones: [
                'const es más rápido que let',
                'const no permite reasignar el valor, let sí',
                'let no existe en JavaScript moderno',
                'No hay diferencia'
            ],
            respuestaCorrecta: 1,
            explicacion: 'const declara una variable cuyo valor no puede ser reasignado, mientras que let permite reasignación.'
        },
        {
            id: 2,
            pregunta: '¿Por qué deberías usar === en vez de ==?',
            opciones: [
                'Es más rápido',
                '=== compara valor Y tipo, == solo valor (con coerción)',
                'Son iguales, es solo preferencia',
                '== está deprecated'
            ],
            respuestaCorrecta: 1,
            explicacion: '=== es el operador de igualdad estricta que compara tanto el valor como el tipo, evitando bugs por coerción de tipos.'
        },
        {
            id: 3,
            pregunta: '¿Cuál es la forma moderna de declarar funciones?',
            opciones: [
                'function nombre() {}',
                'var nombre = function() {}',
                'const nombre = () => {}',
                'def nombre() {}'
            ],
            respuestaCorrecta: 2,
            explicacion: 'Las arrow functions (=>) son la forma moderna y preferida de declarar funciones en JavaScript.'
        },
        {
            id: 4,
            pregunta: '¿Qué método de array transforma cada elemento y retorna un nuevo array?',
            opciones: [
                'forEach()',
                'filter()',
                'map()',
                'reduce()'
            ],
            respuestaCorrecta: 2,
            explicacion: 'map() transforma cada elemento del array y retorna un nuevo array con los resultados.'
        },
        {
            id: 5,
            pregunta: '¿Qué hace el spread operator (...)?',
            opciones: [
                'Suma todos los números',
                'Expande un array/objeto en elementos individuales',
                'Crea un loop infinito',
                'Elimina duplicados'
            ],
            respuestaCorrecta: 1,
            explicacion: 'El spread operator (...) expande un iterable (array, objeto) en sus elementos individuales.'
        }
    ],

    'dom-manipulation': [
        {
            id: 1,
            pregunta: '¿Cuál es la forma recomendada de seleccionar elementos del DOM?',
            opciones: [
                'document.getElementById()',
                'document.querySelector()',
                'document.getElementsByClassName()',
                '$() de jQuery'
            ],
            respuestaCorrecta: 1,
            explicacion: 'querySelector() es versátil porque acepta cualquier selector CSS y es la forma moderna recomendada.'
        },
        {
            id: 2,
            pregunta: '¿Por qué es peligroso usar innerHTML con datos de usuario?',
            opciones: [
                'Es muy lento',
                'No funciona en todos los navegadores',
                'Permite ataques XSS (inyección de scripts)',
                'Elimina los estilos CSS'
            ],
            respuestaCorrecta: 2,
            explicacion: 'innerHTML puede ejecutar scripts maliciosos si el contenido viene del usuario. Usa textContent para texto seguro.'
        },
        {
            id: 3,
            pregunta: '¿Cómo se agrega un evento a un elemento de forma correcta?',
            opciones: [
                'elemento.onclick = funcion',
                '<button onclick="funcion()">',
                'elemento.addEventListener("click", funcion)',
                'elemento.click = funcion'
            ],
            respuestaCorrecta: 2,
            explicacion: 'addEventListener() es la forma moderna y flexible, permite múltiples listeners y mejor control.'
        },
        {
            id: 4,
            pregunta: '¿Qué hace event.preventDefault()?',
            opciones: [
                'Detiene la propagación del evento',
                'Elimina el elemento',
                'Evita el comportamiento por defecto (ej: envío de form)',
                'Previene errores de JavaScript'
            ],
            respuestaCorrecta: 2,
            explicacion: 'preventDefault() evita el comportamiento por defecto del navegador, como recargar al enviar un formulario.'
        },
        {
            id: 5,
            pregunta: '¿Cuál es la diferencia entre textContent e innerText?',
            opciones: [
                'Son exactamente iguales',
                'textContent es más rápido e incluye texto oculto, innerText respeta CSS',
                'innerText es más moderno',
                'textContent solo funciona en Firefox'
            ],
            respuestaCorrecta: 1,
            explicacion: 'textContent retorna todo el texto incluyendo el oculto por CSS, mientras innerText solo el visible.'
        }
    ],

    'bootstrap': [
        {
            id: 1,
            pregunta: '¿Cuántas columnas tiene el sistema de grid de Bootstrap?',
            opciones: [
                '6 columnas',
                '10 columnas',
                '12 columnas',
                '16 columnas'
            ],
            respuestaCorrecta: 2,
            explicacion: 'Bootstrap usa un sistema de 12 columnas que se divide fácilmente en mitades, tercios y cuartos.'
        },
        {
            id: 2,
            pregunta: '¿Cuál es la estructura correcta del grid?',
            opciones: [
                'row > container > col',
                'container > col > row',
                'container > row > col',
                'col > row > container'
            ],
            respuestaCorrecta: 2,
            explicacion: 'La estructura correcta es container (contenedor) > row (fila) > col (columnas).'
        },
        {
            id: 3,
            pregunta: '¿Qué breakpoint representa tablets en Bootstrap?',
            opciones: [
                'sm (≥576px)',
                'md (≥768px)',
                'lg (≥992px)',
                'xl (≥1200px)'
            ],
            respuestaCorrecta: 1,
            explicacion: 'md (medium) a partir de 768px es el breakpoint típico para tablets en Bootstrap.'
        },
        {
            id: 4,
            pregunta: '¿Qué clase usas para centrar un elemento horizontalmente?',
            opciones: [
                'text-center',
                'mx-auto',
                'center-block',
                'Ambas A y B según el caso'
            ],
            respuestaCorrecta: 3,
            explicacion: 'text-center centra texto, mx-auto centra elementos de bloque. Ambos son válidos según el contexto.'
        },
        {
            id: 5,
            pregunta: '¿Qué clase hace que una card tenga la misma altura que sus hermanas?',
            opciones: [
                'card-equal',
                'h-100',
                'same-height',
                'card-stretch'
            ],
            respuestaCorrecta: 1,
            explicacion: 'h-100 significa height: 100% y hace que la card ocupe todo el alto disponible del contenedor.'
        }
    ]
};

// Proyectos prácticos por módulo
export const proyectos = {
    'js-fundamentos': {
        titulo: '🎮 Juego de Adivinanza de Números',
        descripcion: 'Crea un juego donde el usuario debe adivinar un número aleatorio entre 1 y 100.',
        requisitos: [
            'Generar número aleatorio con Math.random()',
            'Usar prompt() o input para obtener intentos',
            'Dar pistas: "Muy alto" o "Muy bajo"',
            'Contar número de intentos',
            'Mostrar mensaje de victoria con intentos usados'
        ],
        codigo: `// 🎮 JUEGO DE ADIVINANZA
const numeroSecreto = Math.floor(Math.random() * 100) + 1;
let intentos = 0;
let adivinado = false;

console.log(" Adivina el número entre 1 y 100");

const adivinar = (numero) => {
  intentos++;
  
  if (numero === numeroSecreto) {
    adivinado = true;
    return \` ¡GANASTE! Era \${numeroSecreto}. Intentos: \${intentos}\`;
  }
  
  if (numero < numeroSecreto) {
    return " Muy bajo. Intenta un número mayor.";
  }
  
  return "📉 Muy alto. Intenta un número menor.";
};

// Ejemplo de uso:
console.log(adivinar(50));
console.log(adivinar(75));
// ... sigue intentando hasta acertar`,
        skills: ['Variables', 'Funciones', 'Condicionales', 'Math.random()']
    },

    'dom-manipulation': {
        titulo: ' Lista de Tareas Interactiva',
        descripcion: 'Construye una app de tareas completa con agregar, eliminar y marcar como completadas.',
        requisitos: [
            'Input para agregar nuevas tareas',
            'Botón de agregar (click y Enter)',
            'Cada tarea con botón de eliminar',
            'Click en tarea para marcar/desmarcar completada',
            'Contador de tareas pendientes',
            'Guardar en localStorage'
        ],
        codigo: `//  TODO APP
const form = document.querySelector('#todo-form');
const input = document.querySelector('#todo-input');
const lista = document.querySelector('#todo-list');
const contador = document.querySelector('#contador');

let tareas = JSON.parse(localStorage.getItem('tareas')) || [];

const guardar = () => {
  localStorage.setItem('tareas', JSON.stringify(tareas));
};

const actualizar = () => {
  const pendientes = tareas.filter(t => !t.completada).length;
  contador.textContent = \`\${pendientes} pendientes\`;
};

const renderizar = () => {
  lista.innerHTML = '';
  
  tareas.forEach((tarea, index) => {
    const li = document.createElement('li');
    li.className = tarea.completada ? 'completada' : '';
    li.innerHTML = \`
      <span>\${tarea.texto}</span>
      <button data-index="\${index}">✕</button>
    \`;
    
    li.querySelector('span').onclick = () => {
      tareas[index].completada = !tareas[index].completada;
      guardar();
      renderizar();
    };
    
    li.querySelector('button').onclick = () => {
      tareas.splice(index, 1);
      guardar();
      renderizar();
    };
    
    lista.appendChild(li);
  });
  
  actualizar();
};

form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (!input.value.trim()) return;
  
  tareas.push({ texto: input.value, completada: false });
  input.value = '';
  guardar();
  renderizar();
});

renderizar();`,
        skills: ['querySelector', 'addEventListener', 'createElement', 'localStorage']
    },

    'bootstrap': {
        titulo: ' Landing Page Responsive',
        descripcion: 'Crea una landing page profesional con navbar, hero, servicios y formulario de contacto.',
        requisitos: [
            'Navbar responsive con toggle móvil',
            'Hero section con título y CTA',
            'Grid de 3 cards de servicios',
            'Formulario de contacto estilizado',
            'Footer con redes sociales',
            'Totalmente responsive (mobile-first)'
        ],
        codigo: `<!--  LANDING PAGE -->
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Mi Landing</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>

<!-- Navbar -->
<nav class="navbar navbar-expand-lg navbar-dark bg-primary sticky-top">
  <div class="container">
    <a class="navbar-brand fw-bold" href="#">MiEmpresa</a>
    <button class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#nav">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="nav">
      <ul class="navbar-nav ms-auto">
        <li><a class="nav-link" href="#servicios">Servicios</a></li>
        <li><a class="nav-link" href="#contacto">Contacto</a></li>
      </ul>
    </div>
  </div>
</nav>

<!-- Hero -->
<section class="bg-light py-5 text-center">
  <div class="container py-5">
    <h1 class="display-4 fw-bold">Soluciones Digitales</h1>
    <p class="lead">Transformamos tu negocio con tecnología</p>
    <a href="#contacto" class="btn btn-primary btn-lg">Contáctanos</a>
  </div>
</section>

<!-- Servicios -->
<section id="servicios" class="py-5">
  <div class="container">
    <h2 class="text-center mb-5">Servicios</h2>
    <div class="row g-4">
      <div class="col-md-4">
        <div class="card h-100 text-center p-4">
          <h4>Desarrollo Web</h4>
          <p>Sitios modernos y responsive</p>
        </div>
      </div>
      <!-- +2 cards similares -->
    </div>
  </div>
</section>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>`,
        skills: ['Grid System', 'Navbar', 'Cards', 'Formularios', 'Responsive']
    }
};

// Estructura de archivos de un proyecto frontend
export const estructuraArchivos = {
    titulo: '📁 Estructura de Archivos Frontend',
    descripcion: 'Aprende a organizar tus proyectos como un desarrollador profesional.',
    contenido: `
 mi-proyecto/
├──  index.html          # Página principal (punto de entrada)
├──  package.json        # Dependencias y scripts npm
├──  vite.config.js      # Configuración de Vite (bundler)
├──  README.md           # Documentación del proyecto
│
├── 📂 src/                # Código fuente principal
│   ├──  main.jsx        # Punto de entrada JavaScript
│   ├──  App.jsx         # Componente raíz de React
│   │
│   ├── 📂 components/     # Componentes reutilizables
│   │   ├──  Header.jsx
│   │   ├──  Footer.jsx
│   │   └──  Button.jsx
│   │
│   ├── 📂 pages/          # Páginas/vistas de la app
│   │   ├──  Home.jsx
│   │   └──  About.jsx
│   │
│   ├── 📂 styles/         # Estilos CSS
│   │   ├──  main.css    # Estilos globales
│   │   └──  components.css
│   │
│   ├── 📂 data/           # Datos estáticos, constantes
│   │   └──  productos.js
│   │
│   ├── 📂 utils/          # Funciones utilitarias
│   │   └──  helpers.js
│   │
│   └── 📂 assets/         # Imágenes, fuentes, iconos
│       ├── 📂 images/
│       └── 📂 fonts/
│
├── 📂 public/             # Archivos estáticos (no procesados)
│   └──  favicon.ico
│
└── 📂 node_modules/       # Dependencias (no tocar, ignorar en git)
`,
    reglas: [
        {
            titulo: '1️⃣ Un componente = Un archivo',
            descripcion: 'Cada componente de React debe estar en su propio archivo .jsx'
        },
        {
            titulo: '2️⃣ Nombres descriptivos',
            descripcion: 'Usa PascalCase para componentes (Button.jsx) y camelCase para utilidades (formatDate.js)'
        },
        {
            titulo: '3️⃣ Agrupa por funcionalidad',
            descripcion: 'Mantén archivos relacionados juntos: componentes en /components, estilos en /styles'
        },
        {
            titulo: '4️⃣ Separa datos de lógica',
            descripcion: 'Los datos estáticos van en /data, las funciones reutilizables en /utils'
        },
        {
            titulo: '5️⃣ Assets organizados',
            descripcion: 'Imágenes, fuentes e iconos cada uno en su subcarpeta dentro de /assets'
        },
        {
            titulo: '6️⃣ Ignora node_modules',
            descripcion: 'Nunca subas node_modules a git. Usa .gitignore para excluirlo'
        }
    ],
    archivosImportantes: [
        {
            archivo: 'package.json',
            proposito: 'Define nombre del proyecto, versión, dependencias (librerías) y scripts npm',
            ejemplo: `{
  "name": "mi-proyecto",
  "scripts": {
    "dev": "vite",
    "build": "vite build"
  },
  "dependencies": {
    "react": "^18.2.0"
  }
}`
        },
        {
            archivo: 'index.html',
            proposito: 'Página HTML base donde se monta la aplicación React',
            ejemplo: `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Mi App</title>
</head>
<body>
  <div id="root"></div>
  <script type="module" src="/src/main.jsx"></script>
</body>
</html>`
        },
        {
            archivo: 'main.jsx',
            proposito: 'Punto de entrada JS que renderiza la app en el DOM',
            ejemplo: `import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

ReactDOM.createRoot(document.getElementById('root'))
  .render(<App />)`
        },
        {
            archivo: '.gitignore',
            proposito: 'Lista de archivos/carpetas que Git debe ignorar',
            ejemplo: `node_modules/
dist/
.env
.DS_Store`
        }
    ]
};

// Cheatsheets por módulo
export const cheatsheets = {
    'js-fundamentos': {
        titulo: ' JavaScript Cheatsheet',
        secciones: [
            {
                titulo: 'Variables',
                items: [
                    'const nombre = "valor"  → No reasignable',
                    'let edad = 25           → Reasignable',
                    'var antiguo = "malo"    →  NUNCA USES'
                ]
            },
            {
                titulo: 'Tipos de Datos',
                items: [
                    'String: "texto"',
                    'Number: 42, 3.14',
                    'Boolean: true, false',
                    'Array: [1, 2, 3]',
                    'Object: { key: value }',
                    'null/undefined'
                ]
            },
            {
                titulo: 'Operadores',
                items: [
                    '=== Igualdad estricta',
                    '!== Desigualdad estricta',
                    '&& AND lógico',
                    '|| OR lógico',
                    '?? Nullish coalescing',
                    '?. Optional chaining'
                ]
            },
            {
                titulo: 'Funciones',
                items: [
                    'const fn = () => valor',
                    'const fn = (a, b) => a + b',
                    'const fn = (x = 10) => x',
                    'const fn = (...args) => args'
                ]
            },
            {
                titulo: 'Arrays',
                items: [
                    '.map(x => x * 2)    → Transformar',
                    '.filter(x => x > 5) → Filtrar',
                    '.reduce((acc, x) => acc + x, 0) → Reducir',
                    '.find(x => x.id === 1) → Buscar',
                    '.forEach(x => log(x)) → Iterar',
                    '[...arr1, ...arr2] → Combinar'
                ]
            },
            {
                titulo: 'Objetos',
                items: [
                    '{ nombre, edad } → Shorthand',
                    '{ ...obj, nuevo: val } → Spread',
                    'const { a, b } = obj → Destructuring',
                    'Object.keys(obj) → Array de claves',
                    'Object.values(obj) → Array de valores'
                ]
            }
        ]
    },

    'dom-manipulation': {
        titulo: ' DOM Cheatsheet',
        secciones: [
            {
                titulo: 'Selección',
                items: [
                    "document.querySelector('#id')",
                    "document.querySelector('.clase')",
                    "document.querySelectorAll('.clase')",
                    "document.getElementById('id')"
                ]
            },
            {
                titulo: 'Modificación',
                items: [
                    'el.textContent = "texto"',
                    'el.innerHTML = "<b>HTML</b>"',
                    'el.style.color = "red"',
                    'el.classList.add("clase")',
                    'el.classList.remove("clase")',
                    'el.classList.toggle("clase")'
                ]
            },
            {
                titulo: 'Eventos',
                items: [
                    "el.addEventListener('click', fn)",
                    'event.target → Elemento clickeado',
                    'event.preventDefault()',
                    'event.stopPropagation()'
                ]
            },
            {
                titulo: 'Crear Elementos',
                items: [
                    "document.createElement('div')",
                    'padre.appendChild(hijo)',
                    'el.remove()',
                    'el.insertBefore(nuevo, ref)'
                ]
            }
        ]
    },

    'bootstrap': {
        titulo: ' Bootstrap Cheatsheet',
        secciones: [
            {
                titulo: 'Grid',
                items: [
                    'container > row > col',
                    'col-12, col-6, col-4, col-3',
                    'col-sm-*, col-md-*, col-lg-*',
                    'g-0 a g-5 (gap)',
                    'offset-md-3'
                ]
            },
            {
                titulo: 'Espaciado',
                items: [
                    'm-{0-5} margin',
                    'p-{0-5} padding',
                    'mt, mb, ms, me (direcciones)',
                    'mx-auto (centrar)'
                ]
            },
            {
                titulo: 'Texto',
                items: [
                    'text-center, text-start, text-end',
                    'text-primary, text-danger...',
                    'fw-bold, fw-light',
                    'fs-1 a fs-6'
                ]
            },
            {
                titulo: 'Botones',
                items: [
                    'btn btn-primary',
                    'btn btn-outline-*',
                    'btn-lg, btn-sm',
                    'btn-close'
                ]
            },
            {
                titulo: 'Componentes',
                items: [
                    'card > card-body',
                    'navbar navbar-expand-lg',
                    'alert alert-success',
                    'badge bg-primary',
                    'form-control, form-select'
                ]
            }
        ]
    }
};
