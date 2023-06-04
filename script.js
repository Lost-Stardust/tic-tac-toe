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
  const P1 = playerFactory("Joestar", "X", true);
  const P2 = playerFactory("Bitch", "O");

  function _turn() {
    if (P1.status == true) {
      P1.status = false;
      P2.status = true;
    } else if (P2.status == true) {
      P2.status = false;
      P1.status = true;
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
        if (P1.status == true) {
          console.log(e.target);
          e.target.textContent = P1.symbol;
          _turn();
        } else if (P2.status == true) {
          e.target.textContent = P2.symbol;
          _turn();
        }
      },
      { once: true } // makes each cell clickable only once.
    );
  });

  // set unique data attributes on each cell button
  // that correspond with the index of a 2d array
  cells[0].setAttribute("data-index", "[0][0]");
  cells[1].setAttribute("data-index", "[0][1]");
  cells[2].setAttribute("data-index", "[0][2]");
  cells[3].setAttribute("data-index", "[1][0]");
  cells[4].setAttribute("data-index", "[1][1]");
  cells[5].setAttribute("data-index", "[1][2]");
  cells[6].setAttribute("data-index", "[2][0]");
  cells[7].setAttribute("data-index", "[2][1]");
  cells[8].setAttribute("data-index", "[2][2]");

  // Create the 2d array
  const board = [];

  for (i = 0; i < 3; i++) {
    board[i] = [];
    for (j = 0; j < 3; j++) {
      board[i].push(0);
    }
  }
  console.table(board);
})();

// const btn = document.querySelector("#change");
// btn.addEventListener("click", () => {
//   page.change();
//   gameBoard.print();
// });
