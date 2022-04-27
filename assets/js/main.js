const btnMenu = document.getElementById("btn-menu");
const menu = document.getElementById("menu");
const list = document.getElementById("list");

btnMenu.addEventListener("click", function () {
  btnMenu.classList.toggle("is-active");
  menu.classList.toggle("is-active");
});

list.addEventListener("click", function () {
  btnMenu.classList.toggle("btn-menu");
  menu.classList.toggle("menu");
});
