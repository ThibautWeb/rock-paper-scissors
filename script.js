let options = ["rock","paper","scissors"]

function getComputerChoice(){
  return options[Math.floor(Math.random() * 3)]
}

function getHumanChoice(){
  return prompt("What's your pick?")
}

console.log("Human choses " + getHumanChoice())
console.log("Computer choses " + getComputerChoice())
