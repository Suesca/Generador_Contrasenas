"use strict";

// Obtener elementos del DOM
let cantidad = document.getElementById("cantidad");
let boton = document.getElementById("generar");
let contraseña = document.getElementById("contrasena");
let fortalezaTexto = document.getElementById("fortaleza");

/*CONST - Permite crear una variable que no varia su valor con el tiempo*/
const cadenaCaracteres =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxy0123456789!@#$%^&*()";

// Función para generar la contraseña
function generar() {
  let numeroDigitado = parseInt(cantidad.value);

  // Validación de la cantidad de caracteres ingresada
  if (numeroDigitado < 8) {
    alert("La cantidad de caracteres debe ser mayor a 8");
    return;
  }

  let password = "";
  for (let i = 0; i < numeroDigitado; i++) {
    let caracterAleatorio =
      cadenaCaracteres[Math.floor(Math.random() * cadenaCaracteres.length)];
    password += caracterAleatorio;
  }

  // Establecer la contraseña generada en el campo de texto
  contraseña.value = password;

  // Llamar a la función para verificar la fortaleza de la contraseña
  let fortaleza = verificarFortaleza();

  // Mostrar la fortaleza en la consola o en la interfaz
  console.log("Fortaleza de la contraseña:", fortaleza);
  fortalezaTexto.innerText = "Fortaleza: " + fortaleza;
}

// Función para verificar la fortaleza de la contraseña
function verificarFortaleza() {
  let password = contraseña.value;
  let numeroCaracteres = password.length;
  let numeroMayusculas = 0;
  let numeroMinusculas = 0;
  let numeroNumeros = 0;
  let numeroCaracteresEspeciales = 0;

  // Recorrer la contraseña y contar el tipo de caracteres
  for (let i = 0; i < numeroCaracteres; i++) {
    let caracter = password.charAt(i);
    if (caracter >= "A" && caracter <= "Z") {
      numeroMayusculas++;
    } else if (caracter >= "a" && caracter <= "z") {
      numeroMinusculas++;
    } else if (caracter >= "0" && caracter <= "9") {
      numeroNumeros++;
    } else {
      numeroCaracteresEspeciales++;
    }
  }

  // Inicializar la fortaleza en 0
  let fortaleza = 0;

  // Condiciones para determinar la fortaleza
  if (numeroMayusculas >= 2) fortaleza++;
  if (numeroMinusculas >= 2) fortaleza++;
  if (numeroNumeros >= 2) fortaleza++;
  if (numeroCaracteresEspeciales >= 1) fortaleza++;
  if (numeroCaracteres >= 12) fortaleza++; // Aumenta si es suficientemente larga

  // Determinar el nivel de fortaleza
  if (fortaleza <= 2) {
    return "Débil";
  } else if (fortaleza === 3 || fortaleza === 4) {
    return "Mediana";
  } else {
    return "Fuerte";
  }
}

// Función para limpiar los campos
function limpiar() {
  cantidad.value = "";
  contraseña.value = "";
  fortalezaTexto.innerText = "";
}
