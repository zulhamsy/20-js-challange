// selector
const movie = document.querySelector('select');
const seats = document.querySelectorAll('.seat-select .seat');
const container = document.querySelector('.seat-select');
const price = document.querySelector('#price');

// function handler
function selectSeat(e) {
  const target = e.target;
  // run function if only seat is clicked
  if (target.classList.contains('seat') && !target.classList.contains('seat-occupied')) {
    // check seat state
    if (!target.classList.contains('seat-selected')) {
      target.classList.add('seat-selected');
    } else {
      target.classList.remove('seat-selected');
    }
  }
}

function selectMovie(e) {
	const movie = e.target.value;
	const list = {
		avenger: 10000,
		theraid: 15000
	};
	price.innerText = list[movie];
}

// event handler
movie.addEventListener('change', selectMovie);

container.addEventListener('click', selectSeat)