const course = document.getElementById("items");
const animation = document.getElementById("loader");
const itemToRemove = document.querySelector(".item");
itemToRemove.remove();

let xhr = new XMLHttpRequest();
xhr.open("GET", "https://students.netoservices.ru/nestjs-backend/slow-get-courses");
xhr.send();

xhr.addEventListener("readystatechange", () => {
  if(xhr.readyState === xhr.DONE && xhr.status == 200) {
    animation.classList.remove("loader_active");

    const rateObject = JSON.parse(xhr.responseText);
    const rateData = Object.values(rateObject.response.Valute);
    console.log(rateData)

    rateData.forEach(element => {
      const currencyCode = document.createElement("div");
      currencyCode.className = "item__code";
      currencyCode.textContent = element.CharCode;

      const currencyValue = document.createElement("div");
      currencyValue.className = "item__value";
      currencyValue.textContent = element.Value;

      const currencyName = document.createElement("div");
      currencyName.className = "item__currency";
      currencyName.textContent = "руб.";

      const currencyConteiner = document.createElement("div");
      currencyConteiner.className = "item";

      currencyConteiner.appendChild(currencyCode);
      currencyConteiner.appendChild(currencyValue);
      currencyConteiner.appendChild(currencyName);
      
      course.appendChild(currencyConteiner);
    })
  }
})

