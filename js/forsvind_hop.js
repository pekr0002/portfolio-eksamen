// siden vises
window.addEventListener("load", sidenVises);
function sidenVises() {
  console.log("siden vises");
  //  lytter efter når der bliver klikket på "purple_container"
  document.querySelector("#purple_container").addEventListener("click", clickPurpleHandler);
}

function clickPurpleHandler() {
  console.log("clickPurplehandler");
  // "purple_sprite" får klassen "forsvind"
  document.querySelector("#purple_sprite").classList.add("forsvind");
  // når animationen for "forsvind" er færdig bliver "forsvindDone" kaldt
  document.querySelector("#purple_container").addEventListener("animationend", forsvindDone);
}

function forsvindDone() {
  console.log("forsvinddone");
  // "green_sprite" får klassen hop
  document.querySelector("#green_sprite").classList.add("hop");
}
