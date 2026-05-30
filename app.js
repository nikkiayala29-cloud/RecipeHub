const container = document.getElementById("recipeContainer");

// fallback dataset (prevents blank screen)
let RECIPES = window.RECIPES || [];

function renderRecipes(list) {
  container.innerHTML = "";

  list.forEach(recipe => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <img src="${recipe.image}" onerror="this.src='https://source.unsplash.com/600x400/?food'">
      <h3>${recipe.name}</h3>
      <p>${recipe.category}</p>
      <small>${recipe.time}</small>
    `;

    container.appendChild(card);
  });
}

// INIT (VERY IMPORTANT)
window.onload = () => {
  renderRecipes(RECIPES);
};
