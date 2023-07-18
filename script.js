"use strict";

function getComputerChoice() {
  let choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection, computerSelection) {}

const playerSelection = "Rock";
const computerSelection = getComputerChoice();
console.log(computerSelection);
