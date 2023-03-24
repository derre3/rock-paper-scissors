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