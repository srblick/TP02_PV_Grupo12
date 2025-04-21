export const manejarEntrada = (input, salida, divContenedor) => {
    input.addEventListener("input", () => {
      salida.textContent = input.value;
  
      // Cambiar fondo si supera los 20 caracteres
      if (input.value.length > 20) {
        divContenedor.classList.add("fondo-alerta");
      } else {
        divContenedor.classList.remove("fondo-alerta");
      }
    });
  };