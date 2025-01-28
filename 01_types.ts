//? Basic Types :
// primitive types : (number, string, boolean, null, undefined, symbol, bigint)

//? Other :
// Array, Tuple, Enum, any, void, never, unknown
// Object {}, Union |, Intersection &
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

/*************************************************************************/
// number: let a = 1.23
// string: let b = "hello"
// boolean: let c = true

// null:
let d: null;
// undefined:
let e: undefined;

// array:
let array = [1, 2, 3];

// tuple:
let tuple: [number, string] = [1, "hello"];

// enum:
enum UserRole {
  ADMIN = "admin",
  USER = "user",
  GUEST = "guest",
}
UserRole.ADMIN;

enum StatusCode {
  SUCCESS = 200,
  NOT_FOUND = 404,
  SERVER_ERROR = 500,
}
StatusCode.SUCCESS;

// any:
let anyValue: any;
anyValue = 123;
anyValue = "hello";

// unknown:
let unknownValue: unknown;
unknownValue = 123;
unknownValue = "hello";

if (typeof unknownValue === "string") {
  unknownValue.toUpperCase();
}

// void: if function returns nothing then use void
function abcd(): void {
  console.log("hey");
}

// never: if function never returns then use never
// function xyz(): never {
//   while (true) {}
// }
// xyz();
// console.log(abcd()); // error

/*************************************************************************/
//! Literal Types

function combine(
  num1: number | string,
  num2: number | string,
  conversionType: "as-number" | "as-string"
) {
  let result;
  if (conversionType === "as-number") {
    result = +num1 + +num2;
  } else if (conversionType === "as-string") {
    result = num1.toString() + num2.toString();
  }
  return result;
}

const sum1 = combine("30", "26", "as-number");
const sum2 = combine(30, 26, "as-string");
console.log(sum1);
console.log(sum2);
