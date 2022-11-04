const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsEl = document.querySelector("#ingredients");

for (const ingredient of ingredients) {
  const nawTag = document.createElement("li");
  nawTag.classList.add("item");
  nawTag.textContent = ingredient;
  ingredientsEl.append(nawTag);
}
