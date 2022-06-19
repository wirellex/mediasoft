const headerBurger = document.querySelector('.header_burger');
if (headerBurger) {
	const headerMenu = document.querySelector('.header_menu');
	headerBurger.addEventListener("click", function (e) {
		document.body.classList.toggle('_lock');
		headerBurger.classList.toggle('active');
		headerMenu.classList.toggle('active');	
	});
}
