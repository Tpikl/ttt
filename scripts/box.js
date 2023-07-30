class Box {
  constructor(r, c, value) {
    this._id = Box.getId(r, c);
    this.r = r;
    this.c = c;
    this.value = value;
  }

  setValue(newValue) {
    // Set the value
    this.value = newValue;

    // Update the box element
    this.updateElement();
  }

  updateElement() {
    var box = Box.getElement(this._id);

    // Update with value
    box.classList.add("shadow");
    box.innerHTML = this.value;
  }

  // Id
  static idSplitter = ':';
  static getId(r, c) {
    return `${r}${Box.idSplitter}${c}`;
  }
  static parseId(id) {
    let split = id.split(Box.idSplitter);
    return [split[0], split[1]];
  }

  // Html Element
  static getElement(id) {
    return document.getElementById(id);
  }
  static buildElement(r, c) {
    var box = document.createElement("div");
    box.id = Box.getId(r, c);
    box.classList.add("box");
    box.onclick = Box.click;
    return box;
  }
  static click(event) {
    let coordArray = Box.parseId(event.target.id);
    let r = coordArray[0];
    let c = coordArray[1];

    // Update matrix
    if (ttt.CanMarkBox(r, c)) {
      ttt.UpdateBoxValue(r, c);

      // Move made. Advance the turn.
      game.AdvanceTurn();
    }
  }
}
