// ======================
// PAGE NAVIGATION
// ======================

const pages = document.querySelectorAll(".page");
const navButtons = document.querySelectorAll(".nav-btn");

navButtons.forEach(button => {
  button.addEventListener("click", () => {
    const target = button.dataset.section;

    pages.forEach(page => page.classList.remove("active"));

    document
      .getElementById(target)
      .classList.add("active");
  });
});

// ======================
// DARK MODE
// ======================

const darkModeBtn = document.getElementById("darkModeBtn");

if(localStorage.getItem("theme") === "dark"){
  document.body.classList.add("dark");
}

darkModeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  if(document.body.classList.contains("dark")){
    localStorage.setItem("theme", "dark");
  }else{
    localStorage.setItem("theme", "light");
  }
});

// ======================
// RECIPE ELEMENTS
// ======================

const recipeContainer =
  document.getElementById("recipeContainer");

const favoritesContainer =
  document.getElementById("favoritesContainer");

const categoryFilter =
  document.getElementById("categoryFilter");

const searchInput =
  document.getElementById("searchInput");

// ======================
// FAVORITES
// ======================

let favorites =
  JSON.parse(
    localStorage.getItem("favorites")
  ) || [];

// ======================
// RECIPE DISPLAY
// ======================

function displayRecipes(recipeList){

  recipeContainer.innerHTML = "";

  recipeList.forEach(recipe => {

    const card = document.createElement("div");

    card.className = "recipe-card";

    card.innerHTML = `
      <img src="${recipe.image}" alt="${recipe.name}">

      <div class="recipe-content">

        <h3>${recipe.name}</h3>

        <div class="recipe-meta">
          <span>🔥 ${recipe.calories} kcal</span>
          <span>⏱ ${recipe.cookTime}</span>
        </div>

        <span class="recipe-category">
          ${recipe.category}
        </span>

      </div>
    `;

    card.addEventListener("click", () => {
      openRecipeModal(recipe);
    });

    recipeContainer.appendChild(card);

  });

}

// ======================
// MODAL
// ======================

const modal =
  document.getElementById("recipeModal");

const closeModal =
  document.getElementById("closeModal");

const modalImage =
  document.getElementById("modalImage");

const modalTitle =
  document.getElementById("modalTitle");

const modalMeta =
  document.getElementById("modalMeta");

const modalIngredients =
  document.getElementById("modalIngredients");

const modalInstructions =
  document.getElementById("modalInstructions");

const favoriteBtn =
  document.getElementById("favoriteBtn");

function openRecipeModal(recipe){

  modal.classList.remove("hidden");

  modalImage.src = recipe.image;

  modalTitle.textContent = recipe.name;

  modalMeta.innerHTML = `
    <span>🔥 ${recipe.calories} kcal</span>
    <span>⏱ ${recipe.cookTime}</span>
    <span>🍽 ${recipe.servings} servings</span>
    <span>🥣 ${recipe.category}</span>
  `;

  modalIngredients.innerHTML = "";

  recipe.ingredients.forEach(item => {

    const li = document.createElement("li");
    li.textContent = item;

    modalIngredients.appendChild(li);

  });

  modalInstructions.innerHTML = "";

  recipe.instructions.forEach(step => {

    const li = document.createElement("li");
    li.textContent = step;

    modalInstructions.appendChild(li);

  });

  favoriteBtn.onclick = () => {
    addToFavorites(recipe);
  };

}

closeModal.addEventListener("click", () => {
  modal.classList.add("hidden");
});

window.addEventListener("click", e => {
  if(e.target === modal){
    modal.classList.add("hidden");
  }
});

// ======================
// FAVORITES SYSTEM
// ======================

function addToFavorites(recipe){

  const exists = favorites.some(
    fav => fav.id === recipe.id
  );

  if(exists){
    alert("Recipe already in favorites.");
    return;
  }

  favorites.push(recipe);

  localStorage.setItem(
    "favorites",
    JSON.stringify(favorites)
  );

  displayFavorites();

  alert("Added to favorites.");
}

