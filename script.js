const rockButton = document.querySelector(".rock");
const paperButton = document.querySelector(".paper");
const scissorsButton = document.querySelector(".scissors");
const buttonArray = [rockButton, paperButton, scissorsButton];
const exclamation = document.querySelector(".exclamation");
const closeButton = document.querySelector(".closeButton");
const modal = document.querySelector(".modal");
const winner = document.querySelector(".winner");
const winnerEmoji = document.querySelector(".winnerEmoji");
const playerSelectionDiv = document.querySelector(".playerSelection");
const rematchText = document.querySelector(".rematchText");

let counter = 0;
let result = "";
let playerScore = 0;
let computerScore = 0;
let drawScore = 0;

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
function singleRound() {
  getComputerChoice();
  computerSelection = randomOutput;
  document.querySelector(".computerChoice").innerText = computerSelection;
  document.querySelector(".playerChoice").innerText = playerSelection;

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

  console.log(playerScore);

  if (result == "You win!") {
    document.querySelector(".roundResult").style.color = "green";
    playerScore += 1;
    document.querySelector(".playerScore").innerText = playerScore;
  } else if (result == "You lose!") {
    document.querySelector(".roundResult").style.color = "red";
    computerScore += 1;
    document.querySelector(".computerScore").innerText = computerScore;
  } else {
    document.querySelector(".roundResult").style.color = "violet";
    drawScore += 1;
    document.querySelector(".drawScore").innerText = drawScore;
  }
  //checking result to change element style and to update score

  if (playerScore == 5) {
    winner.innerText = "You won!";
    winner.style.color = "green";
    winnerEmoji.innerHTML = "&#128526";
  }

  if (computerScore == 5) {
    winner.innerText = "PC won!";
    winner.style.color = "red";
    winnerEmoji.innerHTML = "&#128546";
  }
  if (computerScore == 5 || playerScore == 5) {
    playerSelectionDiv.remove();
    rematchText.innerHTML = "Rematch?";
    document.querySelector(".roundResult").remove();
    const rematchButton = document.createElement("button");
    document.querySelector(".rematchContainer").appendChild(rematchButton);
    rematchButton.innerHTML = "&#128257";
    rematchButton.addEventListener("click", () => location.reload());
  }
}

function playFiveRounds() {
  for (i = 0; i < 5; i++) {
    singleRound();
    console.log("You choose " + playerSelection);
    console.log("Computer choose " + computerSelection);
    console.log(result);
  }
}
exclamation.addEventListener(
  "mouseenter",
  () => (exclamation.style.borderColor = "gray")
);
exclamation.addEventListener(
  "mouseleave",
  () => (exclamation.style.borderColor = "white")
);
exclamation.addEventListener("click", () => {
  modal.classList.toggle("active");
  modal.style.transition = "transform 0.15s ";
});
closeButton.addEventListener("click", () => modal.classList.remove("active"));
