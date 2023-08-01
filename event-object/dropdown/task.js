const dropdown = document.querySelectorAll(".dropdown");
const dropdownList = document.querySelector(".dropdown__list");
const dropdownPoints = document.querySelectorAll(".dropdown__item");
const dropdownValue = document.querySelector(".dropdown__value");

function toggleDropdown() {
  dropdownList.classList.toggle("dropdown__list_active");
}

dropdown.forEach(item => {
  item.addEventListener("click", toggleDropdown);
});

for(let i = 0; i < dropdownPoints.length; i++) {
  dropdownPoints[i].addEventListener("click", function(event) {
    event.preventDefault();
    dropdownValue.textContent = this.textContent;
  });
}
