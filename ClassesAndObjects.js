"use strict";
//? Classes & Objects
/*************************************************************************/
//! Class definition
class Device {
    constructor() {
        this.name = "LG";
        this.price = 12000;
        this.category = "digital";
    }
}
let tv = new Device();
let monitor = new Device();
// Constructors
class HumanMaker {
    constructor(name, isHandsome, photo) {
        this.name = name;
        this.isHandsome = isHandsome;
        this.photo = photo;
        this.age = 0;
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
    constructor(name, price, color) {
        this.name = name;
        this.price = price;
        this.color = color;
    }
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
    constructor(name) {
        this.name = name;
    }
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
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
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
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}
/*************************************************************************/
//! Getter & Setter
class newUser {
    constructor(_name) {
        this._name = _name;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
}
let user = new newUser("Yash");
user.name = "Rohit";
console.log(user);
/*************************************************************************/
//! Static members
class ToDoApp {
    static getRandomNumber() {
        return Math.floor(Math.random() * 10 + 1);
    }
}
ToDoApp.version = "1.0.0";
console.log(ToDoApp.version);
console.log(ToDoApp.getRandomNumber());
/*************************************************************************/
//! Abstract classes and methods
class Animal {
    move() {
        console.log("Moving...");
    }
}
class Dog extends Animal {
    sound() {
        console.log("Bark");
    }
}
const dog = new Dog();
dog.sound();
dog.move();
