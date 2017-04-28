<!--

	var validator1 = function() {
		var usuario = document.getElementById("user").value;
		var clave = document.getElementById("pass").value;
		
		if (usuario.length == 0 || clave.length == 0) {
			alert("Por favor ingrese su Usuario y/o su Clave!");
			return false;
		} else if (!isNaN(usuario)) {
			alert("El Nombre del Usuario NO puede ser Numeros!");
			return false;
		} else if (clave == usuario) {
			alert("La Clave NO pueder ser igual al Nombre de Usuario!");
			return false;
		} else {
			return true;
		}
	}
	
//-->