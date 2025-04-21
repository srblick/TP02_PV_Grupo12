// Exportamos la función mostrarLenguaje para que pueda usarse en otro archivo
export function mostrarLenguaje(valor) {
    // Obtenemos el elemento con id="resultado" donde se mostrará el mensaje
    const resultado = document.getElementById('resultado');

    // Cambiamos el contenido del elemento para mostrar el lenguaje seleccionado
    resultado.textContent = `Lenguaje seleccionado: ${valor}`;

    // También mostramos el mismo mensaje en la consola
    console.log(`Lenguaje seleccionado: ${valor}`);
}
