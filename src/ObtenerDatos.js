export default function obtenerDatos() {
    //obtiene los valores por su id y los almacena en su respectiva variables
    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const libreta = document.getElementById("libreta").value;
  
    //muestra los datos con un alert
    alert(`Los datos ingresados son:\nNombre: ${nombre}\nApellido: ${apellido}\nLibreta Universitaria: ${libreta}`);
  }
  
  