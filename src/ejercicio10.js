// Función solicita 3 números y calcula su promedio
const obtenerPromedio = () => {
    // Solicitamos 3 números al usuario y los convertimos a enteros
    let num1 = parseInt(prompt("Ingrese el primer número:"));
    let num2 = parseInt(prompt("Ingrese el segundo número:"));
    let num3 = parseInt(prompt("Ingrese el tercer número:"));
  
    // Calculamos el promedio sumando los tres y dividiendo entre 3
    let promedio = (num1 + num2 + num3) / 3;
    // Mostramos en la consola
    console.log("Numeros ingresados: " + num1 + ", " + num2 + ", " + num3 + ".")
    console.log("El promedio es:", promedio);
};
  
// Llamamos a la función
obtenerPromedio();