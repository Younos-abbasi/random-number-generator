const btn = document.getElementById("btn");
const number1 = document.getElementById("number1");
const number2 = document.getElementById("number2");
const number3 = document.getElementById("number3");

let min = 1;
let max = 6;

let randomNum1;
let randomNum2;
let randomNum3;

btn.onclick = () => {
  randomNum1 = Math.floor(Math.random() * max) + min;
  randomNum2 = Math.floor(Math.random() * max) + min;
  randomNum3 = Math.floor(Math.random() * max) + min;
  document.getElementById("number1").textContent = randomNum1;
  document.getElementById("number2").textContent = randomNum2;
  document.getElementById("number3").textContent = randomNum3;
};
