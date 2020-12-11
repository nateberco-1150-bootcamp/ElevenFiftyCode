let group = [
    {
       name: "Ariana",
       age: 26,
       graduatedHSYear: 2012,
       pets: true,
       petNames: ["Gunner"],
       mostRecentMovieWatched: "X-Men: Phoenix",
       carsOwned: [{
           make: "Honda",
           model: "Civic",
       }],
       favoritePotato: "Baked", 
    },

{
    name: "Daniel",
    age: 25,
    graduatedHSYear: 2013,
    pets: false,
    petNames: null,
    mostRecentMovieWatched: "Coco",
    carsOwned: [{
        make: "Chevy",
        model: "Equinox",
    }],
    favoritePotato: "Mashed", 
 },

 {
    name: "Mari",
    age: 50,
    graduatedHSYear: 1988,
    pets: true,
    petNames: ["Harper"],
    mostRecentMovieWatched: "Holidate",
    carsOwned: [{
        make: "Infinity",
        model: "JX-37",
    }],
    favoritePotato: "Mashed", 
 },

 {
    name: "Emily",
    age: 24,
    graduatedHSYear: 2015,
    pets: false,
    petNames: [null],
    mostRecentMovieWatched: "Back to the Future 2",
    carsOwned: [{
        make: "Toyota",
        model: "Camry",
    }],
    favoritePotato: "Sweet", 
 },

  {
    name: "Nate",
    age: 23,
    graduatedHSYear: 2015,
    pets: true,
    petNames: ["Brinkley"],
    mostRecentMovieWatched: "Snowden",
    carsOwned: [{
        make: "Honda",
        model: "Accord",
    }],
    favoritePotato: "Sweet", 
 },
]

// let moviesWatched = []
// // console.log(group[4].mostRecentMovieWatched);
// for (let i = 0; i < group.length; i++) {
//     console.log(group[i].mostRecentMovieWatched);
//     moviesWatched.push(group[i].mostRecentMovieWatched);
// }
// console.log(moviesWatched);

//ForEach
group.forEach((student) =>{
    mostRecentMovieWatched.push(student.mostRecentMovie)
});
console.log(mostRecentMovieWatched);