//Escribir una función llamada mostrarArreglo
//que reciba un arreglo numérico como parámetro e imprima cada elemento en una línea a parte. 


//Recoremos el arreglo numerico
const mostrarArreglo = (arreglo)=>{
    for (let i=0; i<arreglo.length; i++){
        //mostramos por consola cada numero
        console.log(arreglo[i]);
    }
};

 
//Declaramos variable
let numeros=[4,6,8,10];
//llamamos a la funcion
mostrarArreglo(numeros);