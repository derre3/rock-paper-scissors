const choices = document.querySelectorAll('.play-button');
const start = document.querySelector('.start-button');
const score = document.querySelector('.score');
const info = document.querySelector('.info');
let playerChoice;
let gameActive = 0;
let computerWins;
let playerWins;
window.onload = isGameActive();

start.addEventListener('click', () => {
    gameActive = 1;
    start.style.display = "none";
    isGameActive();
    computerWins = 0;
    playerWins = 0;
    info.textContent = '';
    score.textContent = '';
})

choices.forEach(choice => {
    choice.addEventListener('click', () =>{
        playerChoice = choice.id;
        playRound();
    }) 
});



function isGameActive() {
    if (gameActive === 0) {
        choices.forEach(choice => {
            choice.style.display = "none"
        });
    } else {
        choices.forEach(choice => {
            choice.style.display = "block"
        });
    }
}

function checkWinCount() {
    if (playerWins >= 5 || computerWins >= 5) {
        checkWinner();
        gameActive = 0;
        playerWins = 0;
        computerWins = 0;
        isGameActive();
        start.style.display = "block";
    }
}

function checkWinner() {
    if (playerWins > computerWins) {
        info.textContent = "Congratulations, you won!"
    } else info.textContent = "Oh no, the computer won!"
}

function getComputerChoice() {
   let computerChoice = Math.floor(Math.random() *3);
   if (computerChoice === 0) {
    return 'rock'
   } else if (computerChoice === 1) {
    return 'paper'
   } else return 'scissors'
}

function playRound() {
    computerSelection = getComputerChoice();
    playerSelection = playerChoice;
    if (computerSelection === playerSelection) {
        info.textContent = `Draw! ${playerSelection} vs ${computerSelection}`,
        score.textContent = `You:${playerWins} vs Computer:${computerWins}`,
        checkWinCount();
    } else if (computerSelection === 'rock' && playerSelection === 'paper') {
        playerWins++, 
        info.textContent = `You win the round, ${playerSelection} beats ${computerSelection}`,
        score.textContent = `You:${playerWins} vs Computer:${computerWins}`,
        checkWinCount();
    } else if (computerSelection === 'paper' && playerSelection === 'rock') {
        computerWins++, 
        info.textContent = `You lose the round, ${computerSelection} beats ${playerSelection}`,
        score.textContent = `You:${playerWins} vs Computer:${computerWins}`,        
        checkWinCount();
    } else if (computerSelection === 'paper' && playerSelection === 'scissors') {
        playerWins++, 
        info.textContent = `You win the round, ${playerSelection} beats ${computerSelection}`,
        score.textContent = `You:${playerWins} vs Computer:${computerWins}`,
        checkWinCount();
    } else if (computerSelection === 'scissors' && playerSelection === 'paper') {
        computerWins++, 
        info.textContent = `You lose the round, ${computerSelection} beats ${playerSelection}`,
        score.textContent = `You:${playerWins} vs Computer:${computerWins}`,        
        checkWinCount();
    } else if (computerSelection === 'scissors' && playerSelection === 'rock') {
        playerWins++, 
        info.textContent = `You win the round, ${playerSelection} beats ${computerSelection}`,
        score.textContent = `You:${playerWins} vs Computer:${computerWins}`,
        checkWinCount();
    } else if (computerSelection === 'rock' && playerSelection === 'scissors') {
        computerWins++, 
        info.textContent = `You lose the round, ${computerSelection} beats ${playerSelection}`,
        score.textContent = `You:${playerWins} vs Computer:${computerWins}`,        
        checkWinCount();
    } else alert(`error`);
}