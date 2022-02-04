

function mostrar(){
	var html = document.querySelector("link[rel='import']").import;
	var text = html.getElementById("pt");

document.body.appendChild(text.cloneNode(true));
}