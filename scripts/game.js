class Game {
  constructor() {
    this._active = false;
    this.Winner = null;
  }

  SetActive(active) {
    this._active = active;
  }
  GetActive() {
    this._active;
  }

  NewGame() {
    console.log("> new game");
    this.Winner = null;
    board.Init();
  }

  AdvanceTurn() {
    // Check win condition
    this.CheckWinConditions();

    let current = ttt.data.turn;
    ttt.data.turn = current === 'player1'
      ? 'player2'
      : 'player1';
  }

  CheckWinConditions() {
    // Run the check.
    WinConditions.CheckAll()

    // Declare winner if set!
    if (this.Winner) {
      let winner = `Winner! -={ ${this.Winner} }=-`;
      console.log(winner);
      alert(winner);
    }

    return true;
  }
}

const game = new Game();
