const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsEl = document.createElement("li");
ingredients.forEach((ingredientsEl) => {
  console.log(ingredientsEl);
});

ingredientsEl.classList.add("item");

document.querySelector("ul#ingredients").append(ingredients);

console.log(ingredientsEl);
