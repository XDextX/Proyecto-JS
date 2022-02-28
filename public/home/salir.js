document.getElementById('btn_salir').addEventListener('click', cerrarse);
function cerrarse() {
	let text;
	if (confirm('Desea salir?') == true) {
		text = 'You pressed OK!';
		sessionStorage.removeItem('user');
		window.location = '../index.html';
	} else {
		text = 'You canceled!';
	}
}
