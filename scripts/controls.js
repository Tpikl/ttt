var boardSizeId = "boardSize";

function validateSize(element) {
  var input = document.getElementById(boardSizeId);
  const size = element.value;

  if (size == '') return;
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

// Scroll wheel support for boardSize input.
const boardSize = document.getElementById('boardSize');
boardSize.addEventListener('wheel', function (event) {
  // Prevent the default scroll behavior
  event.preventDefault();

  // Determine the scroll direction (up or down)
  const scrollDirection = event.deltaY < 0 ? 'up' : 'down';

  if (scrollDirection === 'up')
    boardSize.stepUp();
  else
    boardSize.stepDown();
});
