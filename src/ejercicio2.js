// Muestra los diez primeros numeros pares
const mostrarPares = () => {
    // Recorremos del 1 al 10
    for (let i = 1; i <= 10; i++) {
      // Multiplicamos por 2 para obtener el número par y lo mostramos
      console.log(i * 2);
    }
};

console.log("Los diez primeros numeros pares son:");
mostrarPares();