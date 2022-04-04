import test from '/test.js';
const recursos = {
	form_name: 'login',
	intentos: 3,
	url_login: 'entrypoints/usuarios',
	url_cambio_fecha: 'entrypoints/usuarios/cambiar/acceso',
	home_page: '/home/menu.html',
	error_page: 'ventana_de_fallo.html',
};
webix.ready(() => {
	webix.ui({
		rows: [
			{},
			{
				cols: [
					{},
					{
						rows: [
							{ type: 'header', template: 'Login: Arturo' },
							form({ width: 300, id: recursos.form_name }),
						],
					},
					{},
				],
			},
			{},
		],
	});
});

function form(config) {
	let element = {
		view: 'form',
		elements: [
			{
				view: 'text',
				label: 'Ususario',
				name: 'usuario',
				placeholder: 'example@example.com',
				validate: webix.rules.isEmail && webix.rules.isNotEmpty,
			},
			{
				view: 'text',
				type: 'password',
				label: 'Clave',
				name: 'clave',
				placeholder: '******',
				validate: webix.rules.isNotEmpty,
			},
			{
				margin: 20,
				cols: [button({ click: acceder })],
			},
		],
		...config,
	};
	return element;
}
function button(config) {
	return {
		view: 'button',
		type: 'form',
		value: 'Acceder',
		align: 'rigth',
		click: function () {
			let values = this.getFormView().getValues();
			webix.message(JSON.stringify(values));
		},
		...config,
	};
}

async function acceder() {
	if ($$(recursos.form_name).validate()) {
		let formData = this.getFormView().getValues();
		console.log(formData);
		let data = await verificarDatos(formData);
		if (data) {
			guardarSession(data);
			actualizarFecha(data);
			home_page();
		} else {
			webix.message('Credenciales invalidas');
			recursos.intentos--;
		}
	} else {
		webix.message('Campos en rojo incorrectos');
		recursos.intentos--;
	}
	if (recursos.intentos <= 0) {
		error_page();
	}
}
function home_page() {
	let page = recursos.home_page;
	redirect(page);
}
function error_page() {
	redirect(recursos.error_page);
}
function redirect(page) {
	window.location = page;
}

function guardarSession(data) {
	sessionStorage.setItem('user', JSON.stringify(data));
	sessionStorage.setItem('nav', 't');
}

async function verificarDatos(formData) {
	let data = await test.getSingleData(recursos.url_login, formData);
	return Object.keys(data).length !== 0 ? data : null;
}
async function actualizarFecha(params) {
	let data = await test.getSingleData(recursos.url_cambio_fecha, params);
	console.log(data);
}
