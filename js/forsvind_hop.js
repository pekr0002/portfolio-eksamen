window.addEventListener("load", sidenVises);
function sidenVises() {
  console.log("siden vises");
  document.querySelector("#purple_container").addEventListener("click", clickRedHandler);
}

function clickRedHandler() {
  console.log("clickredhandler");
  document.querySelector("#purple_sprite").classList.add("forsvind");
  document.querySelector("#purple_container").addEventListener("animationend", forsvindDone);
}

function forsvindDone() {
  console.log("forsvinddone");
  document.querySelector("#green_sprite").classList.add("hop");
}
