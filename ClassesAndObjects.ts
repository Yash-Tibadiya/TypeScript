//! Classes & Objects

// Class definition
class Device {
  name = "LG";
  price = 12000;
  category = "digital";
}

let tv = new Device();
let monitor = new Device();

// Constructors
class BottleMaker {
  constructor(public name: string, public price: number) {}
}
let bottle = new BottleMaker("viva", 1200);

class HumanMaker {
  age: number = 0;
  constructor(
    public name: string,
    public isHandsome: boolean,
    public photo: string
  ) {
    if (!photo) {
      this.photo = "blank.jpg";
    }
  }
}
let human = new HumanMaker("Rohit", true, "");
console.log(human);
