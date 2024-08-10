const fondo = document.querySelector("body");
const cuadrosGrid = document.querySelectorAll(".cuadroReceta");
const titleReceta = document.querySelectorAll(".pb");
const h3Index = document.querySelector("h3");
const title2Receta = document.querySelectorAll(".h2");

const imgMode = document.querySelector("#imagen");

imgMode.addEventListener("click", () => {
  fondo.classList.toggle("dark-body");
  for (cuadro of cuadrosGrid) {
    cuadro.classList.toggle("dark-cuadro");
  }
  for (pb of titleReceta) {
    pb.classList.toggle("dark-text");
  }

  for (pb of title2Receta) {
    pb.classList.toggle("dark-text");
  }
  h3Index.classList.toggle("dark-text");
});
