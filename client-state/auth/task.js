const form = document.getElementById("signin__form");
const signinField = document.querySelector(".signin");
const user = document.getElementById("user_id");
const welcomMessage = document.querySelector(".welcome");
const card = document.querySelector(".card");

const savedUser = localStorage.getItem("user");

const greetUser = function (userId) {
  signinField.classList.remove("signin_active");
  welcomMessage.classList.add("welcome_active");

  const exitBtn = document.createElement("button");
  exitBtn.classList.add("exit");
  exitBtn.textContent = "Выход";
  card.appendChild(exitBtn);
  exitBtn.classList.add("exit_active");

  exitBtn.onclick = function () {
    localStorage.removeItem("user");
    welcomMessage.classList.remove("welcome_active");
    signinField.classList.add("signin_active");
  };
  user.textContent = userId;
};

if (savedUser) {
  greetUser(savedUser);
}

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const formData = new FormData(form);
  const xhr = new XMLHttpRequest();
  xhr.open("POST", "https://students.netoservices.ru/nestjs-backend/auth");
  xhr.responseType = "json";

  xhr.addEventListener("load", function () {
    console.log(xhr.response);
    if (xhr.response.success === true) {
      greetUser();
      user.textContent = xhr.response.user_id;
      localStorage.setItem("user", xhr.response.user_id);

      form.reset();
    }

    if (xhr.response.success === false) {
      alert("Ошибка авторизации");
      form.reset();
    }
  });

  xhr.send(formData);
});
