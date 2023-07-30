class UserInterface {
  static FlipHiddenContainers() {
    let elements = document.getElementsByClassName("container");

    for (const el of elements) {
      if (el.classList.contains("hidden"))
        el.classList.remove("hidden");
        else
        el.classList.add("hidden");
    }
  }
}