function displayFavorites(){

  favoritesContainer.innerHTML = "";

  if(favorites.length === 0){

    favoritesContainer.innerHTML =
      "<p>No favorite recipes yet.</p>";

    return;
  }

  favorites.forEach(recipe => {

    const card = document.createElement("div");

    card.className = "recipe-card";

    card.innerHTML = `
      <img src="${recipe.image}" alt="${recipe.name}">

      <div class="recipe-content">
        <h3>${recipe.name}</h3>
        <span class="recipe-category">
          ${recipe.category}
        </span>
      </div>
    `;

    card.addEventListener("click", () => {
      openRecipeModal(recipe);
    });

    favoritesContainer.appendChild(card);

  });

}

// ======================
// SEARCH
// ======================

searchInput.addEventListener("input", filterRecipes);

// ======================
// CATEGORY FILTER
// ======================

categoryFilter.addEventListener(
  "change",
  filterRecipes
);

function filterRecipes(){

  let filtered = [...recipes];

  const category =
    categoryFilter.value;

  const search =
    searchInput.value.toLowerCase();

  if(category !== "All"){

    filtered = filtered.filter(
      recipe =>
      recipe.category === category
    );

  }

  if(search){

    filtered = filtered.filter(recipe =>
      recipe.name
      .toLowerCase()
      .includes(search)
    );

  }

  displayRecipes(filtered);

}

// ======================
// MEAL PLANNER
// ======================

const breakfastSelect =
  document.getElementById("breakfastSelect");

const lunchSelect =
  document.getElementById("lunchSelect");

const dinnerSelect =
  document.getElementById("dinnerSelect");

const saveMealPlan =
  document.getElementById("saveMealPlan");

function populateMealPlanner(){

  [
    breakfastSelect,
    lunchSelect,
    dinnerSelect
  ].forEach(select => {

    select.innerHTML =
      "<option value=''>Select Recipe</option>";

    recipes.forEach(recipe => {

      const option =
        document.createElement("option");

      option.value = recipe.name;
      option.textContent = recipe.name;

      select.appendChild(option);

    });

  });

}

saveMealPlan.addEventListener(
  "click",
  () => {

    const mealPlan = {
      breakfast:
        breakfastSelect.value,
      lunch:
        lunchSelect.value,
      dinner:
        dinnerSelect.value
    };

    localStorage.setItem(
      "mealPlan",
      JSON.stringify(mealPlan)
    );

    alert("Meal plan saved.");

  }
);

function loadMealPlan(){

  const saved =
    JSON.parse(
      localStorage.getItem("mealPlan")
    );

  if(!saved) return;

  breakfastSelect.value =
    saved.breakfast || "";

  lunchSelect.value =
    saved.lunch || "";

  dinnerSelect.value =
    saved.dinner || "";

}

// ======================
// SHOPPING LIST
// ======================

const shoppingInput =
  document.getElementById("shoppingInput");

const addShoppingItem =
  document.getElementById("addShoppingItem");

const shoppingList =
  document.getElementById("shoppingList");

let shoppingItems =
  JSON.parse(
    localStorage.getItem("shoppingItems")
  ) || [];

function renderShoppingList(){

  shoppingList.innerHTML = "";

  shoppingItems.forEach((item,index) => {

    const li =
      document.createElement("li");

    li.innerHTML = `
      ${item}
      <button onclick="removeShoppingItem(${index})">
        ❌
      </button>
    `;

    shoppingList.appendChild(li);

  });

}

addShoppingItem.addEventListener(
  "click",
  () => {

    const value =
      shoppingInput.value.trim();

    if(!value) return;

    shoppingItems.push(value);

    localStorage.setItem(
      "shoppingItems",
      JSON.stringify(shoppingItems)
    );

    shoppingInput.value = "";

    renderShoppingList();

  }
);

function removeShoppingItem(index){

  shoppingItems.splice(index,1);

  localStorage.setItem(
    "shoppingItems",
    JSON.stringify(shoppingItems)
  );

  renderShoppingList();

}

window.removeShoppingItem =
  removeShoppingItem;

// ======================
// INITIALIZE
// ======================

displayRecipes(recipes);
displayFavorites();
populateMealPlanner();
loadMealPlan();
renderShoppingList();
