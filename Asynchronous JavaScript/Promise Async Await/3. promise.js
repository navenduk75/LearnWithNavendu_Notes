function getUser() {
  return new Promise((resolve, reject) => {
    const success = true;

    if (success) {
      resolve({ name: "Amit", age: 35 });
    } else {
      reject("Error fetching user");
    }
  });
}

function consumePromise() {
  getUser()
    .then((result) => {
      console.log(result);
      return Promise.resolve("From 1st callback");
    })
    .then((result) => {
      console.log(result);
      return Promise.reject("Error in 2nd callback");
    })
    .then((result) => console.log(result))
    .catch((e) => console.log(e));
}

consumePromise();
