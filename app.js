const colors = ["green", "red", "rgba(133, 122, 200)", "#F15025"];
const buttonColor = document.getElementById('btn');
const color = document.querySelector(".color");

buttonColor.addEventListener('click', function() {
    const randomNumber = getRandomNumber();
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
});

function getRandomNumber() {
    // returns a random number from 0 to 1
    return Math.floor(Math.random() * colors.length);
}