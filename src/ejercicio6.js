let edades = [18,24,23,40,37,22,34,28];

function calcularPromedio(array) {
    let promedio = 0;
    for (let i = 0; i < array.length; i++) {
        promedio += array[i];
        
    }
    return promedio/array.length;
}

console.log(edades);
console.log(calcularPromedio(edades));

