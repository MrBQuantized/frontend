/*
Constructor Function using class syntax

ESC offers a syntax that helps create objects. This is similar to 
the class syntax in python.

## Old Method:
==============
Constructor function:
    var SpaceShuttle = function(targetPlanet){
        this.targetPlanet = targetPlanet;
    }

Instantiating object:
var zeus = new SpaceShuttle('Jupiter');

*/

// Using Class Syntax:

class SpaceShuttle {
    constructor(targetPlanet){
        this.targetPlanet = targetPlanet; // "this" => "self" in Python.
    }
}

var zeus = new SpaceShuttle('Jupiter');

console.log(zeus.targetPlanet)

function makeClass() {
    class Vegetable {
        constructor(name, color){
            this.name = name;
            this.color = color;
        }
    }

    return Vegetable;
}

const Vegetable = makeClass();
const carrot = new Vegetable('carrot', 'orange')
console.log(carrot.name, carrot.color)


// Getter and Setter Functions
class Book {
    constructor(author) {
        this._author = author;
    }
    // getter
    get writer(){
        return this._author;
    }
    // setter 
    set writer(updatedAuthor){
        this._author = updatedAuthor;
    }
}
const book = new Book("Blessing Onoh")
let author = book.author;
book.author = "Julian";
author = book.author;
console.log(author)


console.log(book._author)

function makeClass2() {
    class Thermostat {
        constructor(temp) {
            this._temp = 5/9 * (temp - 32);
        }
        get temperature(){
            return this._temp;
        }
        set temperature(updatedTemp) {
            this._temp = updatedTemp
        }
    }
    return Thermostat
}

const Thermostat = makeClass2();
const thermos = new Thermostat(76);
let temp = thermos.temperature;
thermos.temperature = 26;
temp = thermos.temperature;

console.log(temp)
