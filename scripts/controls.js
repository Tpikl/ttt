var boardSizeId = "boardSize";

function validateSize(element) {
  var input = document.getElementById(boardSizeId);
  const size = element.value;

  if (size < 3) input.value = 3;
  if (size > 10) input.value = 10;
}

function startNewGame() {
  var input = document.getElementById(boardSizeId);
  var size = parseInt(input.value);

  // check value
  if (isNaN(size)){
    console.log(`boardSize: {input.value} is NaN!`);
    return;
  }

  // Run new game.
  Game.NewGame(size);

  // Flip Controls
  UserInterface.FlipHiddenContainers();
}
