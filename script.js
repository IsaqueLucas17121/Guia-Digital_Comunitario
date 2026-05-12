const box = document.querySelector(".peru");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        box.classList.add("ligado");
      }
    });
  },
  {
    threshold: 0.5,
  },
);

observer.observe(box);
