class Game {
  constructor(size) {
    this.Winner = null;
    this.turn = "player1";
    this.board = new Board(size);
    this.players = {
      player1: "x",
      player2: "o"
    };
  }

  static NewGame(size) {
    // Init new game
    console.log("> new game");
    game = new Game(size);

    // Flip Controls
    UserInterface.FlipHiddenContainers();
  }

  AdvanceTurn() {
    // Check win condition
    this.CheckWinConditions();

    // Flip the player
    this.turn = this.turn === 'player1'
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
