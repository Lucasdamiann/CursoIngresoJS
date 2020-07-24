function mostrar()
{
	let edad;
	let sexo;
	edad=parseInt(txtIdEdad.value);
	estado=estadoCivil.value;
	if(edad<18 && estado!="Soltero")
	{
		alert("Es muy pequeño para NO ser soltero");
	}

	
	


}