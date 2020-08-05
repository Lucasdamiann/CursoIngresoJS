function mostrar()
{
	let destino = document.getElementById("txtIdDestino").value;
	switch(destino)
	{
		case "Bariloche":
			alert("Hace frio");
			break;
		case "Cataratas":
			alert("Hace calor");
			break;
		case "Mar del plata":
			alert("Hace frio en el agua y al sol te quemas");
			break;
		case "Ushuaia":		
			alert("Hace frio");
			break;
			
	}	
}//FIN DE LA FUNCIÓN