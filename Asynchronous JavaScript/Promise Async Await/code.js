// // 1. Synchronous work
// function step1() {
//   console.log(1);
// }

// function step2() {
//   console.log(2);
// }

// function step3() {
//   console.log(3);
// }

// step1();
// step2();
// step3();

////////////////////////////////////////////////////////////

// // 2. Asynchronous work
// function step1() {
//   console.log(1);
// }

// function step2() {
//   setTimeout(() => {
//     console.log(2);
//   }, 1000);
// }

// function step3() {
//   console.log(3);
// }

// step1();
// step2();
// step3();

////////////////////////////////////////////////////////////

// // 3. Callback and Higher Order Functions
// function step1() {
//   console.log(1);
// }

// function step2(callback) {
//   setTimeout(() => {
//     console.log(2);
//     callback();
//   }, 1000);
// }

// function step3() {
//   console.log(3);
// }

// step1();
// //function step2 is called higher order function
// //because it takes a function as an argument
// step2(step3);
// //step3();

////////////////////////////////////////////////////////////

// // 4. Callback hell
// function step1() {
//   console.log(1);
// }

// function step2(callback) {
//   setTimeout(() => {
//     console.log(2);
//     setTimeout(() => {
//       callback();
//     }, 1000);
//   }, 5000);
// }

// function step3() {
//   console.log(3);
// }

// step1();
// step2(step3);

////////////////////////////////////////////////////////////

// // 5. What is Promise
// let p = new Promise((resolve, reject) => {
//   const sum = 1 + 1;

//   if (sum == 2) {
//     resolve({ name: "Amit", age: 35 });
//   } else {
//     reject("Error fetching user");
//   }
// });

// p.then((data) => {
//   console.log(data);
// }).catch((error) => {
//   console.log(error);
// });

////////////////////////////////////////////////////////////

// // 6. Convert callback hell into Promise
// function step1() {
//   console.log(1);
// }

// function step2() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log(2);
//       resolve();
//     }, 3000);
//   });
// }

// function step3() {
//   console.log(3);
// }

// step1();
// step2().then(step3);

////////////////////////////////////////////////////////////

// // 7. Promise chaining
// let p = new Promise((resolve, reject) => {
//   const sum = 1 + 1;

//   if (sum == 2) {
//     resolve({ name: "Amit", age: 35 });
//   } else {
//     reject("Error fetching user");
//   }
// });

// p.then((data) => {
//   console.log(data);

//   //return `Name is ${data.name} and Age is ${data.age}`;
//   return new Promise((res, rej) => {
//     res(`Name is ${data.name} and Age is ${data.age}`);
//   });
// })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log("Problem: " + error);
//   });

////////////////////////////////////////////////////////////

// // 8. Error handling
// let p = new Promise((resolve, reject) => {
//   const sum = 1 + 1;

//   if (sum == 2) {
//     resolve({ name: "Amit", age: 35 });
//   } else {
//     reject("Error fetching user");
//   }
// });

// p.then((data) => {
//   console.log(data);

//   //return `Name is ${data.name} and Age is ${data.age}`;
//   throw new Error("Boom...");
//   //   return new Promise((res, rej) => {
//   //     res(`Name is ${data.name} and Age is ${data.age}`);
//   //   });
// })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log("Problem: " + error);
//   });

////////////////////////////////////////////////////////////

// 9. Promise.all

// function getUser(id) {
//   return fetch("https://jsonplaceholder.typicode.com/users/" + id).then(
//     (response) => response.json()
//   );
// }

// let user1Promise = getUser(1);
// let user2Promise = getUser(2);
// let user3Promise = getUser(3);

// user1Promise.then((user1) => {
//   user2Promise.then((user2) => {
//     user3Promise.then((user3) => {
//       console.log(user1);
//       console.log(user2);
//       console.log(user3);
//     });
//   });
// });

// Promise.all([user1Promise, user2Promise, user3Promise]).then((users) => {
//   console.log(users[0]);
//   console.log(users[1]);
//   console.log(users[2]);
// });

////////////////////////////////////////////////////////////

// // 10. async-await

// function getUser(id) {
//   return fetch("https://jsonplaceholder.typicode.com/users/" + id).then(
//     (response) => response.json()
//   );
// }

// async function PrintUsers() {
//   let user1 = await getUser(1);
//   let user2 = await getUser(2);
//   let user3 = await getUser(3);

//   console.log(user1);
//   console.log(user2);
//   console.log(user3);
// }

// PrintUsers();

////////////////////////////////////////////////////////////

// 11. async-await - exception handling

// function getUser(id) {
//   return fetch("https://jsonplaceholder.typicode.com/users/" + id).then(
//     (response) => response.json()
//   );
// }

// async function PrintUsers() {
//   try {
//     let user1 = await getUser(1);
//     let user2 = await getUser(2);
//     let user3 = await getUser(3);

//     console.log(user1);
//     console.log(user2);
//     console.log(user3);
//   } catch (error) {
//     console.log(error);
//   }
// }

// PrintUsers();

////////////////////////////////////////////////////////////

// 12. TAKEAWAY
// Promise's then function does three things:
// return another promise
// return a synchronous value (or undefined if there is no return)
// throw a synchronous error //throw new Error('user logged out!');

////////////////////////////////////////////////////////////

// 13. QUESTION:
// function firstWork() {
//   return new Promise((resolve, reject) => resolve("First work done"));
// }

// function secondWork(data) {
//   console.log("2: " + data);
//   return new Promise((resolve, reject) => resolve("Second work done"));
// }

// function thirdWork(data) {
//   console.log("3: " + data);
// }

// firstWork()
//   .then(() => {
//     return secondWork();
//   })
//   .then(thirdWork);

// setTimeout(() => {
//   console.log(
//     "firstWork\n|-----------------|\n                  secondWork(undefined)\n                  |------------------|\n                                     thirdWork(resultOfSecondWork)\n                                     |------------------|"
//   );
// }, 1000);

// firstWork()
//   .then(() => {
//     secondWork();
//   })
//   .then(thirdWork);
// setTimeout(() => {
//   console.log(
//     "firstWork\n|-----------------|\n                  secondWork(undefined)\n                  |------------------|\n                  thirdWork(undefined)\n                  |------------------|"
//   );
// }, 1000);

// firstWork().then(secondWork()).then(thirdWork);
// setTimeout(() => {
//   console.log(
//     "firstWork\n|-----------------|\nsecondWork(undefined)\n|---------------------------------|\n                  thirdWork(resultOfFirstWork)\n                  |------------------|"
//   );
// }, 1000);

// firstWork().then(secondWork).then(thirdWork);
// setTimeout(() => {
//   console.log(
//     "firstWork\n|-----------------|\n                  secondWork(resultOfFirstWork)\n                  |------------------|\n                                     thirdWork(resultOfSecondWork)\n                                     |------------------|"
//   );
// }, 1000);
