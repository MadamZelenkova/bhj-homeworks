const rotatorList = document.querySelectorAll(".rotator__case");

let i = 0;

function rotateText() {
  const dataSpeed = +rotatorList[i].getAttribute("data-speed");
  rotatorList[i].classList.remove("rotator__case_active");
  i = (i + 1) % rotatorList.length;
  rotatorList[i].classList.add("rotator__case_active");

  const color = rotatorList[i].getAttribute("data-color");
  rotatorList[i].style.color = color;
  clearInterval(setIntervalId);
  setIntervalId = setInterval(rotateText, dataSpeed);
}

let setIntervalId = setInterval(rotateText, +rotatorList[i].getAttribute("data-speed"));
