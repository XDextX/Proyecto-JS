import { getSingleData } from '/test.js';
const recursos = {
	form_name: 'login',
	intentos: 3,
	url_login: 'entrypoints/usuarios/cambiar/acceso',
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
				name: 'username',
				placeholder: 'example@example.com',
				validate: webix.rules.isEmail && webix.rules.isNotEmpty,
			},
			{
				view: 'text',
				type: 'password',
				label: 'Clave',
				name: 'password',
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
		data = verificarDatos(formData);
		if (data) {
			guardarSession(data);
		} else {
			webix.message('Credenciales invalidas');
		}
	}
}
function guardarSession(data) {
	sessionStorage.setItem('user', JSON.stringify(data));
	sessionStorage.setItem('nav', 't');
}

async function verificarDatos(formData) {
	let data = await getSingleData(recursos.url_login, formData);
	return Object.keys(data).length !== 0 ? data : null;
}
