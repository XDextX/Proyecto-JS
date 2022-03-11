import test from './test.js';
//-------Declaracion de constantes-----//
const btnLogin = document.getElementById('login');
const btnVista = document.getElementById('vista');
const inputUsername = document.getElementById('user');
const inputpassword = document.getElementById('pass');
const validacionEmail =
	/^[A-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[A-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[A-z0-9](?:[A-z0-9-]*[A-z0-9])?\.)+[A-z0-9](?:[A-z0-9-]*[A-z0-9])?$/;
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
	if (!validacionEmail.test(username.toLowerCase())) {
		alert('Formato de email invalido');
		valid = false;
	} else {
		let data = await getUser(username.toLowerCase(), password);
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
	if (Object.keys(data).length !== 0) {
		sessionStorage.setItem('user', JSON.stringify(data));
		sessionStorage.setItem('nav', 't');
		test.getData('entrypoints/usuarios/cambiar/acceso',{
			usuario: data.usuario,
		});
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
async function login() {
	var username = document.getElementById('user').value;
	var password = document.getElementById('pass').value;

	// Variables llaves
	var emailValido = 2;
	var passwordValida = 0;

	// Si el email es valido la alerta al usuario e internamente la variable llave se vuelve un 2

	// Si es incorrecto alerta al usario y a la consola y la variable llave se vuelve un 1
	if (!validacionEmail.test(username)) {
		console.log('Error de email');
		alert('El formato del email es incorrecta.');
		emailValido = 1;
	}
	// Si la contraseña es correcta la guarda en la memoria y la variable llave se vuelve un 2
	d = await getData('/EntryPoints/demorutina2',{usuario:username, password:password})
	if (d.length > 0 ) {
		credencialesvalidas = 2;

		//	Si la contraseña es incorrecta alerta a la consola y al usuario y la variable llave se vuelve un 1
	} else {
		console.log('Error de contraseña');
		alert('Las credenciales son incorrectas');
		credencialesvalidas = 1;
	}

	// Si el email o la contraseña estan erroneas por medio de las llaver se evalua y el contador
	// disminulle y muestra el numero de intentos restantes
	if (emailValido == 1 || credencialesvalidas == 1) {
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



function bienvenido(username) {}

