const elementDead = document.getElementById("dead");
let successHit = +elementDead.textContent;
const elementLost = document.getElementById("lost");
let failHit = +elementLost.textContent;

getHole = (index) => document.getElementById(`hole${index}`);

for (let i = 1; i <= 9; i++) {
  let hole = getHole(i);
  hole.onclick = function () {
    if (hole.classList.contains("hole_has-mole")) {
      successHit += 1;
      elementDead.textContent = successHit;
    } else {
      failHit += 1;
      elementLost.textContent = failHit;
    }
    console.log(successHit);

    if (successHit === 10) {
      alert("Вы выиграли!");
      restartGame();
    }
    if (failHit === 5) {
      alert("Поражение");
      restartGame();
    }
  };
}

function restartGame() {
  failHit = 0;
  elementLost.textContent = failHit;
  successHit = 0;
  elementDead.textContent = successHit;
}