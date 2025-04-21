import { actualizarSalida } from "./mostrar.js";

const entrada = document.getElementById("entrada");
const salida = document.getElementById("salida");

entrada.addEventListener("input", () => {
  actualizarSalida(entrada, salida);
});
