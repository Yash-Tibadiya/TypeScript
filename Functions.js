"use strict";
//? Functions
/*************************************************************************/
//! Types of Function
//* simple function
// function greet(name) {
//   return `Hello, ${name}`;
// }
//* variabl function
// const greet = function (name) {
//   return `Hello, ${name}`;
// };
//* arrow function
// const greet = (name) => `Hello, ${name}`;
//* Anonymous Functions
// setTimeout(function() {
//   console.log('This is an anonymous function!');
// }, 1000);
//* Immediately Invoked Function Expression (IIFE)
// (function () {
//   console.log("This is an IIFE!");
// })();
//* Async Functions
// async function fetchData() {
//   const response = await fetch('https://api.example.com/data');
//   const data = await response.json();
//   return data;
// }
/*************************************************************************/
//! Function types
// function test(): string {
//   return "test";
// }
// function test(): void {}
function test(name, callback) {
    callback("xyz", name);
}
test("Yash", (value1, value2) => {
    console.log(value1);
    console.log(value2);
});
/*************************************************************************/
//! Optional parameters and default parameters
//* Optional parameters
// function abcdef(name: string, age: number, gender?: string): void {
//   console.log(name, age, gender);
// }
//* Default parameters
function abcdef(name, age, gender = "Not Disclosed") {
    console.log(name, age, gender);
}
abcdef("Yash", 21, "male");
abcdef("Meet", 30);
/*************************************************************************/
//! Rest parameters
// ... -> rest/spread
//* Rest parameters
function xyz(...args) {
    console.log(args);
}
xyz(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
function abc(...args) {
    console.log(args);
}
abc("abhay", "bhavik", "chandu", "dev", "eva");
//* Spread operator
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [6, 7, 8, 9, 10];
const arr = [...arr1, ...arr2];
console.log(arr);
