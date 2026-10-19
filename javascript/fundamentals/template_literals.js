/*
Template Literals — are a  special type of strings that makes creating 
complex strings easier.
They are made using backticks `` in place of quotation marks

Benefits:
1. Allows for creation of multi-line strings
2. It can contain both single and double quotations.

*/

const person = {
    name: "Onoh Blessing",
    age: 56
};

// Template literal with mult-line and string interpolation
// Interpolation → `${...}`
const greeting = `Hello, my name is ${person.name}!
I am ${person.age} years old.`;

console.log(greeting);


// Exercise
const result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["id-blacklist", "no-dup-keys"]
};

function makeList(arr) {
    const resultDisplayArray = [];

    for (let i=0; i < arr.length; i++) {
        resultDisplayArray.push(`<li class="text-warning">${arr[i]}</li>`)
    }
    return resultDisplayArray;
}

const resultDisplayArray = makeList(result.failure);

console.log(JSON.stringify(resultDisplayArray, null, 2))

// Writing Concise Object Literal Declarations using Simple Fields

//Instead of this
// const createPerson = (name, age, gender) => {
//     return {
//         name: name,
//         age: age,
//         gender: gender
//     };
// }

// Do this
const createPerson = (name, age, gender) => ( { name, age, gender});
const someone = createPerson("Blessing Onoh", 26, "male" );
console.log(JSON.stringify(someone, null, 2));

// Concise Declarative Functions
// Objects can contain functions

const bicycle = {
    gear: 2,
    // Instead of this
    // setGear: function (newGear) {
    //     "use strict";
    //     this.gear = newGear;
    // },
    // Do this
    setGear(newGear) {
        "use strict";
        this.gear = newGear;
    }
};

bicycle.setGear(3);
console.log(bicycle.gear)