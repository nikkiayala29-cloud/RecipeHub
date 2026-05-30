const RECIPES = [
  {
    id: 1,
    name: "Spaghetti Bolognese",
    category: "Pasta",
    image: "https://source.unsplash.com/600x400/?spaghetti",
    time: "60 mins",
  },
  {
    id: 2,
    name: "Chicken Adobo",
    category: "Filipino",
    image: "https://source.unsplash.com/600x400/?chicken-adobo",
    time: "45 mins",
  },
  {
    id: 3,
    name: "Cheeseburger",
    category: "Fast Food",
    image: "https://source.unsplash.com/600x400/?burger",
    time: "20 mins",
  },
  {
    id: 4,
    name: "Sushi",
    category: "Japanese",
    image: "https://source.unsplash.com/600x400/?sushi",
    time: "50 mins",
  },
  {
    id: 5,
    name: "Pancakes",
    category: "Breakfast",
    image: "https://source.unsplash.com/600x400/?pancakes",
    time: "20 mins",
  }
];

// auto-fill to 40 (so UI is not empty)
for (let i = 6; i <= 40; i++) {
  RECIPES.push({
    id: i,
    name: "Recipe " + i,
    category: i % 2 === 0 ? "Main Dish" : "Dessert",
    image: "https://source.unsplash.com/600x400/?food",
    time: "30 mins"
  });
}
