// Module for the gameboard
const gameBoard = (() => {
  const playArea = [];

  // function to fill the grid
  const fill = (grid, token) => {
    grid.textContent = token;
  };
  return {playArea, fill};
})();
// storing the cells in variables. surely there is a better way to do this...
const a1 = document.querySelector(".a1");
const a2 = document.querySelector(".a2");
const a3 = document.querySelector(".a3");
const b1 = document.querySelector(".b1");
const b2 = document.querySelector(".b2");
const b3 = document.querySelector(".b3");
const c1 = document.querySelector(".c1");
const c2 = document.querySelector(".c2");
const c3 = document.querySelector(".c3");


// Player factory function
const player = (name, score, token) => {

  return {name, score, token};
}

// Module to control the flow of the game
const gameController = (() => {
  // code to say when player 1 or player 2 moves and swaps between X's and O's
  let turn = () => {

  };
  // code to return the result of the game
  let result = () => {

  };
  return {turn, result};
})();