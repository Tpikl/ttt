class Board {
  static elementId = "board";
  constructor() {
    this.blocks = {};
  }

  Init() {
    this.Clear();
    this.BuildMatrix();
    this.RenderBoard();
  }

  static GetBoardElement() {
    return document.getElementById(Board.elementId);
  }

  Clear() {
    var board = Board.GetBoardElement();
    board.innerHTML = '';
  }

  BuildMatrix() {
    var input = document.getElementById(boardSizeId);
    var size = parseInt(input.value);

    const matrix = [];
    for (let r = 0; r < size; r++) {
      const row = [];
      for (let c = 0; c < size; c++) {
        let box = new Box(c, r, "");
        row.push(box);
      }
      matrix.push(row);
    }

    // Set storage data.
    ttt.data.matrix = matrix;

    // Set property data.
    this.blocks = ttt.data.matrix;
  }

  RenderBoard() {
    let matrix = ttt.data.matrix;
    var board = Board.GetBoardElement();

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
}

const board = new Board();
