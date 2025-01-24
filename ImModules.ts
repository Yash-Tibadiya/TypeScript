// Import functions
import { addPayment, getDetails } from "./ExModules";

addPayment(12000);
getDetails();

// Import classes
import ToDoApp from "./ExModules";

let app = new ToDoApp("1.0.0");
console.log(app.version);