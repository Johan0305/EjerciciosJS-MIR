// ejercicio 1: REPITE

var phrase = prompt("Ingresa una frase");

console.log(phrase);

//ejercicio 2: SALUDA

var nombre = prompt("Cual es tu nombre?");

console.log("Hola " + nombre);

// ejercicio 3: SUMA

var num1 = prompt("Escribe un numero :D");
var num2 = prompt("Escribe otro numero");

console.log(
  "El resultado de la suma de tus dos numeros es " +
    (parseInt(num1) + parseInt(num2))
);

//ejercicio 4: MI EDAD

var año = prompt("Escribe tu año de nacimiento: ");
var edad = 2020 - parseInt(año);

console.log("tu edad es " + edad + " años");

// ejercicio 5: INDICE DE MASA CORPORAL
var peso = prompt("Cual es tu peso?");
var altura = prompt("cual es tu altura?");
var BMI = parseFloat(peso) / Math.pow(parseFloat(altura), 2);

console.log("Tu BIM es " + BMI);

//ejercicio 6: MAYOR QUE DIEZ
var nu = prompt("Dime un numero");

if (nu > 10) {
  console.log("el numero es mayor que diez");
} else {
  console.log("el numero es menor que diez");
}

// ejercicio 7:ADIVINA EL NUMERO

var ale = Math.ceil(Math.random() * 10); //Math.random sirve para dar un numero aleatorio entre el 0 y el 1 ---- math.ceil sirve para aproximar un decimal a un numero entero, el más cercano
var dato = prompt("Escribe un numero del 0 al 10 esperemos lo adivines");

if (ale === dato) {
  console.log("Felicidades, adivinaste el numero!!");
} else {
  console.log("Lo sentimos, sigue intentando");
}

// ejercicio 8: Multiplo de 5

var mul = prompt("Escribe un numero");

if (mul % 5 === 0) {
  console.log("El numero " + mul + " es multiplo de 5");
} else {
  console.log("El numero " + mul + " no es multiplo de 5");
}

// Ejercicio 9: Mayor, menor e igual

var mmi = prompt("escribe un numero ");

if (mmi > 10) {
  console.log("el numero " + mmi + " es mayor que 10");
} else if (mmi < 10) {
  console.log("el numero " + mmi + " es menor que diez");
} else {
  console.log("El numero es igual a 10");
}

// Ejercicio 10: Masa Corporal

var p = prompt("Ingresa tu peso");
var a = prompt("Ingresa tu altura");
var BMI = parce.float(p) * (Math.pow(parse.float(a)), 2);

if (BMI < 18.5) {
  console.log("Usted esta bajo de peso");
} else if (BMI >= 18.5 && BMI < 24.9) {
  console.log("Usted tiene un peso normal");
} else if (BMI >= 25 && BMI < 29.9) {
  console.log("Usted tiene sobrepeso");
} else {
  console.log("Usted tiene obesidad");
}

//Ejercicio 11: Bing Bong

var n = prompt("Introduce un numero");

if (n % 3 === 0) {
  console.log("bing");
} else if (n % 5 === 0) {
  console.log("bong");
} else if (n % 5 === 0 && n % 3 === 0) {
  console.log("BingBong");
} else {
  console.log("nothing");
}

// Ejercicio 12
var gn = prompt("En que año naciste?");

if (gn < 1945) {
  console.log("Gran Generación");
} else if (gn >= 1945 && gn <= 1964) {
  console.log("Baby Boomer");
} else if (gn >= 1965 && gn <= 1981) {
  console.log("X");
} else if (gn >= 1982 && gn <= 1994) {
  console.log("Millenial");
} else {
  console.log("Z");
}

// Ejercicio 13: repite 10 veces

var prh = prompt("Escribe una frase");

for (i = 0; i < 10; i++) {
  console.log(prh);
}

// Ejercicio 14: repite varias veces

var prh = prompt("Escribe una frase");
var veces = prompt("Cuantas veces quieres que se repita?");

for (i = 0; i < parseInt(veces); i++) {
  console.log(prh);
}

// Ejercicio 15: 1 hasta n

var num = prompt("Escribe un numero");

for (i = 0; i <= parseInt(num); i++) {
  console.log(i);
}

//Ejercicio 16: rango de numeros

