import { manejarEntrada } from './inputTexto.js';

const input = document.getElementById("entradaTexto");
const salida = document.getElementById("textoMostrado");
const divContenedor = document.getElementById("salida");

input.addEventListener("input", () => {
  manejarEntrada(input, salida, divContenedor);
  /*salida.textContent = texto;

  if (texto.length > 20) {
    salida.style.backgroundColor = "#ffdddd"; // fondo rojo claro
  } else {
    salida.style.backgroundColor = "transparent";
  }*/
});