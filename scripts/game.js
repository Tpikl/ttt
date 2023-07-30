class Game {
  constructor(size) {
    this.Winner = null;
    this._turn = "player1";
    this._board = new Board(size);
    this._players = {
      player1: "x",
      player2: "o"
    };
  }

  static NewGame(size) {
    console.log("> new game");
    game = new Game(size);
  }

  AdvanceTurn() {
    // Check win condition
    this.CheckWinConditions();

    // Flip the player
    this._turn = this._turn === 'player1'
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
  }
}

game = null;
