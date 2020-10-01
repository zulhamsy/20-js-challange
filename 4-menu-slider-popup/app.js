// selector
const burger = document.querySelector('.hamburger');
const slider = document.querySelector('.slider');
const close = document.querySelector('#close-menu');
const jumbotron = document.querySelector('.title');
const cta = document.querySelector('.btn');
const modal = document.querySelector('.modal-container');

// menu state
const states = {
  slider: false,
  modal: false
};

// event
function showMenu(e) {
  // show menu
  slider.style.transform = 'translateX(0%)';
  states.slider = true;
  // hide hamburger
  burger.style.transform = 'translateX(100%)';
}

function closeMenu(e) {
  // hide menu
  slider.style.transform = 'translateX(-100%)';
  states.slider = false;
  // show hamburger
  burger.style.transform = 'translateX(0%)';
}

function closeModal(e) {
  if (e.target.classList.contains('modal-container')) {
      // hide modal
      modal.style.opacity = '0';
      modal.style.background = 'rgba(0,0,0,0)';
      modal.style.visibility = 'hidden';
      states.modal = false;
    }
  }

  function jumbloClose(e) {
    if (states.slider) {
      closeMenu(e);
    }
    if (states.modal) {
      closeModal(e);
    }
  }

  function showModal(e) {
    if (!states.modal) {
      // agar eventnya tidak mentrigger event pada title element / jumbotron
      e.stopPropagation();
      // show modal
      modal.style.visibility = 'visible';
      modal.style.opacity = '1';
      modal.style.background = 'rgba(0,0,0,0.55)';
      states.modal = true;
    }
  }

  // event listener
  burger.addEventListener('click', showMenu);
  close.addEventListener('click', closeMenu);
  jumbotron.addEventListener('click', jumbloClose);
  cta.addEventListener('click', showModal);
  modal.addEventListener('click', jumbloClose);