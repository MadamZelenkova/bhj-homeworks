const linksToTooltips = document.querySelectorAll(".has-tooltip");

linksToTooltips.forEach(element => {
  let tooltipElement = element.nextElementSibling;
  if (!tooltipElement || !tooltipElement.classList.contains("tooltip")) {
    tooltipElement = document.createElement("div");
    tooltipElement.className = "tooltip";
    tooltipElement.textContent = element.title;

    tooltipElement.style.left = 0;
    tooltipElement.style.top = 0;
    element.insertAdjacentHTML("afterend", tooltipElement.outerHTML);
  }
});

const allElements = document.querySelectorAll(".tooltip");

linksToTooltips.forEach(element => {
  element.addEventListener("click", function (event) {
    event.preventDefault();

    allElements.forEach(e => {
      if (e !== element.nextElementSibling) {
        e.classList.remove("tooltip_active");
      }
    });

    let tooltipElement = element.nextElementSibling;
    tooltipElement.classList.toggle("tooltip_active");

    let { top, left } = element.getBoundingClientRect();
    tooltipElement.style.left = `${left}px`;
    tooltipElement.style.top = `${top + 20}px`;
  });
});
