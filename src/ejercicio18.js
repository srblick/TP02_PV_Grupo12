import { cambiarTexto } from './texto.js';

const boton = document.getElementById("cambiarBtn");
const parrafo = document.getElementById("parrafo");

boton.addEventListener("click", () => {
  cambiarTexto(parrafo);
});