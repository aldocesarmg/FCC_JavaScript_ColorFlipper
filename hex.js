const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const buttonColor = document.getElementById('btn');
const color = document.querySelector(".color");

buttonColor.addEventListener('click', function () {
    let hexColor = '#';
    for (let i=0; i<6; i++) {
        hexColor += hex[getRandomNumber()];
    }
    document.body.style.backgroundColor = hexColor;
    color.textContent = hexColor;
});

function getRandomNumber() {
    // returns a random number from 0 to 1
    return Math.floor(Math.random() * hex.length);
}