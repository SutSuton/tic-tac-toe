// Global variables
const cells = document.querySelectorAll(".cell")
function addListFunction(functionToAdd) {
  for (let i = 0; i < 9; i++) {
    cells[i].addEventListener("click", function(e) {
      functionToAdd(cells[i]);
    });
  }
};


const resignButton = document.querySelector(".resign");
resignButton.addEventListener("click", function(e) {
  gameController.token === "X" ? alert("O wins by resignation") : alert("X wins by resignation");
  gameBoard.clearGrid();
})

// Module for the gameboard
const gameBoard = (() => {
  
  let playArea = [];

  const storeGrid = (list) => {
    playArea.splice(0, 9);
    for (let i = 0; i < 9; i++) {
      playArea.push(list[i].textContent);
    }
  }

  const clearGrid = () => {
    playArea.splice(0, 9);
    for (let i = 0; i < 9; i++) {
      cells[i].textContent = "";
    }
    gameController.token = "X";
  }
  return {playArea, storeGrid, clearGrid};
})();

// Player factory function
const player = (name, token) => {
  return {name, token};
}

// Module to control the flow of the game
const gameController = (() => {

  // function to place tokens
  const playTurn = (grid) => { 
    if (grid.textContent == "") {
      grid.textContent = gameController.token;
      gameController.token === "X" ? gameController.token = "O" : gameController.token = "X"
    } else if (grid.textContent !== "") {
      return;
    }

    gameBoard.storeGrid(cells);
    console.log(gameBoard.playArea);
    setTimeout(checkWin, 500, gameBoard.playArea);
  };

  // function to check if anyone has won
  const checkWin = array => {
    if (
        (array[0] && array[0] == array[1] && array[0] == array[2]) || 
        (array[0] && array[0] == array[4] && array[0] == array[8]) ||
        (array[0] && array[0] == array[3] && array[0] == array[6])
        ) {
          // array[0] WINS!
          if (array[0] === "X") alert(form.player1.name + " Wins!");
          else alert(form.player2.name + " Wins!");
          gameBoard.clearGrid();
        } 
    else if (
        (array[8] && array[8] == array[5] && array[8] == array[2]) ||
        (array[8] && array[8] == array[7] && array[8] == array[6])
        ) {
          // array[8] WINS!
          if (array[8] === "X") alert(form.player1.name + " Wins!");
          else alert(form.player2.name + " Wins!");
          gameBoard.clearGrid();
        }
    else if (
        (array[4] && array[4] == array[1] && array[4] == array[7]) ||
        (array[4] && array[4] == array[3] && array[4] == array[5]) ||
        (array[4] && array[4] == array[6] && array[4] == array[2])
        ) {
          // array[4] WINS!
          if (array[4] === "X") alert(form.player1.name + " Wins!");
          else alert(form.player2.name + " Wins!");
          gameBoard.clearGrid();
        }
    else if (array.filter(n => n).length == 9) {
      alert("The game is drawn");
      gameBoard.clearGrid();
      } 
  };

  // function to toggle on computer play mode
  const makeMove = () => {
    for (i = 0; i < 9; i++) {
      cells[i].addEventListener("click", function(e) {
        setTimeout(computerPlay.easy, 500, cells);
      });
    }
  }

  return {
    playTurn, 
    checkWin,
    makeMove,
    token: "X"
  };
})();

// AI module
const computerPlay = (() => {
  const easy = array => {
    let random;
    for (let i = 1; i < Infinity; i++) {
      random = Math.floor(Math.random() * 9);
      if (array[random].textContent === "") {
        gameController.playTurn(array[random]);
        break;
      } else continue;
    }
  }

  return {easy};
})();

// form module
const form = (() => {
  let player1;
  let player2;
  const playerForm = document.querySelector(".player-entry-form");
  const gameBody = document.querySelector(".game-body");

  playerForm.addEventListener("submit", function(e) {
    e.preventDefault();
    const player1Name = document.querySelector(".player-1").value;
    const player2Name = document.querySelector(".player-2").value;
    form.player1 = player(player1Name, "X");
    form.player2 = player(player2Name, "O");
    clearNode(document.querySelector(".player-menu"));
    document.querySelector(".xName").textContent = form.player1.name;
    document.querySelector(".oName").textContent = form.player2.name;
    showNode(gameBody);
    showNode(resignButton);
  });

  const clearNode = (node) => {
    node.style.display = "none";
  }

  const showNode = (node) => {
    node.style.display = "flex";
  }
  return {
    player1,
    player2,
    gameBody,
    clearNode,
    showNode,
  }
})();

// on load
form.clearNode(resignButton);
form.clearNode(form.gameBody);
addListFunction(gameController.playTurn);
