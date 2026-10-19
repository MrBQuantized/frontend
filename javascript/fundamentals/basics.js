// Comments
//  This Single line comments 
/* 
This is a Multi-line comment
*/

/* Data Types:
The different types of data types provided by Java script are:

undefined   - An undefined variable, 
null        - nothing, 
boolean     - True or False
string,     - like strings in python
symbol,     - Single immutable value that is unique
number,     - int, float
object      - stores different key-value pairs
*/

// Declaring variables
/* 
Variables in js are declared using the keywords (var, let, & const)
where:

    var    - is used throughout the program
    let    - only be used within the scope of where it's declared
    const  - An immutable variable
*/

var myName = "Beau"

myName = 8

let ourName = "freeCodeCamp"

const pi = 3.14

// There is difference between variable declaration and assignment
// All lines in js ends with a semi-colon (;)

var a;          // declaration

var b = 2;      // assignment  where '=' is the assignment operator

// console.log(a)
a = 7;

// We can assign the contents of aa variable to another
b = a;

// Displaying the console
// console.log(a)

// Initializing Variables with Assignment Operator

// Initializing variables
var a = 5;
var b = 10;
var c = "I am a";

a = a + 1;
b = b + 5;
c = c + " String!"


console.log(a)
console.log(b)
console.log(c)


// Case Sensitvity in Variables

// Declarations
var SmallVar;
var properString;
var titleCaseOver;

// Assignments
SmallVar = 10;
titleCaseOver = 9000;
properString = "A String";