function getComputerChoice() {
  randomNumber = Math.random() * 10;
  console.log(randomNumber);
  if (randomNumber <= 3.33) {
    randomOutput = "Rock";
  } else if (randomNumber >= 6.66) {
    randomOutput = "Scissors";
  } else {
    randomOutput = "Paper";
  }
  console.log(randomOutput);
}

getComputerChoice();
