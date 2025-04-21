import obtenerDatos from './ObtenerDatos.js';

const boton = document.getElementById("mostrarDatos");

boton.addEventListener("click", () => {
  obtenerDatos();
});
