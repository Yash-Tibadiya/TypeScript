// Interfaces & Type Aliases

// define an interface and use to define a object
interface User {
  id: number;
  name: string;
  email: string;
  gender?: string; // optional
}

function createUser(user: User) {
  // user.id
}
createUser({ id: 1, name: "Yash", email: "test@example.com" });

/*************************************************************************/
// Extend an interface
interface User1 {
  id: number;
  name: string;
  email: string;
}

interface Admin extends User1 {
  admin: boolean;
}

function isAdmin(user: Admin) {
  // user.admin
  // user.id
}

/*************************************************************************/
// 2 or more interfaces with same name are merged into one

interface Abc {
  id: number;
}

interface Abc {
  name: string;
  email: string;
}

function abc(obj: Abc) {
  // obj.id
  // obj.name
  // obj.email
}

/*************************************************************************/
// Type Aliases
 
type sikhya = number | null;
let val: sikhya = 12;
val = null;

function wxyz(obj: sikhya) {
  //...
}
wxyz(12);

/*************************************************************************/
// Union
let ax: string | number;
ax = 12;
ax = "hello";

// Intersection
type Userx = {
  id: number;
  name: string;
  email: string;
}

type Adminx = Userx & {
  getDetails(user: string): void;
}

function abcAdmin(user: Adminx) {
  // user.id
  // user.name
  // user.email
  // user.getDetails
}