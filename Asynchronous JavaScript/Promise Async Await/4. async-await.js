const p1 = new Promise((resolve, reject) => {
  const success = false;

  if (success) {
    setTimeout((_) => {
      resolve("All good");
    }, 5000);
  } else {
    setTimeout((_) => {
      reject("An error has occured");
    }, 5000);
  }
});

function onError(e) {
  console.log(e);
}

p1.then((result) => {
  console.log(result);
  return Promise.resolve("From 1st callback");
})
  .then((result) => {
    console.log(result);
    return Promise.reject("Error in 2nd callback");
  })
  .then((result) => console.log(result))
  .then((result) => console.log(result))
  .catch(onError);
