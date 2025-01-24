//? Classes & Objects

/*************************************************************************/
//! Class definition
class Device {
  name = "LG";
  price = 12000;
  category = "digital";
}

let tv = new Device();
let monitor = new Device();

// Constructors
class HumanMaker {
  age: number = 0;
  constructor(
    public name: string,
    public isHandsome: boolean,
    public photo: string
  ) {
    if (!photo) {
      this.photo = "blank.jpg";
    }
  }
}
let human = new HumanMaker("Rohit", true, "");

/*************************************************************************/
//! public, private, protected
// public changeable any where
// private changeable only inside class
// protected changeable only inside class and inheritance

class BottleMaker {
  constructor(
    public name: string,
    private price: number,
    protected color: string
  ) {}
  changingPrice() {
    this.price = 1000;
  }
}

class ColorBottleMaker extends BottleMaker {
  changeColor() {
    this.color = "blue";
  }
}

let bottle = new BottleMaker("viva", 1200, "red");
let newBottle = new ColorBottleMaker("viva", 1200, "red");

// public
bottle.name = "Milton"; // changed

// private
bottle.changingPrice(); // changed
// bottle.price = 1000; // also changed {TS show error}

// protected
newBottle.changeColor(); // changed
// bottle.color = "blue"; // also changed {TS show error}

console.log(bottle);
console.log(newBottle);

/*************************************************************************/
//! Readonly property
class Employee {
  constructor(public readonly name: string) {}

  changeName() {
    // this.name = "Rohit"; // changed but {TS show error}
  }
}

let emp = new Employee("Yash");
emp.changeName();

console.log(emp);

/*************************************************************************/
//! Optional property
class Person {
  constructor(public name: string, public age?: number) {}
}

let person1 = new Person("yash", 20);
let person2 = new Person("Rohit");

console.log(person1);
console.log(person2);

/*************************************************************************/
//! parameter properties
// class Bottle {
//   public name;
//   public price;
//   constructor( name: string, price: number) {
//     this.name = name;
//     this.price = price;
//   }
// }

class Bottle {
  constructor(public name: string, public price: number) {}
}

/*************************************************************************/
//! Getter & Setter
class newUser {
  constructor(public _name: string) {}

  get name() {
    return this._name;
  }
  set name(value: string) {
    this._name = value;
  }
}

let user = new newUser("Yash");
user.name = "Rohit";
console.log(user);

/*************************************************************************/
//! Static members

class ToDoApp {
  static version = "1.0.0";

  static getRandomNumber() {
    return Math.floor(Math.random() * 10 + 1);
  }
}

console.log(ToDoApp.version);
console.log(ToDoApp.getRandomNumber());
