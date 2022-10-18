function getComputerChoice() {
  randomNumber = Math.random() * 10;

  //mudar pra *10 para comecar jogo
  if (randomNumber <= 3.33) {
    return (randomOutput = "Rock");
  } else if (randomNumber >= 6.66) {
    return (randomOutput = "Scissors");
  } else {
    return (randomOutput = "Paper");
  }
}
// let computerSelection = randomOutput;
let result = "";
function singleRound() {
  getComputerChoice();
  computerSelection = randomOutput;
  playerSelection = prompt("Rock, paper os scissors?");

  if (playerSelection.toLowerCase() === computerSelection.toLowerCase()) {
    result = "Draw!";
  } else if (
    playerSelection.toLowerCase() == "rock" &&
    computerSelection.toLowerCase() == "scissors"
  ) {
    result = "You win!";
  } else if (
    playerSelection.toLowerCase() == "rock" &&
    computerSelection.toLowerCase() == "paper"
  ) {
    result = "You lose!";
  } else if (
    playerSelection.toLowerCase() == "paper" &&
    computerSelection.toLowerCase() == "rock"
  ) {
    result = "You win!";
  } else if (
    playerSelection.toLowerCase() == "paper" &&
    computerSelection.toLowerCase() == "scissors"
  ) {
    result = "You lose!";
  } else if (
    playerSelection.toLowerCase() == "scissors" &&
    computerSelection.toLowerCase() == "paper"
  ) {
    result = "You win!";
  } else if (
    playerSelection.toLowerCase() == "scissors" &&
    computerSelection.toLowerCase() == "rock"
  ) {
    result = "You lose!";
  }
}

function game() {
  for (i = 0; i < 5; i++) {
    singleRound();
    console.log("You choose " + playerSelection);
    console.log("Computer choose " + computerSelection);
    console.log(result);
  }
}
game();
