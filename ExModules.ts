// Export functions
export function addPayment(val: number): void {
  console.log("Payment added...", val);
}

export function getDetails() {
  console.log("Payment details...");
}

// Export classes

export default class ToDoApp {
  constructor(public version: string) {}
}