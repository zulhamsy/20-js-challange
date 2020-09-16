// selector
const movie = document.querySelector('select');
const seats = document.querySelectorAll('.seat-select .seat');
const container = document.querySelector('.seat-select');

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

// event handler
movie.addEventListener('change', function(e) {
  console.log(e.target.value);
});

container.addEventListener('click', selectSeat)