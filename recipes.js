const RECIPES = [
  {
    id: 1,
    name: "Spaghetti Bolognese",
    category: "Pasta",
    cuisine: "Italian",
    time: "60 min",
    image: "https://source.unsplash.com/800x600/?spaghetti",
    desc: "Classic Italian meat pasta sauce.",
    ingredients: ["Pasta", "Beef", "Tomato sauce"],
    steps: ["Boil pasta", "Cook beef", "Simmer sauce"]
  },
  {
    id: 2,
    name: "Chicken Adobo",
    category: "Filipino",
    cuisine: "Asian",
    time: "45 min",
    image: "https://source.unsplash.com/800x600/?chicken",
    desc: "Savory Filipino chicken stew.",
    ingredients: ["Chicken", "Soy sauce", "Vinegar"],
    steps: ["Marinate", "Simmer until tender"]
  },
  {
    id: 3,
    name: "Cheeseburger",
    category: "Fast Food",
    cuisine: "American",
    time: "20 min",
    image: "https://source.unsplash.com/800x600/?burger",
    desc: "Juicy grilled burger with cheese.",
    ingredients: ["Bun", "Beef patty", "Cheese"],
    steps: ["Grill patty", "Assemble burger"]
  }
];

// auto-expand to 40 premium placeholders (safe fallback system)
for (let i = 4; i <= 40; i++) {
  RECIPES.push({
    id: i,
    name: `Gourmet Recipe ${i}`,
    category: i % 2 ? "Main Dish" : "Dessert",
    cuisine: "International",
    time: "30 min",
    image: "https://source.unsplash.com/800x600/?food,meal",
    desc: "Premium curated recipe for your collection.",
    ingredients: ["Ingredient A", "Ingredient B"],
    steps: ["Step 1", "Step 2"]
  });
}
