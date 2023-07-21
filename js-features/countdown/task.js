const elementTimer = document.getElementById("timer");
let seconds = +elementTimer.textContent;
console.log(seconds);
let hours = 0;
let minutes = 0;

let formatTime = function (hours, minutes, seconds) {
  return `${hours < 10 ? "0" + hours : hours}:${
    minutes < 10 ? "0" + minutes : minutes
  }:${seconds < 10 ? "0" + seconds : seconds}`;
};
const intervalId = setInterval(function () {
  seconds -= 1;
  elementTimer.textContent = formatTime(hours, minutes, seconds);
  if (seconds < 0) {
    minutes -= 1;
    seconds = 59;
    if (minutes < 0) {
      hours -= 1;
      minutes = 59;
    }
  }
  if (formatTime(hours, minutes, seconds) === "00:00:00") {
   alert("Вы победили в конкурсе!");
    clearInterval(intervalId);
  }
}, 1000);