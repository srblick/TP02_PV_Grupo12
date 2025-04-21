export const listapaises = [
    { nombre: "Argentina", capital: "Buenos Aires" },
    { nombre: "Peru", capital: "Lima" },
    { nombre: "Bolivia", capital: "Sucre" },
    { nombre: "Colombia", capital: "Bogota" },
    { nombre: "Paraguay", capital: "Asuncion" },
    { nombre: "Chile", capital: "Santiago" },
  ];
  
  export function obtenerSuCapital(paisNombre) {
    const pais = listapaises.find((p) => p.nombre === paisNombre);
    return pais ? pais.capital : null;
  }
  