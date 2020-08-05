function mostrar()
{
	let acumulador;
	let numero;
	let i=0;

	
	acumulador=0;
	
	while(i!=5)
	{	
		numero = parseInt(prompt("Ingrese un numerito"));
		acumulador = acumulador + numero;
		i++;
		
	}	
	
	document.getElementById("txtIdSuma").value=acumulador;
	document.getElementById("txtIdPromedio").value=acumulador/5;
}//FIN DE LA FUNCIÓN