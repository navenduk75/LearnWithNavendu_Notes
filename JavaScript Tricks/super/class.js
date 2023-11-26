class Employee {
  constructor(name) {
    this.name = name;
    this.inOffice = false;
  }

  login() {
    this.inOffice = true;
    console.log(`${this.name} is in office`);
  };

  logout() {
    this.inOffice = false;
    console.log(`${this.name} is NOT in office`);
  }
}
Employee.prototype.companyName = "Microsoft Corporation";

class Manager extends Employee {
  constructor(name, level) {
    //must be the first line.
    //super() must be called before you can use 'this'.
    super(name);

    this.level = level;
  }

  login() {
    console.log("Alert: Manager in office");
    super.login();
  }

  logout() {
    console.log("WOW: Manager out of office. Enjoy");
    super.logout();
  }
}

let john = new Employee("John");
let amit = new Employee("Amit");
let ashish = new Manager("Ashish", 2);

console.log(john);
console.log(amit);
console.log(ashish);
