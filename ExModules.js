"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addPayment = addPayment;
exports.getDetails = getDetails;
// Export functions
function addPayment(val) {
    console.log("Payment added...", val);
}
function getDetails() {
    console.log("Payment details...");
}
// Export classes
class ToDoApp {
    constructor(version) {
        this.version = version;
    }
}
exports.default = ToDoApp;
