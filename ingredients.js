

const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:
//while that prints all
let x = 0;

while (x < ingredients.length) {
  console.log(ingredients[x]);
  x++;
} 


// Write a for loop that prints out the contents of ingredients:
//for that prints all

for (let ingredient of ingredients) {
  console.log(ingredient);
}

// Write any loop (while or for) that prints out the contents of ingredients backwards:
//for that prints backwards

for (let y = ingredients.length - 1; y >= 0; y--) {
console.log(ingredients[y]);
}