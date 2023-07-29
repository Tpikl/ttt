class WinConditions {
  static CheckAll() {
    if (this.CheckRows()) return true;
    if (this.CheckColumns()) return true;
    if (this.CheckDiaginals()) return true;
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
        alert(`winner is: ${mark}!`);
    }
  }

  static CheckColumns() {
    return false;
  }

  static CheckDiaginals() {
    return false;
  }
}
