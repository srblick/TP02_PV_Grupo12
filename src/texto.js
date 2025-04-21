export const cambiarTexto = (elemento) => {
    elemento.textContent = "“El mundo se puede cambiar en 140 caracteres”. Jack Dorsey, cofundador de Twitter.";
    elemento.classList.add("animar-texto");

    // Quitamos la clase después de que termine la animación para que pueda volver a usarse si se hace clic de nuevo
    setTimeout(() => {
        elemento.classList.remove("animar-texto");
    }, 1000); // debe coincidir con la duración de la animación en CSS
};