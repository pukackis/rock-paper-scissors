"use strict";

// ALL COMMENTS IN SHOWN CODE ARE FOR SELF-EDUCATIONAL PURPOSES, I'AM COMPLETETY AWARE THAT MANY OF THOSE ARE NOT NECESSARY

function getComputerChoice() {
  let choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
} // Function to generate computer choice each round

let playerSelection = ""; //Starting point for user selection

const rockButton = document
  .querySelector(".rock")
  .addEventListener("click", () => startGame("rock"));
const paperButton = document
  .querySelector(".paper")
  .addEventListener("click", () => startGame("paper"));
const scissorsButton = document
  .querySelector(".scissors")
  .addEventListener("click", () => startGame("scissors"));

// Event listeneners for game buttons

const scorePlayer = document.querySelector(".current1");
const scoreComputer = document.querySelector(".current2");

// Query selectors for score tracking

function startGame(selection) {
  playerSelection = selection;
  const computerSelection = getComputerChoice();
  const result = playRound(playerSelection, computerSelection);

  scorePlayer.textContent = player;
  scoreComputer.textContent = computer;
  return result;
}

//Function that starts the game and retrieves result from playRound()

function updateRoundStatus(message) {
  const whoWon = document.querySelector(".who_won");
  whoWon.textContent = message;
}

//Function that retrieves who won the round, used to update roundWinner

let player = 0;
let computer = 0;

// Starting points for game scores

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    updateRoundStatus(`It's a draw!`); // Informs about draw
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    player++;
    console.log(player, computer);
    updateRoundStatus(
      `You win! ${
        playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)
      } beats ${
        computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)
      }!`
    ); // informs who won the game
  } else {
    computer++;
    console.log(player, computer);
    updateRoundStatus(
      `You lose! ${
        computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)
      } beats ${
        playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)
      }!`
    ); // informs who won the game
  }
}

// playRound function is responsible for game mechanics, determines who won the game and informs player about current status
