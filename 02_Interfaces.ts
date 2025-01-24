// Type Interface : typescript automatically "infers"{decide} the type of the variable
let a1 = 12;

// Type annotation
let b1: number;
b1 = 12;

let c: number | string | boolean;
c = 12;
c = "hello";
c = true;