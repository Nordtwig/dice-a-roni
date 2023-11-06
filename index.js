const prompt = document.getElementById("prompt");
const player1Die = document.getElementById("img1");
const player2Die = document.getElementById("img2");

player1Roll = generateRandomInt();
player2Roll = generateRandomInt();

console.log(player1Roll);
console.log(player2Roll);

player1Die.src = `./img/dice${player1Roll}.png`;
player2Die.src = `./img/dice${player2Roll}.png`;

if (player1Roll === player2Roll) 
    prompt.textContent = "Draw!";
else if (player1Roll > player2Roll) 
    prompt.textContent = "🚩 Player 1 Wins!";
else if (player1Roll < player2Roll) 
    prompt.textContent = "🚩 Player 2 Wins!";


function generateRandomInt() {
    return Math.floor(Math.random() * (7 - 1) + 1);
}
