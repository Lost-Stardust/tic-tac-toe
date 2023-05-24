const cell = (() => {})();

const gameBoard = (() => {
  function printBoard() {
    for (let i = 0; i < 3; i++) {
      let board = document.querySelector(".board");
      for (let j = 0; j < 3; j++) {
        let btn = document.createElement("button");
        board.appendChild(btn);
      }
    }
  }

  return { printBoard };
})();

const generatePlayer = () => {};
