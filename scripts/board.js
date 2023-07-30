class Board {
  constructor(size) {
    // Clear existing Board.
    this.Clear();

    this._size = size ?? 3;
    this.boxMatrix = this.BuildMatrix();

    this.RenderBoard();
  }

  static elementId = "board";

  static GetBoardElement() {
    return document.getElementById(Board.elementId);
  }

  // Board re/set
  Clear() {
    var board = Board.GetBoardElement();
    if (board.innerHTML) {
      console.log("> clearing game board");
      board.innerHTML = '';
    }
    console.log("> initializing game board");
  }
  BuildMatrix() {
    var size = this._size;

    const matrix = [];
    for (let r = 0; r < size; r++) {
      const row = [];
      for (let c = 0; c < size; c++) {
        let box = new Box(this, r, c, "");
        row.push(box);
      }
      matrix.push(row);
    }

    return matrix;
  }
  RenderBoard() {
    let matrix = this.boxMatrix;
    var board = Board.GetBoardElement();

    for (const r in matrix) {
      let row = matrix[r];

      const rowElement = document.createElement("div");
      rowElement.classList.add("row");

      for (const b in row) {
        let box = row[b];
        var boxElement = box.renderElement();
        rowElement.appendChild(boxElement);
      }
      board.appendChild(rowElement);
    }
  }

  // Turn actions
  CanMarkBox(r, c) {
    let box = this.boxMatrix[r][c];
    let canMark = box.value.trim() === '';
    if (!canMark) console.log("Box already marked!");
    return canMark;
  }

  UpdateBoxValue(r, c) {
    // get box
    let box = this.boxMatrix[r][c];
    box.setValue(game._players[game._turn]);
  }
}
