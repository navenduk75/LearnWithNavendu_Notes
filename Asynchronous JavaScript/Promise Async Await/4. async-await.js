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

async function consumePromise() {
  try {
    const result = await getUser();
    console.log(result);
    await Promise.resolve("From 1st callback");
    await Promise.reject("Error in 2nd callback");
  } catch (e) {
    console.log(e);
  }
}

consumePromise();
