const buttonOne = document.querySelector('#color');
const buttonTwo = document.querySelector('#place');
const buttonThree = document.querySelector('#ritual');

buttonOne.addEventListener('click', (event) => {
    alert('Blue is my favorite color!');
});

buttonTwo.addEventListener('click', (event) => {
    alert('My favorite place is home!');
});

buttonThree.addEventListener('click', (event) => {
    alert('My favorite ritual is watching football all Sunday!');
});