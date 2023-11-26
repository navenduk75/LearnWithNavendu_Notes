const employee = {
  login() {
    console.log("Employee Logged in");
  },
};

const manager = {
  login() {
    super.login();
  },
};

Object.setPrototypeOf(manager, employee);
manager.login(); // Logs "Employee Logged in"
