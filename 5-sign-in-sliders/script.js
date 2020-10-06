const container = document.querySelector('.container');
const overRight = document.querySelector('.overlay-right');
const overLeft = document.querySelector('.overlay-left');

overRight.addEventListener('click', () => {
	container.classList.add('right-active');
});

overLeft.addEventListener('click', () => {
  container.classList.remove('right-active');
});