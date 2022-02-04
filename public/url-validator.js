validateLogin();
function validateLogin() {
	let user = sessionStorage.getItem('glbvalor');
	if (!user) {
		window.location.replace('./index.html');
	}
}
