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
function getUser(username) {}
// Funcion principal de login del programa la cual valida el email y la contraseña
async function login() {
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
	if (emailValido == 2 && credencialesvalidas == 2) {
		sessionStorage.setItem('glbvalor', username);
		window.location = './home/menu.html';
		sessionStorage.setItem('nav', 't');
	}
}



function bienvenido(username) {}

