const container = document.getElementById("container");
const search = document.getElementById("search");
const modal = document.getElementById("modal");
const modalContent = document.getElementById("modalContent");

let favorites = JSON.parse(localStorage.getItem("fav")) || [];

// RENDER
function render(data) {
  container.innerHTML = "";

  data.forEach(r => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <img src="${r.image}">
      <div class="card-body">
        <h3>${r.name}</h3>
        <p>${r.time}</p>
        <button class="btn" onclick="openRecipe(${r.id})">View</button>
        <button class="btn" onclick="toggleFav(${r.id})">
          ${favorites.includes(r.id) ? "♥" : "♡"}
        </button>
      </div>
    `;

    container.appendChild(card);
  });
}

// OPEN RECIPE
window.openRecipe = (id) => {
  const r = RECIPES.find(x => x.id === id);

  modal.style.display = "flex";
  modalContent.innerHTML = `
    <h2>${r.name}</h2>
    <img src="${r.image}" style="width:100%; border-radius:10px;">
    <p>${r.desc}</p>

    <h4>Ingredients</h4>
    <ul>${r.ingredients.map(i => `<li>${i}</li>`).join("")}</ul>

    <h4>Steps</h4>
    <ol>${r.steps.map(s => `<li>${s}</li>`).join("")}</ol>
  `;
};

// CLOSE MODAL
window.onclick = (e) => {
  if (e.target == modal) modal.style.display = "none";
};

// FAVORITES
window.toggleFav = (id) => {
  if (favorites.includes(id)) {
    favorites = favorites.filter(f => f !== id);
  } else {
    favorites.push(id);
  }

  localStorage.setItem("fav", JSON.stringify(favorites));
  render(RECIPES);
};

// SEARCH
search.addEventListener("input", e => {
  const filtered = RECIPES.filter(r =>
    r.name.toLowerCase().includes(e.target.value.toLowerCase())
  );
  render(filtered);
});

// INIT
render(RECIPES);
