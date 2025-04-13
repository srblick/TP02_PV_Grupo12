// Declararcion de funcion
const verificarParImpar = () => {
    // Se solicita al usuario que ingrese un número (devuelve un string)
    let numero = prompt("Ingresa un número:");
  
    // Se convierte el string a número
    let numeroConvertido = parseInt(numero);
  
    if (isNaN(numeroConvertido)) {
      //Si no es un numero entero muestra un error  
      alert("¡Error! No ingresaste un número.");
    } else {
      // Verificar si es par o impar
      if (numeroConvertido % 2 === 0) {
        alert("El número" + numeroConvertido + " es PAR.");
      } else {
        alert("El número" + numeroConvertido + " es IMPAR.");
      }
    }
  };
  
  // Llamada a la función
  verificarParImpar();