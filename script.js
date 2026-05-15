let cabecario = document.querySelector(".cabecario");

window.addEventListener("scroll", () => {
  let tela = window.scrollY;

  if (tela > 132) {
    cabecario.classList.add("seguir");
  } else {
    cabecario.classList.remove("seguir");
  }
});
