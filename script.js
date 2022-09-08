function getComputerChoice() {
  randomNumber = Math.random() * 10;

  //mudar pra *10 para comecar jogo
  if (randomNumber <= 3.33) {
    randomOutput = "Rock";
  } else if (randomNumber >= 6.66) {
    randomOutput = "Scissors";
  } else {
    randomOutput = "Paper";
    return randomOutput;
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
    return "Draw!";
  } else if (
    (playerSelection.toLowerCase() == "rock") &
    (computerSelection.toLowerCase() == "scissors")
  ) {
    return "You win!";
  } else if (
    (playerSelection.toLowerCase() == "rock") &
    (computerSelection.toLowerCase() == "paper")
  ) {
    return "You lose!";
  } else if (
    (playerSelection.toLowerCase() == "paper") &
    (computerSelection.toLowerCase() == "rock")
  ) {
    return "You win!";
  } else if (
    (playerSelection.toLowerCase() == "paper") &
    (computerSelection.toLowerCase() == "scissors")
  ) {
    return "You lose!";
  } else if (
    (playerSelection.toLowerCase() == "scissors") &
    (computerSelection.toLowerCase() == "rock")
  ) {
    return "You lose!";
  } else if (
    (playerSelection.toLowerCase() == "scissors") &
    (computerSelection.toLowerCase() == "paper")
  ) {
    return "You win!";
  }
}
singleRound();
