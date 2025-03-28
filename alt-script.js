let userScore = 0;
let computerScore = 0;
let rounds = 0;
let counter = 1;
let startBtn = document.querySelector(".start");
let resetBtn = document.querySelector(".reset");
let message = document.querySelector(".message");
let playerName = document.querySelector(".player-name");
const playerChoices = document.querySelectorAll(".rpc");
let playerScoreDisplay = document.querySelector(".player-score");
let compScoreDisplay = document.querySelector(".computer-score");

// initConfetti();
// main
startBtn.addEventListener("click", (e) => {
  // reset scores
  resetScores();

  // disable start button
  startBtn.disabled = true;
  startBtn.classList.add("disabled");
  // enable reset button
  resetBtn.disabled = false;
  resetBtn.classList.remove("disabled");

  message.textContent = "Game begin. Select a choice below";

  // enable player choice selection
  playerChoices.forEach((choice) => choice.classList.remove("disabled"));

  // start game
  playGame();
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

    // reset scores
    resetScores();
  }

  // disable player choice selection
  playerChoices.forEach((choice) => choice.classList.add("disabled"));
});

function playGame() {
  // reset scores
  resetScores();

  if (playerName.textContent == "Player") {
    let userName = prompt("What is your name, Champ?", "Player");
    playerName.textContent = userName;
  }

  rounds = prompt("How many rounds do you want to play? ", 3);
  rounds = +rounds; // converts rounds value to a positive integer

  playerChoices.forEach((choice) => {
    choice.addEventListener("click", playRound);
  });
  // localStorage.setItem(counter, gamesPlayed);
}

function playRound(e) {
  e.stopPropagation();
  let computerChoice, userChoice;

  computerChoice = getComputerChoice();
  userChoice = e.target.classList[0];

  console.log(`Round: ${counter}`);
  console.log(`Player Choice: ${userChoice}`);
  console.log(`Computer Choice: ${computerChoice}`);

  if (userChoice == computerChoice) {
    message.textContent = "Tight Game. It is a draw!";
  } else if (
    (userChoice == "rock" && computerChoice == "scissors") ||
    (userChoice == "paper" && computerChoice == "rock") ||
    (userChoice == "scissors" && computerChoice == "paper")
  ) {
    message.textContent = `Hurray! You won!!! \nYour ${userChoice} beats the computers ${computerChoice}`;
    updatePlayerScore();
  } else {
    message.textContent = `Womp Womp ): You Lose!\nThe computers ${computerChoice} beats your ${userChoice}`;
    updateComputerScore();
  }

  if (rounds == counter) {
    endGame();
  }

  ++counter;
}

async function fireConfetti() {
  await confetti();
  confetti.reset();
}

function endGame() {
  console.log(`End Game`);
  console.log(`Player Score: ${userScore}`);
  console.log(`Computer Score: ${computerScore}`);

  // declare winner
  if (userScore > computerScore) {
    message.textContent = `Game Over. ${playerName.textContent} wins`;
    fireConfetti();
  } else if (computerScore > userScore) {
    message.textContent = `Game Over. You lose to the machines`;
  } else {
    message.textContent = `That was a tight match. It's a tie`;
  }

  // enable start button
  startBtn.disabled = false;
  startBtn.classList.remove("disabled");

  // disable reset button
  resetBtn.disabled = true;
  resetBtn.classList.add("disabled");

  // disable user choice selection
  playerChoices.forEach((choice) => choice.classList.toggle("disabled"));

  // remove listeners
  playerChoices.forEach((choice) =>
    choice.removeEventListener("click", playRound)
  );
}

function resetScores() {
  userScore = 0;
  computerScore = 0;

  playerScoreDisplay.textContent = 0;
  compScoreDisplay.textContent = 0;

  counter = 1;
}

function updateGamesCounter(count) {
  gamesCounter.textContent = count;
}

function updatePlayerScore() {
  userScore++;
  playerScoreDisplay.textContent = userScore;
  console.log("player score updated successfully");
}

function updateComputerScore() {
  computerScore++;
  compScoreDisplay.textContent = computerScore;
  console.log("computer score updated successfully");
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
