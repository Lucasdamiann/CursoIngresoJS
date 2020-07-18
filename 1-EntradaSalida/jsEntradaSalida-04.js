/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
	var vDato;//defino veriable
	
	vDato = prompt("Ingrese Dato");//asigno variable
	document.getElementById("txtIdNombre").value = vDato;

	
}

