const userScoreSpan = document.getElementById("user-score");
const compScoreSpan = document.getElementById("comp-score");
const resultDiv = document.getElementById("result").querySelector("p");
let userScore = 0;
let compScore = 0;

const choices = {
  rock: document.getElementById("rock"),
  paper: document.getElementById("paper"),
  scissors: document.getElementById("scissors"),
};

const getComputerChoice = () => {
  const choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * 3)];
};

const getResultMessage = (user, comp) => {
  if (user === comp) return "It's a draw!";
  if (
    (user === "rock" && comp === "scissors") ||
    (user === "paper" && comp === "rock") ||
    (user === "scissors" && comp === "paper")
  ) return "You win!";
  return "You lose!";
};

const updateScore = (userChoice, compChoice, result) => {
  if (result === "You win!") {
    userScore++;
    userScoreSpan.textContent = userScore;
  } else if (result === "You lose!") {
    compScore++;
    compScoreSpan.textContent = compScore;
  }
  
  resultDiv.textContent = `You chose ${userChoice}, computer chose ${compChoice}. ${result}`;
};

const applyResultEffect = (choiceDiv, result) => {
  if (result === "You win!") {
    choiceDiv.classList.add("winner");
  } else if (result === "You lose!") {
    choiceDiv.classList.add("loser");
  } else {
    choiceDiv.classList.add("draw");
  }

  setTimeout(() => choiceDiv.classList.remove("winner", "loser", "draw"), 500);
};

const playGame = (userChoice) => {
  const compChoice = getComputerChoice();
  const result = getResultMessage(userChoice, compChoice);
  updateScore(userChoice, compChoice, result);
  applyResultEffect(choices[userChoice], result);
};

Object.keys(choices).forEach((choice) => {
  choices[choice].addEventListener("click", () => playGame(choice));
});
