/*
Switch Statement
==================
This is a programming conttrol-flow structure used to execute one block of code 
from multiple coices based on the value of a single expression.

It serves as a cleaner, more readable alternative to long chains of "if-else if-else"
statments when comparing a single-varaible against many distinct, static values.

## Key Components
==================

    case: A label defininng a specific value to compare against the expression,

    break: A keyword that forces the program to exit the switch block
    immediately.

    default: An optional fallback case that runs only if none of the explicit
    case values match the expression, acting like the final "else" in a conditional chain

case: 
*/ 

function caseInSwitch(val) {
    var answer = "";
    
    switch(val) {
        case 1:
            answer = "alpha";
            break;
        case 2:
            answer = "beta";
            break;
        case 3:
            answer = "gamma";
            break;
        case 4:
            answer = "delta";
        default:        
            answer = "Lima";
            break;
        
    } return answer;
}

console.log(caseInSwitch(6))


// Multiple Identical Options in Switch Statements

function sequentialSizes(val) {
    var  result = "unknown";

    switch(val) {
        case 1:
        case 2:
        case 3:
            result = "Low"
            break;
        case 4:
        case 5:
        case 6:
            result = "Mid"
            break;
        case 7:
        case 8:
        case 9 :
            result = "High"
            break;
    }
    return result
}

console.log(sequentialSizes(10))


// Replacing If Else Chains with Switch statements
function chainToSwitch(val) {
    var result = "Nothing";

    // if (val === "bob") {
    //     result = " Marley";
    // } else if (val === 42) {
    //     result = "The Answer";
    // } else if (val === 1 ) {
    //     result = "There is no #1";
    // } else if (val === 99) {
    //     result = "Missed me by this much!";
    // } else if (val === 7) {
    //     result = "Ate Nine";
    // }

    // Replacing with swith statement
    switch (val) {
        case "bob":
            result = " Marley";
            break;
        case 42:
            result = "The Answer";
            break;
        case 1:
            result = "There is no #1";
            break;
        case 99:
            result = "Missed me by this much!";
            break;
        case 7:
            result = " Ate Nine";
            break;
    }

    return result;
}

console.log(chainToSwitch(1))


