//[[Prototype]] and __proto__

// class Person {
//   constructor(name) {
//     this.name = name;
//   }
// }

function Person(name) {
  this.name = name;
}

const person1 = new Person("John");
console.log(person1);
console.log(Object.getPrototypeOf(person1));
console.log(Object.getPrototypeOf(person1) === person1.__proto__);
console.log(Person.prototype);
