/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar() {
	let respuesta = "si";
	let sumaNeg = 0;
	let sumaPos = 0
	let numero = 0;
	let i = 0;
	let j = 0;
	let k = 0;
	let l = 0;
	let prompos = 0;
	let promneg = 0;
	let diferencia;

	while (respuesta == "si") {
		numero = parseInt(prompt("Ingresa un numero"));

		if (numero < 0) {
			sumaNeg += numero;
			i++;//cont neg
			promneg = sumaNeg / i;
		}
		else if (numero > 0) {
			sumaPos += numero;
			j++;//con pos
			prompos = sumaPos / j;
		}
		else if (numero == 0) {
			k++;//cont cero
		}
		if (numero % 2 == 0) {
			l++;//cont pares
		}
		respuesta = prompt("Seguis sumando numeros, si o no?")

	}


	diferencia = sumaPos - sumaNeg
	document.write("La suma de los negativos es:" + sumaNeg + "<br>" +
		"La suma  de los positivos es:" + sumaPos + "<br>" +
		"La cantidad de positivos es:" + j + "<br>" +
		"La cantidad de negativos es:" + i + "<br>" +
		"La cantidad de ceros es:" + k + "<br>" +
		"La cantidad de pares es:" + l + "<br>" +
		"El promedio de positivos es:" + prompos + "<br>" +
		"El promedio de negativos es:" + promneg + "<br>" +
		"La diferencia entre positivos y negativos es:" + diferencia);


}//FIN DE LA FUNCIÓN