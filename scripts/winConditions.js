class WinConditions {
  static CheckAll() {
    this.CheckRows();
    this.CheckColumns();
    this.CheckDiaginalOne();
    this.CheckDiaginalTwo();
  }

  static CheckRows() {
    var matrix = ttt.data.matrix;

    // Iterate through each row.
    for (const r in matrix) {
      // Track first mark.
      // All must match.
      let row = matrix[r];
      let mark = row[0].value;
      if (mark == '') continue;

      let count = 0;

      // Iterate through each column
      for (const b in row) {
        let box = row[b];
        // Create skip var to exit quicly.
        let skip = false;
        if (skip) continue;


        // Check if mark is empty.
        if (box.value !== mark) {
          skip = true;
          continue;
        }

        count++;
      }

      if (count == ttt.data.size)
        game.Winner = mark;
    }
  }

  static CheckColumns() {
    var matrix = ttt.data.matrix;

    // Iterate through each row.
    for (const c in matrix) {
      let r = 0;
      let mark = matrix[r][c].value;
      if (mark == '') continue;

      let count = 0;

      for (r; r < ttt.data.size; r++) {
        let box = matrix[r][c];
        // Create skip var to exit quickly.
        let skip = false;
        if (skip) continue;

        if (box.value !== mark) {
          skip = true;
          continue;
        }

        count++;
      }

      if (count == ttt.data.size)
        game.Winner = mark;
    }
  }

  static CheckDiaginalOne() {
    let matrix = ttt.data.matrix;
    let size = ttt.data.size;

    let i = 0;
    let mark = matrix[i][i].value;
    if (mark == '') return;

    // left to right
    for (i++; i < size; i++) {
      let box = matrix[i][i];
      if (box.value !== mark) return;
    }

    game.Winner = mark;
  }

  static CheckDiaginalTwo() {
    let matrix = ttt.data.matrix;
    let size = ttt.data.size;

    let r = 0;
    let c = size-1;
    let mark = matrix[r][c].value;
    if (mark == '') return;

    r++;
    c--;
    // right to left
    for (c; c >= 0; c--) {
      let box = matrix[r][c];
      if (box.value !== mark) return;
      r++;
    }

    game.Winner = mark;
  }
}
