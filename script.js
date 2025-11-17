let humanScore = 0;
let computerScore = 0;

const root = document.querySelector("#root");

const btn1 = document.createElement("button");
const btn2 = document.createElement("button");
const btn3 = document.createElement("button");

btn1.textContent = "rock";
btn2.textContent = "paper";
btn3.textContent = "scissors";

root.appendChild(btn1);
root.appendChild(btn2);
root.appendChild(btn3);

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", () => playRound(button.textContent));
});

const resultsDiv = document.createElement("div");
root.appendChild(resultsDiv);

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

function playRound(humanChoice) {
  const computerChoice = getComputerChoice();

  resultsDiv.textContent = `Computer chose: ${computerChoice}. `;

  let roundResultText = "";

  switch (humanChoice) {
    case "rock":
      switch (computerChoice) {
        case "rock":
          roundResultText = "You tied this round.";
          break;
        case "paper":
          roundResultText = "You lost this round.";
          computerScore++;
          break;
        case "scissors":
          roundResultText = "You won this round!";
          humanScore++;
          break;
      }
      break;

    case "paper":
      switch (computerChoice) {
        case "rock":
          roundResultText = "You won this round!";
          humanScore++;
          break;
        case "paper":
          roundResultText = "You tied this round.";
          break;
        case "scissors":
          roundResultText = "You lost this round.";
          computerScore++;
          break;
      }
      break;

    case "scissors":
      switch (computerChoice) {
        case "rock":
          roundResultText = "You lost this round.";
          computerScore++;
          break;
        case "paper":
          roundResultText = "You won this round!";
          humanScore++;
          break;
        case "scissors":
          roundResultText = "You tied this round.";
          break;
      }
      break;
  }

  // append result + scores into the div
  resultsDiv.textContent += ` ${roundResultText} Score — You: ${humanScore} | Computer: ${computerScore}`;
}

function playGame() {
  if (playerScore > computerScore) {
    console.log("YOU WON THE GAME!!!!!");
  } else if (computerScore > playerScore) {
    console.log("YOU LOST THE GAME...");
  } else {
    console.log("THE GAME WAS A TIE.");
  }
}
