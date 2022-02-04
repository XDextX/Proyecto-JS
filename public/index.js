// Asinacion de nombres por de defecto para que el usuario
// pueda saber la funcion de los campos

//document.getElementById("user").value = "Username";
//document.getElementById("pass").value = "Password";
//---------------------------------------------------

// Fucion para motra o ocultar la contraseña por medio de un boton
// con el simbolo de (o) como identificador
let btnLogin = document.getElementById('login');
btnLogin.addEventListener('click', login);
let btnVista = document.getElementById('vista');
btnVista.addEventListener('click', mostrarConstrasensa);
function mostrarConstrasensa() {
	var tipo = document.getElementById('pass');
	if (tipo.type == 'password') {
		tipo.type = 'text';
	} else {
		tipo.type = 'password';
	}
}

// Variable de conteo
var cont = '3';

// Funcion principal de login del programa la cual valida el email y la contraseña
function login() {
	var username = document.getElementById('user').value;
	var password = document.getElementById('pass').value;
	var validacionEmail =
		/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;

	// Variables llaves
	var emailValido = 2;
	var passwordValida = 0;

	// Si el email es valido la alerta al usuario e internamente la variable llave se vuelve un 2

	// Si es incorrecto alerta al usario y a la consola y la variable llave se vuelve un 1
	if (!validacionEmail.test(username)) {
		console.log('Error de email');
		alert('La dirección de email es incorrecta.');
		emailValido = 1;
	}
	// Si la contraseña es correcta la guarda en la memoria y la variable llave se vuelve un 2
	if (validatePass(password)) {
		// si es verdadero guardar en memoria
		console.log('Guardando en memoria...');
		passwordValida = 2;

		//	Si la contraseña es incorrecta alerta a la consola y al usuario y la variable llave se vuelve un 1
	} else {
		console.log('Error de contraseña');
		alert('La contraseña es incorrecta.');
		passwordValida = 1;
	}

	// Si el email o la contraseña estan erroneas por medio de las llaver se evalua y el contador
	// disminulle y muestra el numero de intentos restantes
	if (emailValido == 1 || passwordValida == 1) {
		cont--;
	}

	// Si el contador es igual a 0 se llama a una ventana externa de fallo que le indica al usuario que el
	// limite de intentos termino
	if (cont == 0) {
		window.location = 'ventana de fallo.html';
	}

	// Si el email y la contraseña son correctos ambos se llama a la pestaña menu
	if (emailValido == 2 && passwordValida == 2) {
		sessionStorage.setItem('Usuario', username);
		window.location = 'menu.html';
	}
}

// Proseso para la validacion de la contraseña
function validatePassword(password) {
	var parejas = obtenerParejas(password);
	if (password == '') {
		return false;
	}
	for (var i = 0; i < parejas.length; i++) {
		var numeros = parejas[i].split('');
		//console.log(numeros)
		//console.log(numeros[0] % 2)
		if (numeros[0] % 2 == 0) {
			// si no es impar
			if (numeros[0] * 2 == numeros[1]) {
				return true;
			}
		}
	}
}
function validatePass(pass) {
	if (pass == '') {
		return false;
	}
	let len = pass.length % 2 == 0 ? pass.length : pass.length - 1;
	let valid = true;
	for (let i = 0; i < len - 1; i++) {
		if ((i + 1) % 2 != 0) {
			const num = parseInt(pass[i]);
			if (num * 2 != parseInt(pass[i + 1])) {
				valid = false;
			}
		}
	}
	return valid;
}
function obtenerParejas(password) {
	return password.match(/..|./g);
}
