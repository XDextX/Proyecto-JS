validateLogin();
function validateLogin() {
	let user = sessionStorage.getItem('glbvalor');
	if (!user) {
		window.location.replace('../index.html');
	} else {
		if (
			sessionStorage.getItem('nav') != 't' &&
			sessionStorage.getItem('prev') != window.location.href
		) {
			window.location = '/ventana_de_fallo.html';
		} else {
			sessionStorage.setItem('nav', 'f');
			sessionStorage.setItem('prev', location.href);
		}
	}
}

function blockNavigation(e) {
	window.location.href = window.history.previous.href;
	console.log(window.history.previous.href);

	//Fuente: https://www.iteramos.com/pregunta/18414/como-se-obtiene-la-url-anterior-en-javascript
}
