const burger = document.querySelector(".burger");
const nav = document.querySelector("nav");
const menu = document.querySelector(".menu");
// "burger" lytter efter klik
burger.addEventListener("click", burgerClick);
//"burgerClick" bliver kaldt
function burgerClick() {
  // burger får "active" klassen
  burger.classList.toggle("active");
  // nav får "active" klassen
  nav.classList.toggle("active");
}
// når menuen bliver lukket igen bliver "active" fjernet fra "burger" og "nav"
menu.addEventListener("click", menuClick);
function menuClick() {
  burger.classList.remove("active");
  nav.classList.remove("active");
}
