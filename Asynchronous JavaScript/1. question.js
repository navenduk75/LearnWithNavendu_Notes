console.log("Start");

//MACRO TASK
setTimeout(() => console.log("setTimeout callback executed"), 0);

//MICRO TASK
Promise.resolve().then(() => console.log("Promise resolved"));

console.log("End");
