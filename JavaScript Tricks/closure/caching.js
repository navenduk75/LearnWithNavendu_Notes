let cache = {};

function slowTask(startFrom) {
  if (cache[startFrom]) {
    console.log("Cache hit");
    return cache[startFrom];
  }

  console.log("Calculating result for " + startFrom + "...");
  let result = 0;

  for (let i = startFrom; i < 3_000_000_000; i++) {
    result += i;
  }

  cache[startFrom] = result;

  return result;
}

console.log(slowTask(10)); //approx 6 seconds
console.log(slowTask(10)); //approx 0 seconds
console.log(slowTask(10)); //approx 0 seconds

console.log(slowTask(1000)); //approx 6 seconds
console.log(slowTask(1000)); //approx 0 seconds
console.log(slowTask(1000)); //approx 0 seconds
