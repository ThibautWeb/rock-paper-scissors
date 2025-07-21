let computerScore = 0
let humanScore = 0

let options = ["rock", "paper", "scissors"]

function getComputerChoice(){
  return options[Math.floor(Math.random() * 3)]
}

function getHumanChoice(){
  return prompt("Enter rock, paper, or scissors:")
}

// console.log("Human choses " + getHumanChoice())
// console.log("Computer choses " + getComputerChoice())

function playRound(humanChoice, computerChoice){
  if (humanChoice == computerChoice) {
    console.log(`It's a draw! ${humanChoice} against ${computerChoice}`)
  } else if ((humanChoice == "rock" && computerChoice == "scissors") ||
  (humanChoice == "paper" && computerChoice == "rock") ||
  (humanChoice == "scissors" && computerChoice == "paper")) {
    console.log(`Human wins! ${humanChoice} beats ${computerChoice}`)
    humanScore++
  } else {
    console.log(`Computer wins! ${computerChoice} beats ${humanChoice}`)
    computerScore++
  }
}

playRound(getHumanChoice(), getComputerChoice())
console.log(`Human: ${humanScore}`)
console.log(`Computer: ${computerScore}`)
