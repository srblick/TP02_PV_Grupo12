// Importamos la función mostrarLenguaje desde el archivo mostrarLenguaje.js
import { mostrarLenguaje } from './mostrarLenguage.js';

// Seleccionamos todos los inputs tipo radio que tengan name="lenguaje"
const radios = document.querySelectorAll('input[name="lenguaje"]');

// Seleccionamos el elemento donde vamos a mostrar el lenguaje elegido
const salida = document.getElementById('resultado');

// Recorremos cada botón de opción y le asignamos un "escuchar"
radios.forEach(radio => {
  radio.addEventListener('change', () => {
    // Llamamos a la función importada para actualizar el contenido en pantalla
    mostrarLenguaje(radio.value, salida);

    // Mostramos también el valor en la consola
    console.log(`Seleccionado: ${radio.value}`);
  });
});
