// Declaracion de variables
let num1, num2;
num1 = 12;
num2 = 22;

// Declaracion de funcion
const detMayor = (num1, num2) => {
    if (num1 > num2) {
        alert("El número mayor es: " + num1 + ".\nEl número menor es: " + num2);
    } else if (num2 > num1) {
        alert("El número mayor es: " + num2 + ".\nEl número menor es: " + num1);
    } else {
        alert("Los números son iguales");
    }
};

//Llamado a funcion
detMayor(num1, num2);