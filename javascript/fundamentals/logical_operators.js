// Comparisons with the Logical AND Operator &&

function testLogicalAnd(val) {

    // Nested if conditiionals
    // if (val <= 50) {
    //     if (val >=25) {
    //         return "Yes";
    //     }
    // }
    
    // with Logical AND operator
    if (val <=50 && val >= 25) {
        return "Yes";
    }
    
    return "No"
}



// Comparisons with the Logical OR Operator ||
function testLogicalOr(val) {

    // Nested if conditiionals
    // if (val < 50) {
    //     return "Outside"
    // }

    // if (val > 20) {
    //     return "Inside";
    // }
    
    // With Logical OR operator
    if (val < 10 || val > 20) {
        return "Outside";
    }
    
    return "Inside"
}

console.log(testLogicalAnd(30))   // Yes
console.log(testLogicalOr(15))    // Inside