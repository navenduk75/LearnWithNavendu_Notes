//Inheritance in JavaScript using
//1. classes
//2. prototype chaining

//1. empty object gets created
//2. "this" points to empty object
//3. constructor is called

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

class Manager extends Employee {
  terminateEmployee(emp) {
    employees = employees.filter((e) => e.name != emp.name);
  }
}

let emp1 = new Employee("John");
let emp2 = new Employee("Amit");
let manager = new Manager("Ashish");

let employees = [emp1, emp2, manager];
console.log(employees);

manager.terminateEmployee(emp2);
console.log(employees);
