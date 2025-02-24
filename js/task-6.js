function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  if (amount < 1 || amount > 100) return;

  const boxesContainer = document.getElementById("boxes");
  boxesContainer.innerHTML = ""; // Очищаем контейнер перед добавлением новых элементов

  const fragment = document.createDocumentFragment(); // Используем DocumentFragment для оптимизации

  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    const size = 30 + i * 10;
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    box.style.margin = "5px";

    fragment.appendChild(box);
  }

  boxesContainer.appendChild(fragment);
}

function destroyBoxes() {
  document.getElementById("boxes").innerHTML = "";
}

const createButton = document.querySelector("[data-create]");
const destroyButton = document.querySelector("[data-destroy]");
const inputField = document.querySelector('input[type="number"]');

createButton.addEventListener("click", () => {
  const amount = parseInt(inputField.value, 10);

  if (isNaN(amount) || amount < 1 || amount > 100) {
    alert("Please enter a number between 1 and 100");
    return;
  }

  createBoxes(amount);
  inputField.value = "";
});

destroyButton.addEventListener("click", destroyBoxes);

// Без допомоги gpt не обійшлось, бо це завдання важкувате прям
