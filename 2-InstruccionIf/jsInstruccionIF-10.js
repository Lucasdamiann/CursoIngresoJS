function mostrar()
{
	let nota1=1;
	let nota2=10
	let notafinal;
	notafinal=Math.round(Math.random()*(nota2-nota1)+nota1);
	if(notafinal>=9)
	{
		alert( "Su nota es "+notafinal+" Excelente!");
	}
	else if(notafinal>=4)
	{
		alert("Su nota es "+notafinal+" Aprobo!");
	}
	else
	{
		alert("Su nota es "+notafinal+" Vamos, la proxima se puede!");
	}

}