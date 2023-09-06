const popup = document.querySelector(".modal");
const closeBtn = document.querySelector(".modal__close");

if (!document.cookie) {
  popup.classList.add("modal_active");
}

closeBtn.addEventListener("click", function () {
  popup.classList.remove("modal_active");

  document.cookie = "popupWasOpened" + "=" + encodeURIComponent(true);
});
