//super in object literals

// const person = {
//   firstName: "John",
//   age: 30
// };

const employee = {
  login() {
    console.log("Employee logged in");
  },
};

const manager = {
  login() {
    //console.log("Manager logged in");
    super.login();
  },
};

Object.setPrototypeOf(manager, employee);

manager.login();
