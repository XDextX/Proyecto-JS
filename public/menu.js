webix.ui({
	container: 'contenedor_menu',
	view: 'toolbar',
	width: 1308,
	paddingY: 0,
	cols: [
		{
			view: 'menu',
			with: 1325,
			data: [
				{ id: '1', value: 'Inicio', icon: 'home' },
				{ id: '2', value: 'Usuarios', icon: 'database' },
				{ id: '3', value: 'Acerca de', icon: 'cube' },
				{ id: '4', value: 'Salir', icon: 'cog' },
				{ id: 'user', value: datos.usuario },
				{ id: 'reloj', value: datos.Date },
				{
					id: 'fechaultimoingreso',
					value: datos.fechaultimoingreso ? datos.fechaultimoingreso : '',
				},
			],
			on: {
				onMenuItemClick: function (id) {
					var seleccion = this.getMenuItem(id).value;
					let text;
					if (seleccion == 'Salir' && confirm('Desea salir?') == true) {
						text = 'You pressed OK!';
						sessionStorage.removeItem('user');
						window.location = '/index.html';
					} else {
						ext = 'You canceled!';
					}
					switch (seleccion) {
						case 'Usuarios':
							navegar("tabla.html")
							break;
						case 'Inicio':
							navegar('/home/menu.html');
							break;
						case 'Acerca de':
							navegar('/home/acerca/nosotros.html');
							break;

						default:
							break;
					}
				},
			},
		},
	],
});

function navegar(url) {
	sessionStorage.setItem('nav', 't');
	window.location = url;
}
