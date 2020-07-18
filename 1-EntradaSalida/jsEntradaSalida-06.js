/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	var entero1;
	var entero2;
	//se asigna en variable un convertidor de string a int
	entero1 = parseInt(document.getElementById("txtIdNumeroUno").value);
	//se asigna en variable un convertidor de string a int
	entero2 = parseInt(document.getElementById("txtIdNumeroDos").value);
	
	alert("la suma es "+(entero1 + entero2));
}

