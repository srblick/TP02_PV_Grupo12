export default function cambiarColorFondo() {
    //arreglo de colores en formato hex
    const colores = ['#FFB6C1', '#ADD8E6', '#90EE90', '#FFFFE0', '#FFA07A', '#DDA0DD'];
    //selecciona un color al azar
    const colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
    
    //cambia el color del body
    document.body.style.backgroundColor = colorAleatorio;
    console.log(`Color de fondo cambiado a: ${colorAleatorio}`);
  }
  