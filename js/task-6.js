const element = document.querySelector("p"); 
element.style.display = "none";

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector("#controls input");
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const boxes = document.querySelector("#boxes");

function createBoxes(amount) {
  let size = 30;

  for (let i = 0; i < amount; i++) {
    const div = document.createElement("div");

    div.style.width = `${size}px`;
    div.style.height = `${size}px`;
    div.style.backgroundColor = getRandomHexColor();

    boxes.appendChild(div);

    size += 10;
  }
}

function destroyBoxes() {
  boxes.innerHTML = "";
}

createBtn.addEventListener("click", () => {
  const amount = Number(input.value);

  if (amount < 1 || amount > 100) return;

  destroyBoxes();
  createBoxes(amount);

  input.value = "";
});

destroyBtn.addEventListener("click", () => {
  destroyBoxes();
});