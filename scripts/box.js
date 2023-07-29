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
    this.value = newValue;
  }

  // Other methods
  printDetails() {
    console.log(`Box: Value=${this.value}, X=${this.x}, Y=${this.y}`);
  }
}
