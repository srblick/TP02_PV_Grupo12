import { listapaises, obtenerSuCapital } from "/src/paises.js";


/*Creamos las opciones de los paises y capitales */
function crearOpcionespaises() {
//obtenemos los paises y capitales llamandolos con su id 
  const seleccionPaises = document.getElementById("paises");
  const seleccionCapitales = document.getElementById("capitales");
//navegamos sobre la lista de paises importada
  listapaises.forEach((pais) => {
    const opcionP = document.createElement("option");
    opcionP.textContent = pais.nombre;
    opcionP.value = pais.nombre;
    seleccionPaises.appendChild(opcionP);

    const opcionC = document.createElement("option");
    opcionC.textContent = pais.capital;
    opcionC.value = pais.capital;
    seleccionCapitales.appendChild(opcionC);
  });
}

/*evento change cuando se seleccione un pais con la funcion obtenerSuCapital
obtendremos la que le corresponde*/

function eventochangepais() {
  const seleccionPaises = document.getElementById("paises");
  const seleccionCapitales = document.getElementById("capitales");
  const paisSeleccionado = seleccionPaises.value;
  const capitalSeleccionada = obtenerSuCapital(paisSeleccionado);

  seleccionCapitales.value = capitalSeleccionada;
//Mostramos por pantalla
  console.log(`Pais: ${paisSeleccionado}, Capital: ${capitalSeleccionada}`);
}

/*os aseguramos que se carge html primero y luego continue
con la funcion crearOpcionespaises*/

document.addEventListener("DOMContentLoaded", () => {
  crearOpcionespaises();

  const seleccionPaises = document.getElementById("paises");
  seleccionPaises.addEventListener("change", eventochangepais);
});