const textBlock = document.querySelector(".reveal");

function checkVisibility() {
  const { top, bottom  } = textBlock.getBoundingClientRect();
  
  if(top < window.innerHeight && bottom > 0) {
    textBlock.classList.add("reveal_active");
  } else {
    textBlock.classList.remove("reveal_active");
  }
}

checkVisibility();

window.addEventListener("scroll", checkVisibility);
