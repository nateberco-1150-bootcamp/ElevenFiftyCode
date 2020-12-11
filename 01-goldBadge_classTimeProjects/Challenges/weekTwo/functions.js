/*
Functions:

-Javascript functions are defined with the function keyword, and can be written as a function declaration or a function expression

-Function declarations are hoisted in our code, and run ONLY when we call them(invoke them)
. So any function in our code sits and waits to be ran until we call it by name. Think of it as a student with his or her hand up, waiting to ask a questions. That student does not ask the questionuntil the teacher calls upon them.

-function expressions are not hoisted, and are generally stored in variables

-function without names are known as anonymous functions
*/

//Function Declaration

// function sayHello(){
//     console.log("Hi");
// }

// sayHello();

// //Functin Expression

// let greetings = function () {
//     console.log("Hello");
// }

// greetings();

/*
Parameters

-Thnk of parameters as a newly declared variable that we have not given a value to yet
    -The value that we pass into our function when we call the function to run (which is known as an argument), is the value that gets assigned to the parameter

    -General naming convention for parameters: the parameter should be named something related to the information we're passing into the function. If we're passing in an integer, we may name our parameter num or number
*/

function myDog(husky) {
    console.log(`My dog's name is ${husky}`);
}

// myDog("Princess"); //"Princess" is the argument
// myDog("Luna");
// myDog(3);

function allMyDogs(smallHusky, bigHusky, borderCollie) {
    console.log(`My dogs are names ${smallHusky}, ${bigHusky}, ${borderCollie}`);
}

allMyDogs("Mira", "Luna", "Charlie");

/*
Return

-functions can also manipulate the data sent to them, and return a new value
*/

function calculator(one, two, three) {
    let totalWeight = one + two + three;
    let average = Math.round(totalWeight / 3);
    return `The average weight is ${average}`;
    
    
}

let averageWeight = calculator(15, 60, 55);
console.log(averageWeight);

/*
Arrow Functions

-Arrow functions (or fat arrow function) were introduced in ES6. They are basically just a more concise wat to write function expressions - NOT declarations.
    -This means that arrow functions do not get hoisted
-There are two types of arrow functions: concise body and block body
    -The return happens automatically with a concise body arrow function
    -The return does not happen automatically with a block body arrow function

*/

//Concise body
// let speak = (name) => console.log(`${name} goes wooooof`);
// speak("Luna");

// let nameJoiner = (first, last) => `${first} ${last}`;
// let fullName = nameJoiner("Nate", "Berco");
// console.log(fullName);

//Block Body
let speak = (name) => {
    console.log(`${name} goes wooooof`)
}

let nameJoiner = (first, last) => {
    return `${first} ${last}`;
}

let fullName = nameJoiner("Nate", "Berco");
console.log(fullName)

// PRACTICE I
// Write a function that takes two parameters  (Length and Width) that returns
// the area of the rectangle.
// Create a variable named area1 and area2 that will call the Function and store its return
// console log the variables
// Example :  4 by 8 rectangle will give  32;


function areaCalculator(length, width){
    let area = length * width;
    return area;
}
let area1 = areaCalculator(5,2);
let area2 = areaCalculator(10,2);

console.log(area1);
console.log(area2);

// Practice II

// Write a function that will convert dog years to human years
// Formula for conversion  - Human Age = (Dog Age -2) x 4 + 21

function dogToHumanYears(dogAge) {
    let humanAge = ((dogAge - 2) * 4 + 21);
    return humanAge;
}
let Brinkley = dogToHumanYears(11);
console.log(Brinkley);
//or use just console.log(dogToHumanYears(11));
