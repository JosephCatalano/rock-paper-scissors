let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let compChoice = Math.random();
  if (compChoice > 0.66) {
    return "rock";
  } else if (compChoice < 0.33) {
    return "paper";
  } else {
    return "scissors";
  }
}

function getHumanChoice() {
  let humanChoice = prompt("Rock, Paper, or Scissors?");
  return humanChoice;
}

function playRound() {
  let computerChoice = getComputerChoice();
  let humanChoice = getHumanChoice();
  console.log("The computer chose " + computerChoice);
  switch (humanChoice) {
    case "rock":
      switch (computerChoice) {
        case "rock":
          return 2;
        case "paper":
          return 0;
        case "scissors":
          return 1;
      }
      break;

    case "paper":
      switch (computerChoice) {
        case "rock":
          return 1;
        case "paper":
          return 2;
        case "scissors":
          return 0;
      }
      break;

    case "scissors":
      switch (computerChoice) {
        case "rock":
          return 0;
        case "paper":
          return 1;
        case "scissors":
          return 2;
      }
      break;
  }
}

function playGame() {
  let playerScore = 0;
  let computerScore = 0;
  if (playerScore > computerScore) {
    console.log("YOU WON THE GAME!!!!!");
  } else if (computerScore > playerScore) {
    console.log("YOU LOST THE GAME...");
  } else {
    console.log("THE GAME WAS A TIE.");
  }
}

const root = document.querySelector("#root");
const btn1 = document.createElement("button");
btn1.textContent = "HELLO";
btn1.addEventListener("click", playRound);
root.appendChild(btn1);
