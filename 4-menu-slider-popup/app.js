// selector
const burger = document.querySelector('.hamburger');
const slider = document.querySelector('.slider');
const close = document.querySelector('#close-menu');

// event
function showMenu(e) {
	// show menu
	slider.style.transform = 'translateX(0%)';
	// hide hamburger
	burger.style.transform = 'translateX(100%)';
}

function closeMenu(e) {
	// hide menu
	slider.style.transform = 'translateX(-100%)';
	// show hamburger
	burger.style.transform = 'translateX(0%)';
}

// event listener
burger.addEventListener('click', showMenu);
close.addEventListener('click', closeMenu);