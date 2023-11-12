function slowTask(key) {
  console.log("Calculating result for " + key + "...");
  let result = 0;

  for (let i = key; i < 3_000_000_000; i++) {
    result += i;
  }

  return result;
}

console.log(slowTask(10)); //approx 6 seconds
console.log(slowTask(10)); //approx 6 seconds
console.log(slowTask(10)); //approx 6 seconds

console.log(slowTask(1000)); //approx 6 seconds
console.log(slowTask(1000)); //approx 6 seconds
console.log(slowTask(1000)); //approx 6 seconds
