//super
class Employee {
  constructor(name) {
    this.name = name;
    this.inOffice = false;
  }

  login() {
    this.inOffice = true;
    console.log(`${this.name} is in office`);
  }

  logout() {
    this.inOffice = false;
    console.log(`${this.name} is NOT in office`);
  }
}
Employee.prototype.companyName = "Microsoft Corporation";

class Manager extends Employee {
  constructor(name, level) {
    super(name);

    this.level = level;

    console.log(super.companyName);
  }

  login() {
    console.log("ALERT: Manager is in office.");
    super.login();
  }
}

let emp1 = new Employee("John");
let emp2 = new Employee("Amit");
let manager = new Manager("Ashish", 2);

console.log(emp1);
console.log(emp2);
console.log(manager);
