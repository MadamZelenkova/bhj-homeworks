const field = document.getElementById("editor");

const savedText = localStorage.getItem("textValue");
const elementForBtn = document.querySelector(".card");

const createBtn = function () {
  const btn = document.createElement("button");
  btn.className = "deleteText";
  btn.textContent = "Clear";
  elementForBtn.appendChild(btn);

  btn.onclick = function () {
    field.value = "";
    localStorage.clear();
  };
};

if (savedText) {
  field.value = savedText;
  createBtn();
}

field.addEventListener("input", function () {
  const text = field.value;

  localStorage.setItem("textValue", text);

  if (field.value && !field.nextElementSibling) {
    createBtn();
  }
});








