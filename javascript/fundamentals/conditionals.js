/*
Conditional Logic with If statements
If statements are used to make decisions

In If statements, there's always a parathesis after the if keyword.
This parenthesis wrappes the condition
*/ 

function ourTrueOrFalse(isItTrue) {
    
    if (isItTrue) {
        return "Yes, it's true";
    }
    return "No, it's false";
}


function trueOrFalse(wasthatTrue) {
    
    if (wasthatTrue) {
        return "Yes, it was true";
    }
    return "No, it was false";
}

console.log(ourTrueOrFalse(true))
console.log(trueOrFalse(false))

/*
Comparison with the equality operator

The equality operator (==) compares two values and returns true if they are equivalent or false if they are not.

*/ 
function testEqual(val) {
    if (val == 10) {
        return "Equal";
    }
    return "Not Equal";
}

console.log(testEqual(10))


/* 
Comparison with the strict equality operator

the strict equality operator (===) is the same as the equality operator (==) but it also checks for data type.

3 === 3 // true
3 === "3" // false

*/
function testStrict(val) {
    if (val === 3) {
        return "Equal";
    }
    return "Not Equal";
}

console.log(testStrict(7));

function comapreEquality(a, b) {
    if (a == b) {
        return "Equal";
    }
    return "Not Equal";
}

console.log(comapreEquality(10, "10"))  // true because the data type is not checked

/*
Inequality operator (!=) is the opposite of the equality operator (==). It returns true if the values are not equal and false if they are equal.

Strict Inequality operator (!==) is the same as the strict equality operator (===) but it checks for both value and data type.
*/ 

// Inequality operator
function testInEquality(val) {
    if (val != 99) {
        return "Not Equal";
    }
    return "Equal";
}

// Strict Inequality operator
function testStrictInEquality(val) {
    if (val !== 99) {
        return "Not Equal";
    }
    return "Equal";
}

console.log(testInEquality(99))    // false because 99 is equal to 99
console.log(testInEquality("99"))    // false because 99 is equal to 99 (type is not checked)
console.log(testStrictInEquality(10))         // true because 10 is not equal to 99
console.log(testStrictInEquality("99"))         // true because "99" is not equal to 99 (different type)


// Comparison operators (>, <, >=, <=)
//Less than
function testLessThan(val) {
    if (val < 2) {
        return "Less Than 2";
    }
    return "Not Less Than 2";
}
function testGreaterThan(val) {
    if (val >2) {
        return "Greater Than 2";
    }
    return "Not Greater Than 2";
}

function testLessthanOrEqualTo(val) {
    if (val <= 2) {
        return "Less Than or equal to 2";
    }
    return "Not Less Than or equal to 2";
}

function testGreaterthanOrEqualTo(val) {
    if (val >= 2) {
        return "Greater Than or equal to 2";
    }
    return "Not Greater Than or equal to 2";

}
console.log(testLessThan(2))
console.log(testGreaterThan(6))
console.log(testLessthanOrEqualTo(4))
console.log(testGreaterthanOrEqualTo(4))


// Else Statements

function testElse(val) {
    var result = "";

    if (val > 5) {
        result = val + " Bigger than 5"
    } else{
        result = "5 is Smaller than " + val
    }
    return result
}


console.log(testElse(3))


function testElseIf(val) {
    var grade;

    if (val >= 80) {
        grade = "A";
    } else if (val >= 70 ) {
        grade = "B";
    } else if (val >= 60) {
        grade = "C";
    } else if (val >= 45) {
        grade = "D";
    } else {
        grade = "F";
    }
    return grade;     // always ensuret to use the return keyword at end
}

console.log(testElseIf(75));   // B
console.log(testElseIf(7));    // F
console.log(testElseIf(46));   // D


// Logical Order in If Else Statements
function orderMyLogic(val) {
    if (val < 5) { // The order matters here.
        return "Less than 5"; // the first condition will execute in this case ignoring the rest (if the value is < 5)
    } else if (val < 10) {  // executes only if val < 10
        return "Less than 10";
    } else {
        return "Greater than or equal to 10";
    }
}
console.log(orderMyLogic(6))


// Chaining If statements
function  testSize(num) {
    if (num < 5) {
        return "Tiny";
    } else if (num < 10) {
        return "Small";
    } else if (num < 15) {
        return "Medium";
    } else if (num < 20) {
        return "Large";
    } else {
        return "Huge";
    }
}

console.log(testSize(40))

// Golf code
var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
    if (strokes == 1) {
        return names[0];
    } else if (strokes <= par - 2) {
        return names[1];
    } else if (strokes == par - 1) {
        return names[2];
    } else if (strokes == par) {
        return names[3];
    } else if(strokes == par + 1) {
        return names[4];
    } else if (strokes == par + 2) {
        return names[5]
    } else if (strokes >= par + 3) {
        return names[6]
    }
}

console.log(golfScore(5, 4));

