/* Writing Reusable Code with functions

In Javascript, functions are defined with the function keyword, followed by the 
function_name(). The function's code block is enclosed by a pair of curly braces {}
instead of semicolon :. 

*/
// defining the function
function ourReusableFunction() {
    console.log("This is a function that prints a statement");
}     // all codes are enclosed by the curly braces

// calling the function
ourReusableFunction();

// Just like python the function can contain arguments and parameters

function subtraction(a, b) {
    console.log(a - b);
}
function addition(a, b) {
    console.log(a + b);
}

subtraction(1, 5)
addition(10, 5)


/* 
# Global Scope and Functions
=============================

Scope - refers to the visibility of variables

Types
1. Global scope - pertaining to variables declared outside of a function block. They can be seen everywhere iin your javascript.
2. Local Scope - pertaining to variables declared withina function block

It possible to have global and local variables with the same name. 
The local variable takes precedence in this case.
*/
// Example
var myGlobal = 10; // global variable

// Function1
function fun1() {
    // local varible
    let oopsGlobal = 5;

    console.log(oopsGlobal)

}


// Function2
function fun2() {
    var output = " ";
    if (typeof myGlobal != "undefined") {
        output += "myGlobal: " + myGlobal;
    }
    if (typeof oopsGlobal != "undefined") {
        output += 'myGlobal: ' + oopsGlobal;
    }
    console.log(output)
}

fun1();
fun2();

var outerWear = "T-shirt"

function myOutFit() {
    
    let outerWear = '\nMy application'
    return outerWear; 
}
// Just like in python, when the return keyword is used, the function
// is called by logging it with console.log(function())
console.log(myOutFit());   // local variable takes precedence
console.log(outerWear);  // the global variable is seen everywhere


// Understanding undefined value returned from a function

var sum = 0;

function addThree() {
    sum += 3;   
    // return value missing
}
addThree() // nothing will be returned because there's no return value

function change(num) {
    return (num + 5) / 3;

}

changed = change(10)
console.log("The new value is: ", changed)

/*
Stand in Line: 
In Computer Science, a queue is an abstract data structure where items
are kept in order. New items can be added to the back and old items, from the front.
*/
console.log("")

// We want to create a function that apppends an item to the end 
// of the array, removes the first item and then, return the new array.
function nextInLine(arr, item) {
    
    // append item to the end of list
    arr.push(item);

    // remove the first item from the list and return it
    return arr.shift();
}
var testArr = [1,2,3,4,5];    // array

console.log("Before: " + JSON.stringify(testArr)); 
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr))


// Returning Boolean Values from functions

function isLess(a, b) {
    // Return the value directly
    return a < b;
}

console.log(isLess(1, 2))      // true
console.log(isLess(3, (-1)))   // false
