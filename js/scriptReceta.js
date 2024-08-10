const fondo = document.querySelector("body");
const imgMode = document.querySelector("#imagen");
const mainReceta = document.querySelector("main");
const titleReceta = document.querySelector("h1");
const subtitleReceta = document.querySelectorAll("h2");
const subtitle2Receta = document.querySelectorAll(".pb");
const contenedores = document.querySelectorAll("article");

imgMode.addEventListener("click", () => {
  fondo.classList.toggle("dark-body");
  for (cont of contenedores) {
    cont.classList.toggle("dark-contener");
  }
  mainReceta.classList.toggle("dark-contener");
  titleReceta.classList.toggle("dark-text");
  for (sub of subtitleReceta) {
    sub.classList.toggle("dark-text");
  }
  for (sub of subtitle2Receta) {
    sub.classList.toggle("dark-text");
  }
  tableIng.classList.toggle("dark-table");
  for (td of tdIng) {
    td.classList.toggle("dark-table");
  }
});
