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

function test(
  name: string,
  callback: (value1: string, value2: string) => void
) {
  callback("xyz", name);
}
test("Yash", (value1: string, value2: string) => {
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
function abcdef(
  name: string,
  age: number,
  gender: string = "Not Disclosed"
): void {
  console.log(name, age, gender);
}

abcdef("Yash", 21, "male");
abcdef("Meet", 30);

/*************************************************************************/
//! Rest parameters
// ... -> rest/spread

//* Rest parameters
function xyzz(...args: number[]): void {
  console.log(args);
}
xyzz(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

function abc(...args: string[]): void {
  console.log(args);
}
abc("abhay", "bhavik", "chandu", "dev", "eva");

//* Spread operator
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [6, 7, 8, 9, 10];
const arr = [...arr1, ...arr2];
console.log(arr);

/*************************************************************************/
//! Function overloading

function xyy(a: string): void;
function xyy(a: string, b: number): number;

function xyy(a: any, b?: any): number | void {
  if (typeof a === "string" && typeof b === "undefined") {
    console.log(a);
  }
  else if (typeof a === "string" && typeof b === "number") {
    console.log(a,b);
  }
  else throw new Error("Invalid arguments");
}

xyy("Yash");
xyy("Yash", 123);