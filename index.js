console.log("hola amigo ");

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

// Loops
