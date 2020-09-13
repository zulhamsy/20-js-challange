// Input Field
const name = document.querySelector('#name'),
  email = document.querySelector('#email'),
  pass = document.querySelector('#pass'),
  pass2 = document.querySelector('#pass2');

// Regex Matching
const re_name = /^\w+$/gi,
  re_email = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
  re_pass = /^[a-z0-9]{6,}$/gi;
  
// checking function
function validName(e) {
	const input = e.target.value;
	if(re_name.exec(input) != null) {
		console.log('valid name');
	} else {
		console.log('invalid name');
	}
}

function validEmail(e) {
	const input = e.target.value;
	if (re_email.exec(input) != null) {
	  console.log('valid email');
	} else {
	  console.log('invalid email');
	}
}

function validPass(e) {
	const input = e.target.value;
	if (re_pass.exec(input) != null) {
	  console.log('valid password');
	} else {
	  console.log('invalid password');
	}
}

function confirmPass(e) {
	const input = e.target.value;
	if(input === pass.value) {
		console.log('password match');
	} else {
		console.log('password not match');
	}
}
  
// event listener
name.addEventListener('blur', validName);
email.addEventListener('blur', validEmail);
pass.addEventListener('blur', validPass);
pass2.addEventListener('blur', confirmPass);