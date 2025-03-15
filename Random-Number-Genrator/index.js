const btn = document.getElementById("myBtn");
const label = document.getElementById("label");

const min=1;
const max=6;
let randomNumber=0;

btn.onclick = function () {
  randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  label.textContent = randomNumber;
};
