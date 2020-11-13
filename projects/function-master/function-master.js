//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function objectValues(object) {
// input is an object 
// output should be an array
// edge cases: none so far

//first create the array to hold the object values
const myArr = []; 

//loop through the object getting the values
for(var key in object) {
    //put value into array
    myArr.push(object[key]); 
}
// return that array 
return myArr; 
} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function keysToString(object) {
    //create a variable with an empty string 
    let string = []; 
    
    //loop through the object 
    for(var key in object) {
        //push value to empty string
        string.push(key); 
    }
   return string.join(" "); 

}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function valuesToString(object) {
    //create a variable with an empty string 
    let string = []; 
    
    //loop through the object 
    for(var key in object) {
        
        if (typeof object[key] === "string") {
            
          
        
        string.push(object[key]); 
        }
    }
   return string.join(" "); 

}



//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function arrayOrObject(collection) {
    if (Array.isArray(collection)) {
        return "array"; 
    } else if( typeof collection  === "object" && collection !== null) {
        return "object"; 
    }
}
//should return array

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) {
   const stringCap = string.charAt(0).toUpperCase() + string.slice(1);
   return stringCap 
}


//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) {
 var splitStr = string.toLowerCase().split(' ');
  for (var i = 0; i < splitStr.length; i++) {
      splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
   }
   // return the joined string
   return splitStr.join(' '); 
}
//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function welcomeMessage(object) {
     var str = object.name;
    var name = [];
    name = str.charAt(0).toUpperCase() + str.slice(1);
    return 'Welcome' + ' ' + name + '!';
}



//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) {
    //take a object with a name and a species 
    //declare a variable that holds the objects name
   let nameA = object.name;
   //create a variable that holds the objects species 
   let speciesA = object.species;
   //name is equal to name0 capitalized 
   let nameB = nameA.charAt(0).toUpperCase() + nameA.slice(1);
   //species is equal to speciesA capitalized 
   let speciesB = speciesA.charAt(0).toUpperCase() + speciesA.slice(1);
   //return <name> is <species>
   return `${nameB} is a ${speciesB}`;

}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function maybeNoises(object) {

	if(object && object.noises) {
	    if(Array.isArray(object.noises)) {
	        if(object.noises.length > 0) {
	            return object.noises.join(" "); 
	        }
	    }
	}
	 return "there are no noises"; 
}

//return noieses array as "string" seperated by a space 

//else return "there are no noises"

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) {
const includesWord = string.indexOf(word) != -1; 
if(includesWord) return true; 
return false; 
}
        
  


//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function addFriend (name, object) {
//add name to the objects friends array
object.friends.push(name); 
return object; 
}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function isFriend(name, object) {
 /*used if and else statement to campare thye values
 //if object key friends is equal to null or object key friends equal to undefined or object key friends
 equal to empty or object key or object key friends includes property name returns true
 */
 
if (!object.friends){
    return false;
} else if (object.friends.includes(name)){
    return true
} return false;

}

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//and return a list of all the names that <name> is not friends with"
function nonFriends(name, array) {
//input: a name and an array of people object with friends list
//output: an array of all names not in friends property
let arr =[]
for (let i = 0; i < array.length; i++){
    //check two things:
    //is the object equal to <name>
    //and ignore the parametr's array
if (array[i]['name'] === name || array[i]['friends'].includes(name)){
   continue;
   //if they fail both push into the return array 
} else {arr.push(array[i]['name'])}
}
return arr;
}
//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function updateObject(object, key, value) {
    //Should update the property <key> on <object> with new <value>. If <key> does not exist on <object> create it."

    object[key] = value;
    return object;
}
//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {
//Should remove any properties on <object> that are listed in <array>
    //loop through the array
    for(var i = 0; i < array.length; i++){
        //Should take an object and an array of strings and remove the properties
        delete object[array[i]];
    }
    return object;
}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {
      //used new set method to remove duplicates from array and return the array
 return ([...new Set(array)]);
}



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}