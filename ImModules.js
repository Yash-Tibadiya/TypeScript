"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Import functions
const ExModules_1 = require("./ExModules");
(0, ExModules_1.addPayment)(12000);
(0, ExModules_1.getDetails)();
// Import classes
const ExModules_2 = __importDefault(require("./ExModules"));
let app = new ExModules_2.default("1.0.0");
console.log(app.version);
