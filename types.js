"use strict";
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
/*************************************************************************/
// number: let a = 1.23
// string: let b = "hello"
// boolean: let c = true
// null:
let d;
// undefined:
let e;
// array:
let array = [1, 2, 3];
// tuple:
let tuple = [1, "hello"];
// enum:
var UserRole;
(function (UserRole) {
    UserRole["ADMIN"] = "admin";
    UserRole["USER"] = "user";
    UserRole["GUEST"] = "guest";
})(UserRole || (UserRole = {}));
UserRole.ADMIN;
var StatusCode;
(function (StatusCode) {
    StatusCode[StatusCode["SUCCESS"] = 200] = "SUCCESS";
    StatusCode[StatusCode["NOT_FOUND"] = 404] = "NOT_FOUND";
    StatusCode[StatusCode["SERVER_ERROR"] = 500] = "SERVER_ERROR";
})(StatusCode || (StatusCode = {}));
StatusCode.SUCCESS;
// any:
let anyValue;
anyValue = 123;
anyValue = "hello";
// unknown:
let unknownValue;
unknownValue = 123;
unknownValue = "hello";
if (typeof unknownValue === "string") {
    unknownValue.toUpperCase();
}
// void: if function returns nothing then use void
function abcd() {
    console.log("hey");
}
// never: if function never returns then use never
function xyz() {
    while (true) { }
}
xyz();
// console.log(abc()); // error
