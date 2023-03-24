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
        alert('Tie game!');
    } else if (computerSelection === 'rock' && playerSelection === 'paper') {
        alert('You Win!');
    } else if (computerSelection === 'paper' && playerSelection === 'rock') {
        alert('You Lose!');
    } else if (computerSelection === 'paper' && playerSelection === 'scissors') {
        alert('You Win!');
    } else if (computerSelection === 'scissors' && playerSelection === 'paper') {
        alert('You Lose!');
    } else if (computerSelection === 'scissors' && playerSelection === 'rock') {
        alert('You Win!');
    } else if (computerSelection === 'rock' && playerSelection === 'scissors') {
        alert('You Lose!');
    } else alert('error');
}