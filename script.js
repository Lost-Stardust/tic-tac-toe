let cell = (() => {
  let value = 0;

  const addValue = (x) => (value = x);
  const getValue = () => value;

  return { getValue, addValue };
})();
console.log(cell.getValue());

let gameBoard = (() => {
  const board = [];

  const rows = 3;
  const columns = 3;

  for (i = 0; i < rows; i++) {
    board[i] = [];
    for (j = 0; j < columns; j++) {
      board[i].push(cell.getValue());
    }
  }
  console.log(board);
})();
