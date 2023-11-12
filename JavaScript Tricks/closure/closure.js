//Closures for caching (memoization)

function memoize(fn) {
  let cache = {};

  return function (arg) {
    if (cache[arg]) {
      console.log("cache hit");
      return cache[arg];
    }

    let result = fn(arg);
    cache[arg] = result;
    return result;
  };
}

function slowTask(startFrom) {
  console.log("Calculating result for " + startFrom + "...");
  let result = 0;

  for (let i = startFrom; i < 3_000_000_000; i++) {
    result += i;
  }

  return result;
}

// console.log(slowTask(10)); //approx 6 seconds
// console.log(slowTask(10)); //approx 6 seconds

// console.log(slowTask(1000)); //approx 6 seconds
// console.log(slowTask(1000)); //approx 6 seconds

const memoized = memoize(slowTask);

console.log(memoized(10)); //approx 6 seconds
console.log(memoized(10)); //approx 0 seconds

console.log(memoized(1000)); //approx 6 seconds
console.log(memoized(1000)); //approx 0 seconds
