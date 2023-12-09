function blockingDelay(milliseconds) {
  const startTime = new Date().getTime();
  let currentTime = startTime;

  while (currentTime - startTime < milliseconds) {
    currentTime = new Date().getTime();
  }
}

customers = [
  {
    name: "Amit",
    food: "Sandwitch",
  },
  {
    name: "Peter",
    food: "Pasta",
  },
  {
    name: "Mo",
    food: "Egg Curry",
  },
  {
    name: "John",
    food: "Salad",
  },
];
