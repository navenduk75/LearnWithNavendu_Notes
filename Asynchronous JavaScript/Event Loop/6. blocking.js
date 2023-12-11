function cookFood(food) {
  blockingDelay(10000); //Simulates cooking time
  return food;
}

function placeOrder(order) {
  const food = cookFood(order);
  console.log(`${food} is ready`);
}

console.log("Started");
placeOrder("Pasta");
placeOrder("Salad");
placeOrder("Sandwitch");
console.log("Finished");
