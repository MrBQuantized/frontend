/*
Arrow functions are used to write concise anonymous functions:
These functions are similar to lambda functions in python

Syntax:
Instead of:
    var myVariable = function() {
        return new Date();
    }  
write:
    var myVariable = () => new Date();
    
And with arguments:
    var myVariable = (arr1, arr2) => arr1.concat(arr2);

They also work with higher order functions such as map, filter, & reduce.
They take functions as arguments for parsing collections of data.

*/

const myConcat = (arr1, arr2) => arr1.concat(arr2);

console.log(myConcat([1, 2], [3, 4, 5]));

// Higher Order Functions
const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];

// Update this function using filter and map to
// return the square of all positive integers in the array.
// const squareList = (arr) => {
//     const squaredIntegers = arr;
//     return squaredIntegers;
// }
const squareList = (arr) => {
  const squaredIntegers = arr
    .filter((num) => Number.isInteger(num) && num > 0)
    .map((x) => x * x);
  return squaredIntegers;
};

const squaredIntegers = squareList(realNumberArray);
console.log(squaredIntegers);

// Using default values for parameters;
// local function
const increment = (function () {
  return function increment(number, value = 1) {
    return number + value;
  };
})();

console.log(increment(5, 2)); // increases by 2
console.log(increment(5)); // increases by 1

// Or even more concisely
const increase = (number, value = 1) => number + value;

console.log(increase(5, 2));
console.log(increase(5));

/* 
Rest Operator

This operator, (...args) allows you to create a function that takes a variable
number of arguments. Similar **kwargs in Python
*/

const sum = (...args) => args.reduce((a, b) => a + b, 0);

console.log(sum(1, 2, 3, 4));

/*
Spread Operator [...]


- This one takes an array and spreads out into the individual items
- Can only be used in a function's argument or array literal.
- Similar to unpacking operator in python (**)
*/

const arr1 = ["JAN", "FEB", "MAR", "APR", "MAY"];
let arr2;
(function () {
  arr2 = arr1; // this is not a copy but pointer to the variable arr1
  // let's update it to copy using the spreadout operator
  arr2 = [...arr1];
  arr1[0] = "potato";
})();
console.log(arr2);
