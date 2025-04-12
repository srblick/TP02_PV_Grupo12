//Escribir una función llamada mostrarArreglo
//que reciba un arreglo numérico como parámetro e imprima cada elemento en una línea a parte. 



const mostrarArreglo = (arreglo)=>{
    for (let i=0; i<arreglo.length; i++){
        console.log(arreglo[i]);
    }
};

 

let numeros=[4,6,8,10];
mostrarArreglo(numeros);