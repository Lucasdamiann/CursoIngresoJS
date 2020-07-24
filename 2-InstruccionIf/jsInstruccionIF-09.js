function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	let numax=10;
	let numin=1;
	let num;

	num=Math.round(Math.random()* (numax-numin)+numin);
	alert(num);




	/*
	Math.random()//da numeros entre el 0 y el 1
	Math.floor//redondea los numeros hacia abajo
	Math.ceil//redondea hacia arriba
	Math.round//redondea hacia arriba o abajo
	*/

}