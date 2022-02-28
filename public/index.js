import test from './test.js';
//-------Declaracion de constantes-----//
const btnLogin = document.getElementById('login');
const btnVista = document.getElementById('vista');
const inputUsername = document.getElementById('user');
const inputpassword = document.getElementById('pass');
const validacionEmail =
	/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
//-------------------------------------//

//-------Declaracion de eventos--------//
btnVista.addEventListener('click', mostrarConstrasensa);
btnLogin.addEventListener('click', login2);
//-------------------------------------//

/**
 * Variable de conteo
 */
let cont = 3;

//-------Declaracion de Funciones------//

/**
 * Fucion para motra o ocultar la contraseña por medio de un boton
 * con el simbolo de (o) como identificador
 */
function mostrarConstrasensa() {
	let tipo = document.getElementById('pass');
	if (tipo.type == 'password') {
		tipo.type = 'text';
	} else {
		tipo.type = 'password';
	}
}
/**
 * Segunda iteracion del Login extrayendo datos del backend
 */
async function login2() {
	let username = inputUsername.value;
	let password = inputpassword.value;
	let valid = true;
	if (!validacionEmail.test(username)) {
		alert('Formato de email invalido');
		valid = false;
	} else {
		let data = await getUser(username, password);
		valid = validarData(data);
	}
	if (!valid) {
		cont--;
		if (cont > 0) {
			return;
		} else {
			window.location = 'ventana_de_fallo.html';
		}
	}
}
/**
 * Funcion que valida la informacion recibida del backend y redirecciona
 * @param {object} data data recuperada del backend
 * @returns {boolean}
 */
function validarData(data) {
	if (data != {}) {
		sessionStorage.setItem('user', JSON.stringify(data));
		sessionStorage.setItem('nav', 't');
		window.location = '/home/menu.html';
	} else {
		alert('Credenciales invalidas');
		return false;
	}
	return true;
}

/**
 * Encuentra un usuario que coincida con un username y password correcta
 * @param {string} username Correo electronico del usuario
 * @param {string} password Contraseña correspondiente del usuario
 * @returns {Object} retorna el usuario y tipo de usuario, {} si no se encuentra
 */
async function getUser(username, password) {
	return await test.getSingleData('entrypoints/usuarios', {
		usuario: username,
		clave: password,
	});
}

// Funcion principal de login del programa la cual valida el email y la contraseña
function login() {
	var username = document.getElementById('user').value;
	var password = document.getElementById('pass').value;

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
		window.location = 'ventana_de_fallo.html';
	}

	// Si el email y la contraseña son correctos ambos se llama a la pestaña menu
	if (emailValido == 2 && passwordValida == 2) {
		sessionStorage.setItem('user', { usuario: username });
		window.location = './home/menu.html';
		sessionStorage.setItem('nav', 't');
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

function bienvenido(username) {}
