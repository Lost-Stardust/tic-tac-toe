const cell = (() => {
  let value = 0;

  const addValue = (x) => (value = x);
  const getValue = () => value;

  return { getValue, addValue };
})();
console.log(cell.getValue());

const gameBoard = (() => {
  const board = [];

  const rows = 3;
  const columns = 3;

  for (i = 0; i < rows; i++) {
    board[i] = [];
    for (j = 0; j < columns; j++) {
      board[i].push(cell.getValue());
    }
  }
  console.table(board);
})();

const generatePlayer = (name, symbol) => {
  return { name, symbol };
};
const player1 = generatePlayer("Miyamoto Musashi", "$");
console.log(player1.name, player1.symbol);
