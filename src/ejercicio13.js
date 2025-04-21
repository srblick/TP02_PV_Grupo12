//Escribir una función llamada mostrarArreglo
//que reciba un arreglo numérico como parámetro e imprima cada elemento en una línea a parte. 


function mostrarArreglo(arreglo){
    //const arreglo= document.getElementById("arreglo").value;
    let resultado="";
    for (let i=0; i<arreglo.length;i++){
        resultado +=arreglo[i]+"<br>";
    }
//haciendo global a la funcion
    document.getElementById("resultado").innerHTML=resultado;
}
Object.assign(globalThis,{mostrarArreglo});
