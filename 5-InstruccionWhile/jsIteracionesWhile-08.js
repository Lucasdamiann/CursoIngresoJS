/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	
	let respuesta="si";
	let sumaPos=0;
	let multNeg=1;
	let numero=0;
		
	while(respuesta == "si")
	
	{
		numero = parseInt(prompt("Ingresa un numero"));
		
		if (numero>0)
		{
			sumaPos=sumaPos+numero;
		}
		else
		{
			multNeg=multNeg*numero
		}
		
		respuesta = prompt("Seguis sumando numeros, si o no?")
		
	}	
	document.getElementById("txtIdSuma").value=sumaPos;
	document.getElementById("txtIdProducto").value=multNeg;

}//FIN DE LA FUNCIÓN