var num1 = prompt("Dame el primer numero de tu rango");
var num2 = prompt(
  "Ahora el segundo numero que este va a ser el fin de tu rango"
);

for (let i = parseInt(num1); i <= parseInt(num2); i++) {
  console.log(i);
}

//Ejercicio 17: hasta salir

var clave = prompt("Escribe la palabra clave");

while ("salir".toLocaleLowerCase !== clave) {
  console.log(clave);
  clave = prompt("Error, vuelve a escribir la clave");
}

console.log("Hasta Pronto!");

//Ejercicio 18: Adivina el numero en varios intentos

var adi = prompt("Adivina el numero");
var random = Math.floor(Math.random() * (Number.MAX_VALUE - 1) + 1);
var randomneg = Math.floor(
  Math.random() * (-1 - Number.MIN_VALUE) + Number.MIN_VALUE
);

while (random !== parseInt(adi) || randomneg !== parseInt(adi)) {
  console.log("Otra vez");
  adi = prompt("Adivina el numero");
}

console.log("Bien hecho!");

// Ejercicio 19: Rango de numeros 2

var num1 = prompt("Escribe un numero");
var num2 = prompt("Escribe el segundo numero");

if (num1 < num2) {
  for (let i = num1; i <= num2; i++) {
    console.log([i]);
  }
} else {
  for (let i = num2; i >= num1; i--) {
    console.log([i]);
  }
}

//Ejercicio 20: numeros pares

for (i = 0; i <= 100; i = i + 2) {
  console.log([i]);
}

//Ejercicio 21: mi primera función

function suma(nu1, nu2) {
  return nu1 + nu2;
}

suma(5, 2);

// Ejercicio 22: funcion saluda

function hola(texto) {
  return "Hola " + texto + "!";
}

hola("Pedro");

//Ejercicio 23: funcion es multiplo

function esMultiplo(num1, num2) {
  return num1 % num2 === 0;
}

esMultiplo(21, 7);

//Ejercicio 24:Funcion indice de masa muscular

function BMI(peso, altura) {
  return peso / Math.pow(altura, 2);
}

BMI(65, 1.7);

//Ejercicio 25:arregla la funcion
function calcuarColor(num) {
  let color;

  if (num === 1) {
    color = "black";
  } else if (num === 2) {
    color = "blanco";
  } else if (num === 3) {
    color = "rojo";
  } else {
    color = "verde";
  }

  return "El color es " + color;
}

calcuarColor(2);

//Ejercicio 26:Escalera

function escalera(n) {
  var result = "";

  for (i = 1; i <= n; i++) {
    var floor = "";
    for (j = 1; j <= i; j++) {
      floor += "# ";
    }
    floor += "\n";
    result += floor;
  }
  return result;
}

escalera(5);

//Ejercicio 27:imprime el arreglo
const nombres = ["Pedro", "Juan", "Diana", "Oscar", "Ana"];

function n() {
  for (let i = 0; i < nombres.length; i++) {
    console.log(nombres[i]);
  }
}

n();

//Ejercicio 28: Obtener tercer elemento

function element(array) {
  if (array.length < 3) {
    return -1;
  } else {
    console.log(array[2]);
  }
}

element([1, 2, 3]);

//Ejercicio 29:reemplaza el elemento

function replace(arr, num, val) {
  arr[num] = val;
  return arr;
}

replace([1, 2, 3, 4], 2, 4);

//ejercicio 30: Crea el arreglo

function crearArreglo(num) {
  var arr = [];

  for (i = 1; i <= num; i++) {
    arr.push(i);
  } // .push sirve para agregar informacion a un ARRAY no sirve para cadenas de texto

  return arr;
}

crearArreglo(100);

//Ejercicio 31: crea el arreglo;rango

function crearArreglo(num1, num2) {
  var arr = [];
  for (let i = num1; i <= num2; i++) {
    arr.push(i);
  }

  return arr;
}

crearArreglo(20, 50);

//Ejercicio 32:imprime la matriz
const mat = [
  ["Pablo", "Maria", "Pedro"],
  ["Diana", "Juan", "Federico"],
  ["Roberto", "Daniel", "Sandra"],
];

for (let i = 0; i < mat.length; i++) {
  console.log("grupo " + [i + 1] + ":");
  for (let j = 0; j < mat[i].length; j++) {
    console.log("  " + mat[i][j]);
  }
}

