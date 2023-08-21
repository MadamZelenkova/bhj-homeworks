const tasksList = document.querySelector(".tasks__list");
const textField = document.querySelector(".tasks__input");
const form = document.querySelector(".tasks__control");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  if (textField.value) {
    const point = document.createElement("div");
    point.className = "task";

    const taskName = document.createElement("div");
    taskName.className = "task__title";

    console.log(textField.checkValidity());

    taskName.append(textField.value);

    const deleteBtn = document.createElement("a");
    deleteBtn.href = "#";
    deleteBtn.className = "task__remove";
    deleteBtn.innerHTML = "&times;";

    point.appendChild(taskName);
    point.appendChild(deleteBtn);
    document.querySelector(".tasks__list").appendChild(point);
    form.reset();

    deleteBtn.onclick = function () {
      point.remove();
    };
  }
});


