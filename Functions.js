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
