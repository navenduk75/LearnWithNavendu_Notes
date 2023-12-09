function cookFood(food) {
  setTimeout(() => {
    orderCompleted(food);
  }, 10000);
}

function orderCompleted(food) {
  console.log(`${food} is ready`);
}

function placeOrder(order) {
  cookFood(order);
}

console.log("Started");
placeOrder("Pasta");
placeOrder("Salad");
placeOrder("Sandwitch");
console.log("Finished");
