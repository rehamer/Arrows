let facts = {numPlanets: 8, yearNeptuneDiscovered: 1846};
let {numPlanets, yearNeptuneDiscovered} = facts;

console.log(numPlanets); // 8
console.log(yearNeptuneDiscovered); // 1846

//

let planetFacts2 = {
  numPlanets2: 8,
  yearNeptuneDiscovered: 1846,
  yearMarsDiscovered: 1659
};

let {numPlanets2, ...discoveryYears} = planetFacts2;

console.log(discoveryYears); // yearNeptuneDiscovered: 1846, yearMarsDiscovered: 1659

//

function getUserData({firstName, favoriteColor="green"}){
  return `Your name is ${firstName} and you like ${favoriteColor}`;
}

getUserData({firstName: "Alejandro", favoriteColor: "purple"}) // Your name is Alejandro and you like purple
getUserData({firstName: "Melissa"}) // YOur name is Melissa and you like green
getUserData({}) // your name is Undefined and you like green

//

let [first, second, third] = ["Maya", "Marisa", "Chi"];

console.log(first); // Maya
console.log(second); // Marisa
console.log(third); // Chi

//

let [raindrops, whiskers, ...aFewOfMyFavoriteThings] = [
  "Raindrops on roses",
  "whiskers on kittens",
  "Bright copper kettles",
  "warm woolen mittens",
  "Brown paper packages tied up with strings"
]

console.log(raindrops); // "Raindrops on roses"
console.log(whiskers); // "whiskers on kittens"
console.log(aFewOfMyFavoriteThings); // ["Bright copper kettles", "warm woolen mittens", "Brown paper packages tied up with strings"]


let numbers = [10, 20, 30];
[numbers[1], numbers[2]] = [numbers[2], numbers[1]]

console.log(numbers) // [20, 30] - I had a mistake and missed the 10 in my expected output. it should be [10,20,30]

///

// ES2015 Refactoring
// In this exercise, you’ll refactor some ES5 code into ES2015.

// ES5 Assigning Variables to Object Properties

let obj = {
  numbers: {
    a: 1,
    b: 2
  }
};

const {numbers: {a, b}} = obj;
console.log(a);
console.log(b);

//

var arr = [1, 2];
[arr[1], arr[0]] = [arr[0], arr[1]];

//


/*
  {
    first: "Tom",
    second: "Margaret",
    third: "Allison",
    rest: ["David", "Pierre"]
  }
*/

// let raceResults = (['Tom', 'Margaret', 'Allison', 'David', 'Pierre'])
// const raceResults2 = ([first, second, ...rest]) => ({first, second, rest})

// console.log(raceResults2)


const raceResults = function([first, second, third, ...rest]) {
  return {first, second, third, rest}
} 

// const raceResults = ([first, second, third, ...rest]) => ({first, second, third, rest})

console.log(raceResults(['Tom', 'Margaret', 'Allison', 'David', 'Pierre']))