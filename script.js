// const page = (() => {
//   const home = document.querySelector(".home");

//   function change() {
//     home.style.setProperty("display", "none");
//   }

//   return { change };
// })();

const playerFactory = (name, symbol, status) => {
  return { name, symbol, status };
};

const players = (() => {
  const P1 = playerFactory("Joestar", "X", true);
  const P2 = playerFactory("Bitch", "O");

  return { P1, P2 };
})();

const gameBoard = (() => {
  function print() {
    for (let i = 0; i < 3; i++) {
      const row = document.createElement("div");
      row.className = "row";
      const board = document.querySelector(".board");
      board.appendChild(row);

      for (let j = 0; j < 3; j++) {
        const column = document.createElement("button");
        column.className = "column";
        row.appendChild(column);
      }
    }
  }

  return { print };
})();
gameBoard.print();

const gameController = (() => {
  // Make player function; for later
  // it will take input from user for names
  function makePlayer() {}

  // Temporary player creations
  // const P1 = playerFactory("Joestar", "X", true);
  // const P2 = playerFactory("Bitch", "O");

  function _turn() {
    if (players.P1.status == true) {
      players.P1.status = false;
      players.P2.status = true;
    } else if (players.P2.status == true) {
      players.P2.status = false;
      players.P1.status = true;
    }
  }

  const cells = document.querySelectorAll(".column");
  console.log(cells);

  // Add event listeners to each cell based on player status
  cells.forEach((cell) => {
    console.log(cell);
    cell.addEventListener(
      "click",
      (e) => {
        if (players.P1.status == true) {
          e.target.textContent = players.P1.symbol;
          _turn();
        } else if (players.P2.status == true) {
          e.target.textContent = players.P2.symbol;
          _turn();
        }
      },
      { once: true } // makes each cell clickable only once.
    );
  });

  // set unique data attributes on each cell button
  // that correspond with the index of a 2d array
  cells[0].setAttribute("data-index1", 0);
  cells[0].setAttribute("data-index2", 0);

  cells[1].setAttribute("data-index1", 0);
  cells[1].setAttribute("data-index2", 1);

  cells[2].setAttribute("data-index1", 0);
  cells[2].setAttribute("data-index2", 2);

  cells[3].setAttribute("data-index1", 1);
  cells[3].setAttribute("data-index2", 0);

  cells[4].setAttribute("data-index1", 1);
  cells[4].setAttribute("data-index2", 1);

  cells[5].setAttribute("data-index1", 1);
  cells[5].setAttribute("data-index2", 2);

  cells[6].setAttribute("data-index1", 2);
  cells[6].setAttribute("data-index2", 0);

  cells[7].setAttribute("data-index1", 2);
  cells[7].setAttribute("data-index2", 1);

  cells[8].setAttribute("data-index1", 2);
  cells[8].setAttribute("data-index2", 2);
})();

// module that will validate the winning patterns of tic tac toe
// uses dataIndex to match the cells with 2d array
const validate = (() => {
  // Create the 2d array
  const board = [];

  for (i = 0; i < 3; i++) {
    board[i] = [];
    for (j = 0; j < 3; j++) {
      board[i].push(0);
    }
  }
  console.table(board);

  const cells = document.querySelectorAll(".column");

  let dataIndex1;
  let dataIndex2;

  const data = {
    index1: null,
    index2: null,
    symbol: null,
  };

  for (let cell of cells) {
    cell.addEventListener(
      "click",
      (e) => {
        dataIndex1 = e.target.getAttribute("data-index1");
        dataIndex2 = e.target.getAttribute("data-index2");
        if (players.P1.status == false) {
          data.index1 = dataIndex1;
          data.index2 = dataIndex2;
          data.symbol = players.P1.symbol;
          console.log({ data });

          board[data.index1][data.index2] = data.symbol;
          console.table(board);
        } else if (players.P2.status == false) {
          data.index1 = dataIndex1;
          data.index2 = dataIndex2;
          data.symbol = players.P2.symbol;
          console.log({ data });

          board[data.index1][data.index2] = data.symbol;
          console.table(board);
        }
      },
      { once: true }
    );
  }
})();

// const btn = document.querySelector("#change");
// btn.addEventListener("click", () => {
//   page.change();
//   gameBoard.print();
// });
