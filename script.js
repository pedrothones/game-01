function getComputerChoice() {
  randomNumber = Math.random() * 10;
  if (randomNumber <= 3.33) {
    return (randomOutput = "Rock");
  } else if (randomNumber >= 6.66) {
    return (randomOutput = "Scissors");
  } else {
    return (randomOutput = "Paper");
  }
}
let result = "";
function singleRound() {
  let playerScore = 0;
  getComputerChoice();
  computerSelection = randomOutput;
  document.querySelector(".computerChoice").innerText = computerSelection;
  document.querySelector(".playerChoice").innerText = playerSelection;
  // playerSelection = prompt("Rock, paper os scissors?");

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
  document.querySelector(".roundResult").innerHTML = result;

  if (result == "You win!") {
    document.querySelector(".roundResult").style.color = "green";
    playerScore += 1;
    document.querySelector(".playerScore").innerText = playerScore;
  } else if (result == "You lose!") {
    document.querySelector(".roundResult").style.color = "red";
  } else {
    document.querySelector(".roundResult").style.color = "violet";
  }
  //checking result to change element style and to update score
}

function playFiveRounds() {
  for (i = 0; i < 5; i++) {
    singleRound();
    console.log("You choose " + playerSelection);
    console.log("Computer choose " + computerSelection);
    console.log(result);
  }
}

const rockButton = document.querySelector(".rock");
const paperButton = document.querySelector(".paper");
const scissorsButton = document.querySelector(".scissors");

rockButton.addEventListener("click", () => {
  playerSelection = "Rock";
  singleRound();

  console.log(result);
});
paperButton.addEventListener("click", () => {
  playerSelection = "Paper";
  singleRound();
  console.log(result);
});
scissorsButton.addEventListener("click", () => {
  playerSelection = "Scissors";
  singleRound();
  console.log(result);
});
