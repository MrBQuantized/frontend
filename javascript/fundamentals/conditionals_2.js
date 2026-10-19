/*
Conditional (Ternary) Operator

The ternary operator is like a one-line if-else expression.
It's like a comprehension statement in python

The syntax is:
    condition ? statement-if-true : statement-if-false;
    */
   
   function checkEqual(a, b) {
       
       // Instead of this
       // if(a === b) {
        //     return true;
        // }
        // else {
            //     return false;
            // }
            
            // write
    console.log(a === b ? true : false)
    
}
checkEqual(1, 1)        // true
checkEqual(1, 3)        // false


/*
Multiple Conditional (Ternary) Operators

Syntax:
    condition_1 ? statement-if-true : statement-if-false condition_2 ? statement-if-true : statement-if-false...;

*/
function checkSign(num) {
    var ternaryCondition;

    ternaryCondition = num > 0 ? "positive" : num < 0 ? "negative" : "zero";

    console.log(ternaryCondition);
}

checkSign(-1)   // "negative"
checkSign(0)    // "zero"
checkSign(1)    // "positive"


/*
ParseInt / Parsefloat Functions

These functions take a string and returns an integer or a floating-point number
*/

function convertToNumber(str, type) {

    var types = ["int", "float"]

    for (var i = 0; i < types.length; i++) {
        if (types[i] === type) {
            if (type === "int") {
                return parseInt(str)  
            } else {
                return parseFloat(str);
            }
        }
    }
}

console.log(convertToNumber("35.7", "int"))    // 35
console.log(convertToNumber("35.7", "float"))  // 35.7

// parseInt with Radix
// Radix specifies the base of th number in the string
console.log(parseInt("100", 2))
