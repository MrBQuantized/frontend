
// Manipulating complex Objects
// myMusic is an Array [objects]. This is similar to JSON

var myMusic = [
    
    {   // Objects
        "artist": "Billy Joel",
        "title": "Piano Man",
        "release_year": 1973,
        "formats": [ // Inner array
            "CD",
            "8T",
            "LP"
        ],
        "gold": true // boolean
    },
    {
        "artist": "Beau Carnes",
        "title": "Cereal Man",
        "release_year": 2003,
        "formats": [
            "Youtube video"
        ]
    }
    
]

// Accessing Nested Objects

var myStorage = {
    "car": {
        "inside": {
            "glove box": "maps",
            "passenger seat": "crumbs",
        },
        "outside": {
            "trunk": "jack"
        }
    }
};

var gloveBoxContents = myStorage.car.inside['glove box'];
var passengerSeatContents = myStorage.car.inside["passenger seat"];
// string objects with whitespaces must be accessed with bracket notation

console.log(gloveBoxContents)
console.log(passengerSeatContents)

// Accessing Nested Arrays
var myPlants = [
    {
        type: "flowers",
        list: [
            "rose",
            "tulip",
            "dandelion"
        ]
    },
    {
        type: "trees",
        list: [
            "fir",
            "pine",
            "birch"
        ]
    }
];

var secondTree = myPlants[1].list[1];  // returns "pine"

console.log(secondTree)


// Exercise

// Setup
var collection = {
    "2548": {
        "album": "Slippery When Wet",
        "artist": "Bon Jovi",
        "tracks": [
            "Let It Rock",
            "You Give Love a Bad Name"
        ]
    },
    "2468": {
        "album": "1999",
        "artist": "Prince",
        "tracks": [
            "1999",
            "Little Red Corvette"
        ]
    },
    "1245": {
        "artist": "Robert Palmer",
        "tracks": []
    },
    "5439": {
        "album": "ABBA Gold"
    },
    "3124": {
        "artist": "Micheal Jackson",
        "tracks": []
    }
};

// Keep a copy of the collection for tests
var collectionCopy = JSON.parse(JSON.stringify(collection));   // A fancy way of copying the json object

// Only change code below this line
// We are creating a function that updates the collection object above
// based on some conditions
function updateRecords(id, prop, value) {

    // delete collection if value is empty
    if (value === "") {
        delete collection[id][prop];
    // if property is tracks and it exits, set it to itself.
    // If it doesn't exist set it to an empty list
    // and then, append/push the new value to the list
    } else if (prop === "tracks") {
        collection[id][prop] = collection[id][prop] || [];
        collection[id][prop].push(value)
    } else {
        collection[id][prop] = value;
    }

    return collection;
};

// console.log(updateRecords(5439, "artist", "ABBA"))
// console.log(JSON.stringify(updateRecords(5439, "artist", "ABBA"), null, 2))
updateRecords(3124, "tracks", "Billie Jean")
console.log(JSON.stringify(updateRecords(3124, "tracks", "Heal The World"), null, 2))
