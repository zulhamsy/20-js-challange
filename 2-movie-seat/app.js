// selector
const movie = document.querySelector('select');
const seats = document.querySelectorAll('.seat-select .seat');
const container = document.querySelector('.seat-select');
const price = document.querySelector('#price');
const counter = document.querySelector('#counter');

// function helper
function __selected() {
  return document.querySelectorAll('.seat-select .seat-selected');
}

function selectMovie(e) {
  const movie = e.value;
  const list = {
    avenger: 10000,
    theraid: 15000
  };
  return list[movie];
}

function changePrice(e) {
  price.innerText = counter.innerText * selectMovie(movie);
}

function getSeatArray() {
	let arr = [];
	__selected().forEach(seat => {
	  arr.push(Array.prototype.indexOf.call(seats, seat));
	});
	return arr;
}

// function handler
function selectSeat(e) {
  const target = e.target;
  // run function if only seat is clicked
  if (target.classList.contains('seat') && !target.classList.contains('seat-occupied')) {
    // check seat state
    if (!target.classList.contains('seat-selected')) {
      target.classList.add('seat-selected');
      counter.innerText = __selected().length;
      changePrice();
      //console.log(getSeatArray());
      }
    } else {
      target.classList.remove('seat-selected');
      counter.innerText = __selected().length;
      changePrice();
    	//console.log(getSeatArray());
    }
  }


// event handler

container.addEventListener('click', selectSeat);
movie.addEventListener('change', changePrice);