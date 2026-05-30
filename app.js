let favorites = [];

const container = document.getElementById("container");
const search = document.getElementById("search");

// RENDER APP
function render(data){
  container.innerHTML = "";

  data.forEach(r=>{
    container.innerHTML += `
      <div class="card" onclick="viewRecipe(${r.id})">
        <img src="${r.img}">
        <div class="card-content">
          <h3>${r.name}</h3>
          <p>${r.category}</p>
          <small>⭐ ${r.rating} | ${r.time} | 🔥 ${r.cal}</small>
        </div>
      </div>
    `;
  });
}

// SEARCH
search.addEventListener("input",(e)=>{
  const filtered = RECIPES.filter(r=>
    r.name.toLowerCase().includes(e.target.value.toLowerCase())
  );
  render(filtered);
});

// VIEW (REAL APP STYLE)
function viewRecipe(id){
  const r = RECIPES.find(x=>x.id===id);
  alert(`${r.name}\n\n${r.desc || "No description available"}`);
}

// INIT
render(RECIPES);
