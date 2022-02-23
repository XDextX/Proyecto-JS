function navigate(element) {
	let href = element.dataset.href;
	sessionStorage.setItem('nav', 't');
	window.location = href;
}
