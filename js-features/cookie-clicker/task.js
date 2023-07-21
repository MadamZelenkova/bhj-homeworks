const cookieClick = document.getElementById('cookie');
const elementClick = document.getElementById('clicker__counter');
let amountClicks = +elementClick.textContent;
cookieClick.onclick = function() {
    amountClicks += 1;
    elementClick.textContent = amountClicks;
    cookieClick.width = 215;
    setTimeout(() => {cookieClick.width = 200},
     150);
}
