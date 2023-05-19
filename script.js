let gameBoard = (() => {
  const board = [];

  const rows = 3;
  const columns = 3;

  for (i = 0; i < rows; i++) {
    board[i] = [];
    for (j = 0; j < columns; j++) {
      board[i].push("0");
    }
  }
  console.log(board);
})();
