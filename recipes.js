// recipes.js
// FULL RECIPE DATABASE (40 RECIPES)
// Ready for Recipe App (Favorites, Meal Plan, Shopping List, Nutrition)

const RECIPES = [
  {
    id: 1,
    name: "Spaghetti Bolognese",
    category: "Pasta",
    cuisine: "Italian",
    prepTime: 15,
    cookTime: 60,
    servings: 4,
    difficulty: "Medium",
    image: "images/spaghetti-bolognese.jpg",
    ingredients: ["Spaghetti", "Ground beef", "Tomato sauce", "Onion", "Garlic"],
    instructions: ["Cook pasta", "Cook beef", "Add sauce", "Combine"],
    nutrition: { calories: 520, protein: "28g", carbs: "65g", fat: "18g" },
    tags: ["pasta", "beef"]
  },

  {
    id: 2,
    name: "Chicken Adobo",
    category: "Main Dish",
    cuisine: "Filipino",
    prepTime: 10,
    cookTime: 45,
    servings: 4,
    difficulty: "Easy",
    image: "images/chicken-adobo.jpg",
    ingredients: ["Chicken", "Soy sauce", "Vinegar", "Garlic"],
    instructions: ["Marinate", "Simmer", "Cook until tender"],
    nutrition: { calories: 430, protein: "35g", carbs: "6g", fat: "28g" },
    tags: ["filipino", "chicken"]
  },

  {
    id: 3,
    name: "Caesar Salad",
    category: "Salad",
    cuisine: "American",
    prepTime: 15,
    cookTime: 10,
    servings: 2,
    difficulty: "Easy",
    image: "images/caesar-salad.jpg",
    ingredients: ["Lettuce", "Croutons", "Parmesan", "Dressing"],
    instructions: ["Mix ingredients", "Add dressing"],
    nutrition: { calories: 320, protein: "22g", carbs: "18g", fat: "20g" },
    tags: ["salad"]
  },

  {
    id: 4,
    name: "Beef Tacos",
    category: "Mexican",
    cuisine: "Mexican",
    prepTime: 20,
    cookTime: 20,
    servings: 4,
    difficulty: "Easy",
    image: "images/beef-tacos.jpg",
    ingredients: ["Taco shells", "Ground beef", "Lettuce", "Cheese"],
    instructions: ["Cook beef", "Fill shells"],
    nutrition: { calories: 410, protein: "24g", carbs: "30g", fat: "22g" },
    tags: ["tacos"]
  },

  {
    id: 5,
    name: "Garlic Fried Rice",
    category: "Rice",
    cuisine: "Asian",
    prepTime: 10,
    cookTime: 15,
    servings: 3,
    difficulty: "Easy",
    image: "images/garlic-fried-rice.jpg",
    ingredients: ["Rice", "Garlic", "Oil", "Salt"],
    instructions: ["Fry garlic", "Add rice", "Mix well"],
    nutrition: { calories: 250, protein: "6g", carbs: "45g", fat: "7g" },
    tags: ["rice"]
  },

  {
    id: 6,
    name: "Pancakes",
    category: "Breakfast",
    cuisine: "Western",
    prepTime: 10,
    cookTime: 15,
    servings: 4,
    difficulty: "Easy",
    image: "images/pancakes.jpg",
    ingredients: ["Flour", "Milk", "Egg", "Sugar"],
    instructions: ["Mix", "Cook on pan"],
    nutrition: { calories: 300, protein: "8g", carbs: "45g", fat: "10g" },
    tags: ["breakfast"]
  },

  {
    id: 7,
    name: "Sushi Rolls",
    category: "Japanese",
    cuisine: "Japanese",
    prepTime: 40,
    cookTime: 20,
    servings: 2,
    difficulty: "Hard",
    image: "images/sushi.jpg",
    ingredients: ["Rice", "Nori", "Fish", "Cucumber"],
    instructions: ["Roll sushi", "Slice"],
    nutrition: { calories: 380, protein: "18g", carbs: "55g", fat: "8g" },
    tags: ["sushi"]
  },

  {
    id: 8,
    name: "Chocolate Cake",
    category: "Dessert",
    cuisine: "Western",
    prepTime: 20,
    cookTime: 35,
    servings: 8,
    difficulty: "Medium",
    image: "images/cake.jpg",
    ingredients: ["Flour", "Cocoa", "Eggs", "Sugar"],
    instructions: ["Mix", "Bake"],
    nutrition: { calories: 420, protein: "6g", carbs: "60g", fat: "18g" },
    tags: ["cake"]
  },

  // =========================
  // 🔥 CONTINUATION (9–40)
  // =========================

  {
    id: 9,
    name: "Cheeseburger",
    category: "Fast Food",
    cuisine: "American",
    prepTime: 15,
    cookTime: 15,
    servings: 2,
    difficulty: "Easy",
    image: "images/burger.jpg",
    ingredients: ["Buns", "Beef patty", "Cheese", "Lettuce"],
    instructions: ["Cook patty", "Assemble burger"],
    nutrition: { calories: 550, protein: "30g", carbs: "40g", fat: "28g" },
    tags: ["burger"]
  },

  {
    id: 10,
    name: "Fried Chicken",
    category: "Main Dish",
    cuisine: "American",
    prepTime: 20,
    cookTime: 25,
    servings: 4,
    difficulty: "Medium",
    image: "images/fried-chicken.jpg",
    ingredients: ["Chicken", "Flour", "Spices"],
    instructions: ["Coat chicken", "Fry until golden"],
    nutrition: { calories: 480, protein: "32g", carbs: "20g", fat: "30g" },
    tags: ["chicken"]
  },

  {
    id: 11,
    name: "Carbonara",
    category: "Pasta",
    cuisine: "Italian",
    prepTime: 15,
    cookTime: 20,
    servings: 3,
    difficulty: "Medium",
    image: "images/carbonara.jpg",
    ingredients: ["Pasta", "Eggs", "Cheese", "Bacon"],
    instructions: ["Cook pasta", "Mix sauce"],
    nutrition: { calories: 600, protein: "25g", carbs: "70g", fat: "25g" },
    tags: ["pasta"]
  },

  {
    id: 12,
    name: "Ramen",
    category: "Noodles",
    cuisine: "Japanese",
    prepTime: 20,
    cookTime: 40,
    servings: 2,
    difficulty: "Medium",
    image: "images/ramen.jpg",
    ingredients: ["Noodles", "Broth", "Egg", "Pork"],
    instructions: ["Prepare broth", "Cook noodles"],
    nutrition: { calories: 500, protein: "20g", carbs: "60g", fat: "18g" },
    tags: ["noodles"]
  },

  {
    id: 13,
    name: "Spring Rolls",
    category: "Appetizer",
    cuisine: "Asian",
    prepTime: 25,
    cookTime: 10,
    servings: 4,
    difficulty: "Easy",
    image: "images/spring-rolls.jpg",
    ingredients: ["Wrapper", "Vegetables", "Meat"],
    instructions: ["Wrap", "Fry"],
    nutrition: { calories: 220, protein: "10g", carbs: "25g", fat: "10g" },
    tags: ["snack"]
  },

  {
    id: 14,
    name: "Sisig",
    category: "Main Dish",
    cuisine: "Filipino",
    prepTime: 30,
    cookTime: 30,
    servings: 4,
    difficulty: "Medium",
    image: "images/sisig.jpg",
    ingredients: ["Pork", "Onion", "Chili"],
    instructions: ["Grill", "Chop", "Mix"],
    nutrition: { calories: 520, protein: "28g", carbs: "10g", fat: "35g" },
    tags: ["filipino"]
  },

  {
    id: 15,
    name: "Sinigang",
    category: "Soup",
    cuisine: "Filipino",
    prepTime: 15,
    cookTime: 50,
    servings: 5,
    difficulty: "Medium",
    image: "images/sinigang.jpg",
    ingredients: ["Pork", "Tamarind", "Vegetables"],
    instructions: ["Boil", "Simmer"],
    nutrition: { calories: 350, protein: "25g", carbs: "20g", fat: "15g" },
    tags: ["soup"]
  },

  {
    id: 16,
    name: "Lasagna",
    category: "Pasta",
    cuisine: "Italian",
    prepTime: 30,
    cookTime: 60,
    servings: 6,
    difficulty: "Hard",
    image: "images/lasagna.jpg",
    ingredients: ["Pasta sheets", "Beef", "Cheese"],
    instructions: ["Layer", "Bake"],
    nutrition: { calories: 650, protein: "35g", carbs: "60g", fat: "30g" },
    tags: ["pasta"]
  },

  {
    id: 17,
    name: "Sushi Bowl",
    category: "Japanese",
    cuisine: "Japanese",
    prepTime: 15,
    cookTime: 20,
    servings: 2,
    difficulty: "Easy",
    image: "images/sushi-bowl.jpg",
    ingredients: ["Rice", "Fish", "Vegetables"],
    instructions: ["Assemble bowl"],
    nutrition: { calories: 420, protein: "22g", carbs: "50g", fat: "12g" },
    tags: ["bowl"]
  },

  {
    id: 18,
    name: "Omelette",
    category: "Breakfast",
    cuisine: "Western",
    prepTime: 5,
    cookTime: 10,
    servings: 1,
    difficulty: "Easy",
    image: "images/omelette.jpg",
    ingredients: ["Eggs", "Cheese", "Ham"],
    instructions: ["Beat eggs", "Cook pan"],
    nutrition: { calories: 250, protein: "15g", carbs: "2g", fat: "18g" },
    tags: ["egg"]
  },

  {
    id: 19,
    name: "Tuna Sandwich",
    category: "Snack",
    cuisine: "Western",
    prepTime: 10,
    cookTime: 0,
    servings: 1,
    difficulty: "Easy",
    image: "images/tuna-sandwich.jpg",
    ingredients: ["Bread", "Tuna", "Mayonnaise"],
    instructions: ["Mix tuna", "Assemble sandwich"],
    nutrition: { calories: 300, protein: "18g", carbs: "30g", fat: "12g" },
    tags: ["sandwich"]
  },

  {
    id: 20,
    name: "Butter Chicken",
    category: "Main Dish",
    cuisine: "Indian",
    prepTime: 20,
    cookTime: 40,
    servings: 4,
    difficulty: "Medium",
    image: "images/butter-chicken.jpg",
    ingredients: ["Chicken", "Butter", "Cream", "Spices"],
    instructions: ["Cook chicken", "Add sauce"],
    nutrition: { calories: 550, protein: "30g", carbs: "20g", fat: "35g" },
    tags: ["indian"]
  },

  {
    id: 21,
    name: "Biryani",
    category: "Rice",
    cuisine: "Indian",
    prepTime: 30,
    cookTime: 60,
    servings: 5,
    difficulty: "Hard",
    image: "images/biryani.jpg",
    ingredients: ["Rice", "Chicken", "Spices"],
    instructions: ["Layer rice and meat", "Cook slowly"],
    nutrition: { calories: 650, protein: "28g", carbs: "80g", fat: "25g" },
    tags: ["rice"]
  },

  {
    id: 22,
    name: "Pad Thai",
    category: "Noodles",
    cuisine: "Thai",
    prepTime: 15,
    cookTime: 20,
    servings: 2,
    difficulty: "Medium",
    image: "images/pad-thai.jpg",
    ingredients: ["Noodles", "Shrimp", "Peanuts"],
    instructions: ["Stir fry everything"],
    nutrition: { calories: 450, protein: "20g", carbs: "55g", fat: "18g" },
    tags: ["thai"]
  },

  {
    id: 23,
    name: "Mango Float",
    category: "Dessert",
    cuisine: "Filipino",
    prepTime: 20,
    cookTime: 0,
    servings: 6,
    difficulty: "Easy",
    image: "images/mango-float.jpg",
    ingredients: ["Mango", "Cream", "Graham crackers"],
    instructions: ["Layer", "Chill"],
    nutrition: { calories: 380, protein: "4g", carbs: "55g", fat: "18g" },
    tags: ["dessert"]
  },

  {
    id: 24,
    name: "Halo-Halo",
    category: "Dessert",
    cuisine: "Filipino",
    prepTime: 15,
    cookTime: 0,
    servings: 2,
    difficulty: "Easy",
    image: "images/halo-halo.jpg",
    ingredients: ["Ice", "Milk", "Fruits", "Beans"],
    instructions: ["Mix everything"],
    nutrition: { calories: 400, protein: "6g", carbs: "70g", fat: "10g" },
    tags: ["dessert"]
  },

  {
    id: 25,
    name: "Kaldereta",
    category: "Stew",
    cuisine: "Filipino",
    prepTime: 20,
    cookTime: 90,
    servings: 6,
    difficulty: "Hard",
    image: "images/kaldereta.jpg",
    ingredients: ["Beef", "Tomato sauce", "Vegetables"],
    instructions: ["Stew beef", "Simmer"],
    nutrition: { calories: 580, protein: "35g", carbs: "25g", fat: "30g" },
    tags: ["beef"]
  },

  {
    id: 26,
    name: "Grilled Salmon",
    category: "Seafood",
    cuisine: "Western",
    prepTime: 10,
    cookTime: 15,
    servings: 2,
    difficulty: "Easy",
    image: "images/salmon.jpg",
    ingredients: ["Salmon", "Lemon", "Butter"],
    instructions: ["Grill salmon", "Serve"],
    nutrition: { calories: 350, protein: "34g", carbs: "0g", fat: "22g" },
    tags: ["fish"]
  },

  {
    id: 27,
    name: "Vegetable Stir Fry",
    category: "Vegetarian",
    cuisine: "Asian",
    prepTime: 10,
    cookTime: 15,
    servings: 3,
    difficulty: "Easy",
    image: "images/stir-fry.jpg",
    ingredients: ["Vegetables", "Soy sauce", "Garlic"],
    instructions: ["Stir fry vegetables"],
    nutrition: { calories: 200, protein: "6g", carbs: "25g", fat: "8g" },
    tags: ["veggie"]
  },

  {
    id: 28,
    name: "French Toast",
    category: "Breakfast",
    cuisine: "Western",
    prepTime: 10,
    cookTime: 10,
    servings: 2,
    difficulty: "Easy",
    image: "images/french-toast.jpg",
    ingredients: ["Bread", "Egg", "Milk"],
    instructions: ["Dip bread", "Fry"],
    nutrition: { calories: 320, protein: "10g", carbs: "40g", fat: "12g" },
    tags: ["breakfast"]
  },

  {
    id: 29,
    name: "Chicken Shawarma",
    category: "Fast Food",
    cuisine: "Middle Eastern",
    prepTime: 20,
    cookTime: 25,
    servings: 3,
    difficulty: "Medium",
    image: "images/shawarma.jpg",
    ingredients: ["Chicken", "Spices", "Pita bread"],
    instructions: ["Cook chicken", "Wrap"],
    nutrition: { calories: 450, protein: "28g", carbs: "35g", fat: "20g" },
    tags: ["wrap"]
  },

  {
    id: 30,
    name: "Dumplings",
    category: "Appetizer",
    cuisine: "Chinese",
    prepTime: 30,
    cookTime: 15,
    servings: 4,
    difficulty: "Medium",
    image: "images/dumplings.jpg",
    ingredients: ["Dough", "Meat", "Vegetables"],
    instructions: ["Fill", "Steam or fry"],
    nutrition: { calories: 300, protein: "12g", carbs: "35g", fat: "10g" },
    tags: ["snack"]
  },

  {
    id: 31,
    name: "Margherita Pizza",
    category: "Pizza",
    cuisine: "Italian",
    prepTime: 20,
    cookTime: 15,
    servings: 4,
    difficulty: "Medium",
    image: "images/pizza.jpg",
    ingredients: ["Dough", "Tomato", "Cheese"],
    instructions: ["Assemble", "Bake"],
    nutrition: { calories: 500, protein: "20g", carbs: "60g", fat: "18g" },
    tags: ["pizza"]
  },

  {
    id: 32,
    name: "Chicken Curry",
    category: "Main Dish",
    cuisine: "Indian",
    prepTime: 20,
    cookTime: 40,
    servings: 4,
    difficulty: "Medium",
    image: "images/curry.jpg",
    ingredients: ["Chicken", "Curry powder", "Coconut milk"],
    instructions: ["Cook chicken", "Add sauce"],
    nutrition: { calories: 520, protein: "30g", carbs: "15g", fat: "35g" },
    tags: ["curry"]
  },

  {
    id: 33,
    name: "Pork Barbecue",
    category: "Grill",
    cuisine: "Filipino",
    prepTime: 30,
    cookTime: 30,
    servings: 5,
    difficulty: "Medium",
    image: "images/barbecue.jpg",
    ingredients: ["Pork", "BBQ sauce"],
    instructions: ["Marinate", "Grill"],
    nutrition: { calories: 480, protein: "25g", carbs: "20g", fat: "30g" },
    tags: ["grill"]
  },

  {
    id: 34,
    name: "Macaroni Salad",
    category: "Salad",
    cuisine: "Western",
    prepTime: 15,
    cookTime: 10,
    servings: 6,
    difficulty: "Easy",
    image: "images/macaroni-salad.jpg",
    ingredients: ["Macaroni", "Mayonnaise", "Vegetables"],
    instructions: ["Mix everything"],
    nutrition: { calories: 350, protein: "8g", carbs: "45g", fat: "18g" },
    tags: ["salad"]
  },

  {
    id: 35,
    name: "Apple Pie",
    category: "Dessert",
    cuisine: "Western",
    prepTime: 30,
    cookTime: 45,
    servings: 6,
    difficulty: "Medium",
    image: "images/apple-pie.jpg",
    ingredients: ["Apples", "Flour", "Sugar"],
    instructions: ["Bake pie"],
    nutrition: { calories: 420, protein: "4g", carbs: "65g", fat: "15g" },
    tags: ["dessert"]
  },

  {
    id: 36,
    name: "Brownies",
    category: "Dessert",
    cuisine: "Western",
    prepTime: 15,
    cookTime: 30,
    servings: 8,
    difficulty: "Easy",
    image: "images/brownies.jpg",
    ingredients: ["Chocolate", "Flour", "Eggs"],
    instructions: ["Mix", "Bake"],
    nutrition: { calories: 380, protein: "5g", carbs: "50g", fat: "18g" },
    tags: ["chocolate"]
  },

  {
    id: 37,
    name: "Hotdog Sandwich",
    category: "Snack",
    cuisine: "American",
    prepTime: 10,
    cookTime: 10,
    servings: 1,
    difficulty: "Easy",
    image: "images/hotdog.jpg",
    ingredients: ["Bread", "Hotdog", "Ketchup"],
    instructions: ["Cook hotdog", "Assemble"],
    nutrition: { calories: 320, protein: "12g", carbs: "30g", fat: "15g" },
    tags: ["snack"]
  },

  {
    id: 38,
    name: "Tofu Stir Fry",
    category: "Vegetarian",
    cuisine: "Asian",
    prepTime: 10,
    cookTime: 15,
    servings: 3,
    difficulty: "Easy",
    image: "images/tofu.jpg",
    ingredients: ["Tofu", "Vegetables", "Soy sauce"],
    instructions: ["Stir fry tofu and veggies"],
    nutrition: { calories: 220, protein: "14g", carbs: "20g", fat: "10g" },
    tags: ["veggie"]
  },

  {
    id: 39,
    name: "Clam Chowder",
    category: "Soup",
    cuisine: "American",
    prepTime: 15,
    cookTime: 30,
    servings: 4,
    difficulty: "Medium",
    image: "images/chowder.jpg",
    ingredients: ["Clams", "Milk", "Potatoes"],
    instructions: ["Cook soup base", "Add clams"],
    nutrition: { calories: 400, protein: "18g", carbs: "35g", fat: "18g" },
    tags: ["soup"]
  },

  {
    id: 40,
    name: "Fruit Salad",
    category: "Dessert",
    cuisine: "Universal",
    prepTime: 10,
    cookTime: 0,
    servings: 4,
    difficulty: "Easy",
    image: "images/fruit-salad.jpg",
    ingredients: ["Mixed fruits", "Cream", "Condensed milk"],
    instructions: ["Mix all fruits", "Chill"],
    nutrition: { calories: 280, protein: "3g", carbs: "60g", fat: "8g" },
    tags: ["healthy"]
  }
];

export default RECIPES;
