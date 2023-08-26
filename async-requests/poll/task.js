const questionTitle = document.querySelector(".poll__title");
const responses = document.getElementById("poll__answers");

let xhr = new XMLHttpRequest();
xhr.open("GET", "https://students.netoservices.ru/nestjs-backend/poll");
xhr.send();

xhr.addEventListener("readystatechange", () => {
  if (xhr.readyState === xhr.DONE && xhr.status == 200) {
    const dataQuestions = JSON.parse(xhr.responseText);

    questionTitle.textContent = dataQuestions.data.title;
    const allAnswers = dataQuestions.data.answers;

    allAnswers.forEach((answer) => {
      const btn = document.createElement("button");
      btn.className = "poll__answer";
      btn.textContent = answer;

      responses.appendChild(btn);

      btn.onclick = function () {
        alert("Cпасибо, ваш голос засчитан!");
        location.reload();
      };
    });
  }
});
