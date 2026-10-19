/*
Arrays allow you to store several pieces of data. 
*/

var ourArray = ["John", 23];
console.log(ourArray)

// Nested / multi-dimensional arrays
var myArray = [["the universe", 42], ["everything", 20181091765]];
console.log(myArray)


// Indexing / Bracket Notation
var data = myArray[0][0];
console.log(data)
// You can just inde directly
console.log(myArray[1])         // return the 2nd item of myArray       
console.log(myArray[0][1])      // return the 2nd item of the 1st item of myArray


// Modify Array Data with Indexes 
var originalArray = [18,64,99];

console.log(originalArray)
// New variables
var firstItemOfArray = originalArray[0];
var secondItemOfArray = originalArray[1];
var thirdItemOfArray = originalArray[2]
var forthItemOfArray = originalArray[3]

// Reassignment
firstItemOfArray = 1;
secondItemOfArray = 2;
thirdItemOfArray = 3; 
forthItemOfArray = 4;

// console.log(firstItemOfArray)
// console.log(secondItemOfArray)
// console.log(thirdItemOfArray)
// console.log(forthItemOfArray)

// Access Multi-Dimensional Arrays with Indexes
var longArray = [[1,2,3], [4,5,6], [7,8,9], [[10,11,12]],13, 14];

var firstOfFirst = longArray[0][0]  // first number in the first array Item
console.log(firstOfFirst)
var thirdOfSecondOfThird = longArray[3][0][2];
console.log(thirdOfSecondOfThird)

// Manipulating Arrays 
// push() (Same as append() in Python) but returns the new length of the array and not the array
var newlongArray = longArray.push(["Mountain", 10]) // appends to th end
console.log(newlongArray)
console.log(longArray[6])

// pop() same with Python: removes item at the end of array and returns it
var removedFromArray = longArray.pop();
console.log('\n')
console.log(longArray)
console.log(removedFromArray)

// shift(): opposite of pop(); removes the first item and returns it
var oneArray = ["Stimpson", "Cain"]

var removeFromOneArray = oneArray.shift();
console.log(removeFromOneArray)
// unshift(): opposite of push(); appends item to the begining of the array and returns the new length
oneArray.shift()
console.log(oneArray.unshift(["Magnanimous", 90]));
console.log(oneArray)

