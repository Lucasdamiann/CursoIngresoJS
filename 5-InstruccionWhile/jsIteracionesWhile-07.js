/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	let contador=0;
	let acumulador=0;
	let respuesta;
	let numero=0;
	
	
	//respuesta = "si"
	do
	{
		numero = parseInt(prompt("Ingresa un numero"));
		acumulador =  acumulador+numero;
		respuesta = prompt("Seguis sumando numeros, si o no?")
		contador++;
	
	}while(respuesta == "si")
{
		
}

	document.getElementById("txtIdSuma").value=acumulador;
	document.getElementById("txtIdPromedio").value=acumulador/contador;

}//FIN DE LA FUNCIÓN