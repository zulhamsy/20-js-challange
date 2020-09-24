// selector
const burger = document.querySelector('.hamburger');
const slider = document.querySelector('.slider');
const close = document.querySelector('#close-menu');
const jumbotron = document.querySelector('.title');

// menu state
const sliderMenu = {
	state: false
};

// event
function showMenu(e) {
	// show menu
	slider.style.transform = 'translateX(0%)';
	sliderMenu.state = true;
	// hide hamburger
	burger.style.transform = 'translateX(100%)';
}

function closeMenu(e) {
	// hide menu
	slider.style.transform = 'translateX(-100%)';
	sliderMenu.state = false;
	// show hamburger
	burger.style.transform = 'translateX(0%)';
}

function jumbloClose(e) {
	if(sliderMenu.state) {
		closeMenu();
	}
}

// event listener
burger.addEventListener('click', showMenu);
close.addEventListener('click', closeMenu);
jumbotron.addEventListener('click', jumbloClose);