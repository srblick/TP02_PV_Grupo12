// Solicitar al usuario que ingrese su nombre, luego muestre un mensaje de bienvenida:
//  Hola (aquí el nombre del usuario), bienvenido a Programación Visual! 

export function saludo() { 
    const nombre = document.getElementById("nombre").value;

//Mostrando mensaje
    alert("Hola ${nombre}, bienvenido a Programacion Visual!")
}
