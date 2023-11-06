const player1Die = document.getElementById("img1");
const player2Die = document.getElementById("img2");



player1Die.src = `./img/dice${generateRandomInt()}.png`;
player2Die.src = `./img/dice${generateRandomInt()}.png`;

function generateRandomInt() {
    return Math.floor(Math.random() * (7 - 1) + 1);
}