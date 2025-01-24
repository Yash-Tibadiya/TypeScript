//? Generics

// we can use generics to pass any type of data like "any"

/*************************************************************************/
//! Generic Function
function logger<T>(value: T): void {
  console.log(value);
}

logger("hello");
logger(123);
logger(true);
logger(null);
logger(undefined);
logger([1, 2, 3]);
logger({ name: "John", age: 30 });

/*************************************************************************/
//! Generic Interface

interface user<T> {
  name: string;
  age: number;
  key: T;
}

function createUser(obj: user<string>): void {
  console.log(obj.name, obj.age, obj.key);
}
createUser({ name: "Yash", age: 22, key: "12345" });

/*************************************************************************/
//! Generic class

class BottleMakerMachine<T> {
  constructor(public ket: T) {}
}

const bottle1 = new BottleMakerMachine<string>("12345");
const bottle2 = new BottleMakerMachine<number>(12345);

console.log(bottle1, bottle2);

/*************************************************************************/

//! "yash" is string literal on string so it shows error

function ab<T>(a: T, b: T): T[] {
  // return "yash";
  // return "yash" as T;
  // return <T>"yash";
  return [a, b];
}
ab("hello", "hey");
