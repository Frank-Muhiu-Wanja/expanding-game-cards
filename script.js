const slides = document.querySelectorAll(".slide");

slides.forEach((slide) => {
  slide.addEventListener("mouseover", () => {
    removeCurrentActives();
    slide.classList.add("active");
  });
});

function removeCurrentActives() {
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });
}
