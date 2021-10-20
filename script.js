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

const resignButton = document.querySelector(".resign");
resignButton.addEventListener("click", function(e) {
  gameController.token === "X" ? alert("O wins by resignation") : alert("X wins by resignation");
  gameBoard.clearGrid();
})


// Player factory function
const player = (name, score, token) => {

  return {name, score, token};
}

// Module to control the flow of the game
const gameController = (() => {

  // function to place tokens
  const playTurn = (grid) => { 
    if (grid.textContent == "") {
      grid.textContent = gameController.token;
      gameController.token === "X" ? gameController.token = "O" : gameController.token = "X"
    } else if (grid.textContent !== "") {console.log("Can't play there")}

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
          alert(array[0] + " wins!");
          gameBoard.clearGrid();
        } 
    else if (
        (array[8] && array[8] == array[5] && array[8] == array[2]) ||
        (array[8] && array[8] == array[7] && array[8] == array[6])
        ) {
          // array[8] WINS!
          alert(array[8] + " wins!");
          gameBoard.clearGrid();
        }
    else if (
        (array[4] && array[4] == array[1] && array[4] == array[7]) ||
        (array[4] && array[4] == array[3] && array[4] == array[5]) ||
        (array[4] && array[4] == array[6] && array[4] == array[2])
        ) {
          // array[4] WINS!
          alert(array[4] + " wins!");
          gameBoard.clearGrid();
        }
    else if (array.filter(n => n).length == 9) {
      alert("The game is drawn");
      gameBoard.clearGrid();
    }
};

  return {
    playTurn, 
    checkWin,
    token: "X"
  };
})();

const cells = document.querySelectorAll(".cell")

function addListFunction(list) {
  for (let i = 0; i < 9; i++) {
    list[i].addEventListener("click", function(e) {
      gameController.playTurn(list[i]);
    });
  }
};
addListFunction(cells);


const boxSize = getComputedStyle(document.documentElement)
                    .getPropertyValue('--box-size')