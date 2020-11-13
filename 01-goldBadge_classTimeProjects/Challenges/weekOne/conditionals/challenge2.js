/*
let myString = "this is a string";
let myNumber = 10
let myBoolean = false;
let myArray = [10, "string", []];
let myObject = {firstKey: "a string"}
let myUndefined = undefined;
myNull = null;

console.log(typeof myBoolean);


/*
CHALLENGE 2
Types Challenge


BRONZE

Create an object that contains a string, number, boolean, and object.
Conole.log the type of one of the values int he object.
*/

let myObject = {
    string:  "String",
    number:  15,
    boolean: true,
    object: {}

}

console.log(typeof myObject.number);

/*
SILVER

Write a conditional that checks the type of one of the values stored in the object and console logs the data type. If the value is not a string, number, boolean, or object console log 'What are you?!'
*/

let value = typeof myObject.undefined;

if (value == "string") {
    console.log("The value is a string") //or 'The value us a ${value}
} else if (value === "number") {
    console.log("The value is a number");
} else if (value === "boolean") {
    console.log("The value is a boolean");
} else if(value === "object") {
    console.log("The value is an object")
} else {
    console.log("What are you?!");
}