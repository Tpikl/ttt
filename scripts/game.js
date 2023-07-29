class Game {
  constructor() {
    this._active = false;
  }

  SetActive(active) {
    this._active = active;
  }
  GetActive() {
    this._active;
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
    // If no matches, return.
    if (!WinConditions.CheckAll()) return;

    // Otherwise declare a winner!
    alert("Winner!");
  }
}

const game = new Game();
