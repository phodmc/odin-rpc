let userScore = 0,
  computerScore = 0;
// gamesPlayed = localStorage.getItem(counter) || 0;
let startBtn = document.querySelector(".start");
let resetBtn = document.querySelector(".reset");
let message = document.querySelector(".message");
let playerName = document.querySelector(".player-name");
const playerChoices = document.querySelectorAll(".rpc");
let playerScoreDisplay = document.querySelector(".player-score");
let compScoreDisplay = document.querySelector(".computer-score");
// let gamesCounter = document.getElementById("counter");
// updateGamesCounter(gamesPlayed);

// main
startBtn.addEventListener("click", (e) => {
  console.log(e.target);

  // disable start button
  startBtn.disabled = true;
  startBtn.classList.add("disabled");
  // enable reset button
  resetBtn.disabled = false;
  resetBtn.classList.remove("disabled");

  message.textContent = "Game begin. Select a choice below";

  // enable player choice selection
  playerChoices.forEach((choice) => choice.classList.remove("disabled"));

  playRound();

  // updateGamesCounter(++gamesPlayed);
  // playGame();
});

resetBtn.addEventListener("click", (e) => {
  console.log(e.target);

  if (confirm("Are you sure? Game data will be cleared.")) {
    // enable start button
    startBtn.disabled = false;
    startBtn.classList.remove("disabled");

    // disable reset button
    resetBtn.disabled = true;
    resetBtn.classList.add("disabled");
  }

  // disable player choice selection
  playerChoices.forEach((choice) => choice.classList.add("disabled"));
});

function updateGamesCounter(count) {
  gamesCounter.textContent = count;
}

function updateScoreCounter() {
  playerScoreDisplay.textContent = userScore;
  compScoreDisplay.textContent = computerScore;
}

function getComputerChoice() {
  // generate random number between 1 & 3 inclusive
  let random = Math.floor(Math.random() * 3 + 1);

  // return: rock for 1, paper for 2 and scissors for 3
  switch (random) {
    case 1:
      return "rock";
    case 2:
      return "paper";
    default:
      return "scissors";
  }
}

function playRound() {
  let userChoice = "rock";

  playerChoices.forEach((choice) => {
    choice.addEventListener("click", () => {
      let computerChoice = getComputerChoice();
      userChoice = choice.classList[0];

      console.log(`${userChoice} vs ${computerChoice}`);

      if (userChoice == computerChoice) {
        message.textContent = "Tight Game. It is a draw!";
      } else if (
        (userChoice == "rock" && computerChoice == "scissors") ||
        (userChoice == "paper" && computerChoice == "rock") ||
        (userChoice == "scissors" && computerChoice == "paper")
      ) {
        message.textContent = `Hurray! You won!!! \nYour ${userChoice} beats the computers ${computerChoice}`;
        userScore++;
        updateScoreCounter();
      } else {
        message.textContent = `Womp Womp ): You Lose!\nThe computers ${computerChoice} beats your ${userChoice}`;

        computerScore++;
        updateScoreCounter();
      }
    });
  });
}

function playGame() {
  let userName = prompt("What is your name, Champ?", "Player");
  playerName.textContent = userName;

  let rounds = prompt("How many rounds do you want to play? ", 3);
  rounds = +rounds; // converts rounds value to a positive integer

  message.textContent = `Welcome ${userName}. Click button above to start.`;

  for (let i = 1; i <= rounds; i++) {
    message.textContent = `round ${i}, fight`;
    let isQuit = playRound();

    if (isQuit) break;
  }
  alert(`final scores = ${userName}: ${userScore} | Machine: ${computerScore}`);

  localStorage.setItem(counter, gamesPlayed);
}
