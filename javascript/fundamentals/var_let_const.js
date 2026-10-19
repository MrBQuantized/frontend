/*
## Differences between Var vs Let:

1. Declaration: Unlike "var", "let" doesn't allow declare a variable more than once.

i.e.    let catName = "Tommy";
        let catName = "Beau";   → Error : TypeError: unknown: Duplicate declaration
This prevents us from declaring the variable twice in the same scope.
We could instead override it:
    catName = "Beau"

2. Scope: "var" can be used to declare variables either globally or locally within a function. However "let" is limited to block code or statement it was stated in (preferable in functions)

## "use strict":
This enables strict mode which captures common coding mistakes and unsafe actions
It is used at the top of the JS script or a function;

*/ 
var catName = "Tommy"

function catTalk() {
    "use strict";

    catName = "Oliver";
    var quote = catName + " says Meow!";
    console.log(quote)
}

catTalk();


// Scope of var and let

function checkScope1() {
"use strict";

    console.log("=== Using 'var' keyword ===")
    var i = "function scope";
    if (true) {
        i = "block scope";
        console.log("Block scope i is: ", i);
    }
    console.log("Function scope i is: ", i, "\n");
    // return i;
}

function checkScope2() {
"use strict";

    console.log("=== Using 'let' keyword ===")
    
    let j = "function scope";
    if (true) {
        let j = "block scope";
        console.log("Block scope j is: ", j);
    }
    console.log("Function scope j is: ", j);
    // return j; // this will return the default
}

checkScope1()
checkScope2()

// Declaring a Read-Only variable with the const keyword
// variables declared with "const" cannot be reassigned a value

function printManyTimes(str) {
    "use strict";

    // var sentence = str + " is cool!";

    // // Or using const which will throw an error.
    // // const sentence = str + " is cool!";  
    // sentence = str + " is amazing!";

    // // Print str.length/2 times
    // for (var i = 0; i < str.length; i+=2) {
    //     console.log("\n", sentence); 
    // }

    // Using the most suitable keywords
    // consts and let

    const SENTENCE = str + " is cool!";

    for(let i = 0; i < str.length; i+=2) {
        console.log(SENTENCE)
    }
}

printManyTimes("freeCodeCamp"); 


// Mutating an Array declared with const

const s = [5, 7, 2]

function editInPlace() {
    "use strict";

    // reassignment is possible only with bracket notation
    s[0] = 2;
    s[1] = 4;
    s[2] = 6;

    console.log(s);
}

editInPlace()


// Preventing Object Mutation
function freezeObj() {
    "use strict";

    const MATH_CONSTANTS = {
        PI : 3.14
    };
    // Block reassignment using Object.freeze() method.
    // Object.freeze(MATH_CONSTANTS)
    try {
        MATH_CONSTANTS.PI = 99;
        // overidding won't work
    } catch( ex ) {
        // return the exception statement
        console.log(ex);
    }
    return MATH_CONSTANTS.PI;
}

const PI = freezeObj()
console.log(PI)