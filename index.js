console.log("hola");

// variables
const a = 10;
console.log(a); // 10
// a = 12;
// console.log(a); // Error since a is a const and its value cannot change

//console.log(i); // Error since let exists only in block
for (let i = 0; i < 3; i++) {
  console.log(i);
}
//console.log(i); // Error since let exits onlyin block

console.log(j); // Undefined var exists globally
for (var j = 0; j < 3; j++) {
  console.log(j);
}
console.log(j); // 3 var exists globally

//Data Types
dataTypes = [1, "Hola", true, null, undefined]; //** null returns type obejct due to js quirk  */
for (let i = 0; i < dataTypes.length; i++) {
  var type = typeof dataTypes[i];
  console.log(type); // prints the data type of each element
}

//Conditional Statements
var num = 13;

if (num == 0) {
  console.log("The number is zero");
} else if (num % 2 != 0) {
  console.log("It is an odd number ");
} else {
  console.log("It is an even number");
}

//Switch statement
var age = 1;

switch (true) {
  case age < 18:
    console.log("Not eligible for voting");
    break;
  case age >= 18:
    console.log("Eligible to vote");
    break;
  default:
    console.log("Invalid age");
}

// Loops - To find the sum of even numbers below 100

// For loop
var sum_forLoop = 0;
for (let i = 0; i < 100; i = i + 2) {
  sum_forLoop = sum_forLoop + i;
}
console.log("The sum usinf For Loop is " + sum_forLoop);

// while loop
var sum_whileLoop = 0;
let i = 0;
while (i < 100) {
  sum_whileLoop = sum_whileLoop + i;
  i = i + 2;
}
console.log(" The sum using While loop is " + sum_whileLoop);

//Do While
var sum_doWhile = 0;
let k = 0;
do {
  sum_doWhile = sum_doWhile + k;
  k = k + 2;
} while (k < 100);
console.log(" The sum using DoWhile is " + sum_doWhile);

//Array methods
let colours = ["blue", "black", "green", "pink", "yellow"];
colours.push("white"); // Push method adds a new element is the back of the array
console.log(colours);
colours.pop(); // Pop method removes the last element of the array
console.log(colours);
var sliced_array = colours.slice(2, 4); // returns the elements within the set limit of index
console.log(sliced_array);
colours.splice(1, 1, "grey"); // Relaces the said element in the index provided
console.log(colours);
var numbers = [5, 10, 15, 20, 25];
var mapped_numbers = numbers.map((i) => i * 10); // Maps the number using a particular logic here *10
console.log(mapped_numbers);
var filter_numbers = numbers.filter((i) => i > 15); // filter checks for a condition
console.log(filter_numbers);

//JSON - For easy transmission and storage
var jsonString = '{"ID":"3045", "colour":"blue"}';
var parsedJSON = JSON.parse(jsonString);
console.log(parsedJSON.ID); //3045

//Function declaration
function sum(a, b) {
  console.log(a + b);
}
sum(10, 12);

//Function expression - function with an expression
var func = function multiple(a, b) {
  return a * b;
};
console.log(func(10, 3));

// Object
const Book = {
  Name: "To Kill a mocking bird",
  Author: "Harper Lee",
  Edition: 4,
  Quote: function () {
    console.log("It’s a Sin to Kill a Mockingbird");
  },
}; // object creation
console.log(Book.Author); // gives the property Author of the Book
Book.Price = 300; // adds a new property called price
Book.Quote(); // Gives the method Quote of the object Book
