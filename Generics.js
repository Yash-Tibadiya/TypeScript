"use strict";
//? Generics
// we can use generics to pass any type of data like "any"
/*************************************************************************/
//! Generic Function
function logger(value) {
    console.log(value);
}
logger("hello");
logger(123);
logger(true);
logger(null);
logger(undefined);
logger([1, 2, 3]);
logger({ name: "John", age: 30 });
function createUser(obj) {
    console.log(obj.name, obj.age, obj.key);
}
createUser({ name: "Yash", age: 22, key: "12345" });
/*************************************************************************/
//! Generic class
class BottleMakerMachine {
    constructor(ket) {
        this.ket = ket;
    }
}
const bottle1 = new BottleMakerMachine("12345");
const bottle2 = new BottleMakerMachine(12345);
console.log(bottle1, bottle2);
/*************************************************************************/
//! "yash" is string literal on string so it shows error
function ab(a, b) {
    // return "yash";
    // return "yash" as T;
    // return <T>"yash";
    return [a, b];
}
ab("hello", "hey");
