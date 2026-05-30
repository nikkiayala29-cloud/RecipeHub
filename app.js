let favorites = JSON.parse(localStorage.getItem("fav")) || [];
let mealPlan = JSON.parse(localStorage.getItem("meal")) || {};

const sections = {
  home: document.getElementById("home"),
  recipes: document.getElementById("recipes"),
  favorites: document.getElementById("favorites"),
  planner: document.getElementById("planner")
};

// NAVIGATION
function showPage(page) {
  Object.values(sections).forEach(s => s.classList.remove("active"));
  sections[page].classList.add("active");

  if (page === "recipes") renderRecipes(RECIPES);
  if (page === "favorites") renderFavorites();
  if (page === "planner") renderPlanner();
}

// RENDER RECIPES
function renderRecipes(list) {
  const container = document.getElementById("recipeList");
  container.innerHTML = "";

  list.forEach(r => {
    container.innerHTML += `
      <div class="card">
        <img src="${r.image}">
        <h3>${r.name}</h3>
        <p>${r.category}</p>

        <button class="btn" onclick="toggleFav(${r.id})">
          ${favorites.includes(r.id) ? "♥" : "♡"}
        </button>

        <button class="btn" onclick="addMeal(${r.id})">
          + Meal Plan
        </button>
      </div>
    `;
  });
}

// FAVORITES
function toggleFav(id) {
  favorites = favorites.includes(id)
    ? favorites.filter(f => f !== id)
    : [...favorites, id];

  localStorage.setItem("fav", JSON.stringify(favorites));
  renderRecipes(RECIPES);
}

// FAVORITES PAGE
function renderFavorites() {
  const favList = RECIPES.filter(r => favorites.includes(r.id));
  renderRecipes(favList);
}

// MEAL PLANNER
function addMeal(id) {
  const day = prompt("Enter day (Mon-Sun):");
  if (!mealPlan[day]) mealPlan[day] = [];
  mealPlan[day].push(id);

  localStorage.setItem("meal", JSON.stringify(mealPlan));
  alert("Added to meal plan!");
}

// RENDER PLANNER
function renderPlanner() {
  const container = document.getElementById("plannerList");
  container.innerHTML = "";

  for (let day in mealPlan) {
    container.innerHTML += `<h3>${day}</h3>`;

    mealPlan[day].forEach(id => {
      const r = RECIPES.find(x => x.id === id);
      container.innerHTML += `<p>🍽 ${r.name}</p>`;
    });
  }
}

// SEARCH
function searchRecipes(val) {
  const filtered = RECIPES.filter(r =>
    r.name.toLowerCase().includes(val.toLowerCase())
  );
  renderRecipes(filtered);
}

// INIT
showPage("home");
