let numInicial = 3;
let numFinal = 15;

const sumarRango = (inicial, final) => {
    let suma = 0;
    if (!(Number.isInteger(inicial) && Number.isInteger(final)) || inicial > final) {
        alert("Por favor, ingresa valores enteros y el valor inicial deber ser menor o igual al valor final.");
    } else {
        for (let i = inicial; i <= final; i++) {
            suma +=i;   
        }
    }
    return suma;
};

console.log(sumarRango(numInicial,numFinal));
