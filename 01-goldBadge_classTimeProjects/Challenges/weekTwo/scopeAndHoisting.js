/*
************
 HOISTING
************

    - hoisting was thought up as a general way of thinking about how our code is compiled and executed.
        - there are two general phases that happen when we run our code:
            - creation phase: any variable (var, let, const) and functions in our code are stored to memory.
            - execution phase: values are assigned to the variables and functions that were stored to memory during the create phase

            (what's on the left side of the = is what's stored to memory during the creation phase) ---> let hoisted = true <--- (the value, or the right side of the =, is what gets assigned during the execution phase - before finally then running our code.)
    
    - Conceptually, pretend that all variable and function declarations are physically moved to the top of your code, and stored away in memory.

    - when our code is read, the file is read top to bottom, line by line, in sequential order. 

    MDN Docs: https://developer.mozilla.org/en-US/docs/Glossary/Hoisting
*/


// goodBye();
// var hello = "hello";

// console.log(hello);

// function goodBye() {
//     console.log("goodbye");
// }

// console.log(name);
// let name = "Nate";


/*
************
  SCOPE
************

    - scope is the hierarchy of variscoables in our code - also commonly referred to as global scope and local scope, or parent scope and child scope. 
        - local scopes have access to global scopes, but not vice versa.

        overall JS document ---> [

                                    let coffeeType = 'dark roast'; <--- parent scope, or global scope. Can be accessed in local scopes
                                    
                                    function exampleFunction() {
                                        let x = 'declared inside function'; <--- x can only be used in exampleFunction. x's scope is local 
                                                                                 to exampleFunction 
                                    }

                                    console.log(x); // error, cannot access x outside of it's scope

                                ]
    

    MDN Docs: https://developer.mozilla.org/en-US/docs/Glossary/Scope
*/

// var coffeeType = "dark roast";

// function exampleFunction() {
//     var coffeeType = "vanilla roast";
//     console.log(coffeeType)
// }

// exampleFunction();
// console.log("Outside the function", coffeeType);

var x = "Nate";

function scope(){
    var x = "world"
    if(true == true){
        var x = "Hello" //try changing this from var to let to see the difference! 
        console.log("From if statement", x); // var scope goes to the nearest FUNCTION block (or curlybois) while SCOPE goes to the nearest block (anytype)
    }
    console.log("From function", x)
}
scope();

console.log("Outside the function", x);