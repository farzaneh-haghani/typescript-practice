console.log("Hello");

// annotation
let age: number = 36;
if (age > 30) {
  age -= 10;
}
console.log(age);

// remove annotation
let sales = 123_456_789;
let course = "Typescript";
let is_published = true;

// type any
let level;
level = 1;
level = "any";

// annotation of parameters
function render(document: any) {
  console.log(document);
}

// annotation of array
let numbers = [1, 2, 3];
let anyArr = [];
let numArr: number[] = [];
numArr[0] = 1.635;
numArr[1] = 6.2373;

//methods are related with type
numArr.forEach((num) => console.log(num.toFixed()));

// Tuples for pair values and related method
let user: [number, string] = [1, "Farzaneh"];
console.log(user[0].toString());
console.log(user[1].charAt(1));
//bug
user.push(1);
console.log(user);
