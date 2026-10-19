// Declaration of String Variables;
var firstName = "Alan";
var lastName = " Walker"

var sum = firstName + lastName;
console.log(sum)


// Escaping Literal Quotes in Strings
// This is done by adding backslash (\) before the quotation marks
var myStr = "I am a \"double quoted\" string inside \"double quotes\"";
console.log(myStr)

// Quoting Strings with Single Quotes - 
// This is a better method  for escaping literal quotes
var myStr1 =  '<a href="http://www.example.com" target="blank">Link</a>';
console.log(myStr1)

//We can even use backticks (``) s that we can use both double and single quotes within our string variable
var myStr2 =  `'<a href="http://www.example.com" target="blank">Link</a>'`;
console.log(myStr2)

/*
==================================
Escape Sequence in Strings
==================================
CODE    OUTPUT
----------------------------------
\'      single quote
\"      double quotes
\\      backslash
\n      newline
\r      carriage return
\t      tab
\b      backspace
\f      form feed
----------------------------------
*/

var myStr3 = "FirstLine\n\t\\SecondLine\nThirdLine";
console.log(myStr3)

// Concatenating Strings
// Using the Plus Operator only
var strConcate= "First String " + "and Second String";

console.log(strConcate)

var myStr = "This is the start. " + "This is the end."
console.log(myStr)

// Using Plus Equals Operator (+=) 
var ourStr = "I come first. "
ourStr += "I come second."
console.log(ourStr)

// Constructing Strings with Variables
var ourName = "Blessing Onoh";
var concateStr = "Hello, my name is " + ourName + ", how are you?";
console.log(concateStr)

// Appending Variables to Strings
var anAdjective = "beautiful!";
var myStr = "The young lady is ";
myStr += anAdjective;

console.log(myStr)

// Length of String

var firstNameLength = 0;
var lastNameLength = 0
var firstName = "Leslie";
var lastName = "Emmanuella";

firstNameLength = firstName.length
lastNameLength = lastName.length


console.log(firstNameLength)
console.log(lastNameLength)

// Bracket Notation — Finding the nth character of a string
// This is similar to indexing in Python

// First character
var myName = "Blessing";

console.log(myName[0])
// OR
firstCharacaterOfMyName = myName[0];
console.log(firstCharacaterOfMyName)


// last character
var goodStr = "Discombobulation";
var LastLetterOfGoodStr = goodStr[goodStr.length - 1];

console.log(LastLetterOfGoodStr)

// nth-to-last character
var secondToLastLetterOfGoodStr = goodStr[goodStr.length - 2];
var thirdToLastLetterOfGoodStr = goodStr[goodStr.length - 3];

// secondToLastLetterOfGoodStr 
// thirdToLastLetterOfGoodStr

console.log(secondToLastLetterOfGoodStr)
console.log(thirdToLastLetterOfGoodStr)

// Word Blanks with a function

function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
    
    var result = "";
    result += "The " + myAdjective + " " + myNoun + " " + myVerb + " to the store "+ myAdverb

    return result;
}

console.log(wordBlanks("dogs", "big", "ran", "quickly."));
console.log(wordBlanks("boys", "little", "hopped", "steadily."));