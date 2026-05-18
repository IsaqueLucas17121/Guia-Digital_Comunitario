let sentinela = document.getElementById("sentinela");
let cabecario = document.querySelector(".cabecario");
let voltar = document.querySelector(".seta");
let rolar = document.querySelectorAll(".icone");
let barra = document.querySelector(".barra");

let lista = [
  ".peru_fundo_img",
  ".italia_fundo_img",
  ".brasil_fundo_img",
  ".china_fundo_img",
  ".jordania_fundo_img",
  ".india_fundo_img",
  ".mexico_fundo_img",
];

rolar.forEach((roll, index) => {
  roll.addEventListener("click", () => {
    let alvo = document.querySelector(lista[index]);

    if (alvo) {
      alvo.scrollIntoView({
        behavior: "smooth",
      });
    }
  });
});

voltar.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

const observerEle = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("ligado");
    } else {
      entry.target.classList.remove("ligado");
    }
  });
});

for (let i = 1; i <= 4; i++) {
  const elemento = document.getElementById(`elemento${i}`);

  observerEle.observe(elemento);
}

const observerTop = new IntersectionObserver((entries) => {
  (entries.forEach((entry) => {
    if (entry.isIntersecting) {
      cabecario.classList.remove("ativo");
    } else {
      cabecario.classList.add("ativo");
    }
  }),
    {
      threshold: 0.1,
    });
});

observerTop.observe(sentinela);

barra.addEventListener("click", () => {
  cabecario.classList.add("block");
});
