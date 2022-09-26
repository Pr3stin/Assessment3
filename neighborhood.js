const foodArr = ["Zeff's Dockside", "Shores Inn", "Baffin Brewing Company", "Brownies On the Lake"];
const submit = document.querySelector('input');

submit.addEventListener('click', (event) => {
    const food = Math.floor(Math.random() * foodArr.length);
    alert(foodArr[food]);
});