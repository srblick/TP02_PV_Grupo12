// Declaracion de funcion
const retornarMes = () => {
    // Se pide al usuario ingrear un valor entre 1 y 12 (retorna string)
    let mes = prompt("Ingrese un mes (1-12)");

    // Convierte el string a entero
    mes= parseInt(mes);

    switch (mes){
        case 1:
            alert(mes + " : Enero");
            break;
        case 2:
            alert(mes + " : Febrero");
            break;
        case 3:
            alert(mes + " : Marzo");
            break;
        case 4:
            alert(mes + " : Abril");
            break;        
        case 5:
            alert(mes + " : Mayo");
            break;
        case 6:
            alert(mes + " : Junio");
            break;
        case 7:
            alert(mes + " : Julio");
            break;
        case 8:
            alert(mes + " : Agosto");
            break; 
        case 9:
            alert(mes + " : Septiembre");
            break;
        case 10:
            alert(mes + " : Octubre");
            break;
        case 11:
            alert(mes + " : Noviembre");
            break;
        case 12:
            alert(mes + " : Diciembre");
            break; 
        default: alert("Error: Ese mes no existe"); // Si se cualquier otra cosa que no se un numero muestra error
    }  
}
// Llamado a la funcion
retornarMes();