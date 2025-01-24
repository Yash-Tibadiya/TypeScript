//? Basic Types :
// primitive types : (number, string, boolean, null, undefined, symbol, bigint)

//? Other :
// Array, Tuple, Enum, any, void, never, unknown
// Object {}, Union |, Intersection &,
// Literal Types, Template Literal Types,
// Type Assertions [(someValue as string) & (<string>someValue)]

// primitive types
let a = 10;
let b = a;
console.log(a); // 10
console.log(b + 2); // 12

// reference types
let x = [1, 2, 3];
let y = x;

y.pop();

console.log(x); // [1, 2]
console.log(y); // [1, 2]