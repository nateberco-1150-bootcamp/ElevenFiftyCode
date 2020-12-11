//Pet Object

let pet = {
    animal: "finsh",
    name:   "Randy",
    gender: "female",
    age:    0,
    likes:  ['blood worms', 'eating her own babies', 'never sleeping']
}

console.log(pet.likes[2]); //test


// COUNTING SUM CHALLENGE

// function sumAll(numberOne, numberTwo) {
//     var max = Math.max(numberOne, numberTwo);
//     var min = Math.min(numberOne, numberTwo);
//     var temp = 0;
//     for (var i = min; i <= max; i++) {
//       temp += i;
//     }
//     return temp;
//   }
  
//   console.log(sumAll(1,100));

function sumValues(valueOne, valueTwo){
    let min = Math.min(valueOne, valueTwo);
    let max = Math.max(valueOne, valueTwo);
    let temp = 0;
    for (i = min; i <= max; i++){
        temp += i;
    }
    return temp;
}
console.log(sumValues(1, 100));
//Area of Trapezoid Challenge
function areaCalculator(baseOne, baseTwo, height) {
    let area = (0.5 * (baseOne + baseTwo) * height);
    return area;
}
console.log(areaCalculator(3, 6, 2.5));

//Count to 100
// for (i=0; i<=100; i++){
//     console.log(i);
// }