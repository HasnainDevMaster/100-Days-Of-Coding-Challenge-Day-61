// 100 Days Of Coding Challenge!

/* Day-61 Task: Read the following Articles and Code along with it:

Arrow functions Basics in JavaScript https://javascript.info/arrow-functions-basics

JavaScript specials in JavaScript https://javascript.info/javascript-specials */

//----------------------------------------------------------------------------------

// Arrow Functions Basics in JavaScript

/* Arrow Functions provide a concise way to write functions in JavaScript.
They were introduced in ES6 and have a shorter syntax compared to traditional function expressions. */

// Basic Syntax

// Traditional function
let sumTraditional = function (a, b) {
  return a + b;
};

// Arrow function
let sumArrow = (a, b) => a + b;

/* In the arrow function, the function keyword is omitted, and the arrow (=>) is used.
If the function body contains only a single expression, the braces {} and the return keyword can be omitted. */

//--------------------------------------------------------------------------------------------------------------

/* Single Parameter
If there is only one parameter, the parentheses can be omitted: */

let double = (n) => n * 2;

/* No Parameters
For functions with no parameters, use empty parentheses: */

let sayHi = () => alert("Hello!");

/* Multiline Arrow Functions
For more complex functions with multiple statements, use curly braces and an explicit return statement: */

let sum = (a, b) => {
  let result = a + b;
  return result;
};
