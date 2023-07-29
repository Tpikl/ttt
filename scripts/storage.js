class Storage {
  constructor() {
    // Check if the "ttt" object already exists in localStorage
    const existingData = localStorage.getItem("ttt");
    if (existingData) {
      this.data = JSON.parse(existingData);
    } else {
      // If not, create an empty object
      this.data = {
        size: 3,
        active: false,
        turn: 'player1',
        matrix: [],
      };
    }
  }

  // Method to add a value to the storage object
  addValue(key, value) {
    this.data[key] = value;
    this.saveDataToLocalStorage();
  }

  // Method to save the data to local storage
  saveDataToLocalStorage() {
    const dataJSON = JSON.stringify(this.data);
    localStorage.setItem("ttt", dataJSON);
  }

  setActive(active) {
    this.data.active = active;
    this.saveDataToLocalStorage();
  }

  advanceTurn() {
    // Check win condition
    this.CheckWinCondition();

    let current = this.data.turn;
    this.data.turn = current === 'player1'
      ? 'player2'
      : 'player1';
  }

  UpdateBoxValue(x, y) {
    // get box
    let box = this.data.matrix[x][y];
    box.setValue(ttt.data[ttt.data.turn]);
  }

  CheckWinCondition() {
    // ${this.size} in a row
  }
}

  // Initialize ttt storage
  console.log("> initializing storage at location: `ttt`");
  const ttt = new Storage();
  ttt.addValue("player1", "x");
  ttt.addValue("player2", "o");
