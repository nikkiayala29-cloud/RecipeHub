const RECIPES = [
  {
    id: 1,
    name: "Fresh Garden Salad",
    desc: "Crisp and refreshing salad with seasonal vegetables",
    time: "15 min",
    rating: "4.5",
    calories: "120 cal",
    category: "Healthy",
    image: "https://source.unsplash.com/800x600/?salad"
  },
  {
    id: 2,
    name: "Creamy Pumpkin Soup",
    desc: "Velvety smooth pumpkin soup with cream",
    time: "30 min",
    rating: "4.7",
    calories: "180 cal",
    category: "Soup",
    image: "https://source.unsplash.com/800x600/?pumpkin-soup"
  },
  {
    id: 3,
    name: "Tomato Basil Soup",
    desc: "Classic tomato soup with fresh basil",
    time: "35 min",
    rating: "4.8",
    calories: "160 cal",
    category: "Soup",
    image: "https://source.unsplash.com/800x600/?tomato-soup"
  },
  {
    id: 4,
    name: "Sinigang na Baboy",
    desc: "Sour tamarind soup with pork and vegetables",
    time: "50 min",
    rating: "4.8",
    calories: "280 cal",
    category: "Filipino",
    image: "https://source.unsplash.com/800x600/?soup"
  },
  {
    id: 5,
    name: "Lumpia Shanghai",
    desc: "Crispy Filipino spring rolls",
    time: "40 min",
    rating: "4.9",
    calories: "180 cal",
    category: "Filipino",
    image: "https://source.unsplash.com/800x600/?spring-rolls"
  }
];

// expand to 38 recipes (PDF says 38 available)
for (let i = 6; i <= 38; i++) {
  RECIPES.push({
    id: i,
    name: `Recipe ${i}`,
    desc: "Delicious curated recipe from RecipeHub",
    time: "30 min",
    rating: "4.6",
    calories: "250 cal",
    category: i % 2 === 0 ? "Dessert" : "Main",
    image: "https://source.unsplash.com/800x600/?food"
  });
}
