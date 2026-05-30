const RECIPES = [
  // HEALTHY / STARTERS
  {id:1,name:"Fresh Garden Salad",category:"Healthy",time:"15 min",cal:"120 cal",rating:"4.5",img:"https://source.unsplash.com/800x600/?salad"},
  {id:2,name:"Creamy Pumpkin Soup",category:"Soup",time:"30 min",cal:"180 cal",rating:"4.7",img:"https://source.unsplash.com/800x600/?pumpkin-soup"},
  {id:3,name:"Tomato Basil Soup",category:"Soup",time:"35 min",cal:"160 cal",rating:"4.8",img:"https://source.unsplash.com/800x600/?tomato-soup"},
  {id:4,name:"Pasta Soup",category:"Soup",time:"25 min",cal:"240 cal",rating:"4.6",img:"https://source.unsplash.com/800x600/?soup"},

  // PASTA / BOWLS
  {id:5,name:"Creamy Garlic Pasta",category:"Pasta",time:"25 min",cal:"520 cal",rating:"4.8",img:"https://source.unsplash.com/800x600/?pasta"},
  {id:6,name:"Mediterranean Pasta Bowl",category:"Pasta",time:"30 min",cal:"450 cal",rating:"4.6",img:"https://source.unsplash.com/800x600/?mediterranean-food"},
  {id:7,name:"Rainbow Buddha Bowl",category:"Healthy",time:"20 min",cal:"380 cal",rating:"4.9",img:"https://source.unsplash.com/800x600/?buddha-bowl"},

  // DESSERTS
  {id:8,name:"Decadent Chocolate Cake",category:"Dessert",time:"60 min",cal:"480 cal",rating:"5.0",img:"https://source.unsplash.com/800x600/?chocolate-cake"},
  {id:9,name:"Chocolate Bundt Delight",category:"Dessert",time:"50 min",cal:"420 cal",rating:"4.7",img:"https://source.unsplash.com/800x600/?cake"},
  {id:10,name:"Halo-Halo",category:"Dessert",time:"15 min",cal:"320 cal",rating:"4.8",img:"https://source.unsplash.com/800x600/?dessert"},

  // FILIPINO
  {id:11,name:"Chicken Adobo",category:"Filipino",time:"45 min",cal:"320 cal",rating:"4.9",img:"https://source.unsplash.com/800x600/?chicken"},
  {id:12,name:"Sinigang na Baboy",category:"Filipino",time:"50 min",cal:"280 cal",rating:"4.8",img:"https://source.unsplash.com/800x600/?sinigang"},
  {id:13,name:"Lumpia Shanghai",category:"Filipino",time:"40 min",cal:"180 cal",rating:"4.9",img:"https://source.unsplash.com/800x600/?spring-rolls"},
  {id:14,name:"Sisig",category:"Filipino",time:"40 min",cal:"420 cal",rating:"4.9",img:"https://source.unsplash.com/800x600/?sisig"},
  {id:15,name:"Kare-Kare",category:"Filipino",time:"90 min",cal:"420 cal",rating:"4.9",img:"https://source.unsplash.com/800x600/?stew"},
  {id:16,name:"Lechon Kawali",category:"Filipino",time:"75 min",cal:"580 cal",rating:"5.0",img:"https://source.unsplash.com/800x600/?pork"},
  {id:17,name:"Bicol Express",category:"Filipino",time:"35 min",cal:"380 cal",rating:"4.7",img:"https://source.unsplash.com/800x600/?spicy-food"},
  {id:18,name:"Tinola",category:"Filipino",time:"40 min",cal:"220 cal",rating:"4.6",img:"https://source.unsplash.com/800x600/?soup"},
  {id:19,name:"Pancit Canton",category:"Filipino",time:"30 min",cal:"340 cal",rating:"4.7",img:"https://source.unsplash.com/800x600/?noodles"},
  {id:20,name:"Bibingka",category:"Filipino",time:"30 min",cal:"280 cal",rating:"4.7",img:"https://source.unsplash.com/800x600/?cake"},

  // MEAT / GRILL
  {id:21,name:"Honey Glazed Pork Chops",category:"Pork",time:"35 min",cal:"340 cal",rating:"4.7",img:"https://source.unsplash.com/800x600/?pork-chop"},
  {id:22,name:"Asian BBQ Pork",category:"Pork",time:"45 min",cal:"380 cal",rating:"4.8",img:"https://source.unsplash.com/800x600/?bbq"},
  {id:23,name:"Perfect Grilled Steak",category:"Beef",time:"20 min",cal:"580 cal",rating:"4.9",img:"https://source.unsplash.com/800x600/?steak"},
  {id:24,name:"Garlic Butter Steak",category:"Beef",time:"25 min",cal:"560 cal",rating:"4.8",img:"https://source.unsplash.com/800x600/?beef"},
  {id:25,name:"Herb Crusted Beef Roast",category:"Beef",time:"90 min",cal:"420 cal",rating:"4.9",img:"https://source.unsplash.com/800x600/?roast-beef"},

  // SEAFOOD
  {id:26,name:"Grilled Salmon with Lemon",category:"Fish",time:"20 min",cal:"350 cal",rating:"4.8",img:"https://source.unsplash.com/800x600/?salmon"},
  {id:27,name:"Pan-Seared Sea Bass",category:"Fish",time:"18 min",cal:"280 cal",rating:"4.7",img:"https://source.unsplash.com/800x600/?fish"},
  {id:28,name:"Baked Cod with Vegetables",category:"Fish",time:"30 min",cal:"220 cal",rating:"4.6",img:"https://source.unsplash.com/800x600/?cod"},

  // CHICKEN
  {id:29,name:"Grilled Chicken Breast",category:"Chicken",time:"30 min",cal:"280 cal",rating:"4.7",img:"https://source.unsplash.com/800x600/?grilled-chicken"},
  {id:30,name:"Honey Mustard Chicken",category:"Chicken",time:"35 min",cal:"320 cal",rating:"4.8",img:"https://source.unsplash.com/800x600/?chicken"},
  {id:31,name:"Crispy Chicken Wings",category:"Chicken",time:"40 min",cal:"420 cal",rating:"4.9",img:"https://source.unsplash.com/800x600/?chicken-wings"},

  // BREAKFAST
  {id:32,name:"Berry Waffles",category:"Breakfast",time:"20 min",cal:"380 cal",rating:"4.8",img:"https://source.unsplash.com/800x600/?waffles"},
  {id:33,name:"Classic Eggs and Toast",category:"Breakfast",time:"10 min",cal:"320 cal",rating:"4.5",img:"https://source.unsplash.com/800x600/?eggs"},
  {id:34,name:"Fluffy Pancakes",category:"Breakfast",time:"15 min",cal:"340 cal",rating:"4.9",img:"https://source.unsplash.com/800x600/?pancakes"},

  // PIZZA
  {id:35,name:"Margherita Pizza",category:"Pizza",time:"25 min",cal:"480 cal",rating:"4.8",img:"https://source.unsplash.com/800x600/?pizza"},
  {id:36,name:"Pepperoni Pizza",category:"Pizza",time:"30 min",cal:"520 cal",rating:"4.7",img:"https://source.unsplash.com/800x600/?pepperoni-pizza"},
  {id:37,name:"Rustic Artisan Pizza",category:"Pizza",time:"35 min",cal:"540 cal",rating:"4.9",img:"https://source.unsplash.com/800x600/?artisan-pizza"},

  // EXTRA
  {id:38,name:"Creamy Garlic Pasta (Special)",category:"Pasta",time:"25 min",cal:"520 cal",rating:"4.8",img:"https://source.unsplash.com/800x600/?creamy-pasta"}
];
