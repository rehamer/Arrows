// function createInstructor(firstName, lastName){
//     return {
//       firstName: firstName,
//       lastName: lastName
//     }
//   }
//{firstName: 'meme', lastName: 'toto'}
function createInstructor(firstName, lastName){
    return {
      firstName,
      lastName
    }
}
console.log(createInstructor('meme', 'toto'))

////

// var favoriteNumber = 42;
// var instructor = {
//   firstName: "Colt"
// }
// instructor[favoriteNumber] = "That is my favorite!"
//{42: 'That is my favorite!', firstName: 'Colt'}

const favoriteNumber = 42;
const instructor = {
  instructor: "That is my favorite!",
  [favoriteNumber]: "Colt"
}
console.log(instructor);

///

// var instructor2 = {
//   firstName: "Colt",
//   sayHi: function(){
//     return "Hi!";
//   },
//   sayBye: function(){
//     return this.firstName + " says bye!";
//   }
// }
//{firstName: 'Colt', sayHi: ƒ, sayBye: ƒ}


let instructor2 = {
  firstName: "Colt",
  sayHi (){
    return "Hi!";
  },
  sayBye (){
    return this.firstName + " says bye!";
  }
}
console.log(instructor2);

//

// Write a function which generates an animal object. The function should accepts 3 arguments:

// species: the species of animal (‘cat’, ‘dog’)
// verb: a string used to name a function (‘bark’, ‘bleet’)
// noise: a string to be printed when above function is called (‘woof’, ‘baaa’)
// Use one or more of the object enhancements we’ve covered.

// const d = createAnimal("dog", "bark", "Woooof!")
// // {species: "dog", bark: ƒ}
// d.bark()  //"Woooof!"

// const s = createAnimal("sheep", "bleet", "BAAAAaaaa")
// // {species: "sheep", bleet: ƒ}
// s.bleet() //"BAAAAaaaa"

function animals (name, does, sound) {
  return {
    name,
    [does]() {
      return sound
    }
  }
}
console.log(animals('dog','barks','woooof'))  //"Woooof!"

// {name: 'dog', barks: ƒ}
// barks
// : 
// ƒ [does]()
// name
// : 
// "dog"
// [[Prototype]]
// : 
// Object