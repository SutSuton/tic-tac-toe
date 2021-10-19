// storing the cells in variables. surely there is a better way to do this...
// const a1 = document.querySelector(".a1");
// const a2 = document.querySelector(".a2");
// const a3 = document.querySelector(".a3");
// const b1 = document.querySelector(".b1");
// const b2 = document.querySelector(".b2");
// const b3 = document.querySelector(".b3");
// const c1 = document.querySelector(".c1");
// const c2 = document.querySelector(".c2");
// const c3 = document.querySelector(".c3");


// Module for the gameboard
const gameBoard = (() => {
  // let playArea = [a1.textContent, a2, a3, b1, b2, b3, c1, c2, c3];
  let playArea = [];
  // make a function to loop through grid and put results in an array
  const storeGrid = (list) => {
    playArea.splice(0, 9);
    for (let i = 0; i < 9; i++) {
      playArea.push(list[i].textContent);
    }
  }
  const checkWin = array => {
    if (
        (array[0] && array[0] == array[1] && array[0] == array[2]) || 
        (array[0] && array[0] == array[4] && array[0] == array[8]) ||
        (array[0] && array[0] == array[3] && array[0] == array[6])
        ) {
          // array[0] WINS!
        } 
    else if (
        (array[8] && array[8] == array[5] && array[8] == array[2]) ||
        (array[8] && array[8] == array[7] && array[8] == array[6])
        ) {
          // array[8] WINS!
        }
    else if (
        (array[4] && array[4] == array[1] && array[4] == array[7]) ||
        (array[4] && array[4] == array[3] && array[4] == array[5])
        ) {
          // array[4] WINS!
        }
  }
  return {playArea, storeGrid, checkWin};
})();



// Player factory function
const player = (name, score, token) => {

  return {name, score, token};
}

// Module to control the flow of the game
const gameController = (() => {

  let playTurn = (grid) => { 
    if (grid.textContent == "") {
      grid.textContent = gameController.token;
      gameController.token === "X" ? gameController.token = "O" : gameController.token = "X"
    } else if (grid.textContent !== "") {console.log("Can't play there")}

    gameBoard.storeGrid(cells);
    console.log(gameBoard.playArea);
    gameBoard.checkWin(gameBoard.playArea);
  };


  // code to return the result of the game
  let result = () => {
  };

  return {
    playTurn, 
    result,
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