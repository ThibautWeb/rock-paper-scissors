let computerScore = 0
let humanScore = 0

let options = ["rock","paper","scissors"]

function getComputerChoice(){
  return options[Math.floor(Math.random() * 3)]
}

function getHumanChoice(){
  return prompt("Enter rock, paper, or scissors:")
}

console.log("Human choses " + getHumanChoice())
console.log("Computer choses " + getComputerChoice())
