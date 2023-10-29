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
