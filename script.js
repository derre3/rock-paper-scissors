const choices = document.querySelectorAll('.play-button');
const start = document.querySelector('.start-button');
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
    if (playerWins === 5 || computerWins === 5) {
        gameActive = 0;
        isGameActive();
        start.style.display = "block";
    }
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
        alert(`Draw! ${playerSelection} vs ${computerSelection}`);
    } else if (computerSelection === 'rock' && playerSelection === 'paper') {
        playerWins++, alert(`You win the round, ${playerSelection} beats ${computerSelection}`),checkWinCount();
    } else if (computerSelection === 'paper' && playerSelection === 'rock') {
        computerWins++, alert(`You lose the round, ${computerSelection} beats ${playerSelection}`),checkWinCount();
    } else if (computerSelection === 'paper' && playerSelection === 'scissors') {
        playerWins++, alert(`You win the round, ${playerSelection} beats ${computerSelection}`),checkWinCount();
    } else if (computerSelection === 'scissors' && playerSelection === 'paper') {
        computerWins++, alert(`You lose the round, ${computerSelection} beats ${playerSelection}`),checkWinCount();
    } else if (computerSelection === 'scissors' && playerSelection === 'rock') {
        playerWins++, alert(`You win the round, ${playerSelection} beats ${computerSelection}`),checkWinCount();
    } else if (computerSelection === 'rock' && playerSelection === 'scissors') {
        computerWins++, alert(`You lose the round, ${computerSelection} beats ${playerSelection}`),checkWinCount();
    } else alert(`error`);
}


// function playGame() {
//     computerWins = 0;
//     playerWins = 0;
//     for (let i = 0; i < 5 && computerWins < 3 && playerWins < 3; i++) {
//         alert(`Current Score: \r Player: ${playerWins} Computer: ${computerWins}`);
//     }
//     if (playerWins > computerWins) {
//         alert(`Victory, Congratulations! \r Final Score: \r Player: ${playerWins} vs Computer: ${computerWins}`)
//     } else if (playerWins < computerWins) { 
//         alert(`Oh no, the computer is victorious! \r Final Score: \r Player: ${playerWins} vs Computer: ${computerWins}`)
//     } else alert(`Tie game, no winners! \r Final Score: \r Player: ${playerWins} vs Computer: ${computerWins}`);
// }