//Ejercicio 33: mayor a diez

function mayDiez(nums) {
  var arr = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 10) {
      arr.push(nums[i]);
    }
  }
  return arr;
}

mayDiez([1, 22, 40, 5, 15]);

//Ejercicio 34:cuantos caracteres a hay

function contarAs(phrase) {
  let contador = 0;

  for (i = 0; i < phrase.length; i++) {
    if (phrase[i] === "a") {
      contador++;
    }
  }
  return contador;
}

contarAs("holaaaa");

//Ejercicio 35: cuantos unos hay

function contarUnos(nums) {
  let contador = 0;

  for (i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      contador++;
    }
  }
  return contador;
}

contarUnos([1, 2, 3, 10, 1, 1, 1, 1]);

//Ejercico 36: arreglo a cadena

function unirArreglo(arr) {
  let arrnw = [];

  for (i = 0; i < arr.length; i++) {
    arrnw += arr[i] + ",";
  }
  return arrnw;
}

unirArreglo(["a", "b", "c", "d"]);

//Ejercicio 37: separar palabras

function palabras(phrase) {
  return phrase.split(" ");
}

palabras("Hola make it real");

//Ejercicio 38: la abuela sorda
function abuela(string) {
  if (string === string.toLowerCase() && string.trim() !== "") {
    return "Habla mas duro, mijito";
  } //.trim elimina los espacios en blanco que se encuentren en un string
  else if (string === string.toUpperCase() && string.trim() !== "") {
    return "Ahh si, manzanas!";
  } else {
    return "dices algo?";
  }
}

abuela("         HOLA PERRA ");

//EJERCICIO 39: generador de contraseñas
function contraseña(string) {
  var str = "";

  for (i = 0; i < string.length; i++) {
    var char = string[i].toLowerCase();

    if (char === " ") {
      char = "";
    } else if (char === "a") {
      char = 4;
    } else if (char === "e") {
      char = 3;
    } else if (char === "i") {
      char = 1;
    } else if (char === "o") {
      char = 0;
    } // += puede sumar cuando una variable es un numero pero puede agregar cuando sea un string
    str += char;
  }
  return str;
}

contraseña("holaaaaaaaaaaaaa");

//Ejercicio 40:capitalizar

function capitalizar(string) {
  let words = string.split(" ");

  for (i = 0; i < words.length; i++) {
    var chars = words[i].split("");

    chars[0] = chars[0].toUpperCase();

    words[i] = chars.join("");
  }

  return words.join(" ");
}

capitalizar("mkae it real");

//Ejercicio 41: crea el objeto

var pedro = {
  nombre: "Pedro Perez",
  edad: 30,
  activo: true,
  hobbies: ["programar", "squash", "piano"],
};

//Ejercicio 42: saluda(objetos)

function saludar(person) {
  var edad = person.edad;

  if (edad) {
    return "Hola " + person.nombre + ", tienes " + person.edad + " años";
  }
  return "Hola " + person.nombre;
}

saludar({ nombre: "Juan", edad: 50 });

//Ejercicio 43: agregar peso

function agregarPeso(obj, weigth) {
  obj.peso = weigth;
  return obj;
}

agregarPeso({ nombre: "María" }, 78);

//Ejercicio 44: obtenerValor

function obtenerValor(obj, str) {
  console.log(obj[Object.keys(obj)]);
  for (i = 0; i < llaves.length; i++) {
    var llave = llaves[i];

    if (llaves[i] === str) {
      return obj[llave];
    }
  }

  if (llaves[i] !== str) {
    return false;
  }
}

obtenerValor({ a: 1, b: 2, c: 3 }, "a");

//----------------------------------------------------------- solucion de make it real (las dos soluciones son validas) --------

function obtenerValor(obj, str) {
  if (obj.hasOwnProperty(str)) return obj[str];
  return false;
}

obtenerValor({ a: 1, b: 2, c: 3 }, "d");

// ESTE NO ES UN EJERCICIO ES UN AVISO SOBRE LA PROPIEDAD FOR IN ejemplo : for( var i in persona) sirve solo y unicamente para recorrer un objeto y buscar llaves dentro del objeto

//Ejercicio 45:cambiar peso

