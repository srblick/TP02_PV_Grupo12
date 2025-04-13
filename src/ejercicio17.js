// Declaracion de funcion
const contarLetraA = () =>{
    // Usuario ingresa un string
    let texto = prompt("Ingrese alguna frase: ");

    // Contador
    let contadorA = 0;

    // Con el for se recorre cada letra del string
    for(let i=0 ; i<texto.length ; i++){
        if (texto[i]=== 'a'){
            // El contador amenta en 1 por cada 'a'
            contadorA++;
        }
    }
    
    // Mensaje mostrando el texto y contador
    alert(texto + " cuenta con: " + contadorA + " letras 'a'.")
}

// Llamado a la funcion
contarLetraA();