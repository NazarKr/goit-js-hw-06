function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyColor = document.body;
const btnEl = bodyColor.querySelector(".change-color");
const spanEl = bodyColor.querySelector(".color");

btnEl.addEventListener("click", handleClick);

function handleClick() {
  bodyColor.style.backgroundColor = getRandomHexColor();
  spanEl.textContent = bodyColor.style.backgroundColor;
}
