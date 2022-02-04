validateLogin();
function validateLogin() {
	let user = sessionStorage.getItem('Usuario');
	if (!user) {
		window.location.replace('./index.html');
	}
}
