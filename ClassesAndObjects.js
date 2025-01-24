//? Classes & Objects
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//! Class definition
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
//! public, private, protected
// public changeable any where
// private changeable only inside class
// protected changeable only inside class and inheritance
var BottleMaker = /** @class */ (function () {
    function BottleMaker(name, price, color) {
        this.name = name;
        this.price = price;
        this.color = color;
    }
    BottleMaker.prototype.changingPrice = function () {
        this.price = 1000;
    };
    return BottleMaker;
}());
var ColorBottleMaker = /** @class */ (function (_super) {
    __extends(ColorBottleMaker, _super);
    function ColorBottleMaker() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ColorBottleMaker.prototype.changeColor = function () {
        this.color = "blue";
    };
    return ColorBottleMaker;
}(BottleMaker));
var bottle = new BottleMaker("viva", 1200, "red");
var newBottle = new ColorBottleMaker("viva", 1200, "red");
// public
bottle.name = "Milton"; // changed
// private
bottle.changingPrice(); // changed
// bottle.price = 1000; // also changed {TS show error}
// protected
newBottle.changeColor(); // changed
// bottle.color = "blue"; // also changed {TS show error}
console.log(bottle);
console.log(newBottle);
//! Readonly property
var Employee = /** @class */ (function () {
    function Employee(name) {
        this.name = name;
    }
    Employee.prototype.changeName = function () {
        this.name = "Rohit"; // changed but {TS show error}
    };
    return Employee;
}());
var emp = new Employee("Yash");
emp.changeName();
console.log(emp);
