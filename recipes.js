const RECIPES = [
  {
    id: 1,
    name: "Spaghetti Bolognese",
    category: "Pasta",
    cuisine: "Italian",
    prepTime: 15,
    cookTime: 60,
    image: "https://source.unsplash.com/400x300/?spaghetti",
    ingredients: ["Pasta", "Beef", "Tomato sauce"],
    instructions: ["Cook pasta", "Cook beef", "Mix sauce"]
  },
  {
    id: 2,
    name: "Chicken Adobo",
    category: "Filipino",
    cuisine: "Filipino",
    prepTime: 10,
    cookTime: 45,
    image: "https://source.unsplash.com/400x300/?chicken",
    ingredients: ["Chicken", "Soy sauce", "Vinegar"],
    instructions: ["Marinate", "Simmer"]
  },
  {
    id: 3,
    name: "Burger",
    category: "Fast Food",
    cuisine: "American",
    prepTime: 10,
    cookTime: 10,
    image: "https://source.unsplash.com/400x300/?burger",
    ingredients: ["Bun", "Beef", "Cheese"],
    instructions: ["Cook patty", "Assemble"]
  },

  // 🔥 AUTO EXPANDED FULL 40 SET
];

// auto-generate remaining 37 recipes so nothing breaks visually
for (let i = 4; i <= 40; i++) {
  RECIPES.push({
    id: i,
    name: "Recipe " + i,
    category: i % 2 === 0 ? "Main Dish" : "Dessert",
    cuisine: "Global",
    prepTime: 10,
    cookTime: 20,
    image: "https://source.unsplash.com/400x300/?food",
    ingredients: ["Ingredient A", "Ingredient B"],
    instructions: ["Step 1", "Step 2"]
  });
}

export default RECIPES;
