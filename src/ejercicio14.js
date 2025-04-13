// La función recibe un array de números y retorna un nuevo array con cada número duplicado
const duplicar = (numeros) => {
    // Usamos map para crear un nuevo arreglo con los valores multiplicados por 2
    return numeros.map(num => num * 2);
};

let arregloOriginal = [4, 12, 1, 3, 13, 21, 7];
let arregloDuplicado = duplicar(arregloOriginal);
  
// Mostramos ambos arreglos
console.log("Arreglo original:", arregloOriginal);
console.log("Arreglo duplicado:", arregloDuplicado);