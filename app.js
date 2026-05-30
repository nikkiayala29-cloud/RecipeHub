const container = document.getElementById("container");
const search = document.getElementById("search");

function render(list) {
  container.innerHTML = "";

  list.forEach(r => {
    container.innerHTML += `
      <div class="card">
        <img src="${r.image}">
        <div class="card-content">
          <h3>${r.name}</h3>
          <p>${r.desc}</p>

          <div class="meta">
            <span>⏱ ${r.time}</span>
            <span>⭐ ${r.rating}</span>
            <span>🔥 ${r.calories}</span>
          </div>
        </div>
      </div>
    `;
  });
}

// SEARCH
search.addEventListener("input", e => {
  const filtered = RECIPES.filter(r =>
    r.name.toLowerCase().includes(e.target.value.toLowerCase())
  );
  render(filtered);
});

// INIT
render(RECIPES);
