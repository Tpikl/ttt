function getScripts() {
  console.log("> exec getScripts");

  let scripts = [
    "box",
    "storage",
    "controls",
    "game",
  ];
  let el = document.getElementById('scripts');

  for (const script of scripts) {
    let newEl = document.createElement('script');
    newEl.src = `scripts/${script}.js`;
    el.appendChild(newEl);
  }
}

function init() {
  console.log("> init");
  // Load in additional scripts
  getScripts();
}

init();
