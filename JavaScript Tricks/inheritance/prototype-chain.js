//constructor function and prototype chain

function Employee(name) {
  this.name = name;
  this.inOffice = false;
}

Employee.prototype.login = function () {
  this.inOffice = true;
  console.log(`${this.name} is in office`);
};

Employee.prototype.logout = function () {
  this.inOffice = false;
  console.log(`${this.name} is NOT in office`);
};

function Manager(name) {
  Employee.call(this, name);
}

Manager.prototype = Object.create(Employee.prototype);

Manager.prototype.terminateEmployee = function (emp) {
  employees = employees.filter((e) => e.name != emp.name);
};

let emp1 = new Employee("John");
let emp2 = new Employee("Amit");
let manager = new Manager("Ashish");

let employees = [emp1, emp2, manager];
console.log(employees);
