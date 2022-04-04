let count = 0;
import test from '../test.js';

const grid1 = {
	view: 'datatable',
	id: 'grid',
	columns: [
		{ id: 'usuario', headermenu: false, header: 'Usuarios', fillspace: true },
		{ id: 'nombre', header: 'Nombre', fillspace: true },
		{ id: 'apellido', header: 'Apellido', fillspace: true },
		{ id: 'fechaultimoingreso', header: 'UltimaConexion', fillspace: true },
		{ header: { content: 'headerMenu' }, headermenu: false, width: 35 },
	],
	autoheight: true,
	scrollX: false,
	url: '/EntryPoints/usuarios/all',
};

webix.ready(function () {
	webix.ui({
		view: 'scrollview',
		scroll: 'y',
		body: {
			rows: [grid1],
		},
	});
});
