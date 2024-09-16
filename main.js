"use strict";

// Obtener elementos del DOM
let cantidad = document.getElementById("cantidad");
let boton = document.getElementById("generar");
let contraseña = document.getElementById("contrasena");

/*CONST - Permite crear una variable que no varia su valor con el tiempo*/
const cadenaCaracteres =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxy0123456789!@#$%^&*()";

function generar() {
  let numeroDigitado = parseInt(cantidad.value);
  console.log(numeroDigitado);

  /*Validación de la cantidad de caracteres ingresada*/
  if (numeroDigitado < 8) {
    alert("La cantidad de caracteres debe ser mayor a 8");
    return;
  }

  let password = "";
  for (let i = 0; i < numeroDigitado; i++) {
    let caracterAleatorio =
      /*Para evitar caracteres repetidos en la contraseña*/
      cadenaCaracteres[Math.floor(Math.random() * cadenaCaracteres.length)];

    /*Restricción de caracteres especiales*/
    password += caracterAleatorio;
  }

  const regexMayuscula = /[A-Z]/;
  const regexNumero = /[0-9]/;

  /*Expresión regular para validar la contraseña*/
  contraseña.value = password;
}

function limpiar() {
  // Obtener el elemento del botón limpiar
  let botonLimpiar = document.getElementById("limpiar");

  botonLimpiar.addEventListener("click", function () {
    cantidad.value = "";
    contraseña.value = "";
  });
}
