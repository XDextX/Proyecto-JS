function testConection() {
	webix.ajax('/EntryPoints/demorutina', (text, data) => {
		console.log(JSON.parse(text));
	});
}
/**
 * Funcion para retornar la informacion obtenida de una consulta GET
 * @param {String} direction Direccion del recurso que se quiere consultar
 * @param {Object} params parametros que se nesecitan mandar junto la consulta
 */
async function getData(direction, params = {}) {
	let url = direction;
	let result = {};
	if (params == {}) {
	} else {
		url += '?';
		Object.entries(params).forEach((entry) => {
			const [key, value] = entry;
			url += `${key}=${value}&`;
		});
	}
	await webix.ajax(url, (text, data) => {
		result = JSON.parse(text);
	});
	return result;
}
