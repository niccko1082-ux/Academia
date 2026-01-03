// Contenido del módulo JavaScript Fundamentos - OPTIMIZADO PARA PRINCIPIANTES ABSOLUTOS
// Cada lección incluye: teoria clara, ejemplos paso a paso, ejercicio guiado con pistas

export const jsFundamentos = {
    0: {
        titulo: 'Tu Primer Programa',
        teoria: `Bienvenido a JavaScript!

QUE ES JAVASCRIPT?
JavaScript es el lenguaje que hace que las paginas web sean INTERACTIVAS.

Piensa en una pagina web como una casa:
- HTML es la estructura (paredes, techo, puertas)
- CSS es la decoracion (colores, muebles)
- JavaScript es la electricidad (hace que las cosas funcionen)

Ejemplos de JavaScript en accion:
- Cuando haces clic en "Me gusta" y cambia de color
- Cuando un menu se abre al hacer clic
- Cuando un formulario te dice "contraseña muy corta"

QUE ES console.log()?
Es como un "mensajero" que te muestra informacion en pantalla.

Sintaxis:
console.log("tu mensaje aqui");

Nota importante:
- El texto va entre comillas " "
- Al final lleva punto y coma ;

VOCABULARIO DE ESTA LECCION:
- console.log(): Muestra mensajes en la consola
- String: Texto entre comillas (ejemplo: "Hola")
- Sintaxis: Las reglas de como escribir codigo`,

        ejemplos: `// EJEMPLO 1: Mostrar un mensaje de texto
// Los textos SIEMPRE van entre comillas

console.log("Hola mundo");
// Resultado: Hola mundo

// EJEMPLO 2: Mostrar un numero
// Los numeros NO llevan comillas

console.log(42);
// Resultado: 42

// EJEMPLO 3: Hacer una operacion matematica
// JavaScript calcula el resultado automaticamente

console.log(5 + 3);
// Resultado: 8

// EJEMPLO 4: Combinar texto y numeros
// Usa coma para separar multiples valores

console.log("Mi edad es:", 25);
// Resultado: Mi edad es: 25`,

        ejercicio: `// TU PRIMER EJERCICIO
// 
// OBJETIVO: Mostrar "Hola" en la consola
//
// INSTRUCCIONES (sigue estos pasos):
// 1. Borra el comentario de abajo
// 2. Escribe: console.log("Hola");
// 3. Presiona el boton "Ejecutar"
//
// Escribe tu codigo aqui abajo:
`,

        // Validacion esperada
        expectedOutput: "Hola",

        // Pistas progresivas
        hints: [
            'Recuerda que console.log() muestra mensajes. Escribe: console.log("Hola");',
            'Asegurate de que "Hola" este entre comillas dobles: "Hola"',
            'La respuesta completa es: console.log("Hola");'
        ],

        solucion: `// SOLUCION:

console.log("Hola");

// Cuando presionas Ejecutar, veras "Hola" en la consola.
// 
// EXPLICACION:
// - console.log() es la funcion que muestra mensajes
// - "Hola" es el texto que queremos mostrar
// - Las comillas " " indican que es texto
// - El punto y coma ; termina la instruccion`,

        buenasPracticas: [
            'Siempre escribe el texto entre comillas " "',
            'No olvides el punto y coma ; al final',
            'Si hay un error, revisa que no falten parentesis ()',
            'Los numeros van SIN comillas, el texto va CON comillas'
        ]
    },

    1: {
        titulo: 'Variables: Guardando Informacion',
        teoria: `QUE ES UNA VARIABLE?
Una variable es como una CAJA con una ETIQUETA donde guardas informacion.

Ejemplo de la vida real:
Imagina una caja etiquetada "nombre" que contiene "Maria"
- La etiqueta es el NOMBRE de la variable
- El contenido es el VALOR de la variable

COMO CREAR UNA VARIABLE:

const nombre = "Maria";
      ------   -------
         |         |
    etiqueta    contenido

Partes de una variable:
1. const - Palabra clave (significa "crear variable")
2. nombre - El nombre que TU eliges
3. = - Significa "guardar"
4. "Maria" - El valor que guardas
5. ; - Termina la linea

TIPOS DE DATOS (que puedes guardar):

1. TEXTO (String) - Siempre entre comillas
   const saludo = "Hola mundo";

2. NUMERO (Number) - Sin comillas
   const edad = 25;

3. VERDADERO/FALSO (Boolean)
   const esMayorDeEdad = true;

VOCABULARIO:
- const: Crea una variable que no cambia
- let: Crea una variable que puede cambiar
- String: Texto entre comillas
- Number: Numero (entero o decimal)
- Boolean: true (verdadero) o false (falso)`,

        ejemplos: `// CREAR VARIABLES CON TEXTO

const nombre = "Carlos";
console.log(nombre);
// Resultado: Carlos

// CREAR VARIABLES CON NUMEROS

const edad = 28;
console.log(edad);
// Resultado: 28

// CREAR VARIABLES BOOLEANAS

const tieneCuenta = true;
console.log(tieneCuenta);
// Resultado: true

// UNIR TEXTO Y VARIABLES

const saludo = "Hola, mi nombre es";
const miNombre = "Ana";
console.log(saludo, miNombre);
// Resultado: Hola, mi nombre es Ana

// OPERACIONES CON VARIABLES NUMERICAS

const precio = 100;
const descuento = 20;
const precioFinal = precio - descuento;
console.log("Precio final:", precioFinal);
// Resultado: Precio final: 80`,

        ejercicio: `// EJERCICIO: Crea tu primera variable
//
// OBJETIVO: Crear una variable llamada "miNombre" con tu nombre
//           y mostrarla en la consola
//
// PASOS:
// 1. Crea una variable: const miNombre = "TuNombre";
//    (reemplaza TuNombre con tu nombre real)
// 2. Muestra la variable: console.log(miNombre);
//
// Escribe tu codigo aqui:
`,

        expectedOutput: null, // Cualquier nombre es valido

        hints: [
            'Primero crea la variable: const miNombre = "Juan"; (usa tu nombre)',
            'Luego muestra la variable: console.log(miNombre);',
            'Ejemplo completo:\nconst miNombre = "Juan";\nconsole.log(miNombre);'
        ],

        solucion: `// SOLUCION:

const miNombre = "Carlos";
console.log(miNombre);

// Resultado: Carlos

// EXPLICACION:
// - const miNombre crea una variable llamada "miNombre"
// - = "Carlos" guarda el texto "Carlos" en esa variable
// - console.log(miNombre) muestra el CONTENIDO de la variable
//   (nota: miNombre va SIN comillas porque es una variable)`,

        buenasPracticas: [
            'Usa nombres descriptivos: "edad" es mejor que "x"',
            'Usa const por defecto (90% de las veces)',
            'Usa let cuando el valor va a cambiar despues',
            'Los nombres de variables no pueden tener espacios',
            'Usa camelCase: "miNombre" en vez de "mi_nombre"'
        ]
    },

    2: {
        titulo: 'Operaciones Matematicas',
        teoria: `JavaScript puede hacer matematicas como una calculadora!

OPERADORES MATEMATICOS:

+  Suma         5 + 3 = 8
-  Resta        10 - 4 = 6  
*  Multiplicar  6 * 2 = 12
/  Dividir      20 / 4 = 5

EJEMPLOS DE USO:

const suma = 10 + 5;        // 15
const resta = 20 - 8;       // 12
const multiplicar = 4 * 3;  // 12
const dividir = 15 / 3;     // 5

OPERACIONES CON VARIABLES:

const precio = 100;
const cantidad = 3;
const total = precio * cantidad;  // 300

ORDEN DE OPERACIONES:
JavaScript sigue las reglas matematicas normales:
1. Primero parentesis ()
2. Luego multiplicar * y dividir /
3. Finalmente sumar + y restar -

Ejemplo:
const resultado = 2 + 3 * 4;  // = 14 (no 20)
                              // Primero: 3 * 4 = 12
                              // Luego: 2 + 12 = 14

const conParentesis = (2 + 3) * 4;  // = 20
                                     // Primero: 2 + 3 = 5
                                     // Luego: 5 * 4 = 20`,

        ejemplos: `// SUMA

const a = 10;
const b = 5;
const suma = a + b;
console.log("La suma es:", suma);
// Resultado: La suma es: 15

// RESTA

const precio = 100;
const descuento = 15;
const precioFinal = precio - descuento;
console.log("Precio final:", precioFinal);
// Resultado: Precio final: 85

// MULTIPLICAR

const precioUnitario = 25;
const cantidad = 4;
const total = precioUnitario * cantidad;
console.log("Total a pagar:", total);
// Resultado: Total a pagar: 100

// DIVIDIR

const pizzaSlices = 8;
const personas = 4;
const porcionPorPersona = pizzaSlices / personas;
console.log("Porciones por persona:", porcionPorPersona);
// Resultado: Porciones por persona: 2

// COMBINANDO OPERACIONES

const precioProducto = 50;
const cantidadProducts = 3;
const envio = 10;
const totalConEnvio = (precioProducto * cantidadProducts) + envio;
console.log("Total con envio:", totalConEnvio);
// Resultado: Total con envio: 160`,

        ejercicio: `// EJERCICIO: Calcula el total de una compra
//
// SITUACION: Compraste 3 productos de $25 cada uno
//
// PASOS:
// 1. Crea una variable "precio" con valor 25
// 2. Crea una variable "cantidad" con valor 3
// 3. Crea una variable "total" que multiplique precio * cantidad
// 4. Muestra el total con console.log()
//
// El resultado debe ser: 75
//
// Escribe tu codigo aqui:
`,

        expectedOutput: "75",

        hints: [
            'Paso 1: const precio = 25;',
            'Paso 2: const cantidad = 3;',
            'Paso 3: const total = precio * cantidad;',
            'Paso 4: console.log(total);'
        ],

        solucion: `// SOLUCION:

const precio = 25;
const cantidad = 3;
const total = precio * cantidad;
console.log(total);

// Resultado: 75

// EXPLICACION:
// - precio guarda 25
// - cantidad guarda 3
// - total calcula 25 * 3 = 75
// - console.log(total) muestra 75`,

        buenasPracticas: [
            'Usa parentesis () para agrupar operaciones',
            'Guarda resultados intermedios en variables',
            'Usa nombres descriptivos: "precioTotal" mejor que "x"',
            'Revisa el orden de operaciones si el resultado es inesperado'
        ]
    },

    3: {
        titulo: 'Comparaciones y Decisiones',
        teoria: `Los programas necesitan tomar DECISIONES.
Por ejemplo: "Si el usuario tiene 18 o mas, puede entrar"

OPERADORES DE COMPARACION:
Comparan dos valores y dan true (verdadero) o false (falso)

===  Son iguales?         5 === 5   -> true
                          5 === 3   -> false

!==  Son diferentes?      5 !== 3   -> true
                          5 !== 5   -> false

>    Es mayor que?        10 > 5    -> true
<    Es menor que?        3 < 8     -> true

>=   Es mayor o igual?    5 >= 5    -> true
<=   Es menor o igual?    4 <= 4    -> true

CONDICIONAL IF (si):
Ejecuta codigo solo SI una condicion es verdadera

Estructura:
if (condicion) {
    // codigo si es verdadero
}

Ejemplo:
const edad = 20;
if (edad >= 18) {
    console.log("Eres mayor de edad");
}

IF - ELSE (si - sino):
Ejecuta un codigo SI es verdadero, OTRO codigo si es falso

if (condicion) {
    // codigo si es verdadero
} else {
    // codigo si es falso
}`,

        ejemplos: `// COMPARACIONES BASICAS

const edad = 20;

console.log(edad >= 18);  // true (20 es mayor o igual a 18)
console.log(edad === 18); // false (20 no es igual a 18)
console.log(edad > 25);   // false (20 no es mayor que 25)

// IF SIMPLE

const temperatura = 35;

if (temperatura > 30) {
    console.log("Hace calor!");
}
// Resultado: Hace calor!

// IF - ELSE

const hora = 14;

if (hora < 12) {
    console.log("Buenos dias");
} else {
    console.log("Buenas tardes");
}
// Resultado: Buenas tardes

// IF - ELSE IF - ELSE (multiples condiciones)

const nota = 85;

if (nota >= 90) {
    console.log("Excelente");
} else if (nota >= 80) {
    console.log("Muy bien");
} else if (nota >= 70) {
    console.log("Bien");
} else {
    console.log("Necesitas mejorar");
}
// Resultado: Muy bien`,

        ejercicio: `// EJERCICIO: Verificar mayoria de edad
//
// OBJETIVO: Crear un programa que diga si alguien
//           es mayor de edad (18 o mas) o menor de edad
//
// PASOS:
// 1. Crea una variable "edad" con el valor 16
// 2. Usa if-else para verificar:
//    - Si edad >= 18: muestra "Mayor de edad"
//    - Si no: muestra "Menor de edad"
//
// El resultado debe ser: Menor de edad
//
// Escribe tu codigo aqui:
`,

        expectedOutput: "Menor de edad",

        hints: [
            'Paso 1: const edad = 16;',
            'Paso 2: if (edad >= 18) { ... } else { ... }',
            'Dentro del if: console.log("Mayor de edad");',
            'Dentro del else: console.log("Menor de edad");'
        ],

        solucion: `// SOLUCION:

const edad = 16;

if (edad >= 18) {
    console.log("Mayor de edad");
} else {
    console.log("Menor de edad");
}

// Resultado: Menor de edad

// EXPLICACION:
// - edad es 16
// - 16 >= 18 es FALSE (16 no es mayor o igual a 18)
// - Como es false, ejecuta el bloque "else"
// - Muestra "Menor de edad"`,

        buenasPracticas: [
            'Siempre usa === para comparar (no ==)',
            'Usa llaves {} aunque sea una sola linea',
            'Indenta el codigo dentro de if/else para mejor lectura',
            'El else es opcional, solo usalo si lo necesitas'
        ]
    },

    4: {
        titulo: 'Funciones: Codigo Reutilizable',
        teoria: `QUE ES UNA FUNCION?
Una funcion es como una RECETA que puedes usar muchas veces.

Ejemplo de la vida real:
Imagina la receta para hacer cafe:
1. Hervir agua
2. Agregar cafe
3. Servir en taza

No escribes la receta cada vez que quieres cafe.
La escribes UNA VEZ y la usas cuando la necesitas.

CREAR UNA FUNCION:

const nombreFuncion = () => {
    // instrucciones aqui
};

EJEMPLO SIMPLE:

const saludar = () => {
    console.log("Hola!");
};

LLAMAR (usar) LA FUNCION:

saludar();  // Esto ejecuta la funcion
// Resultado: Hola!

FUNCIONES CON PARAMETROS:
Los parametros son "ingredientes" que le pasas a la funcion

const saludar = (nombre) => {
    console.log("Hola " + nombre);
};

saludar("Maria");  // Hola Maria
saludar("Carlos"); // Hola Carlos

FUNCIONES QUE DEVUELVEN VALORES:
Usan "return" para devolver un resultado

const sumar = (a, b) => {
    return a + b;
};

const resultado = sumar(5, 3);
console.log(resultado);  // 8`,

        ejemplos: `// FUNCION SIN PARAMETROS

const decirHola = () => {
    console.log("Hola mundo!");
};

decirHola();
// Resultado: Hola mundo!

// FUNCION CON UN PARAMETRO

const saludar = (nombre) => {
    console.log("Hola " + nombre + "!");
};

saludar("Ana");
// Resultado: Hola Ana!

saludar("Luis");
// Resultado: Hola Luis!

// FUNCION CON DOS PARAMETROS

const sumar = (numero1, numero2) => {
    const resultado = numero1 + numero2;
    return resultado;
};

console.log(sumar(10, 5));
// Resultado: 15

console.log(sumar(100, 200));
// Resultado: 300

// FUNCION PRACTICA: CALCULAR DESCUENTO

const calcularDescuento = (precio, porcentaje) => {
    const descuento = precio * (porcentaje / 100);
    const precioFinal = precio - descuento;
    return precioFinal;
};

console.log("Precio final:", calcularDescuento(100, 20));
// Resultado: Precio final: 80`,

        ejercicio: `// EJERCICIO: Crea una funcion para duplicar numeros
//
// OBJETIVO: Crear una funcion llamada "duplicar"
//           que reciba un numero y devuelva el doble
//
// PASOS:
// 1. Crea la funcion: const duplicar = (numero) => { ... }
// 2. Dentro, usa return para devolver numero * 2
// 3. Llama la funcion: console.log(duplicar(5));
//
// El resultado debe ser: 10
//
// Escribe tu codigo aqui:
`,

        expectedOutput: "10",

        hints: [
            'Crea la funcion: const duplicar = (numero) => { return numero * 2; };',
            'Luego llamala: console.log(duplicar(5));',
            'Codigo completo:\nconst duplicar = (numero) => {\n    return numero * 2;\n};\nconsole.log(duplicar(5));'
        ],

        solucion: `// SOLUCION:

const duplicar = (numero) => {
    return numero * 2;
};

console.log(duplicar(5));

// Resultado: 10

// EXPLICACION:
// - duplicar es una funcion que recibe "numero"
// - Calcula numero * 2 (5 * 2 = 10)
// - return devuelve el resultado (10)
// - console.log muestra el valor devuelto`,

        buenasPracticas: [
            'Usa nombres de funcion que describan lo que hace',
            'Una funcion = una tarea especifica',
            'Usa return para devolver valores',
            'Los parametros son como variables locales de la funcion'
        ]
    },

    5: {
        titulo: 'Arrays: Listas de Datos',
        teoria: `QUE ES UN ARRAY?
Un array es una LISTA ordenada de elementos.

Ejemplo de la vida real:
Lista de compras:
1. Leche
2. Pan
3. Huevos

En JavaScript:
const listaCompras = ["Leche", "Pan", "Huevos"];

CREAR UN ARRAY:

const numeros = [1, 2, 3, 4, 5];
const nombres = ["Ana", "Luis", "Maria"];

ACCEDER A ELEMENTOS:
Los indices empiezan en 0 (no en 1)

const frutas = ["Manzana", "Banana", "Naranja"];
//               indice 0   indice 1   indice 2

console.log(frutas[0]);  // "Manzana"
console.log(frutas[1]);  // "Banana"
console.log(frutas[2]);  // "Naranja"

METODOS UTILES:

.length - Cantidad de elementos
frutas.length  // 3

.push() - Agregar al final
frutas.push("Kiwi");  // Agrega "Kiwi" al final

.pop() - Quitar el ultimo
frutas.pop();  // Quita el ultimo elemento`,

        ejemplos: `// CREAR UN ARRAY

const colores = ["Rojo", "Verde", "Azul"];
console.log(colores);
// Resultado: ["Rojo", "Verde", "Azul"]

// ACCEDER A ELEMENTOS

console.log("Primer color:", colores[0]);
// Resultado: Primer color: Rojo

console.log("Segundo color:", colores[1]);
// Resultado: Segundo color: Verde

// CANTIDAD DE ELEMENTOS

console.log("Total colores:", colores.length);
// Resultado: Total colores: 3

// AGREGAR ELEMENTO

colores.push("Amarillo");
console.log(colores);
// Resultado: ["Rojo", "Verde", "Azul", "Amarillo"]

// QUITAR ULTIMO ELEMENTO

colores.pop();
console.log(colores);
// Resultado: ["Rojo", "Verde", "Azul"]

// RECORRER (ver todos los elementos)

const numeros = [10, 20, 30];

numeros.forEach((numero) => {
    console.log("Numero:", numero);
});
// Resultado:
// Numero: 10
// Numero: 20
// Numero: 30`,

        ejercicio: `// EJERCICIO: Trabajar con un array
//
// OBJETIVO: Crear un array de 3 numeros y mostrar
//           el primer elemento
//
// PASOS:
// 1. Crea un array: const numeros = [5, 10, 15];
// 2. Muestra el primer elemento: console.log(numeros[0]);
//
// El resultado debe ser: 5
//
// Escribe tu codigo aqui:
`,

        expectedOutput: "5",

        hints: [
            'Paso 1: const numeros = [5, 10, 15];',
            'Paso 2: console.log(numeros[0]);',
            'Recuerda: el primer elemento tiene indice 0, no 1'
        ],

        solucion: `// SOLUCION:

const numeros = [5, 10, 15];
console.log(numeros[0]);

// Resultado: 5

// EXPLICACION:
// - numeros es un array con 3 elementos
// - numeros[0] accede al primer elemento (indice 0)
// - El primer elemento es 5`,

        buenasPracticas: [
            'Los indices empiezan en 0',
            'Usa .length para saber cuantos elementos hay',
            'Usa .push() para agregar y .pop() para quitar',
            'Los arrays pueden contener cualquier tipo de dato'
        ]
    }
};
