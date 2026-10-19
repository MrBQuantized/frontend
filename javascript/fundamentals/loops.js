/*

Loops - aa structure that repeats a block of code until a specific condition is met

Types:

    - while-loop - repeats as long as a condition is true.
    - for-loop - used for iterations; repeats a set number of times.
*/

// while
var myArray = []

var i = 0
while(i < 5) {
    myArray.push(i);
    i++;

}
console.log(myArray)

// for loop

var someArray = [];

for (var i = 0; i < 5; i++) {
    someArray.push(i);
}
console.log(someArray)


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
};

var myArray = [ourDog, testObj];
var newArray = [];

console.log(JSON.stringify(myArray, null, 2))

/*
!!! NOTE:

Rule:

    1. for...in = "in" the object/array → gives you keys/indexes
    2. for...of = "of" the object/array → gives you values
*/

for (prop in myArray) {
    newArray.push(prop);
}
console.log(newArray);

for (prop of myArray) {
    newArray.push(prop);
}
console.log(JSON.stringify(newArray, null, 2));

// Counting backwards

var backwards = [];
for (var n = 10; n > 0; n--) {
    backwards.push(n);
}
console.log(backwards);

// Even & Odd

var evenNumbers = [];
var oddNumbers = [];

// even
for (var i = 0; i < 10; i+=2) {
    evenNumbers.push(i);
}
// odd
for (var i = 1; i < 10; i+=2) {
    oddNumbers.push(i);
}
console.log(evenNumbers)
console.log(oddNumbers)



var ourArr = [9, 10, 11, 12]
var ourTotal = 0;

// iterates through the i which < the array length (4)
// ourTotal is then incremented by the value in each iteration
// i.e. 9 + 10 + 11 + 12 = 42
for (var i = 0; i < ourArr.length; i++) {
    ourTotal += ourArr[i];    
}

console.log(ourTotal)


