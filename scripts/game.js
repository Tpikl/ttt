var boardId = "board";
function getBoardElement() {
  return document.getElementById(boardId);
}

// 1
function clearBoard() {
  var board = getBoardElement();
  board.innerHTML = '';
}

// 2
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

// 3
function drawBoard(size) {
  var matrix = buildMatrix(size);

  renderBoard(matrix);
  return;
}

// 4
function renderBoard(matrix) {
  var board = getBoardElement();

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


// Main
function buildBoard(size) {
  // Clear the board
  clearBoard();

  // Build the matrix.
  buildMatrix();

  // draw
  drawBoard(size);
}
