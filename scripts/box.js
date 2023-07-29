class Box {
  constructor(x, y, value) {
    this.x = x;
    this.y = y;
    this.value = value;
  }

  // Getter methods
  getX() {
    return this.x;
  }

  getY() {
    return this.y;
  }

  getValue() {
    return this.value;
  }

  getElement() {
    return document.getElementById(`${this.y}${this.x}`);
  }

  // Setter methods
  setX(newX) {
    this.x = newX;
  }

  setY(newY) {
    this.y = newY;
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
    box.classList.add("glow");
    box.innerHTML = this.value;
  }


  // Element
  static buildElement(x, y) {
    var box = document.createElement("div");
    box.id = `${x}${y}`;
    box.classList.add("box");
    box.onclick = Box.click;
    return box;
  }

  // Control
  static click(event) {
    console.log(`clicked: ${event.target.id}`);
    var charArray = [...event.target.id];

    // Update matrix
    if (ttt.CanMarkBox(charArray[0], charArray[1]))
      ttt.UpdateBoxValue(charArray[0], charArray[1]);

    // Move made. Advance the turn.
    game.AdvanceTurn();
  }
}
