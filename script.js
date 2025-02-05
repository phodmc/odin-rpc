console.log("Hello world");

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

function getHumanChoice() {
  let input = prompt("Enter choice: r for rock, p for paper & s for scissors");
  console.log(`You chose ${input}`);

  // keep prompting until valid input entered
  while (input != "r" && input != "p" && input != "s")
    input = prompt("invalid input. Enter 'r', 'p' or 's'");

  if (input == "r") return "rock";
  if (input == "p") return "paper";
  if (input == "s") return "scissors";
}

function playGame() {
  // scores
  let humanScore = 0,
    computerScore = 0;

  function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();

    if (humanChoice == computerChoice) {
      console.log("Tough game. It's a draw");
    } else if (
      (humanChoice == "rock" && computerChoice == "scissors") ||
      (humanChoice == "paper" && computerChoice == "rock") ||
      (humanChoice == "scissors" && computerChoice == "paper")
    ) {
      humanScore++;
      console.log(`Hurray! You win! ${humanChoice} beats ${computerChoice}`);
    } else {
      computerScore++;
      console.log("Womp Womp... You lose");
    }
  }

  for (let rounds = 0; rounds < 5; rounds++) {
    playRound(getHumanChoice(), getComputerChoice())
  }

  console.log(`Human -> ${humanScore} ||==|| ${computerScore} <- Machine`)
}

playGame()