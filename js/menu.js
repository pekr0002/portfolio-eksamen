const burger = document.querySelector(".burger");
const nav = document.querySelector("nav");
const menu = document.querySelector(".menu");
// "burger" lytter efter klik, og kalder burgerClick
burger.addEventListener("click", burgerClick);

function burgerClick() {
  // burger aktivere klasse "active"
  burger.classList.toggle("active");
  // nav aktivere klasse "active"
  nav.classList.toggle("active");
}
// når menuen bliver lukket igen bliver "active" deaktiveret fra "burger" og "nav"
menu.addEventListener("click", menuClick);

function menuClick() {
  burger.classList.remove("active");
  nav.classList.remove("active");
}
