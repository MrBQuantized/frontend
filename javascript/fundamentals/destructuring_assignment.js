/*
Destructuring Assignment

- This is a JS syntax feature that unpacks values from arrays or    `   properties from objects into separate variables

Array Destructuring
- Position-based: values are assigned based on the order of items in the array:
    const: [x,y,z] = [1,2,3]

- Skippin items: use extra commas to ignore specifi elements you don't want to specify
    const: [x,,y,,,z,] = [1,2,3,4,5,6];    x = 1, y = 3, z = 6

- Rest syntax- gather remaining items into a new array using ...rest.

Object Destructuring
- Key-based: Properties are unpacked by matching the exact variable name to the object key
- New variable names: Assign a property to a different varaible using a colon :
- Default values: Set a fallback value if a property does not exist on the object.

    { property : new_sub_property } = value; 
    { property : { sub_property : new_sub_property} } = value;   // nested object destructuring 
*/

// Objects
var voxel = {x: 3.6, y: 7.4, z: 6.54}

// Old method
var x = voxel.x; 
var y = voxel.y;
var z = voxel.z;

// With destructuring
const {x : a, y : b, z : c } = voxel; // assign a, b, and c to the values of x, y, z

console.log("a: ", a)
console.log("b: ", b)
console.log("c: ", c)

const AVG_TEMPERATURES = {
    today: 77.5,
    tomorrow: 79
}


function getTempOFTmrw(avgTemperatures) {
    "use strict";
    
    const { tomorrow : tempOfTomorrow } = avgTemperatures;
    console.log("Tomorrow's temperature: ", tempOfTomorrow + "°F") ;
}

getTempOFTmrw(AVG_TEMPERATURES)

// Nested Objects { property : { sub_property : new_sub_property} }

const LOCAL_FORECAST = {
    today: { min: 72, max: 83 },
    tomorrow: { min: 73.3, max: 84.6 }
};

function getMaxOfTmrw(forecast) {
    "use strict";

    // nested destructuring
    const { tomorrow : { max : maxOfTomorrow } } = forecast;

    console.log("Tomorrow's forecast: ", maxOfTomorrow + "°F")
}

getMaxOfTmrw(LOCAL_FORECAST)

// Arrays
const [x1, y1, , z1] = [1,2,3,4,5]; //  x1=1, y1=2, (skip ,) z1= 4
console.log(x1, y1, z1)

// switching positions of variables 
let m = 8, n = 6; 
console.log("Before Switcing: ", "m: ", m, " and n:", n);
(() => {
    "use strict";
    [m, n] = [n, m]
}) ();
console.log("After Switcing: ", "m: ", m, " and n:", n);

// Using Rest Operator
const source = [1,2,3,4,5,6,7,8,9,10];

// Let's return a copy of the array with the first two items removed
const removedFirstTwo = (
    (list) => {
        const [ , , ...arr] = list;
        return arr;
});

console.log(source)
console.log(removedFirstTwo(source));

// Passing an Object as a function's parameters
// Commonly used in api calls

const stats = {
    max: 56.78,
    standard_deviation: 4.34,
    median: 34.54,
    mode: 23.87,
    min: -0.75,
    average: 35.85
};
const half = (function() {

    return function half({ max, min }) {
        return (max + min) / 2.0;
    };

})();
console.log(JSON.stringify(stats, null, 2));
console.log(half(stats));