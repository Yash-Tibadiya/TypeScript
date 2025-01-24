//? Type Guards and TypeScript Utility Types
// Using typeof and instanceof
// Partial, Required, Readonly

/*************************************************************************/
//! Type Guards -> typeof
function xy(arg: string | number | any) {
  if (typeof arg === "string") {
    return "number";
  } else if (typeof arg === "number") {
    return "string";
  } else throw new Error("Invalid arguments");
}

console.log(xy(12));
console.log(xy("Yash"));
// console.log(xy(true)); //* error: Invalid arguments

//! Type Guards -> instanceof
class TvRemote {
  switchTvOff() {
    console.log("Switching off TV...");
  }
}

class CarRemote {
  switchCarOff() {
    console.log("Switching off Car...");
  }
}

const Tv = new TvRemote();
const Car = new CarRemote();

function switchOff(device: TvRemote | CarRemote) {
  if (device instanceof TvRemote) {
    device.switchTvOff();
  } else if (device instanceof CarRemote) {
    device.switchCarOff();
  }
}

switchOff(Tv);
switchOff(Car);

/*************************************************************************/
//! Partial
interface User11 {
  name: string;
  age: number;
  email: string;
}

const partialUser: Partial<User11> = {
  name: "John",
  // name, age and email are optional
};

//! Required
interface User22 {
  name?: string;
  age?: number;
  email?: string;
}

const requiredUser: Required<User22> = {
  name: "John",
  age: 30,
  email: "john@example.com",
  // now all properties are required
};

//! Readonly
interface User33 {
    name: string;
    age: number;
    email: string;
}

const readonlyUser: Readonly<User33> = {
    name: "John",
    age: 30,
    email: "john@example.com"
};

// readonlyUser.age = 31; // Error: Cannot assign to 'age' because it is a read-only property.
