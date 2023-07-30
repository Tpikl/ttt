class Box {
  constructor(r, c, value) {
    this.r = r;
    this.c = c;
    this.value = value;
  }

  getElement() {
    return document.getElementById(`${this.r}${this.c}`);
  }

  setValue(newValue) {
    // Set the value
    this.value = newValue;

    // Update the box element
    this.updateElement();
  }

  updateElement() {
    var box = this.getElement();

    // Update with value
    box.classList.add("shadow");
    box.innerHTML = this.value;
  }


  // Element
  static buildElement(r, c) {
    var box = document.createElement("div");
    box.id = `${r}${c}`;
    box.classList.add("box");
    box.onclick = Box.click;
    return box;
  }

  // Control
  static click(event) {
    var charArray = [...event.target.id];

    // Update matrix
    if (ttt.CanMarkBox(charArray[0], charArray[1])) {
      ttt.UpdateBoxValue(charArray[0], charArray[1]);

      // Move made. Advance the turn.
      game.AdvanceTurn();
    }
  }
}
