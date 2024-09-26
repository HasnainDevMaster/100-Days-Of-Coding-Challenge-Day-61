// 100 Days Of Coding Challenge!

/* Day-61 Task: Read the following Articles and Code along with it:

Arrow functions Basics in JavaScript https://javascript.info/arrow-functions-basics

JavaScript specials in JavaScript https://javascript.info/javascript-specials */

//----------------------------------------------------------------------------------

// JavaScript Specials

// This section covers various fundamental aspects of JavaScript.

/* Code Structure
JavaScript statements are usually separated by semicolons. However,
line breaks can also act as delimiters due to automatic semicolon insertion. */

alert("Hello");
alert("World");

//------------------------------------------------------------------------------------

/* Strict Mode
Using "use strict"; at the beginning of a script or function enables strict mode,
which helps catch common coding mistakes and “unsafe” actions. */

("use strict");
x = 3.14; // This will cause an error because x is not declared

//------------------------------------------------------------------------------------

/* Variables
Variables can be declared using let, const, or var. let and const are block-scoped,
while var is function-scoped. */

let name = "John";
const age = 30;
var city = "New York";

//------------------------------------------------------------------------------------

/* Interaction
Basic UI functions include alert, prompt, and confirm. */

alert("Hello, World!");
let userName = prompt("What is your name?", "Guest");
let isConfirmed = confirm("Are you sure?");

//------------------------------------------------------------------------------------

/* Operators
JavaScript supports various operators, including arithmetic, comparison, logical,
and assignment operators. */

let sum = 5 + 3; // Arithmetic
let isEqual = 5 == "5"; // Comparison
let isTrue = true && false; // Logical
let x = 10;
x += 5; // Assignment

//------------------------------------------------------------------------------------

/* Loops
Common loops include for, while, and do...while. */

for (let i = 0; i < 5; i++) {
  console.log(i);
}

let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}

let j = 0;
do {
  console.log(j);
  j++;
} while (j < 5);

//------------------------------------------------------------------------------------

/* The “switch” Construct
The switch statement is used to perform different actions based on different conditions. */

let day = 2;
switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  default:
    console.log("Another day");
}

//------------------------------------------------------------------------------------------

/* Functions
Functions can be declared using function declarations or function expressions. */

// Function declaration
function greet(name) {
  return `Hello, ${name}`;
}

// Function expression
let greet = function (name) {
  return `Hello, ${name}`;
};
