function getComputerChoice() {
  compChoice = Math.random();
  if (compChoice > 0.66) {
    return "rock";
  } else if (compChoice < 0.33) {
    return "paper";
  } else {
    return "scissors";
  }
}

function getHumanChoice() {
  humanChoice = prompt("Enter A number");
  return humanChoice;
}

let humanScore,
  computerScore = 0;
s;

function playRound(humanChoice, computerChoice) {
  switch (humanChoice) {
    case "rock":
      switch (computerChoice) {
        case "rock":
          console.log("YOU TIED");
        case "paper":
          console.log("YOU LOST");
        case "scissors":
          console.log("YOU WIN");
      }

    case "paper":
      switch (computerChoice) {
        case "rock":
          console.log("YOU WIN");
        case "paper":
          console.log("YOU TIED");
        case "scissors":
          console.log("YOU LOST");
      }

    case "scissors":
      switch (computerChoice) {
        case "rock":
          console.log("YOU LOST");
        case "paper":
          console.log("YOU WIN");
        case "scissors":
          console.log("YOU TIED");
      }
  }
}

const humanSelection = getHumanChoice().toLowerCase();
const computerSelection = getComputerChoice().toLowerCase();

playRound(humanSelection, computerSelection);
