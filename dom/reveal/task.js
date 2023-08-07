const textBlocks = document.querySelectorAll(".reveal");

textBlocks.forEach((element) => {
  window.addEventListener("scroll", function () {
    const { top, bottom } = element.getBoundingClientRect();

    if (top < window.innerHeight && bottom > 0) {
      element.classList.add("reveal_active");
    } else {
      element.classList.remove("reveal_active");
    }
  });
});
