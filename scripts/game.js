class Game {
  constructor(size) {
    this.winner = null;
    this.turn = "player1";
    this.turnCount = 0;
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
  }
  static Restart() {
    UserInterface.HideWinner();
    Game.NewGame(game.board.size);
  }
  static Reset() {
    UserInterface.HideWinner();
    UserInterface.FlipHiddenContainers();
  }

  AdvanceTurn() {
    // Check win condition
    this.CheckWinConditions();

    // Flip the player
    this.turn = this.turn === 'player1'
      ? 'player2'
      : 'player1';
    this.turnCount++;
  }

  CheckWinConditions() {
    // Run the check.
    WinConditions.CheckAll()

    // Declare winner if set!
    if (this.winner) UserInterface.ShowWinner();
  }
}

game = null;
Game.NewGame();
