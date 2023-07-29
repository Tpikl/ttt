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
    updateBoxElement(this);
  }

  // Build element
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
    ttt.UpdateBoxValue(charArray[0], charArray[1]);

    // Move made. Advance the turn.
    ttt.advanceTurn();
  }

  // Other methods
  printDetails() {
    console.log(`Box: Value=${this.value}, X=${this.x}, Y=${this.y}`);
  }
}
