console.log("Hello world");

// scores
let humanScore = computerScore = 0

function getComputerChoice() {
  // generate random number
  let random = Math.floor(Math.random() * 3) + 1;

  // return 'rock', 'paper', or 'scissors based on random
  switch (random) {
    case 1:
      return "rock";
    case 2:
      return "paper";
    default:
      return "scissors";
  }
}

// todo - write human/player choice logic
function getHumanChoice() {
  let input = prompt("Enter choice: r for rock, p for paper & s for scissors");
  console.log(`You chose ${input}`);

  while (input != "r" && input != "p" && input != "s")
    input = prompt("invalid input. Enter 'r', 'p' or 's'");

  if (input == "r") return "rock";
  if (input == "p") return "paper";
  if (input == "s") return "scissors";
}
