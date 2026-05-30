const RECIPES = [
  { id: 1, name: "Spaghetti Bolognese", category: "Pasta", time: 60, image: "https://source.unsplash.com/800x600/?spaghetti", ingredients: ["Pasta","Beef","Tomato"], steps: ["Boil pasta","Cook beef","Mix sauce"] },
  { id: 2, name: "Chicken Adobo", category: "Filipino", time: 45, image: "https://source.unsplash.com/800x600/?chicken", ingredients: ["Chicken","Soy sauce","Vinegar"], steps: ["Marinate","Simmer"] },
  { id: 3, name: "Burger", category: "Fast Food", time: 20, image: "https://source.unsplash.com/800x600/?burger", ingredients: ["Bun","Beef","Cheese"], steps: ["Cook patty","Assemble"] }
];

// auto-fill remaining 37 recipes
for (let i = 4; i <= 40; i++) {
  RECIPES.push({
    id: i,
    name: `Chef Recipe ${i}`,
    category: i % 2 ? "Main Dish" : "Dessert",
    time: 30,
    image: "https://source.unsplash.com/800x600/?food",
    ingredients: ["Ingredient A", "Ingredient B"],
    steps: ["Step 1", "Step 2"]
  });
}
