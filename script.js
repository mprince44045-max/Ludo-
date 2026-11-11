let currentPlayer = 1;
let diceValue = 0;
const statusText = document.getElementById('status');
const diceElement = document.getElementById('dice');
const rollBtn = document.getElementById('roll-btn');

function rollDice() {
    // Dice ka random number (1 se 6)
    diceValue = Math.floor(Math.random() * 6) + 1;
    
    // Dice ke emoji change karna
    const diceEmojis = ['', '⚀', '⚁', '⚂', '⚃', '⚄', '⚅'];
    diceElement.innerText = diceEmojis[diceValue];

    // Text update karna
    statusText.innerText = `Player ${currentPlayer} ne ${diceValue} pheka!`;

    // Token move karne ka logic (Basic Example)
    moveToken(currentPlayer, diceValue);

    // Turn change karna
    currentPlayer = (currentPlayer === 1) ? 2 : 1;
}

function moveToken(player, steps) {
    // Ye basic example hai. Asal game mein yahan board ki position check hogi.
    const token = document.getElementById(`token-${player}`);
    
    // Animation ke liye thoda transform add karna
    token.style.transform = `translateY(-${steps * 5}px)`;
    
    setTimeout(() => {
        token.style.transform = `translateY(0px)`; // Wapas apni jagah
    }, 500);
}

rollBtn.addEventListener('click', rollDice);
