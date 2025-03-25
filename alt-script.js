let userScore = 0,
  computerScore = 0;
// gamesPlayed = localStorage.getItem(counter) || 0;
let startBtn = document.querySelector(".start");
let resetBtn = document.querySelector(".reset");
let message = document.querySelector(".message");
let playerName = document.querySelector(".player-name");

// let gamesCounter = document.getElementById("counter");
// updateGamesCounter(gamesPlayed);
const playerChoices = document.querySelectorAll(".rpc");

let pName = prompt("What is your name, Champ?", "Player");
playerName.textContent = pName;

message.textContent = `Welcome ${pName}. Click button above to start.`;

playerChoices.forEach((choice) => {
  choice.addEventListener("click", (e) => {
    console.log(choice.classList[0]);
  });
});

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
});

function updateGamesCounter(count) {
  gamesCounter.textContent = count;
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
  let userChoice = prompt("Enter 'rock', 'paper' or 'scissors'")
    .toLowerCase()
    .trim();

  while (!["rock", "paper", "scissors"].includes(userChoice)) {
    if (userChoice == "q") {
      if (confirm("Are you sure you wanna quit? ")) return true;
    }

    userChoice = prompt("Only 'rock', 'paper' or 'scissors. Try again: '")
      .toLowerCase()
      .trim();
  }

  let computerChoice = getComputerChoice();

  if (userChoice == computerChoice) {
    alert("Tight Game. It is a draw!");
  } else if (
    (userChoice == "rock" && computerChoice == "scissors") ||
    (userChoice == "paper" && computerChoice == "rock") ||
    (userChoice == "scissors" && computerChoice == "paper")
  ) {
    alert(
      `Hurray! You won!!! \nYour ${userChoice} beats the computers ${computerChoice}`
    );
    userScore++;
  } else {
    alert(
      `Womp Womp ): You Lose!\nThe computers ${computerChoice} beats your ${userChoice}`
    );
    computerScore++;
  }
}

function playGame() {
  let userName = prompt("What do you want to be called? ", "RPS-Master");
  let rounds = prompt("How many rounds do you want to play? ", 3);
  rounds = +rounds; // converts rounds value to a positive integer

  for (let i = 1; i <= rounds; i++) {
    alert(`round ${i}, fight`);
    let isQuit = playRound();

    if (isQuit) break;
  }
  alert(`final scores = ${userName}: ${userScore} | Machine: ${computerScore}`);

  localStorage.setItem(counter, gamesPlayed);
}
