const form = document.getElementById("signin__form");
const signinField = document.querySelector(".signin");
const user = document.getElementById("user_id");
const welcomMessage = document.querySelector(".welcome");
const card = document.querySelector(".card");

const exitBtn = document.createElement("button");
exitBtn.classList.add("exit");
exitBtn.textContent = "Выход";
card.appendChild(exitBtn);

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const formData = new FormData(form);
  const xhr = new XMLHttpRequest();
  xhr.open("POST", "https://students.netoservices.ru/nestjs-backend/auth");

  xhr.addEventListener("load", function () {
    try {
      const jsonResponse = JSON.parse(xhr.response);

      if (jsonResponse.success === true) {
        signinField.classList.remove("signin_active");
        user.textContent = jsonResponse.user_id;
        welcomMessage.classList.add("welcome_active");
        exitBtn.classList.add("exit_active");

        exitBtn.onclick = function () {
          welcomMessage.classList.remove("welcome_active");
          signinField.classList.add("signin_active");
        };
        form.reset();
      }

      if (jsonResponse.success === false) {
        alert("Ошибка авторизации");
        form.reset();
      }
    } catch {
      return null;
    }
  });
  xhr.send(formData);
});
