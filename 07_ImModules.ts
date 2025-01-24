// Import functions
import { addPayment, getDetails } from "./07_ExModules";

addPayment(12000);
getDetails();

// Import classes
import ToDoApp from "./07_ExModules";

let app = new ToDoApp("1.0.0");
console.log(app.version);