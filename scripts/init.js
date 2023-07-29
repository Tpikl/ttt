function getScripts() {
  let scripts = [
    "box",
    "controls",
    "ttt",
    "storage"
  ];
  let el = document.getElementById('scripts');

  for (const script of scripts) {
    let newEl = document.createElement('script');
    newEl.src = `scripts/${script}.js`;
    el.appendChild(newEl);
  }
}
getScripts();
