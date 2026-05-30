import RECIPES from "./recipes.js";

const container = document.getElementById("recipeContainer");
const searchInput = document.getElementById("searchInput");
const modal = document.getElementById("recipeModal");
const modalBody = document.getElementById("modalBody");
const closeModal = document.getElementById("closeModal");

let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

// DISPLAY RECIPES
function displayRecipes(data) {
  container.innerHTML = data.map(recipe => `
    <div class="card">
      <img src="${recipe.image}" width="100%">
      <h3>${recipe.name}</h3>
      <p>${recipe.category}</p>

      <button onclick="viewRecipe(${recipe.id})">View</button>
      <button onclick="toggleFavorite(${recipe.id})">
        ${favorites.includes(recipe.id) ? "💔 Remove" : "❤️ Favorite"}
      </button>
    </div>
  `).join("");
}

// VIEW RECIPE MODAL
window.viewRecipe = (id) => {
  const recipe = RECIPES.find(r => r.id === id);

  modalBody.innerHTML = `
    <h2>${recipe.name}</h2>
    <p><b>Category:</b> ${recipe.category}</p>
    <p><b>Prep:</b> ${recipe.prepTime} min</p>
    <p><b>Cook:</b> ${recipe.cookTime} min</p>

    <h3>Ingredients</h3>
    <ul>${recipe.ingredients.map(i => `<li>${i}</li>`).join("")}</ul>

    <h3>Steps</h3>
    <ol>${recipe.instructions.map(i => `<li>${i}</li>`).join("")}</ol>
  `;

  modal.classList.remove("hidden");
};

// CLOSE MODAL
closeModal.onclick = () => modal.classList.add("hidden");

// FAVORITES
window.toggleFavorite = (id) => {
  if (favorites.includes(id)) {
    favorites = favorites.filter(f => f !== id);
  } else {
    favorites.push(id);
  }

  localStorage.setItem("favorites", JSON.stringify(favorites));
  displayRecipes(RECIPES);
};

// SEARCH
searchInput.addEventListener("input", (e) => {
  const filtered = RECIPES.filter(r =>
    r.name.toLowerCase().includes(e.target.value.toLowerCase())
  );

  displayRecipes(filtered);
});

// INIT
displayRecipes(RECIPES);
