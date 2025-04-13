function calcularConsumo() {
    let km = parseFloat(document.getElementById("km").value);
    let litros = parseFloat(document.getElementById("litros").value);

    if (isNaN(km) || isNaN(litros) || km <= 0 || litros <= 0) {
      alert("Por favor, ingresa valores válidos y mayores a cero.");
    } else {
      let consumo = litros / km;
      document.getElementById("resultado").innerText = "El consumo de combustible por kilómetro es: " + consumo.toFixed(2) + " litros/km";
    }
  }