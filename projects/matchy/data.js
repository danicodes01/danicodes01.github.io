/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal = {}; 
animal.species = "cat"; 
animal["name"] = "cindy";
animal.noises = []; 
//console.log(animal); 

//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var noises = []; 
//add noise using bracket notation
noises[0] = "purr";
//add noise using array function 
noises.push("mew mew"); 
//add to beginning of array
noises.unshift("chirp"); 
//ad to end using .length -1
noises[noises.length] = "herro"; 
// //console.log log length of noises 
// console.log(noises.length); 
// //console.log last element in noises 
// console.log(noises.length - 1); 
// //log whole array
// console.log(noises); 

//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////
 animal["noises"] = noises; 
 animal.noises.push("meow"); 

 //console.log(animal); 


/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 *
 * 2. What are the different ways of accessing elements on arrays?
 *
 * *******************************************************************
 */

/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////

//Create a variable named `animals` and assign it to an empty array.
var animals = []; 
//push` our `animal` that we created to `animals`
animals.push(animal); 
//`console.log` `animals`
//console.log(animals); 
// Create a variable called `duck` and assign it to the data:
// - `{ species: 'duck', name: 'Jerome', noises: ['quack', 'honk', 'sneeze', 'woosh'] }`
var duck = { 
    species: 'duck', 
    name: 'Jerome', 
    noises: ['quack', 'honk', 'sneeze', 'woosh']
}
//`push` `duck` to `animals`
animals.push(duck); 
// `console.log` `animals`
//console.log(animals); 
//  Create two more animal objects each with a species, a name, and at least two sounds sounds and add each one of them to `animals.
var fish = { 
    species: 'fish', 
    name: 'monty', 
    noises: ['bubble', 'sneeze']
}

var horse = { 
    species: 'horse', 
    name: 'scout', 
    noises: ['nehhhhhh', 'howdy', 'asdfjklñ']
}

animals.push(horse); 
animals.push(fish); 
// `console.log` `animals`, and, `console.log` the length of `animals`. Is everything looking right?
//console.log(animals); 


//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//i am assigning this to an array becuase i want it to be a ordered list 
//Create a variable called `friends` and assign it to an array
var friends = []; 
//Write a function called `getRandom` that takes our `animals` array and returns  a random `index` of the input array, using `Math.random`
function getRandom() {
  return Math.floor(Math.random() * animals.length);
 
}

//friends.push(animals[getRandom(animals.name)]); 

//Using a random index from this function that you just created, get a random animal and add its `name` to `friends`.
friends.push(animals[getRandom()]["name"]); 
//`console.log` `friends`.

//Using **bracket notation**, add the `friends` list as a **property** also named `friends` on one of the animals in the `animals` array
animals[getRandom()]["friends"] = friends; 



/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}