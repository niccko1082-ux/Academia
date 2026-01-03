// Contenido del módulo JavaScript Fundamentos - MEJORADO PARA PRINCIPIANTES
export const jsFundamentos = {
  0: {
    titulo: '¡Bienvenido! Tu Primer Script',
    teoria: `¡Felicidades por dar el primer paso hacia JavaScript! 🎉

Antes de empezar, necesitas saber tres cosas básicas:

🤔 ¿QUÉ ES JAVASCRIPT?
JavaScript es un lenguaje de programación que hace tus páginas web INTERACTIVAS. 
Mientras HTML es la estructura y CSS es el diseño, JavaScript es el COMPORTAMIENTO.

Ejemplos de lo que hace JavaScript:
• El botón de "me gusta" que cambia de color al hacer clic
• El menú que se abre y cierra
• El formulario que valida si escribiste bien tu email
• Las notificaciones que aparecen en la pantalla

📁 ¿DÓNDE ESCRIBO CÓDIGO JAVASCRIPT?
Tienes 3 opciones principales:

1️⃣ ARCHIVO SEPARADO (RECOMENDADO)
Crea un archivo llamado "script.js" y conéctalo a tu HTML:
<script src="script.js"></script>

2️⃣ DENTRO DEL HTML
Usando la etiqueta <script> al final del <body>:
<script>
  // Tu código aquí
</script>

3️⃣ LA CONSOLA DEL NAVEGADOR (para practicar)
Es como un "bloc de notas" donde puedes probar código rápidamente.

🖥️ ¿CÓMO ABRO LA CONSOLA?
La consola es tu mejor amiga para aprender. Para abrirla:
• Windows/Linux: Presiona F12 o Ctrl + Shift + J
• Mac: Presiona Cmd + Option + J
• O haz clic derecho → "Inspeccionar" → pestaña "Console"`,

    ejemplos: `<!-- 📄 Así se ve un archivo HTML con JavaScript -->

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Mi Primera Página con JS</title>
</head>
<body>
    <h1>¡Hola Mundo!</h1>
    <button id="miBoton">Haz clic aquí</button>
    
    <!-- El script va al final del body -->
    <script src="script.js"></script>
</body>
</html>

// 📄 Contenido del archivo script.js:

// Esta línea muestra un mensaje en la CONSOLA del navegador
// (Presiona F12 para verla)
console.log("¡Hola! Tu script está funcionando 🎉");

// Esta línea muestra una ventana emergente
alert("¡Bienvenido a JavaScript!");

// Tip: console.log() es como un "print" para ver valores
// Lo usarás TODO EL TIEMPO para saber qué está pasando`,

    ejercicio: `// 🎯 EJERCICIO: Tu primer programa

// PASO 1: Abre la CONSOLA del navegador
//         (Presiona F12 y busca la pestaña "Console")

// PASO 2: Copia y pega este código en la consola:

console.log("¡Hola! Soy tu primer mensaje");
console.log("La consola muestra los mensajes aquí abajo ⬇️");
console.log(2 + 2);
console.log("Mi nombre es: [escribe tu nombre aquí]");

// PASO 3: Presiona Enter y observa los resultados

// 💡 NOTA: Cada console.log() muestra algo diferente:
//    - Texto (entre comillas)
//    - Números
//    - Operaciones matemáticas`,

    solucion: `// Así deberías ver los resultados en la consola:

console.log("¡Hola! Soy tu primer mensaje");
// Resultado: ¡Hola! Soy tu primer mensaje

console.log("La consola muestra los mensajes aquí abajo ⬇️");
// Resultado: La consola muestra los mensajes aquí abajo ⬇️

console.log(2 + 2);
// Resultado: 4  (JavaScript calculó la suma)

console.log("Mi nombre es: Carlos");
// Resultado: Mi nombre es: Carlos

// 🎉 ¡FELICIDADES!
// Si ves los 4 mensajes, ya ejecutaste tu primer código JavaScript.
// 
// 📌 RECUERDA:
// - console.log() muestra información en la consola
// - Los textos van entre comillas " " o ' '
// - Los números van sin comillas
// - Puedes hacer operaciones: + - * /`,

    buenasPracticas: [
      'Siempre pon <script> al final del <body>',
      'Usa archivos .js separados (no código en el HTML)',
      'Abre la consola (F12) para ver errores y mensajes',
      'console.log() es tu herramienta #1 para debugear',
      'Guarda tu archivo antes de refrescar el navegador',
      'Si algo no funciona, revisa la consola por errores rojos'
    ]
  },

  1: {
    titulo: 'Variables y Tipos de Datos',
    teoria: `Imagina que las VARIABLES son como CAJAS con etiquetas donde guardas información.

Ejemplo de la vida real:
📦 Caja etiquetada "nombre" → contiene "María"
📦 Caja etiquetada "edad" → contiene 25
📦 Caja etiquetada "esEstudiante" → contiene Sí (true)

🏷️ CÓMO CREAR UNA VARIABLE

En JavaScript usamos palabras especiales:

const nombre = "María";
  │      │        │
  │      │        └─ El VALOR que guardas (el contenido de la caja)
  │      └─ El NOMBRE de la variable (la etiqueta de la caja)
  └─ La PALABRA CLAVE (const o let)

📦 ¿CUÁNDO USAR const Y let?

• const → Cuando el valor NUNCA va a cambiar
         Ejemplo: const nombre = "María";
         (María no puede cambiar su nombre mágicamente)

• let   → Cuando el valor SÍ puede cambiar
         Ejemplo: let puntos = 0;
         (Los puntos suben cuando ganas)

🎯 TIPOS DE DATOS (qué puedes guardar)

1. TEXTO (String) → Va entre comillas
   "Hola mundo" o 'Hola mundo'

2. NÚMEROS (Number) → Sin comillas
   42, 3.14, -5, 1000

3. VERDADERO/FALSO (Boolean)
   true (sí) o false (no)

4. SIN VALOR
   null → "vacío a propósito"
   undefined → "aún no tiene valor"

💡 TEMPLATE LITERALS (texto con variables)
Usa comillas invertidas \` \` para insertar variables:
\`Hola \${nombre}, tienes \${edad} años\`

Las comillas invertidas están debajo de Esc en tu teclado.`,

    ejemplos: `// 📦 CREANDO VARIABLES

// Datos que NO cambian → usa const
const nombre = "María";
const añoNacimiento = 1998;
const esEstudiante = true;

// Datos que SÍ cambian → usa let
let puntos = 0;
let vidas = 3;
let nivelActual = 1;

// 🔍 MOSTRANDO VALORES EN CONSOLA
// (Recuerda: F12 para abrir la consola)

console.log(nombre);        // Muestra: María
console.log(añoNacimiento); // Muestra: 1998
console.log(esEstudiante);  // Muestra: true

// 🔄 CAMBIANDO VALORES (solo funciona con let)
puntos = puntos + 10;  // Ahora puntos vale 10
vidas = vidas - 1;     // Ahora vidas vale 2

console.log(puntos);  // Muestra: 10
console.log(vidas);   // Muestra: 2

// 💡 TEMPLATE LITERALS (texto dinámico)
// Nota: usa las comillas invertidas \` \` (debajo de Esc)

const mensaje = \`Hola \${nombre}, naciste en \${añoNacimiento}\`;
console.log(mensaje);
// Muestra: Hola María, naciste en 1998

// 📊 VERIFICANDO TIPOS DE DATOS
// typeof te dice qué tipo de dato es

console.log(typeof nombre);       // "string" (texto)
console.log(typeof puntos);       // "number" (número)
console.log(typeof esEstudiante); // "boolean" (verdadero/falso)`,

    ejercicio: `// 🎯 EJERCICIO: Crea tu perfil personal
// 
// INSTRUCCIONES:
// 1. Completa las variables con TUS datos
// 2. Copia todo el código a la consola (F12)
// 3. Presiona Enter y observa el resultado

// Paso 1: Completa con tus datos (cambia los valores)
const miNombre = "";        // Escribe tu nombre entre las comillas
const miEdad = 0;           // Escribe tu edad (sin comillas)
const miCiudad = "";        // Escribe tu ciudad
const soyEstudiante = true; // true si estudias, false si no

// Paso 2: Crea el mensaje (no toques esto)
const presentacion = \`
================================
👤 MI PERFIL
================================
Nombre: \${miNombre}
Edad: \${miEdad} años
Ciudad: \${miCiudad}
¿Estudiante?: \${soyEstudiante ? "Sí" : "No"}
================================
\`;

// Paso 3: Muestra el resultado
console.log(presentacion);`,

    solucion: `// ✅ SOLUCIÓN COMPLETA

const miNombre = "Carlos";
const miEdad = 28;
const miCiudad = "Medellín";
const soyEstudiante = true;

const presentacion = \`
================================
👤 MI PERFIL
================================
Nombre: \${miNombre}
Edad: \${miEdad} años
Ciudad: \${miCiudad}
¿Estudiante?: \${soyEstudiante ? "Sí" : "No"}
================================
\`;

console.log(presentacion);

// 📋 RESULTADO EN CONSOLA:
// ================================
// 👤 MI PERFIL
// ================================
// Nombre: Carlos
// Edad: 28 años
// Ciudad: Medellín
// ¿Estudiante?: Sí
// ================================

// 🎓 LO QUE APRENDISTE:
// 1. Crear variables con const
// 2. Guardar texto, números y booleanos
// 3. Usar template literals con \${variable}
// 4. Mostrar resultados con console.log()`,

    buenasPracticas: [
      'Usa const por defecto (90% del tiempo)',
      'Usa let solo cuando el valor va a cambiar',
      'NUNCA uses var (es antiguo y causa problemas)',
      'Nombra variables de forma descriptiva: "edad" mejor que "x"',
      'Usa camelCase: "miNombre" en vez de "mi_nombre" o "minombre"',
      'Template literals (\` \`) son más fáciles que concatenar con +'
    ]
  },

  2: {
    titulo: 'Operadores y Condicionales',
    teoria: `Los OPERADORES te permiten hacer cálculos y comparaciones.
Los CONDICIONALES te permiten tomar decisiones.

🔢 OPERADORES MATEMÁTICOS (como una calculadora)

+  suma         →  5 + 3 = 8
-  resta        →  10 - 4 = 6
*  multiplicar  →  6 * 2 = 12
/  dividir      →  20 / 4 = 5
%  resto        →  7 % 2 = 1 (sobra 1 al dividir 7÷2)
** potencia     →  2 ** 3 = 8 (2 × 2 × 2)

⚖️ OPERADORES DE COMPARACIÓN (dan true o false)

===  ¿Son iguales? (valor Y tipo)    →  5 === 5 ✓ true
                                      →  5 === "5" ✗ false
!==  ¿Son diferentes?                →  5 !== 3 ✓ true
>    ¿Es mayor que?                  →  10 > 5 ✓ true
<    ¿Es menor que?                  →  3 < 8 ✓ true
>=   ¿Es mayor o igual?              →  5 >= 5 ✓ true
<=   ¿Es menor o igual?              →  4 <= 4 ✓ true

⚠️ IMPORTANTE: Siempre usa === (tres signos), no == (dos signos)
== puede dar resultados inesperados.

🧠 OPERADORES LÓGICOS (para combinar condiciones)

&&  AND (Y) - AMBOS deben ser verdaderos
    Ejemplo: edad >= 18 && tieneLicencia
    "Tiene 18+ Y tiene licencia"

||  OR (O) - AL MENOS UNO debe ser verdadero  
    Ejemplo: esAdmin || esModerador
    "Es admin O es moderador"

!   NOT (NO) - Invierte el valor
    Ejemplo: !estaLloviendo
    "NO está lloviendo"

❓ CONDICIONAL IF (tomar decisiones)

if (condición) {
    // Esto se ejecuta SI la condición es verdadera
} else {
    // Esto se ejecuta SI la condición es falsa
}`,

    ejemplos: `// 🔢 OPERADORES MATEMÁTICOS

const precio = 100;
const descuento = 20;
const precioFinal = precio - descuento;

console.log(precioFinal); // 80

// Porcentajes
const porcentaje = 15;
const descuentoPorcentaje = precio * (porcentaje / 100);
console.log(descuentoPorcentaje); // 15

// ⚖️ COMPARACIONES

const edad = 20;
const edadMinima = 18;

console.log(edad >= edadMinima); // true (20 es mayor o igual a 18)
console.log(edad === 18);        // false (20 no es igual a 18)
console.log(edad !== 18);        // true (20 es diferente de 18)

// ⚠️ Por qué usar === y no ==
console.log(5 == "5");   // true (¡PELIGRO! Convierte tipos)
console.log(5 === "5");  // false (CORRECTO: número ≠ texto)

// 🧠 OPERADORES LÓGICOS

const tieneDinero = true;
const tieneHambre = true;

// && (AND) - Ambos deben ser true
if (tieneDinero && tieneHambre) {
    console.log("¡Puedes comprar comida!");
}

// || (OR) - Al menos uno debe ser true
const esFinDeSemana = false;
const esFeriado = true;

if (esFinDeSemana || esFeriado) {
    console.log("¡Día libre!");
}

// 🔀 CONDICIONAL IF-ELSE

const hora = 14;

if (hora < 12) {
    console.log("Buenos días ☀️");
} else if (hora < 18) {
    console.log("Buenas tardes 🌤️");
} else {
    console.log("Buenas noches 🌙");
}

// ❓ OPERADOR TERNARIO (if corto, en una línea)
// condición ? valorSiTrue : valorSiFalse

const esMayorDeEdad = edad >= 18 ? "Sí" : "No";
console.log(esMayorDeEdad); // "Sí"`,

    ejercicio: `// 🎯 EJERCICIO: Calculadora de descuentos
//
// REGLAS DEL NEGOCIO:
// - Si el cliente es VIP → 20% de descuento
// - Si compra 3 o más productos → 10% adicional
// - Calcular el precio final y cuánto ahorra

// DATOS INICIALES (puedes cambiarlos para probar)
const precioProducto = 50;
const cantidad = 4;
const esClienteVIP = true;

// TU TAREA: Completa el código

// 1. Calcula el precio total (precio × cantidad)
const precioTotal = 0; // ← Escribe la fórmula

// 2. Calcula el descuento VIP (20% si es VIP, 0% si no)
//    Pista: usa el operador ternario
const descuentoVIP = 0; // ← Escribe la fórmula

// 3. Calcula el descuento por cantidad (10% si compra 3+)
const descuentoCantidad = 0; // ← Escribe la fórmula

// 4. Calcula el descuento total en pesos
const descuentoTotal = 0; // ← Escribe la fórmula

// 5. Calcula el precio final
const precioFinal = 0; // ← Escribe la fórmula

// Muestra los resultados
console.log("Precio total:", precioTotal);
console.log("Descuento:", descuentoTotal);
console.log("Precio final:", precioFinal);`,

    solucion: `// ✅ SOLUCIÓN

const precioProducto = 50;
const cantidad = 4;
const esClienteVIP = true;

// 1. Precio total
const precioTotal = precioProducto * cantidad; // 200

// 2. Descuento VIP: 20% si es VIP, 0% si no
const descuentoVIP = esClienteVIP ? 0.20 : 0; // 0.20

// 3. Descuento cantidad: 10% si compra 3 o más
const descuentoCantidad = cantidad >= 3 ? 0.10 : 0; // 0.10

// 4. Descuento total en pesos
const porcentajeTotal = descuentoVIP + descuentoCantidad; // 0.30 (30%)
const descuentoTotal = precioTotal * porcentajeTotal; // 60

// 5. Precio final
const precioFinal = precioTotal - descuentoTotal; // 140

// Mostrar resultados
console.log(\`
💰 RESUMEN DE COMPRA
━━━━━━━━━━━━━━━━━━━━━
📦 Productos: \${cantidad} x $\${precioProducto}
💵 Subtotal: $\${precioTotal}
🎫 Cliente VIP: \${esClienteVIP ? "Sí (20%)" : "No"}
📦 Descuento cantidad: \${cantidad >= 3 ? "Sí (10%)" : "No"}
🏷️ Descuento total: $\${descuentoTotal} (\${porcentajeTotal * 100}%)
✨ TOTAL A PAGAR: $\${precioFinal}
\`);

// 🎓 CONCEPTOS USADOS:
// - Operadores matemáticos: * + -
// - Operador ternario: condición ? siTrue : siFalse
// - Comparaciones: >= 
// - Template literals con \${}`,

    buenasPracticas: [
      'SIEMPRE usa === en vez de == (igualdad estricta)',
      'SIEMPRE usa !== en vez de != (diferencia estricta)',
      'El operador ternario es útil para valores simples',
      'Para lógica compleja, usa if-else (más legible)',
      'Guarda resultados intermedios en variables descriptivas',
      'Nombra booleanos como preguntas: esVIP, tieneCuenta, puedeComprar'
    ]
  },

  3: {
    titulo: 'Funciones',
    teoria: `Las FUNCIONES son como "recetas" o "instrucciones guardadas" que puedes usar una y otra vez.

🎯 ¿PARA QUÉ SIRVEN?
Imagina que tienes que calcular el IVA (19%) de muchos productos.
Sin funciones, escribirías lo mismo muchas veces:

const iva1 = 100 * 0.19;  // 19
const iva2 = 250 * 0.19;  // 47.5
const iva3 = 500 * 0.19;  // 95

Con una función, lo escribes UNA VEZ y la usas siempre:

const calcularIVA = (precio) => precio * 0.19;

calcularIVA(100);  // 19
calcularIVA(250);  // 47.5
calcularIVA(500);  // 95

📝 ANATOMÍA DE UNA FUNCIÓN (Arrow Function)

const nombreFuncion = (parametros) => {
    // código que se ejecuta
    return resultado;
};

• const nombreFuncion → El nombre que le das
• (parametros) → Datos que recibe (como ingredientes)
• => → La "flecha" que indica que es una función
• { } → El cuerpo de la función
• return → Lo que devuelve (el resultado)

✨ VERSIONES CORTAS

// Si solo hay UNA línea, puedes quitar {} y return:
const duplicar = (numero) => numero * 2;

// Si solo hay UN parámetro, puedes quitar ():
const duplicar = numero => numero * 2;

// Sin parámetros:
const saludar = () => "¡Hola!";

📦 PARÁMETROS = Lo que RECIBE la función
📤 RETURN = Lo que DEVUELVE la función

Ejemplo de la vida real:
🍕 Función "hacerPizza"
   Parámetros: tipo de masa, ingredientes
   Return: la pizza terminada`,

    ejemplos: `// 📝 FUNCIONES BÁSICAS

// Función que saluda
const saludar = (nombre) => {
    return \`¡Hola, \${nombre}!\`;
};

console.log(saludar("María")); // ¡Hola, María!
console.log(saludar("Carlos")); // ¡Hola, Carlos!

// Versión corta (una sola línea)
const saludarCorto = nombre => \`¡Hola, \${nombre}!\`;

// 🔢 FUNCIÓN QUE CALCULA

const calcularAreaRectangulo = (base, altura) => {
    const area = base * altura;
    return area;
};

console.log(calcularAreaRectangulo(5, 3)); // 15
console.log(calcularAreaRectangulo(10, 2)); // 20

// Versión corta
const area = (base, altura) => base * altura;

// 💰 FUNCIÓN CON LÓGICA

const calcularPrecioConIVA = (precio) => {
    const iva = precio * 0.19;
    const total = precio + iva;
    return total;
};

console.log(calcularPrecioConIVA(100)); // 119

// 🎯 PARÁMETROS CON VALOR POR DEFECTO
// Si no pasas el parámetro, usa el valor por defecto

const saludarConHora = (nombre, hora = "día") => {
    return \`Buenos/as \${hora}, \${nombre}\`;
};

console.log(saludarConHora("Ana"));           // Buenos/as día, Ana
console.log(saludarConHora("Ana", "noches")); // Buenos/as noches, Ana

// 📊 FUNCIÓN QUE EVALÚA Y DECIDE

const determinarNota = (puntaje) => {
    if (puntaje >= 90) return "A - Excelente";
    if (puntaje >= 80) return "B - Muy bien";
    if (puntaje >= 70) return "C - Bien";
    if (puntaje >= 60) return "D - Suficiente";
    return "F - Reprobado";
};

console.log(determinarNota(85)); // B - Muy bien
console.log(determinarNota(55)); // F - Reprobado`,

    ejercicio: `// 🎯 EJERCICIO: Sistema de calificaciones
//
// Crea 3 funciones:

// 1. calcularPromedio(nota1, nota2, nota3)
//    Recibe 3 notas y devuelve el promedio
//    Ejemplo: calcularPromedio(80, 90, 70) → 80
//
//    Pista: promedio = (nota1 + nota2 + nota3) / 3

const calcularPromedio = (nota1, nota2, nota3) => {
    // Escribe tu código aquí
};

// 2. determinarEstado(promedio)
//    Si el promedio es >= 60, devuelve "Aprobado"
//    Si es menor, devuelve "Reprobado"

const determinarEstado = (promedio) => {
    // Escribe tu código aquí
};

// 3. obtenerCalificacionLetra(promedio)
//    90+  → "A"
//    80+  → "B"  
//    70+  → "C"
//    60+  → "D"
//    <60  → "F"

const obtenerCalificacionLetra = (promedio) => {
    // Escribe tu código aquí
};

// PRUEBA TUS FUNCIONES:
const miPromedio = calcularPromedio(85, 90, 78);
console.log("Promedio:", miPromedio);
console.log("Estado:", determinarEstado(miPromedio));
console.log("Letra:", obtenerCalificacionLetra(miPromedio));`,

    solucion: `// ✅ SOLUCIÓN

// 1. Calcular promedio de 3 notas
const calcularPromedio = (nota1, nota2, nota3) => {
    const suma = nota1 + nota2 + nota3;
    const promedio = suma / 3;
    return promedio;
};

// Versión corta:
// const calcularPromedio = (n1, n2, n3) => (n1 + n2 + n3) / 3;

// 2. Determinar si aprobó o reprobó
const determinarEstado = (promedio) => {
    if (promedio >= 60) {
        return "✅ Aprobado";
    } else {
        return "❌ Reprobado";
    }
};

// Versión corta con ternario:
// const determinarEstado = promedio => promedio >= 60 ? "✅ Aprobado" : "❌ Reprobado";

// 3. Obtener letra de calificación
const obtenerCalificacionLetra = (promedio) => {
    if (promedio >= 90) return "A - Excelente";
    if (promedio >= 80) return "B - Muy bien";
    if (promedio >= 70) return "C - Bien";
    if (promedio >= 60) return "D - Suficiente";
    return "F - Insuficiente";
};

// PRUEBAS
const miPromedio = calcularPromedio(85, 90, 78);

console.log(\`
📊 REPORTE ACADÉMICO
━━━━━━━━━━━━━━━━━━━━
📝 Notas: 85, 90, 78
📈 Promedio: \${miPromedio.toFixed(1)}
🎯 Calificación: \${obtenerCalificacionLetra(miPromedio)}
📋 Estado: \${determinarEstado(miPromedio)}
\`);

// 🎓 NOTA: .toFixed(1) muestra solo 1 decimal
// Ejemplo: 84.333333 → "84.3"`,

    buenasPracticas: [
      'Usa nombres descriptivos: calcularIVA, no calc o x',
      'Una función = una tarea específica',
      'Mantén las funciones cortas (idealmente menos de 20 líneas)',
      'Usa parámetros por defecto cuando tenga sentido',
      'Usa return temprano para evitar else anidados',
      'Documenta qué hace la función con comentarios'
    ]
  },

  4: {
    titulo: 'Arrays y sus Métodos',
    teoria: `Los ARRAYS son LISTAS ordenadas de elementos.

🎯 ¿CUÁNDO USAR UN ARRAY?
Cuando tienes varios datos del mismo tipo:
• Lista de nombres de estudiantes
• Lista de productos en un carrito
• Lista de tareas pendientes

📦 CREAR UN ARRAY

const frutas = ["manzana", "banana", "naranja"];
//              índice 0    índice 1   índice 2

⚠️ IMPORTANTE: Los índices empiezan en 0, no en 1.

📋 ACCEDER A ELEMENTOS

frutas[0]  → "manzana" (el primero)
frutas[1]  → "banana" (el segundo)
frutas[2]  → "naranja" (el tercero)

🔧 MÉTODOS PRINCIPALES

1️⃣ .push() → AGREGAR al final
   frutas.push("kiwi")
   Resultado: ["manzana", "banana", "naranja", "kiwi"]

2️⃣ .pop() → QUITAR el último
   frutas.pop()
   Resultado: ["manzana", "banana"]

3️⃣ .length → CANTIDAD de elementos
   frutas.length → 3

4️⃣ .forEach() → RECORRER cada elemento
   frutas.forEach(fruta => console.log(fruta))
   // Muestra: manzana, banana, naranja

5️⃣ .map() → TRANSFORMAR cada elemento (crea nuevo array)
   const mayusculas = frutas.map(f => f.toUpperCase())
   // ["MANZANA", "BANANA", "NARANJA"]

6️⃣ .filter() → FILTRAR elementos (crea nuevo array)
   const largas = frutas.filter(f => f.length > 5)
   // ["manzana", "banana", "naranja"]

7️⃣ .find() → BUSCAR primer elemento que cumple condición
   const encontrada = frutas.find(f => f === "banana")
   // "banana"`,

    ejemplos: `// 📦 CREAR ARRAYS

const numeros = [1, 2, 3, 4, 5];
const nombres = ["Ana", "Luis", "María"];
const mezclado = [1, "hola", true, null]; // Puede tener tipos mixtos

// 📋 ACCEDER A ELEMENTOS

console.log(nombres[0]); // "Ana" (el primero)
console.log(nombres[1]); // "Luis" (el segundo)
console.log(nombres[nombres.length - 1]); // "María" (el último)

// 🔧 AGREGAR Y QUITAR

const tareas = ["Estudiar", "Ejercicio"];

tareas.push("Cocinar");      // Agrega al final
console.log(tareas);         // ["Estudiar", "Ejercicio", "Cocinar"]

tareas.pop();                // Quita el último
console.log(tareas);         // ["Estudiar", "Ejercicio"]

// 🔄 RECORRER CON forEach
// Ejecuta una función para CADA elemento

nombres.forEach((nombre, indice) => {
    console.log(\`\${indice + 1}. \${nombre}\`);
});
// 1. Ana
// 2. Luis
// 3. María

// 🔄 TRANSFORMAR CON map
// Crea un NUEVO array con los elementos transformados

const numerosDobles = numeros.map(n => n * 2);
console.log(numerosDobles); // [2, 4, 6, 8, 10]

const saludos = nombres.map(nombre => \`Hola, \${nombre}!\`);
console.log(saludos); // ["Hola, Ana!", "Hola, Luis!", "Hola, María!"]

// 🔍 FILTRAR CON filter
// Crea un NUEVO array solo con elementos que cumplan la condición

const mayoresDe3 = numeros.filter(n => n > 3);
console.log(mayoresDe3); // [4, 5]

const nombresCortos = nombres.filter(n => n.length <= 4);
console.log(nombresCortos); // ["Ana", "Luis"]

// 🔍 BUSCAR CON find
// Encuentra el PRIMER elemento que cumple la condición

const encontrado = numeros.find(n => n > 3);
console.log(encontrado); // 4 (el primero mayor que 3)`,

    ejercicio: `// 🎯 EJERCICIO: Gestión de lista de compras

const listaCompras = [
    { nombre: "Leche", precio: 3.50, comprado: false },
    { nombre: "Pan", precio: 2.00, comprado: true },
    { nombre: "Huevos", precio: 4.50, comprado: false },
    { nombre: "Queso", precio: 6.00, comprado: true },
    { nombre: "Frutas", precio: 8.00, comprado: false }
];

// 1. Usa .filter() para obtener solo los productos NO comprados
const pendientes = null; // ← Tu código

// 2. Usa .map() para obtener solo los NOMBRES de todos los productos
const nombresProductos = null; // ← Tu código

// 3. Usa .filter() para obtener productos con precio mayor a 4
const productosCaros = null; // ← Tu código

// 4. Usa .forEach() para mostrar cada producto pendiente
// Formato: "❌ Leche - $3.50"
// Tu código aquí

// 5. Calcula el total de productos comprados
// Pista: filtra los comprados, luego suma sus precios
const totalComprado = 0; // ← Tu código

console.log("Pendientes:", pendientes);
console.log("Nombres:", nombresProductos);
console.log("Caros:", productosCaros);
console.log("Total comprado: $", totalComprado);`,

    solucion: `// ✅ SOLUCIÓN

const listaCompras = [
    { nombre: "Leche", precio: 3.50, comprado: false },
    { nombre: "Pan", precio: 2.00, comprado: true },
    { nombre: "Huevos", precio: 4.50, comprado: false },
    { nombre: "Queso", precio: 6.00, comprado: true },
    { nombre: "Frutas", precio: 8.00, comprado: false }
];

// 1. Productos NO comprados (.filter)
const pendientes = listaCompras.filter(producto => !producto.comprado);
// [Leche, Huevos, Frutas]

// 2. Solo los nombres (.map)
const nombresProductos = listaCompras.map(producto => producto.nombre);
// ["Leche", "Pan", "Huevos", "Queso", "Frutas"]

// 3. Productos con precio > 4 (.filter)
const productosCaros = listaCompras.filter(producto => producto.precio > 4);
// [Huevos, Queso, Frutas]

// 4. Mostrar pendientes (.forEach)
console.log("📋 LISTA DE PENDIENTES:");
pendientes.forEach(producto => {
    console.log(\`  ❌ \${producto.nombre} - $\${producto.precio.toFixed(2)}\`);
});

// 5. Total de productos comprados
const comprados = listaCompras.filter(p => p.comprado);
let totalComprado = 0;
comprados.forEach(producto => {
    totalComprado = totalComprado + producto.precio;
});
// Alternativa más corta (avanzado):
// const totalComprado = comprados.reduce((suma, p) => suma + p.precio, 0);

console.log(\`
💰 RESUMEN
━━━━━━━━━━━━━━━━
✅ Comprados: \${comprados.length} productos
❌ Pendientes: \${pendientes.length} productos
💵 Total gastado: $\${totalComprado.toFixed(2)}
\`);`,

    buenasPracticas: [
      'Usa const para arrays (puedes modificar contenido, no reasignar)',
      '.map() y .filter() NO modifican el array original',
      '.forEach() es para recorrer, .map() para transformar',
      'Usa nombres en plural para arrays: productos, nombres, tareas',
      'Accede al último elemento con array[array.length - 1]',
      'Verifica si un array está vacío con array.length === 0'
    ]
  },

  5: {
    titulo: 'Objetos',
    teoria: `Los OBJETOS son como "fichas" o "tarjetas" que agrupan información relacionada.

🎯 ¿CUÁNDO USAR UN OBJETO?
Cuando tienes varios datos que describen UNA cosa:

Ejemplo: Un usuario
- nombre: "María"
- edad: 25  
- email: "maria@email.com"
- activo: true

Esto es mejor como OBJETO que como variables separadas.

📦 CREAR UN OBJETO

const usuario = {
    nombre: "María",
    edad: 25,
    email: "maria@email.com",
    activo: true
};

Cada línea tiene: clave: valor

🔍 ACCEDER A PROPIEDADES

// Forma 1: Con punto (la más común)
usuario.nombre   → "María"
usuario.edad     → 25

// Forma 2: Con corchetes (cuando el nombre es variable)
usuario["nombre"]  → "María"

📝 MODIFICAR PROPIEDADES

usuario.edad = 26;  // Cambiar valor
usuario.telefono = "123456";  // Agregar nueva propiedad

🔓 DESESTRUCTURACIÓN (extraer propiedades)
Es una forma corta de crear variables desde un objeto:

// Forma larga:
const nombre = usuario.nombre;
const edad = usuario.edad;

// Forma corta (desestructuración):
const { nombre, edad } = usuario;

📦 SPREAD OPERATOR (...) → Copiar/combinar objetos

const copia = { ...usuario };
const actualizado = { ...usuario, edad: 26 };`,

    ejemplos: `// 📦 CREAR OBJETOS

const producto = {
    id: 1,
    nombre: "Laptop Gaming",
    precio: 1200,
    enStock: true,
    categorias: ["electrónica", "computadores"]
};

// 🔍 ACCEDER A PROPIEDADES

console.log(producto.nombre);    // "Laptop Gaming"
console.log(producto.precio);    // 1200
console.log(producto.categorias[0]); // "electrónica"

// 📝 MODIFICAR

producto.precio = 1100;  // Cambiar precio
producto.descuento = 10; // Agregar nueva propiedad
console.log(producto);

// 🔓 DESESTRUCTURACIÓN

const { nombre, precio, enStock } = producto;
console.log(nombre);  // "Laptop Gaming"
console.log(precio);  // 1100

// Renombrar al desestructurar
const { nombre: nombreProducto } = producto;
console.log(nombreProducto); // "Laptop Gaming"

// 📦 SPREAD OPERATOR

// Copiar objeto
const copia = { ...producto };

// Combinar con cambios
const productoActualizado = {
    ...producto,
    precio: 999,
    oferta: true
};

console.log(productoActualizado);
// { id: 1, nombre: "Laptop Gaming", precio: 999, oferta: true, ... }

// 👤 OBJETOS CON MÉTODOS (funciones dentro del objeto)

const calculadora = {
    sumar: (a, b) => a + b,
    restar: (a, b) => a - b,
    multiplicar: (a, b) => a * b
};

console.log(calculadora.sumar(5, 3));      // 8
console.log(calculadora.multiplicar(4, 2)); // 8

// 📋 RECORRER PROPIEDADES

const persona = { nombre: "Ana", edad: 30, ciudad: "Lima" };

// Object.keys() → array de claves
console.log(Object.keys(persona)); // ["nombre", "edad", "ciudad"]

// Object.values() → array de valores
console.log(Object.values(persona)); // ["Ana", 30, "Lima"]

// Object.entries() → array de [clave, valor]
Object.entries(persona).forEach(([clave, valor]) => {
    console.log(\`\${clave}: \${valor}\`);
});`,

    ejercicio: `// 🎯 EJERCICIO: Sistema de productos

const producto = {
    nombre: "Auriculares Bluetooth",
    precioOriginal: 80,
    stock: 15,
    categoria: "Audio",
    activo: true
};

// 1. Crea una función aplicarDescuento(producto, porcentaje)
//    Debe retornar un NUEVO objeto con:
//    - Todas las propiedades originales
//    - Nueva propiedad: descuento (el porcentaje)
//    - Nueva propiedad: precioFinal (precio con descuento)
//    - Nueva propiedad: ahorro (cuánto se ahorra)

const aplicarDescuento = (producto, porcentaje) => {
    // Tu código aquí
    // Pista: usa spread operator {...producto}
};

// 2. Usa la función para aplicar 25% de descuento
const productoConDescuento = null; // ← Tu código

// 3. Usa desestructuración para extraer nombre, precioOriginal y precioFinal
// const { ... } = productoConDescuento;

// 4. Muestra un resumen bonito en consola
console.log(productoConDescuento);`,

    solucion: `// ✅ SOLUCIÓN

const producto = {
    nombre: "Auriculares Bluetooth",
    precioOriginal: 80,
    stock: 15,
    categoria: "Audio",
    activo: true
};

// 1. Función para aplicar descuento
const aplicarDescuento = (producto, porcentaje) => {
    const ahorro = producto.precioOriginal * (porcentaje / 100);
    const precioFinal = producto.precioOriginal - ahorro;
    
    return {
        ...producto,                    // Copia todas las propiedades
        descuento: porcentaje,         // Agrega el porcentaje
        ahorro: ahorro,                // Cuánto ahorra
        precioFinal: precioFinal       // Precio final
    };
};

// 2. Aplicar 25% de descuento
const productoConDescuento = aplicarDescuento(producto, 25);

// 3. Desestructuración
const { nombre, precioOriginal, precioFinal, ahorro, descuento } = productoConDescuento;

// 4. Mostrar resumen
console.log(\`
🎧 OFERTA ESPECIAL
━━━━━━━━━━━━━━━━━━━━━━━━━
📦 Producto: \${nombre}
💰 Precio original: $\${precioOriginal}
🏷️ Descuento: \${descuento}%
💵 Te ahorras: $\${ahorro}
✨ PRECIO FINAL: $\${precioFinal}
━━━━━━━━━━━━━━━━━━━━━━━━━
\`);

// Verificar que el objeto original NO cambió
console.log("Objeto original:", producto);
console.log("Objeto con descuento:", productoConDescuento);`,

    buenasPracticas: [
      'Usa const para objetos (puedes modificar propiedades, no reasignar)',
      'Desestructuración hace el código más limpio',
      'Spread operator (...) para copias y combinaciones',
      'No modifiques el objeto original, crea copias',
      'Usa nombres descriptivos para las propiedades',
      'Agrupa datos relacionados en objetos, no variables sueltas'
    ]
  }
};
