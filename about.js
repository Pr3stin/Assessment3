console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('Thank you for your submission!');
}


let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);

let catDuck = document.querySelector('img');

catDuck.addEventListener('mouseover', (event) => {
	alert('I see you have good taste')
});

