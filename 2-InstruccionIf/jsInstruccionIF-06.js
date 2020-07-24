function mostrar()
{
	let edad;
	edad=parseInt(txtIdEdad.value);
	
	if(edad<=12)
		{
			alert("Niño");
		}
	else
	{
		if(edad<=17 && edad>=13)
		{
			alert("Adolescente");
		}
		else
		{
			alert("Mayor");
		}
		
	}


}