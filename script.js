let options = ["rock", "paper", "scissors"]
let humanScore = 0
let computerScore = 0

let optionButtons = Array.from(document.querySelectorAll("button"))

function onOptionButtonClick(e) { playRound(e.target.value, getComputerChoice()) }

for (let i = 0; i < options.length;  i++) {
  optionButtons[i].addEventListener("click", onOptionButtonClick)
}

let resultP = document.querySelector(".result")
let humanScoreSpan = document.querySelector(".humanScore span")
let computerScoreSpan = document.querySelector(".computerScore span")

function getComputerChoice(){
  return options[Math.floor(Math.random() * 3)]
}

function playRound(humanChoice, computerChoice){
  if (humanChoice == computerChoice) {
    resultP.textContent = `It's a draw! ${humanChoice} against ${computerChoice}`
  } else if ((humanChoice == "rock" && computerChoice == "scissors") ||
  (humanChoice == "paper" && computerChoice == "rock") ||
  (humanChoice == "scissors" && computerChoice == "paper")) {
    resultP.textContent = `Human wins! ${humanChoice} beats ${computerChoice}`
    humanScore++
    humanScoreSpan.textContent = humanScore
  } else {
    resultP.textContent = `Computer wins! ${computerChoice} beats ${humanChoice}`
    computerScore++
    computerScoreSpan.textContent = computerScore
  }
  console.log(humanScore + " " + computerScore)
  checkForWinner()
}

function checkForWinner() {
  if (humanScore == 5 || computerScore == 5) {
    console.log("yep 5!")
    for (let btn of optionButtons) {
      btn.removeEventListener("click", onOptionButtonClick)
    }
    finalMessage()
  }
}

let finalMessageP = document.querySelector(".finalMessage")

function finalMessage() {
  if (humanScore == 5) {
    finalMessageP.textContent = "\nWe have a WINNER!"
  } else {
    finalMessageP.textContent = "\nWe have a LOOSER!"
  }
}
