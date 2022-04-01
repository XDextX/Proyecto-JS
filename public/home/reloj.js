
var datos={}
function reloj() {
		var actualizarHora = function () {
		var fecha = new Date(),
			horas = fecha.getHours(),
			ampm,
			minutos = fecha.getMinutes(),
			dia = fecha.getDate(),
			mes = fecha.getMonth(),
			year = fecha.getFullYear();

		var formatDate = '';

		var meses = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];

		if (horas >= 12) {
			horas = horas - 12;
			ampm = 'PM';
		} else {
			ampm = 'AM';
		}

		if (horas == 0) {
			horas = 12;
		}

		if (minutos < 10) {
			minutos = '0' + minutos;
		}

		formatDate += dia;
		formatDate += '/';
		formatDate += meses[mes];
		formatDate += '/';
		formatDate += year;
		formatDate += ' ';
		formatDate += horas;
		formatDate += ':';
		formatDate += minutos;
		formatDate += ' ';
		formatDate += ampm;

		datos.Date = formatDate;
	};

	actualizarHora();
	var intervalo = setInterval(actualizarHora, 1000);

	var user = JSON.parse(sessionStorage.getItem('user'));
	datos.usuario = 'Bienvenido' + ' ' + user.nombre;
	if(user.fechaultimoingreso != null){
		var pr = user.fechaultimoingreso.split(".")
		datos.fechaultimoingreso = 'Fecha ultimo ingreso:'+' '+ pr[0];

	}
	
}
reloj();
