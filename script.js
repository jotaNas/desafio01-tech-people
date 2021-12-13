const target = document.querySelectorAll("[data-anime]");
const animationClass = "animated";

function animeScroll() {
  const windowTop = window.scrollY + (window.innerHeight * 3.5) / 4;

  target.forEach((element) => {
    if (windowTop > element.offsetTop) {
      element.classList.add(animationClass);
    } else {
      element.classList.remove(animationClass);
    }
  });
}

window.addEventListener("scroll", () => animeScroll());

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".social-media");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".social-media").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  })
);
