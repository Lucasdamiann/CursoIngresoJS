function mostrar() {
	let estacion
	let estadia;
	let costofinal;
	let destino;
	estacion = document.getElementById("txtIdEstacion").value;
	destino = document.getElementById("txtIdDestino").value;
	estadia = 15000;

	switch (estacion) {
		case "Invierno":
			if (destino == "Bariloche") {
				costofinal = estadia * 1.2
			}
			else if (destino == "Cataratas" || destino == "Cordoba") {
				costofinal = estadia * 0.9
			}
			else {
				costofinal = estadia * 0.8
			}
			break;
		case "Verano":
			if (destino == "Bariloche") {
				costofinal = estadia * 0.8
			}
			else if (destino == "Cataratas" || destino == "Cordoba") {
				costofinal = estadia * 1.1				
			}
			else {
				costofinal = estadia * 1.2				
			}
			break;
		case "Otoño":
		case "Primavera":
			if (destino == "Bariloche") {
				costofinal = estadia * 1.1				
			}
			else if (destino == "Cataratas") {
				costofinal = estadia * 1.1				
			}
			else if (destino == "Cordoba") {
				costofinal = estadia * 1.1				
			}
			else {
				costofinal = estadia				
			}
		break;
		alert("El costo final es" + costofinal);
		default:
			alert("Esa provincia no esta contemplada, elegí otra");
			break;
		}
			

}