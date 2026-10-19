// Returning Early pattern from functions

function abTest(a, b) {
    
    // Negative numbers are undefined
    if (a < 0 || b < 0) {
        return undefined;
    }

    // Return the square of the sum of the sqrt of a & sqrt of b
    // rounded to the nearest integer.
    return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2))
}

console.log(abTest(-2, 2));
console.log(abTest(4, 6));

// Counting cards

var count = 0;

function cc(card) {
    
    switch(card) {
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            count++;  // increase by
            break;
        case 10:
        case "J":
        case "Q":
        case "K":
        case "A":
            count--;  // decrease by 1
            break;
    }

    var holdbet = 'Hold';
    if (count > 0) {
        holdbet = 'Bet'
    }

    return count + " " + holdbet;

}

// console.log(cc("K"))    // -1 Hold
// console.log(cc("J"))    // -2 Hold
// console.log(cc(2))      // -1 Hold
// console.log(cc(3))      // 0 Hold

// console.log("\n")
cc(2); cc('K'); cc('10'); cc('K');  // +1 - 1 - 1 - 1 - 1 = -3
console.log(cc(4))                           // -3 + 1 =  -2 ; holdbet = 'Hold'

