// const page = (() => {
//   const home = document.querySelector(".home");

//   function change() {
//     home.style.setProperty("display", "none");
//   }

//   return { change };
// })();

const playerFactory = (name, symbol) => {
  return { name, symbol };
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

// const btn = document.querySelector("#change");
// btn.addEventListener("click", () => {
//   page.change();
//   gameBoard.print();
// });
