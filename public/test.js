function testConection() {
	webix.ajax('/EntryPoints/demorutina', (text, data) => {
		console.log(JSON.parse(text));
	});
}

/**
 * Funcion asyncronica para retornar la informacion obtenida de una consulta GET
 * @param {String} direction Direccion del recurso que se quiere consultar
 * @param {Object} params parametros que se nesecitan mandar junto la consulta
 * @returns {Object[]}
 */
async function getData(direction, params = {}) {
	let url = direction;
	let result = [];
	if (params == {}) {
		//demoritna?usuario=pepe&clave=1234&
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
	console.log(result);
	return result;
}
async function getSingleData(direction, params = {}) {
	let data = await getData(direction, params);
	if (data.length > 0) {
		return data[0];
	} else {
		return {};
	}
}
export default { getData, getSingleData };
