/*
Arrays

    -Arrays are used to store multiple values in a single variable
        -there are array methods that allow us to traverse, as well as mutate, the data being held by an array
        
    -Arrays are 0 indexed, meaning the first item in an array will have an index of 0, and the last item will have an index of the array length -1


*/

let arr = ["This is the first element", "This is the second element", "This is the third element", "This is the fourth element"];

console.log(arr[0]);
console.log(arr[arr.length - 1]); //always logs the last element

//This is the Array class constructor
let test = new Array(3); //3 empty items if only 1 number (3)

test[0] = "did it work?"
console.log(test);

let test2 = new Array(1,2,3,4); //creates it with these numbers if more than one number
console.log(test2);


//forEach method - Executes the supplied function for each element in the array
let boardGames = ['Monopoly', 'Clue', 'Risk', 'Candy Land', 'Catan'];

// for (let i = 0; i < boardGames.length; i++){
//     console.log(boardGames[i]);
// }

//***note- block body does not return automatically, concise body does */

//blockbody
// boardGames.forEach(game => {
//     console.log(game)
// }) 

//concisebody 
// boardGames.forEach(game => console.log(game)); 

//Anonymous Function
boardGames.forEach(function (game){
    console.log(game);
})



//To access a specific element in an array, use bracket notation along with its index value
// console.log(shoppingList[0]);

// //Array.length - returns the number of elements in the array
// console.log(shoppingList.length)

// //Array.push() - adds element to the end of the array
// shoppingList.push("salt");
// console.log(shoppingList);

//Array.unshift() - adds a new element at the beginning of the array
shoppingList.unshift("salt");
console.log(shoppingList);

//Array.pop() - removes the last element in the array and returns that element
let shoppingList = ["celery", "limes", "lemons", "grenadine", "oranges"];
let removedElement = shoppingList.pop();
console.log(shoppingList);
console.log(removedElement);

//Array.shift() - removes the first element in the array and returns that element
let shoppingList = ["celery", "limes", "lemons", "grenadine", "oranges"];
shoppingList.shift();
console.log(shoppingList);

//Array.map() - transforms the elements in the original array by calling the given function once for each element in the array
let shoppingList = ["celery", "limes", "lemons", "grenadine", "oranges"];
console.log(shoppingList.map(item => item.toUpperCase()));

//Aray.filter() - creates a new array with only the elements that pass the test in a given function
let shoppingList = ["celery", "limes", "lemons", "grenadine", "oranges"];
let newShoppingList = shoppingList.filter(item => item.startsWith("l"));
console.log(newShoppingList);

//Array.find() - returns the FIRST element in the array that passes a test given as a function
let shoppingList = ["celery", "limes", "lemons", "grenadine", "oranges"];
let shoppingItem = shoppingList.find(item => item.startsWith("l"));
console.log(shoppingItem);

//Array.includes() - determines whether an array has a specific element (boolean)
let shoppingList = ["celery", "limes", "lemons", "grenadine", "oranges"];
let isIncluded = shoppingList.includes("limes");
console.log(isIncluded);

//Array.indexOf() - search the array for a specific element and returns its first index Returns -1 when element is not found
let shoppingList = ["celery", "limes", "lemons", "grenadine", "oranges"];
console.log(shoppingList.indexOf("lemons"));



//Array.findIndex() - returns the index of the first element in the array that passes the test in a given function. Returns -1 whene element isn't found!
let shoppingList = ["celery", "limes", "lemons", "grenadine", "oranges"];
let foundIndex = shoppingList.findIndex(item => item.startsWith("g"));
console.log(foundIndex)

//Array.every() - check if all elements in an array pass a test given as a function. If there is 1 element that retyrns a false value, the cunction returns false and does not check the rest of the elements
let shoppingList = ["celery", "limes", "lemons", "grenadine", "oranges"];
console.log(shoppingList.every(item => item.length > 1));

//Array.concat( - merge two or more arrays, and returns a new array
let shoppingList = ["celery", "limes", "lemons", "grenadine", "oranges"];
let anotherShoppingList = ["salt", "mint leaves", "olives"];
let combinedArrays = shoppingList.concat(anotherShoppingList);
console.log(combinedArrays);

//Array.slice() - selects a part of the array and returns a new array. Selects the elements starting at the provided start argument and ends at, but does not include, the proveded argument
let shoppingList = ["celery", "limes", "lemons", "grenadine", "oranges"];
let newArray = shoppingList.slice(1, 3);
console.log(newArray);

//Array.splice() - adds/removes elements in the array and returns the removed elements. First argument takes in an integer that specifies at what index to add/remove elements. second argument takes in the number of items to be removed. Optional third argument that takes in the new elements to be added to the array.
let shoppingList = ["celery", "limes", "lemons", "grenadine", "oranges"];
shoppingList.splice(2, 2, "salt");
console.log(shoppingList);

//Array.sort() - sorts the items in an array. The sort order can either be alphabetic or numeric, and either ascending or descending. By default, sort() orders the values as strings in alphabetical or ascending order. Can take in a compare function which indicatesif you want to sort by ascending or descending.
let shoppingList = ["celery", "limes", "lemons", "grenadine", "oranges"];
console.log(shoppingList)
console.log(shoppingList.sort());

let costs = [3, 2, 13, 3];
console.log(costs)
console.log(costs.sort((a, b) => b -a)); //descending order
console.log(costs.sort((a, b) => a - b)); //ascending

//Array.reverse() - reverses the order of the elements in the array
let shoppingList = ["celery", "limes", "lemons", "grenadine", "oranges"];
console.log(shoppingList.reverse());

//Array.toString() - converts the array to a string
let shoppingList = ["celery", "limes", "lemons", "grenadine", "oranges"];
console.log(shoppingList.toString());

//Array.join() - converts the elements in the array into a string. Can accept an optional parameter, "seperator", which indicates how the elements will be separated. Default seperator is a comma
let shoppingList = ["celery", "limes", "lemons", "grenadine", "oranges"];
console.log(shoppingList);
console.log(shoppingList.join("! and "));

//Lastly, an ES6 feature: the spread operator. The spread operator, indicated by these 3 dots "..." expands the cntents of the array and takes it out of the array structure. 
let shoppingList = ["celery", "limes", "lemons", "grenadine", "oranges"];
console.log(shoppingList);
console.log(...shoppingList);

let numArray = [20, 40, 60];
function sum(numOne, numTwo, numThree){
    return numOne + numTwo + numThree;
}
console.log(sum(...numArray));

