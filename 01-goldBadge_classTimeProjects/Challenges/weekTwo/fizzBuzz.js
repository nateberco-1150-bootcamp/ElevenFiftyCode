
/*
    Challenge:
    Bronze:
    Create a variable named FB that takes numbers
    Write an ELSE/IF conditional that: 
    Prints out "Fizz" if the number is divisible by 3
    Prints out "Buzz" if the number is divisible by 5
    Prints out "Fizz Buzz" if the number is divisible by BOTH 3 and 5
    
    Silver: Convert this to SWITCH STATEMENT 
    
    Gold: Convert to a TERNARY
    Resources: https://www.w3schools.com/js/js_arithmetic.asp
               https://dj1hlxw0wr920.cloudfront.net/userfiles/wyzfiles/b410fcc6-7a7b-45a0-81b9-354423866db9.gif
*/

// let FB = 3

// if (FB % 3 === 0 && FB % 5 === 0) {
//     console.log('Fizz Buzz')
// } else if (FB % 3 === 0){
//     console.log('Fizz')
// } else if (FB % 5 === 0){
//     console.log('Buzz')}

               
// let FB = 3

// if (FB % 3 == 0 && FB % 5 == 0){
//     console.log('Fizz Buzz')
// } else if (FB % 3 == 0){
//     console.log('Fizz')
// } else if (FB % 5 == 0){
//     console.log('Buzz')
// }

// let FB = 15
// switch (FB){
//     case  (FB % 3 == 0 && FB % 5 == 0) :
//         console.log('Fizz Buzz');
//         break;
//     case  FB % 3 == 0 :
//         console.log('Fizz');
//         break;
//     case (FB % 5 == 0):
//         console.log('Buzz');  
// }

//BAD
// let FB = 15;

// FB % 3 == 0 && FB % 5 == 0 ? console.log('Fizz Buzz') :
// FB % 3 == 0 ? console.log('Fizz') :
// FB % 5 == 0 ? console.log('Buzz')

/*
------------------------------------------------------------------------------------------------
InstructorChode
*/

let FB = 15;

// if(FB % 3 == 0 && FB % 5 == 0) {
//     console.log("Fizz Buzz");
// } else if (FB % 3 == 0) {
//     console.log("Fizz");
// } else if (FB % 5 == 0) {
//     console.log("Buzz");
// }

let isDivisibleBy5and3 = FB % 3 == 0 && FB % 5 ==0;
let isDivisibleBy3 = FB % 3 == 0;
let isDivisibleBy5 = FB % 5 == 0;

console.log(isDivisibleBy5and3);

switch(true){
    case FB % 15 == 0:
        console.log('Fizz Buzz');
    break;
    case FB % 3 == 0:
        console.log('Fizz');
        break;
        case FB % 5 ==0:
            console.log('Buzz');
            break;
            default:
                console.log('Not Fizz or Buzz');
}

// ELSE/IF
let FB = 15;
if (FB % 3 === 0 && FB % 5 === 0) {
    console.log('Fizz Buzz');
} else if (FB % 5 === 0) {
    console.log('Buzz');
} else if (FB % 3 === 0) {
    console.log('Fizz');
}
// SWITCH
let FB = 30;
switch (true) {
    case (FB % 3 === 0 && FB % 5 === 0):
        console.log('Fizz Buzz');
        break;
    case (FB % 5 === 0):
        console.log('Buzz');
        break;
    case (FB % 3 === 0):
        console.log('Fizz');
        break;
}
// TERNARY
let FB = 30;
(FB % 3 === 0 && FB % 5 === 0) ? console.log('Fizz Buzz') : (FB % 5 === 0) ? console.log('Buzz') : (FB % 3 === 0) ? console.log('Fizz')