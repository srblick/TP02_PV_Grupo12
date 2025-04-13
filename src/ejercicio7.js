// Declaramos un array con al menos 6 nombres
let nombres = ["Nadia", "Juaquin", "Cristian", "Nicolas", "Valentina", "Juan", "Alan"];

// la función recibe un array y devuelve el nombre más largo
const obtenerNombreMasLargo = (arrayNombres) => {
  // Inicializamos la variable con el primer nombre del array  
  let nombreMasLargo = arrayNombres[0];
  // Usamos foreach para recorrer el array  
  arrayNombres.forEach((nombre) => {
    // Comparamos cual es mas largo y lo guardamos
    if (nombre.length > nombreMasLargo.length) {
      nombreMasLargo = nombre;
    }
  });
  return nombreMasLargo;
};

// Llamamos a la función y lo guardamos en resultado
let resultado = obtenerNombreMasLargo(nombres);
console.log("Nombres: " + nombres);
console.log("El nombre más largo es:", resultado);