class UserInterface {
  static FlipHiddenContainers() {
    let elements = document.getElementsByClassName("flip");

    for (const el of elements) {
      if (el.classList.contains("hidden"))
        el.classList.remove("hidden");
        else
        el.classList.add("hidden");
    }
  }

  static ShowWinner() {
    if (!game.Winner) return;
    let winner = document.getElementById("winner");
    let message = `Winner! -={ ${game.Winner} }=-`;

    console.log(message);
    winner.innerHTML = message
    winner.classList.remove("hidden");

    let gameOver = document.getElementById("gameOver");
    gameOver.classList.remove("hidden");
  }
  static HideWinner() {
    let winner = document.getElementById("winner");

    winner.innerHTML = '';
    winner.classList.add("hidden");

    let gameOver = document.getElementById("gameOver");
    gameOver.classList.add("hidden");

  }
}
