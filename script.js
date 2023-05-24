const page = (() => {
  const home = document.querySelector(".home");

  function change() {
    home.style.setProperty("display", "none");
  }

  return { change };
})();

const cell = (() => {})();

const gameBoard = (() => {
  function print() {
    for (let i = 0; i < 3; i++) {
      let board = document.querySelector(".board");
      for (let j = 0; j < 3; j++) {
        let btn = document.createElement("button");
        board.appendChild(btn);
      }
    }
  }

  return { print };
})();

const btn = document.querySelector("#change");
btn.addEventListener("click", () => {
  page.change();
  gameBoard.print();
});

const generatePlayer = () => {};
