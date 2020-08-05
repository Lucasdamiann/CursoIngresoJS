function mostrar()
{
	mesDelAño = txtIdMes.value;
	switch (mesDelAño) {
		case "Febrero":
			alert("Este mes no tiene mas de 29 días");
			break;
	default:
			alert("Tienen 30 o más días");
			break;
	
}
}//FIN DE LA FUNCIÓN