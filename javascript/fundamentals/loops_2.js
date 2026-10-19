// Nesting for-loops

// An exmaple similar to a factorial
function multiplyAll(arr) {
    var product = 1;

    for (var i=0; i < arr.length; i++) {
        for (var j=0; j < arr[i].length; j++) {
            product *= arr[i][j];
        }
    }

    return product;

}

var product = multiplyAll([[1,2],[3,4,],[5,6,7]])

console.log(product)


/*
Iterate with Do...While Loops

Do while loop is a control flow statement that executes a block of clode
once before testing a boolean condition

*/

var myArray = [];
var i = 10;

do {
    myArray.push(i);
    i++;
} while (i < 5)

console.log(i, myArray);

// Profile Lookup
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]

    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    }
];

// Create a lookup function that returns a the value of a property
// for name and property passed
function lookupProfile(name, prop) {
    
    for (var i = 0; i < contacts.length; i++) {
        if (contacts[i].firstName === name) {
            return contacts[i][prop] || "No such property"
        }
    }

    return "No such contact";
}

var data = lookupProfile("Akira", "number");

console.log(data);