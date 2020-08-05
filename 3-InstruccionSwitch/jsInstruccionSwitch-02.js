function mostrar()
{
	//tomo el mes
	let mesDelAño;
	 
	mesDelAño = txtIdMes.value;
	switch (mesDelAño) {
		
		case "Marzo":
		case "Abril":
		case "Mayo":
		case "Junio":
			alert("Falta para el invierno");
			break;
		case "Julio":
		case "Agosto":
			alert("Abrigate que hace frio");
			break;	
		case "Enero":
		case "Febrero":
		case "Septiembre":
		case "Octubre":
		case "Noviembre":
		case "Diciembre":
			alert("Ya pasamos el frio, ahora calor!!!");
			break;
		
		
	}



}//FIN DE LA FUNCIÓN