function cambiarPeso(person) {
  if (!person.hasOwnProperty("peso")) {
    return null;
  }
  person.peso = person.peso * 2;
  return person;
}

cambiarPeso({ nombre: "María", peso: 78 });

//Ejercicio 46: elimina el peso

function eliminarPeso(obj) {
  if (obj.hasOwnProperty("peso")) {
    delete obj.peso;
  }
  return obj;
}

eliminarPeso({ nombre: "María", peso: 78 });

// ----------------------------------------------------------otra solucion ---------------------------------------------------------------
function eliminarPeso(obj) {
  delete obj.peso;

  return obj;
}

eliminarPeso({ nombre: "María", peso: 78 });

//Ejercicio 47: existe la llave

function existeLlave(obj, str) {
  if (obj.hasOwnProperty(str)) {
    return true;
  } else {
    return false;
  }
}

existeLlave({ name: "María", age: 23 }, "age");

// ------------------------------------------------------------ solucion MIR ---------------------------------------------------------------

function existeLlave(obj, key) {
  return obj.hasOwnProperty(key);
}

//Ejercicio 48: buscando el prodcuto

function buscarProducto(objs, num) {
  for (i = 0; i < objs.length; i++) {
    if (objs[i].hasOwnProperty("id")) {
      if (objs[i].id === num) {
        return objs[i];
      }
    }
  }
  return null;
}

buscarProducto(
  [
    { id: 1, nombre: "A" },
    { id: 2, nombre: "B" },
  ],
  1
);

//Ejercicio 49: decifra la frase

function descifrar(str, obj) {
  var string = "";

  for (i = 0; i < str.length; i++) {
    if (obj.hasOwnProperty(str[i])) {
      string += obj[str[i]];
    } else {
      string += str[i];
    }
  }

  return string;
}

descifrar("pyrmizo", { y: "e", z: "s" });

// ------------------------------------------------------------- otra solucion - MIR -------------------------------------------------------

function decifrar(string, obj) {
  var chars = string.split("");

  for (var i = 0; i < chars.length; i++) {
    var char = chars[i];
    if (obj.hasOwnProperty(char)) {
      chars[i] = obj[char];
    }
  }

  return chars.join("");
}

// -------------------------------------------------------------- ESTA SECCION ES DE EJERCICIOS DE DIFERENTES LADOS-----------------------------

//Ejercicio extra 1:

var NoS = prompt(
  "Quieres jugar piedra, papel o tijera contra el CPU? Responde 'si' o 'no'"
);

while (NoS.toLocaleLowerCase() === "si") {
  var info = prompt("Piedra, papel o tijera?");

  var ppt = (user) => {
    let arr = ["piedra", "papel", "tijera"];
    let oper = arr[Math.floor(Math.random() * 3)];

    switch (user !== oper) {
      case (user = "piedra") === (oper = "tijeras") ||
        (user = "papel") === (oper = "piedra") ||
        (user = "tijera") === (oper = "papel"):
        return alert("ganaste!");
      case user === oper:
        return alert("Empate!!");

      default:
        return alert("perdiste :c");
    }
  };

  ppt(info);

  NoS = prompt("Quieres seguir jugando?");

  if (NoS.toLocaleLowerCase() === "si") {
    alert("Juguemos Otra vez!");
  }
}
alert("Fin");
//Platzi

let nombre = "Juan";
let apellido = "Ramirez";
let nombreUsuarioPlatzi = "JuanR22";
let edad = 22;
let correoElectronico = "JuanR22@gmail.com";
let mayorEdad = true;
let DineroAhorrado = 3000;
let deudas = 500;

let nombreCompleto = `${nombre + apellido}`;
let dineroReal = DineroAhorrado - deudas;

//Platzi:funciones

var presentation = (name, lastname, nickname) => {
  const completename = name + lastname;
  return `Hola mi nombre es ${completename} , pero prefiero que me digas ${nickname}.`;
};

presentation("Juan Fernando ", "Quintero Galán", "Fercho");

//Platzi: Condicionales

const tipoDeSuscripcion = "Basic";

if (tipoDeSuscripcion === "Basic") {
  console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
}
if (tipoDeSuscripcion === "Free") {
  console.log("Solo puedes tomar los cursos gratis");
}
if (tipoDeSuscripcion === "Expert") {
  console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
}
if (tipoDeSuscripcion === "ExpertPlus") {
  console.log(
    "Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año"
  );
}

