/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	
let maximo;	
let minimo;
let numero;
let respuesta;
numero = parseInt(prompt("Ingresa un numero"));
respuesta = prompt("Seguis sumando numeros, si o no?")
maximo=numero;
minimo=numero;
while(respuesta == "si")

{
	numero = parseInt(prompt("Ingresa un numero"));	
	if (numero>=maximo)
	{
		maximo = numero;
	}
	else if(numero<minimo)
	{
		minimo=numero;
	}
	
	respuesta = prompt("Seguis sumando numeros, si o no?")
	
}	
document.getElementById("txtIdMaximo").value=maximo;
document.getElementById("txtIdMinimo").value=minimo;
}//FIN DE LA FUNCIÓN