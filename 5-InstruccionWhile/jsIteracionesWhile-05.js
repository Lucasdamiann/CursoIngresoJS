/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	let sexo;
	sexo = prompt("ingrese f para femenino ó m para masculino .");
	while(sexo == "f" || sexo == "m")
	{	
		document.getElementById("txtIdSexo").value = sexo;
		sexo = a;
	}
	//document.getElementById("txtIdSexo").value = sexo;

	
}//FIN DE LA FUNCIÓN