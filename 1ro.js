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
