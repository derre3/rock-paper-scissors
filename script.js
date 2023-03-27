// function to get computer choice
//     generate a number from 0 to 3
//     put in variable computerChoice
//     0 = rock, 1 = paper, 2 = scissors

function getComputerChoice() {
   let computerChoice = Math.floor(Math.random() *3);
   if (computerChoice === 0) {
    return 'rock'
   } else if (computerChoice === 1) {
    return 'paper'
   } else return 'scissors'
}

// prompt on screen for the player to typer rock, paper or scissors
// compare value if rock paper or scissors
// if false prompt again to type correctly
// if true return value

function getPlayerChoice() {
    let playerChoice;
    do {
        playerChoice = prompt('Please type Rock, Paper or Scissors').toLowerCase();
    } while (playerChoice !== 'rock' && playerChoice !== 'paper' && playerChoice !== 'scissors');
    return playerChoice;
}

// function to play a single round of rock, paper and scissors
//     needs 2 parameters: playerSelection and computerSelection
//     playerSelection = getPlayerChoice()
//     computerSelection = getComputerChoice()
//     compare the above parameters and return a string to declare the winner

function playRound() {
    computerSelection = getComputerChoice();
    playerSelection = getPlayerChoice();
    if (computerSelection === playerSelection) {
        alert(`Draw! ${playerSelection} vs ${computerSelection}`);
    } else if (computerSelection === 'rock' && playerSelection === 'paper') {
        playerWins++, alert(`You win the round, ${playerSelection} beats ${computerSelection}`);
    } else if (computerSelection === 'paper' && playerSelection === 'rock') {
        computerWins++, alert(`You lose the round, ${computerSelection} beats ${playerSelection}`);
    } else if (computerSelection === 'paper' && playerSelection === 'scissors') {
        playerWins++, alert(`You win the round, ${playerSelection} beats ${computerSelection}`);
    } else if (computerSelection === 'scissors' && playerSelection === 'paper') {
        computerWins++, alert(`You lose the round, ${computerSelection} beats ${playerSelection}`);
    } else if (computerSelection === 'scissors' && playerSelection === 'rock') {
        playerWins++, alert(`You win the round, ${playerSelection} beats ${computerSelection}`);
    } else if (computerSelection === 'rock' && playerSelection === 'scissors') {
        computerWins++, alert(`You lose the round, ${computerSelection} beats ${playerSelection}`);
    } else alert(`error`);
}

let computerWins = 0;
let playerWins= 0;

function playGame() {
    computerWins = 0;
    playerWins = 0;
    for (let i = 0; i < 5 && computerWins < 3 && playerWins < 3; i++) {
        playRound();
        alert(`Current Score: \r Player: ${playerWins} Computer: ${computerWins}`);
    }
    if (playerWins > computerWins) {
        alert(`Victory, Congratulations! \r Final Score: \r Player: ${playerWins} vs Computer: ${computerWins}`)
    } else if (playerWins < computerWins) { 
        alert(`Oh no, the computer is victorious! \r Final Score: \r Player: ${playerWins} vs Computer: ${computerWins}`)
    } else alert(`Tie game, no winners! \r Final Score: \r Player: ${playerWins} vs Computer: ${computerWins}`);
}