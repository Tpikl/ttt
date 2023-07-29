var boardId = "board";


function getBoard() {
  return document.getElementById(boardId);
}

function buildBoard(size) {
  // Clear the board
  clearBoard();

  buildMatrix();

  // draw
  drawBoard(size);
}

function buildMatrix(size) {
  const matrix = [];

  for (let r = 0; r < size; r++) {
    const row = [];
    for (let c = 0; c < size; c++) {
      row.push(0);
    }
    matrix.push(row);
  }

  return matrix;
}

function renderBoard(matrix) {
  var board = getBoard();

  for (let r = 0; r < matrix.length; r++) {
    const rowElement = document.createElement("div");
    rowElement.classList.add("row");

    for (let c = 0; c < matrix[r].length; c++) {
      var boxElement = buildBox(c, r);
      rowElement.appendChild(boxElement);
    }

    board.appendChild(rowElement);
  }
}

function drawBoard(size) {
  var matrix = buildMatrix(size);

  renderBoard(matrix);
  return;
}

function clearBoard() {
  var board = getBoard();
  board.innerHTML = '';
}

function clickBox(event) {
  console.log(`clicked: ${event.target.id}`);
  var charArray = [...event.target.id];

  // Mark box
  markBox(charArray[0], charArray[1]);
}

function buildBox(x, y) {
  var box = document.createElement("div");
  box.id = `${x}${y}`;
  box.classList.add("box");
  box.onclick = clickBox;
  return box;
}

function markBox(x, y) {
  var box = document.getElementById(`${x}${y}`);
  box.classList.add("glow");
  var marker = ttt.data[ttt.data.turn];
  box.innerHTML = marker;

  ttt.AdvanceTurn();
}


drawBoard(3);
