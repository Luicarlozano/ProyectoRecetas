const fondo = document.querySelector("body");
const form = document.querySelector("form");
const prinText = document.querySelector("form h1");
const formText = document.querySelectorAll("label");
const imgMode = document.querySelector("#imagen");

imgMode.addEventListener("click", () => {
  fondo.classList.toggle("dark-body");
  form.classList.toggle("dark-form");
  for (label of formText) {
    label.classList.toggle("whiteLabel");
  }
  prinText.classList.toggle("whiteH1");
});
