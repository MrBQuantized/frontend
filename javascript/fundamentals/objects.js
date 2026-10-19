/*
JavaScript Objects:

These are similar to arrays, but instead of using indexes to access data,
you make use of properties (keys). and they are enclosed in curly braces "{}".
They'area just like dictionaries in python. You can store different
data types.

Data is accessed using either:
    dot (.) notation :  object.property
    bracket notation:   object["property"]

*/ 

var ourDog = {
    "name": "Camper",
    "legs": 4,
    "tails": 1,
    "friends": ["everything!"]
};

var testObj = {
    "hat": "ballcap",
    "shirt": "jersey",
    "shoes": "cleats"
}

console.log(ourDog["legs"])  // dot notation.
console.log(testObj.shoes)

// Accessing object properties with variables

var testObj2 = {
    12: "Namath",
    16: "Montana",
    19: "Unitas"
};

// Set a variable to be one of the values of testObj2
var playerNumber = 16;    // variable set toone of the variables in testObj2
var player = testObj2[playerNumber];   // bracket notation using the new variable set to one of the properties.

console.log(player)   

// Updating Object Properties
var myDog = {
    "name": "Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers", "Khan Academy"]
}
console.log("Before: ", myDog.name)

// Update name in myDog
myDog.name = "Julian";
console.log("After: ", myDog.name)


// Can also index dotted properties that are arrays.
console.log(myDog.friends[1])     // returns "Khan Academy"

// Adding New Properties to an Object
// bark
console.log("Before: ", JSON.stringify(myDog))
myDog.bark = "Woof woof!"
myDog["color"] = "grey;"
console.log("After: ", JSON.stringify(myDog))

// Deleting properties using the delete keyword
console.log("\nBefore: ", JSON.stringify(myDog))
delete myDog.bark
console.log("After: ", JSON.stringify(myDog))


// Using Objects for Lookups
// Setup
function phoneticLookup(val) {
    var result = "";

    // We can replace this with objects
    // switch(val) {
    // case "alpha":
    //     result = "Adams";
    //     break;
    // case "bravo":
    //     result = "Boston";
    //     break;
    // case "charlie":
    //     result = "Chicago";
    //     break;
    // case "delta":
    //     result = "Denver";
    //     break;
    // case "echo":
    //     result = "Easy";
    //     break;
    // case "foxtrot":
    //     result = "Frank";
    //     break;
    // }

    // Replacing with objects
    var lookup = {
        "alpha":    "Adams",
        "bravo":    "Boston",
        "charlie":  "Chicago",
        "delta":    "Denver",
        "echo":     "Easy",
        "foxtrot":  "Frank"
    };

    result = lookup[val];

    return result;
}

console.log(phoneticLookup("alpha"));
console.log(phoneticLookup("bravo"));
console.log(phoneticLookup("charlie"));

// Testing Objects for Properties
// We can check if objects have properties using teh hasown() method

var myObj = {
    gift: "pony",    // porperty names can be written without quotes
    pet: "kitten",
    bed: "sleigh"
};


/*
!! NOTE:

Rule to Remember

for Fixed Property, use dot notation:
    e.g myObj.gift

For Property name in a variable, use bracket notation:
    e.g. myObj[checkProp]
*/

function checkObj(checkProp) {

    if (myObj.hasOwnProperty(checkProp)) {
        return myObj[checkProp];     // Property name (variable)
    } else {
        return "Not Found";
    }
}

console.log(checkObj("gift")); 
console.log(checkObj("hello!")); 

