function playGame(rounds) {
  let options = ["rock", "paper", "scissors"]

  function getComputerChoice(){
    return options[Math.floor(Math.random() * 3)]
  }

  function getHumanChoice(){
    return prompt("Enter rock, paper, or scissors:")
  }
  let computerScore = 0
  let humanScore = 0

  for (i = 1; i <= rounds; i++) {
    playRound(getHumanChoice(), getComputerChoice())
  }

  console.log(finalMessage())

  function playRound(humanChoice, computerChoice){
    if (humanChoice == computerChoice) {
      console.log(`It's a draw! ${humanChoice} against ${computerChoice}`)
    } else if ((humanChoice == "rock" && computerChoice == "scissors") ||
    (humanChoice == "paper" && computerChoice == "rock") ||
    (humanChoice == "scissors" && computerChoice == "paper")) {
      console.log(`Human wins! ${humanChoice} beats ${computerChoice}`)
      humanScore++
    } else if ((humanChoice == "scissors" && computerChoice == "rock") ||
    (humanChoice == "rock" && computerChoice == "paper") ||
    (humanChoice == "paper" && computerChoice == "scissors")) {
      console.log(`Computer wins! ${computerChoice} beats ${humanChoice}`)
      computerScore++
    } else {
      console.log("Invalid choice, try again.")
      playRound(getHumanChoice(), getComputerChoice())
    }
  }

  function finalMessage() {
    let message = `Human ${humanScore}, computer ${computerScore}.`
    if (humanScore > computerScore) {
      message += "\nWe have a WINNER!"
    } else if (humanScore < computerScore) {
      message += "\nWe have a LOOSER!"
    } else {
      message += "\nBoring..."
    }
    return message
  }

}

playGame(5)
