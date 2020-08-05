/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	let num;
	
	do{
		num = parseInt(prompt("ingrese un número entre 0 y 9."));

		document.getElementById("txtIdNumero").value = num;
		}
	while (!(num>=0 && num<=9));
		
	
		
	
	
}//FIN DE LA FUNCIÓN


/*
do
{
sentencia 1 //por lo menos una vez
sentencia 2 //
sentencia 3 //
}whilw(condicion);

*/