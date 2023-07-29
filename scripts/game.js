var boardId = "board";


function getBoard() {
  return document.getElementById(boardId);
}

function buildBoard(size) {
  // Clear the board
  clearBoard();

  // Build the matrix.
  buildMatrix();

  // draw
  drawBoard(size);
}

function buildMatrix(size) {
  const matrix = [];

  for (let r = 0; r < size; r++) {
    const row = [];
    for (let c = 0; c < size; c++) {
      let box = new Box(c, r, "");
      row.push(box);
    }
    matrix.push(row);
  }

  ttt.data.matrix = matrix;
  return matrix;
}

function clearBoard() {
  var board = getBoard();
  board.innerHTML = '';
}

function updateBoxElement(box) {
  var boxElement = document.getElementById(`${box.y}${box.x}`);

  // Update with value
  boxElement.classList.add("glow");
  //var marker = ttt.data[ttt.data.turn];
  var marker = box.value;
  boxElement.innerHTML = marker;
}

function renderBoard(matrix) {

  var board = getBoard();

  for (let r = 0; r < matrix.length; r++) {
    const rowElement = document.createElement("div");
    rowElement.classList.add("row");

    for (let c = 0; c < matrix[r].length; c++) {
      var boxElement = Box.buildElement(c, r);
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
