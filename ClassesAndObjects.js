//! Classes & Objects
// Class definition
var Device = /** @class */ (function () {
    function Device() {
        this.name = "LG";
        this.price = 12000;
        this.category = "digital";
    }
    return Device;
}());
var tv = new Device();
var monitor = new Device();
// Constructors
var BottleMaker = /** @class */ (function () {
    function BottleMaker(name, price) {
        this.name = name;
        this.price = price;
    }
    return BottleMaker;
}());
var bottle = new BottleMaker("viva", 1200);
var HumanMaker = /** @class */ (function () {
    function HumanMaker(name, isHandsome, photo) {
        this.name = name;
        this.isHandsome = isHandsome;
        this.photo = photo;
        this.age = 0;
        if (!photo) {
            this.photo = "blank.jpg";
        }
    }
    return HumanMaker;
}());
var human = new HumanMaker("Rohit", true, "");
console.log(human);
