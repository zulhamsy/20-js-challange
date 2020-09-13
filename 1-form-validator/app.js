// Input Field
const name = document.querySelector('#name'),
  email = document.querySelector('#email'),
  pass = document.querySelector('#pass'),
  pass2 = document.querySelector('#pass2');

// checking function
function validName(e) {
  const input = e.target.value;
  const re = /^\w+$/gi;
  if (re.test(input)) {
    name.classList.remove('is-invalid');
  } else {
    name.classList.add('is-invalid');
  }
}

function validEmail(e) {
  const input = e.target.value;
  const re =  /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  if (re.test(input)) {
    email.classList.remove('is-invalid');
  } else {
    email.classList.add('is-invalid');
  }
}

function validPass(e) {
  const input = e.target.value;
  const re = /^[a-z0-9]{6,}$/gi;
  if (re.test(input)) {
    pass.classList.remove('is-invalid');
  } else {
    pass.classList.add('is-invalid');
  }
}

function confirmPass(e) {
  const input = e.target.value;
  if (input === pass.value) {
    pass2.classList.remove('is-invalid');
  } else {
    pass2.classList.add('is-invalid');
  }
}

// event listener
name.addEventListener('blur', validName);
email.addEventListener('blur', validEmail);
pass.addEventListener('blur', validPass);
pass2.addEventListener('blur', confirmPass);