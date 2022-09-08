function getComputerChoice() {
  randomNumber = Math.random() * 10;

  //mudar pra *10 para comecar jogo
  if (randomNumber <= 3.33) {
    randomOutput = "Rock";
  } else if (randomNumber >= 6.66) {
    randomOutput = "Scissors";
  } else {
    randomOutput = "Paper";
  }
}
getComputerChoice();
let playerSelection = "Rock";
let computerSelection = randomOutput;

// playerSelection.toLowerCase() === computerSelection.toLowerCase();
console.log("You choose " + playerSelection);
console.log("Computer choose " + computerSelection);

function singleRound() {
  if (playerSelection.toLowerCase() === computerSelection.toLowerCase()) {
    console.log("Draw!");
  } else if (
    (playerSelection.toLowerCase() == "rock") &
    (computerSelection.toLowerCase() == "scissors")
  ) {
    console.log("You win!");
  } else if (
    (playerSelection.toLowerCase() == "rock") &
    (computerSelection.toLowerCase() == "paper")
  ) {
    console.log("You lose!");
  } else if (
    (playerSelection.toLowerCase() == "paper") &
    (computerSelection.toLowerCase() == "rock")
  ) {
    console.log("You win!");
  } else if (
    (playerSelection.toLowerCase() == "paper") &
    (computerSelection.toLowerCase() == "scissors")
  ) {
    console.log("You lose!");
  } else if (
    (playerSelection.toLowerCase() == "scissors") &
    (computerSelection.toLowerCase() == "rock")
  ) {
    console.log("You lose!");
  } else if (
    (playerSelection.toLowerCase() == "scissors") &
    (computerSelection.toLowerCase() == "paper")
  ) {
    console.log("You win!");
  }
}
singleRound();
