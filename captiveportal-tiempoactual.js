<!--
	var fechaActual = function() {
		var tiempo1 = new Date();
		var fecha = tiempo1.getDate();
		var dia = tiempo1.getDay();
		var mes = tiempo1.getMonth();
		var ano = tiempo1.getFullYear();
		var dias = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];
		var meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
		
		diaActual = dias[dia]; mesActual = meses[mes]; 
		mostrarFecha = diaActual + ", " + fecha + " / " + mesActual + " / " + ano;
		document.getElementById("fecha").innerHTML = "<p>" + mostrarFecha + "</p>";
	}  
	
	var horaActual = function() {
		var tiempo2 = new Date();
		var hora = tiempo2.getHours();
		var minutos = tiempo2.getMinutes();
		var segundos = tiempo2.getSeconds();
		var amPM = "AM";
		
		if (hora >= 12) {
			amPM = "PM"
			hora = hora - 12;
		} else {
			amPM = "AM"
		}
		
		if (hora == 0) {
			hora = 12;
		}
		
		if (minutos >= 0 && minutos < 10) {
			minutos = "0" + minutos;
		} 
		
		if (segundos >= 0 && segundos < 10) {
			segundos = "0" + segundos;
		}
		
		laHora = hora + ":" + minutos + ":" + segundos + " " + amPM;
		document.getElementById("hora").innerHTML = "<p>" + laHora + "</p>";
		setTimeout('horaActual()', 1000);
	} 
//-->