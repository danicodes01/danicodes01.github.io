/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function search(array, name) { 
for (var i = 0; i < array.length; i++) {
    if(array[i]["name"].toLowerCase() === name.toLowerCase()) {
        console.log(array[i]);
        return array[i]; 
        }
    }
return null; 
}



//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function replace(animal, name, obj){
    //If an animal with that name exists within the `animals` Array,
    //replace it's entire Object with the replacement Object.
    for(var i = 0; i < animal.length; i++) {
        if(animal[i]["name"].toLowerCase() === name.toLowerCase()) {
            animal.splice(i, 1, obj);   
        }
          
    }
    
}


//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function remove(animals, name) {
    //loop through the animal array
    for(var i = 0; i < animals.length; i++) {
        //if animals name match with the name then remove it from animals. else do not remove.
        if(animals[i].name.toLowerCase() === name.toLowerCase()) {
            //if the above condition matches remove the name by using splice method
            animals = animals.splice(i, 1); 
        }
    }
    return animals; 
}



//////////////////////////////////////////////////////////////////////
// Step 4 - Add ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function add(animals, name) {
//loop through animals array
for(var i = 0; i < animals.length; i++) {
    if(animals[i].name.toLowerCase() === name["name"].toLowerCase()) {
        return animals;
    }
}
//if does not match with the existing name then push new animals name
return animals.push(name); 
}
/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}
