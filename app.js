// =============================
// SCREEN NAVIGATION
// =============================

const screens = document.querySelectorAll(".screen");
const navButtons = document.querySelectorAll(".bottom-nav button");

navButtons.forEach(button => {

  button.addEventListener("click", () => {

    const target = button.dataset.screen;

    screens.forEach(screen => {
      screen.classList.remove("active");
    });

    document
      .getElementById(target)
      .classList.add("active");

  });

});

// =============================
// FAVORITES
// =============================

let favorites =
JSON.parse(
localStorage.getItem("favorites")
) || [];

function saveFavorites(){

  localStorage.setItem(
    "favorites",
    JSON.stringify(favorites)
  );

}

// =============================
// HOME RECIPES
// =============================

const homeRecipes =
document.getElementById("homeRecipes");

function renderHomeRecipes(){

  homeRecipes.innerHTML = "";

  const featured =
  recipes.slice(0,6);

  featured.forEach(recipe => {

    const card =
    createRecipeCard(recipe);

    homeRecipes.appendChild(card);

  });

}

// =============================
// ALL RECIPES
// =============================

const recipeGrid =
document.getElementById("recipeGrid");

const recipeCount =
document.getElementById("recipeCount");

function renderRecipes(recipeList){

  recipeGrid.innerHTML = "";

  recipeCount.textContent =
  `${recipeList.length} recipes available`;

  recipeList.forEach(recipe => {

    const card =
    createRecipeCard(recipe);

    recipeGrid.appendChild(card);

  });

}

// =============================
// RECIPE CARD
// =============================

function createRecipeCard(recipe){

  const card =
  document.createElement("div");

  card.className =
  "recipe-card";

  card.innerHTML = `

  <img
  src="${recipe.image}"
  alt="${recipe.name}">

  <div class="recipe-info">

    <h3>${recipe.name}</h3>

    <p class="recipe-description">
      ${recipe.description}
    </p>

    <div class="recipe-meta">

      <span>
        ⏱ ${recipe.cookTime}
      </span>

      <span>
        ⭐ ${recipe.rating}
      </span>

      <span>
        🔥 ${recipe.calories} cal
      </span>

    </div>

    <span class="recipe-tag">
      ${recipe.category}
    </span>

  </div>

  `;

  card.addEventListener(
    "click",
    () => openRecipe(recipe)
  );

  return card;

}

// =============================
// SEARCH
// =============================

const searchInput =
document.getElementById("searchInput");

const recipeSearch =
document.getElementById("recipeSearch");

function searchRecipes(text){

  const filtered =
  recipes.filter(recipe =>

    recipe.name
    .toLowerCase()
    .includes(
      text.toLowerCase()
    )

  );

  renderRecipes(filtered);

}

if(searchInput){

  searchInput.addEventListener(
    "input",
    e => {

      searchRecipes(
        e.target.value
      );

    }
  );

}

if(recipeSearch){

  recipeSearch.addEventListener(
    "input",
    e => {

      searchRecipes(
        e.target.value
      );

    }
  );

}

// =============================
// CATEGORY FILTERS
// =============================

const chips =
document.querySelectorAll(".chip");

chips.forEach(chip => {

  chip.addEventListener(
    "click",
    () => {

      chips.forEach(c =>
        c.classList.remove(
          "active-chip"
        )
      );

      chip.classList.add(
        "active-chip"
      );

      const category =
      chip.textContent;

      if(category === "All"){

        renderRecipes(recipes);

        return;
      }

      const filtered =
      recipes.filter(recipe =>
        recipe.category === category
      );

      renderRecipes(filtered);

    }
  );

});

// =============================
// FAVORITES PAGE
// =============================

const favoritesGrid =
document.getElementById(
"favoritesGrid"
);

function renderFavorites(){

  favoritesGrid.innerHTML = "";

  if(favorites.length === 0){

    favoritesGrid.innerHTML =
    "<p>No favorites yet.</p>";

    return;

  }

  favorites.forEach(recipe => {

    const card =
    createRecipeCard(recipe);

    favoritesGrid.appendChild(card);

  });

}

// =============================
// RECIPE MODAL
// =============================

function openRecipe(recipe){

  const exists =
  favorites.some(
    fav => fav.id === recipe.id
  );

  const action =
  exists
  ? "Already Saved ❤️"
  : "Add To Favorites ❤️";

  const modal =
  document.createElement("div");

  modal.className =
  "modal";

  modal.innerHTML = `

  <div class="modal-content">

    <span id="closeModal">
      ✕
    </span>

    <img
    src="${recipe.image}">

    <h2>${recipe.name}</h2>

    <div id="modalMeta">

      <span>
      ⏱ ${recipe.cookTime}
      </span>

      <span>
      ⭐ ${recipe.rating}
      </span>

      <span>
      🔥 ${recipe.calories}
      </span>

    </div>

    <h3>Ingredients</h3>

    <ul>

      ${recipe.ingredients
      .map(item =>
      `<li>${item}</li>`)
      .join("")}

    </ul>

    <h3>Instructions</h3>

    <ol>

      ${recipe.instructions
      .map(step =>
      `<li>${step}</li>`)
      .join("")}

    </ol>

    <button
    id="favoriteBtn">

      ${action}

    </button>

  </div>

  `;

  document.body.appendChild(
    modal
  );

  modal
  .querySelector("#closeModal")
  .onclick = () =>
  modal.remove();

  modal
  .querySelector("#favoriteBtn")
  .onclick = () => {

    const alreadyExists =
    favorites.some(
      fav => fav.id === recipe.id
    );

    if(alreadyExists){

      return;

    }

    favorites.push(recipe);

    saveFavorites();

    renderFavorites();

    modal.remove();

    alert(
      "Recipe added to favorites!"
    );

  };

}

// =============================
// WEEKLY PLANNER
// =============================

const planner =
document.getElementById(
"weeklyPlanner"
);

const weekDays = [

"Monday",
"Tuesday",
"Wednesday",
"Thursday",
"Friday",
"Saturday",
"Sunday"

];

function renderPlanner(){

  planner.innerHTML = "";

  weekDays.forEach(day => {

    const card =
    document.createElement("div");

    card.className =
    "day-card";

    card.innerHTML = `

    <h3>${day}</h3>

    <div class="meal-slot">
      Breakfast
    </div>

    <div class="meal-slot">
      Lunch
    </div>

    <div class="meal-slot">
      Dinner
    </div>

    `;

    planner.appendChild(card);

  });

}

// =============================
// SHOPPING LIST
// =============================

const shoppingInput =
document.getElementById(
"shoppingInput"
);

const shoppingList =
document.getElementById(
"shoppingList"
);

const addItemBtn =
document.getElementById(
"addItemBtn"
);

let shoppingItems =
JSON.parse(
localStorage.getItem(
"shoppingItems"
)
) || [];

function saveShopping(){

  localStorage.setItem(
    "shoppingItems",
    JSON.stringify(
      shoppingItems
    )
  );

}

function renderShopping(){

  shoppingList.innerHTML = "";

  shoppingItems.forEach(
    item => {

      const li =
      document.createElement("li");

      li.textContent =
      item;

      shoppingList.appendChild(
        li
      );

    }
  );

}

addItemBtn.addEventListener(
"click",
() => {

  const value =
  shoppingInput.value.trim();

  if(!value) return;

  shoppingItems.push(value);

  saveShopping();

  renderShopping();

  shoppingInput.value = "";

}
);

// =============================
// INITIALIZE
// =============================

renderHomeRecipes();

renderRecipes(recipes);

renderFavorites();

renderPlanner();

renderShopping();