//Reto Condicionales

const cualEs = prompt("Cual es tu plan de Platzi?");

var reto = (tipoPlan) => {
  let planes = [
    { Basic: "Puedes tomar casi todos los cursos de Platzi durante un mes" },
    { Free: "Solo puedes tomar los cursos gratis" },
    { Expert: "Puedes tomar casi todos los cursos de Platzi durante un año" },
    {
      ExpertPlus:
        "Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año",
    },
  ];

  for (i = 0; i < planes.length; i++) {
    let planesind = planes[i];
    if (planesind.hasOwnProperty(tipoPlan)) {
      return alert(planesind[tipoPlan]);
    }
  }
};

reto(cualEs.charAt(0).toUpperCase() + cualEs.slice(1));

//Platzi Ciclos
let i = 0;
while (i < 5) {
  console.log("El valor de i es: " + i);
  i++;
}

// -----
let i = 10;

while (i >= 2) {
  console.log("El valor de i es: " + i);
  i--;
}

// ----------

let sum = prompt("Cuanto es 2 + 2");

while (sum != 4) {
  sum = prompt("Intenta de nuevo");
}
alert("Felicidades!");

// Platzi Arrays

arr = (array) => array[0];

arr([1, 2, 3, 4, 5]);

// ---

arr = (array) => {
  array.forEach((element) => {
    console.log(element);
  });
};

arr([1, 2, 3, 4, 5]);

// ---
let persona = {
  nombre: "Oscar",
  apellido: "Aguilar",
  edad: 21,
};
const unaFuncion = (objeto) => {
  Object.values(objeto).forEach((elem) => {
    console.log(elem);
  });
};

unaFuncion(persona);

//Ejercicios Youtube

//1

mayomen = (num1, num2) => {
  if (num1 === num2) {
    return "ambos numeros son iguales";
  }

  switch (num1 !== num2) {
    case num1 > num2:
      return `${num1} es el numero mayor y ${num2} es el numero menor`;
    case num1 < num2:
      return `${num2} es el numero mayor y ${num1} es el numero menor`;
  }
};

mayomen(7, 5);

//2

var info = prompt("ingresa tu primer valor");
var info2 = prompt("ingresa tu segundo valor");

while (isNaN(info) || isNaN(info2) || info <= 0 || info2 <= 0) {
  if (isNaN(info) || info <= 0) {
    info = prompt("Reingresa tu primer valor");
  } else {
    info2 = prompt("Reingresa tu segundo valor");
  }
}

mayomen = (num1, num2) => {
  if (num1 === num2) {
    return "ambos numeros son iguales";
  }

  switch (num1 !== num2) {
    case num1 > num2:
      return `${num1} es el numero mayor y ${num2} es el numero menor`;
    case num1 < num2:
      return `${num2} es el numero mayor y ${num1} es el numero menor`;
  }
};

mayomen(info, info2);

//3
let num = parseInt(prompt("Ingresa un numero"));
let arrnums = [];

while (num >= 0) {
  arrnums.push(num);
  num = parseInt(prompt("Ingresa otro numero"));
}

let oper = 0;
let oper2 = 0;

for (i = 0; i < arrnums.length; i++) {
  oper += arrnums[i];
  oper2 += arrnums[i] / arrnums.length;
  console.log(oper, oper2);
}

alert(
  `la suma de tus numeros da ${oper} y la media de tus numeros es ${oper2}`
);

//4

entreDos = (num1, num2) => {
  while (num1 !== num2 - 1) {
    num1++;
    console.log(num1);
  }
};

entreDos(2, 4);

//5

entreDosIm = (num1, num2) => {
  while (num1 !== num2 - 1) {
    if (num1 % 2 !== 0) {
      num1 += 2;
      console.log(num1);
    } else {
      num1++;
      console.log(num1);
      num1 += 2;
      console.log(num1);
    }
  }
};

entreDosIm(1, 10);

//6

let info = prompt("Please, insert a number");

divisores = (num) => {
  let numdiv = [];

  for (i = 1; i <= num; i++) {
    if (num % i === 0) {
      numdiv.push(i);
    }
  }

  return alert(`the dividing numbers are ${numdiv}`);
};

divisores(info);
