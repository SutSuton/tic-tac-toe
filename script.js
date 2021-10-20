// Module for the gameboard
const gameBoard = (() => {
  
  let playArea = [];

  const storeGrid = (list) => {
    playArea.splice(0, 9);
    for (let i = 0; i < 9; i++) {
      playArea.push(list[i].textContent);
    }
  }

  return {playArea, storeGrid};
})();



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
    checkWin(gameBoard.playArea);
  };

  // function to check if anyone has won
  const checkWin = array => {
    if (
        (array[0] && array[0] == array[1] && array[0] == array[2]) || 
        (array[0] && array[0] == array[4] && array[0] == array[8]) ||
        (array[0] && array[0] == array[3] && array[0] == array[6])
        ) {
          // array[0] WINS!
          console.log(array[0] + " wins")
        } 
    else if (
        (array[8] && array[8] == array[5] && array[8] == array[2]) ||
        (array[8] && array[8] == array[7] && array[8] == array[6])
        ) {
          // array[8] WINS!
          console.log(array[8] + " wins")
        }
    else if (
        (array[4] && array[4] == array[1] && array[4] == array[7]) ||
        (array[4] && array[4] == array[3] && array[4] == array[5]) ||
        (array[4] && array[4] == array[6] && array[4] == array[2])
        ) {
          // array[4] WINS!
          console.log(array[4] + " wins")
        }
    else if (array.filter(n => n).length == 9) {
      console.log("draw");
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