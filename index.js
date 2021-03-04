let pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
// https://regexr.com/

let fn = document.getElementById('fname');
let em = document.getElementById('email');
let msg = document.getElementById('message');
let b = document.getElementById('submit');
let fm = document.getElementById('contactform');

function formValidator(e) {
    e.preventDefault();


let data = {};
let errors = [];

if (fn.value) {
    data.fullname = fn.value;
    } else {
    errors.push('Please enter your full name');
}

	if (em.value) {
		if (pattern.test(em.value)) {
			data.em = em.value;
		} else {
			errors.push('Invalid email!');
		}

	} else {
		errors.push('Please enter your email');
	}
    
if (msg.value) {
    data.message = msg.value;
} else {
    errors.push('No message');
}
    
	if (errors.length === 0) {
        console.log(data);
        document.getElementById('contactform').reset();
        
	} else {
        console.log(errors);
	}
}

b.addEventListener('click', formValidator);