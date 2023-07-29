class WinConditions {
  static CheckAll() {
    if (this.CheckRows()) return true;
    if (this.CheckColumns()) return true;
    if (this.CheckDiaginals()) return true;
  }

  static CheckRows() {
    return false;
  }

  static CheckColumns() {
    return false;
  }

  static CheckDiaginals() {
    return false;
  }
}
