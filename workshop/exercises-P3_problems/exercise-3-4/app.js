// Exercise 3-4 - The GRID
const cellsPerSide = 8;
const board = document.querySelector("#board");
board.style.width = "600px";
board.style.height = "600px";
board.style.gridTemplateRows = `repeat(${cellsPerSide}, 1fr)`;
board.style.gridTemplateColumns = `repeat(${cellsPerSide}, 1fr)`;

// for (i = 1; i <= cellsPerSide; i++) {
//   const row = document.createElement("div");
//   row.setAttribute("id", `row-${i}`);
//   //   row.setAttribute("class", "form");
//   board.appendChild(row);
for (j = 1; j <= cellsPerSide * cellsPerSide; j++) {
  const cell = document.createElement("div");
  cell.setAttribute("id", `cell-${j}`);
  cell.setAttribute("class", "cell");
  board.appendChild(cell);
  console.log(cell.id);
}
