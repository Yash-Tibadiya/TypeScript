//? Type Assertion, Type Casting, Non-null Assertion

/*************************************************************************/
//! Type Assertion

let n: any = 12;

//* n is number so it shows error but it gives all string methods
// console.log((n as string).length);
console.log(n as Number);

/*************************************************************************/
//! Type Casting

let n1 = Number("12");
console.log(n1 , typeof n1);

/*************************************************************************/
//! Non-null Assertion

let n2: null | undefined | string;
n2 = "hello";

let n3 = n2!.toUpperCase();
console.log(n3);
