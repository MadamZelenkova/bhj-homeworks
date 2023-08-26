const form = document.getElementById("form");
const fileInput = document.getElementById("file");
const progress = document.getElementById("progress");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(form);

  let xhr = new XMLHttpRequest();
  xhr.open("POST", "https://students.netoservices.ru/nestjs-backend/upload");

  xhr.upload.addEventListener("progress", (event) => {
    console.log(event.loaded / event.total);
    const percentLoaded = event.loaded / event.total;
    progress.value = percentLoaded;
  });

  xhr.addEventListener("load", function () {
    progress.value = 1.0;
    alert("Файл успешно загружен");
  });

  xhr.send(formData);
});
