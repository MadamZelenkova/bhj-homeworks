const tabs = document.querySelectorAll(".tab");
const content = document.querySelectorAll(".tab__content");

for (let i = 0; i < tabs.length; i++) {
  tabs[i].addEventListener("click", () => {
    for (let j = 0; j < tabs.length; j++) {
      tabs[j].classList.remove("tab_active");
      content[j].classList.remove("tab__content_active");
    }

    tabs[i].classList.add("tab_active");
    content[i].classList.add("tab__content_active");
  });
}
