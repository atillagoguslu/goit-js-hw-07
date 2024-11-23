function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function destoryAllBoxs() {
  tumKutu.innerHTML = "";
}

function createBoxes(amount) {
  destoryAllBoxs();
  let initialSize = 30;
  for (let i = 1; i <= amount; i++) {
    const kutu = document.createElement("div");
    kutu.style.width = `${initialSize}px`;
    kutu.style.height = `${initialSize}px`;
    kutu.style.backgroundColor = getRandomHexColor();
    tumKutu.appendChild(kutu);
    initialSize += 10;
  }
}

// Sellectors
const controls = document.querySelector("#controls");
const inputNumber = document.querySelector("#inputNumber");
const createButton = document.querySelector("[data-create]");
const destroyButton = document.querySelector("[data-destroy]");
const tumKutu = document.querySelector("#boxes");

// Eventlerin handlerları
function createHandler() {
  const amount = parseInt(inputNumber.value, 10);
  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
    inputNumber.value = "";
  }
}
function destroyHandler() {
  destoryAllBoxs();
}

// Event eklemeleri
createButton.addEventListener("click", createHandler);
destroyButton.addEventListener("click", destroyHandler);
