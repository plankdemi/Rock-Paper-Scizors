"use strict";

const rock = document.getElementById("player1_rock");
const paper = document.getElementById("player1_paper");
const scizors = document.getElementById("player1_scizors");

const choice = {
  0: "player2_rock",
  1: "player2_paper",
  2: "player2_scizors",
};

const randomChoice = function () {
  switch (Math.floor(Math.random() * 3)) {
    case 0:
      document.getElementById(choice[0]).classList.add("active");
      break;
    case 1:
      document.getElementById(choice[1]).classList.add("active");
      break;
    case 2:
      document.getElementById(choice[2]).classList.add("active");
      break;
  }
};

const decideWinner = function () {
  const playerChoices = document.querySelectorAll(".active");
  const player1Choice = playerChoices[0].alt;
  const player2Choice = playerChoices[1].alt;
  return gameLogic(player1Choice, player2Choice);
};

const gameLogic = function (player1Choice, player2Choice) {
  if (player1Choice === player2Choice) return "Draw";
  else if (player1Choice === "rock" && player2Choice === "scizors")
    return "Player 1";
  else if (player1Choice === "paper" && player2Choice === "rock")
    return "Player 1";
  else if (player1Choice === "scizors" && player2Choice === "paper")
    return "Player 1";
  else return "Player 2";
};
const printWinner = function (winner) {
  const winMessage = document.createElement("h2");
  winner !== "Draw"
    ? (winMessage.innerText = winner + " wins!")
    : (winMessage.innerText = "It's a draw");

  document.querySelector(".pvp").insertAdjacentElement("afterend", winMessage);
  const restartBtn = document.createElement("button");
  restartBtn.textContent = "restart";
  winMessage.insertAdjacentElement("afterend", restartBtn);
  restartBtn.addEventListener("click", function () {
    location.reload();
  });
};

const disableEverything = function () {
  rock.removeEventListener("click", rockInit);
  paper.removeEventListener("click", paperInit);
  scizors.removeEventListener("click", scizorsInit);
  rock.classList.remove("hoverYeah");
  paper.classList.remove("hoverYeah");
  scizors.classList.remove("hoverYeah");
};

const game = function () {
  randomChoice();
  const winner = decideWinner();
  printWinner(winner);
  disableEverything();
};

const rockInit = function () {
  rock.classList.add("active");
  game();
};
const paperInit = function () {
  paper.classList.add("active");
  game();
};
const scizorsInit = function () {
  scizors.classList.add("active");
  game();
};

rock.addEventListener("click", rockInit);
paper.addEventListener("click", paperInit);
scizors.addEventListener("click", scizorsInit);
