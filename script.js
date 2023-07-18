"use strict";

function getComputerChoice() {
  let choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
}

// const playerSelection = prompt(
//   "Make your choice! Rock, Paper or Scissors?"
// ).toLowerCase();
// const computerSelection = getComputerChoice();

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return `It's a draw!`; // Informs about draw
  } else if (
    playerSelection !== "rock" &&
    playerSelection !== "paper" &&
    playerSelection !== "scissors"
  ) {
    return "Invalid input!"; // informs about invalid input by player
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    return `You win! ${
      playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)
    } beats ${
      computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)
    }!`; // informs who won the game
  } else {
    return `You lose! ${
      computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)
    } beats ${
      playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)
    }!`; // informs who won the game
  }
}

// console.log(playRound(playerSelection, computerSelection));
// console.log(playerSelection, computerSelection);

function game(playRound) {
  for (let i = 0; i < 5; i++) {
    let playerSelection = prompt(
      "Make your choice! Rock, Paper or Scissors?"
    ).toLowerCase();
    let computerSelection = getComputerChoice();

    playRound(playerSelection, computerSelection);
    console.log(playRound(playerSelection, computerSelection));
    console.log(playerSelection, computerSelection);
  }
}
