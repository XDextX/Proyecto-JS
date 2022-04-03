import test from '/test.js';
// datasource
var images = [
	{
		id: 1,
		src: '/img/f1.jpg',
		title: 'Jefferson',
		edad: '19',
		origen: 'Tilaran',
	},
	{ id: 2, src: '/img/f2.jpg', title: 'David', edad: '19', origen: 'Moravia' },
	{
		id: 3,
		src: '/img/fotomia.jfif',
		title: 'German',
		edad: '25',
		origen: 'Tilaran',
	},
	{
		id: 4,
		src: '/img/andrecito.jpg',
		title: 'Andres',
		edad: '23',
		origen: 'Tilaran',
	},
	{
		id: 5,
		src: '/img/sniker.png',
		title: 'Jose',
		edad: '20',
		origen: 'Tilaran',
	},
];

// create an array with carousel views
var viewsArray = [];
for (var i = 0; i < images.length; i++) {
	viewsArray.push({
		id: images[i].id,
		css: 'image',
		template: img,
		data: webix.copy(images[i]),
	});
}

webix.ui({
	container: 'contenedor_menu',
	rows: [
		{
			view: 'carousel',
			id: 'carousel',
			cols: viewsArray,
			navigation: {
				type: 'side',
				items: false,
			},
		},
		{
			view: 'dataview',
			id: 'imageList',
			css: 'nav_list',
			yCount: 1,
			select: true,
			scroll: false,
		},
	],
});

function img(obj) {
	return `<div class="skere"><img src="${obj.src}" width="450" height="450" /><span><p>${obj.title}</p><p>Edad = ${obj.edad}</p>
		<p>Estudiante de Junior Developer</p><p>Originario de ${obj.origen}</p><p></p></span></div>`;
}

$$('imageList').attachEvent('onItemClick', function (id) {
	$$(id).show();
});

$$('carousel').attachEvent('onShow', function (id) {
	$$('imageList').select(id);
});
let data = await test.getSingleData('/entrypoints/usuarios/all', {
	usuario: 'acassidyg@wufoo.com',
	clave: '3xAs67Rh',
});
console.log(data);
