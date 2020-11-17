// This makes the arguments variable behave the way we want it to and a few
// other things. For more info:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
'use strict';

var _ = {};


/**
* START OF OUR LIBRARY!
* Implement each function below it's instructions
*/

/** _.identity
* Arguments:
*   1) Any value
* Objectives:
*   1) Returns <value> unchanged
* Examples:
*   _.identity(5) === 5.    //example take in 5 return 5
*   _.identity({a: "b"}) === {a: "b"}
*/
_.identity = function(value){
    //input: any value
    //output: that value unchagned 
    //constraints: n/a
    //edge cases: n/a
    return value;  
};

/** _.typeOf
* Arguments:
*   1) Any value
* Objectives:
*   1) Return the type of <value> as a string
*       Types are one of:
*          - "string"
*          - "array"
*          - "object"
*          - "undefined"
*          - "number"
*          - "boolean"
*          - "null"
*          - "function"
* Examples:
* _.typeOf(134) -> "number"
* _.typeOf("javascript") -> "string"
* _.typeOf([1,2,3]) -> "array"
*/

//parameter is any value
//return type of value as a string
//check all values
//
_.typeOf = function(value){
if(Array.isArray(value)) {
    return "array"; 
} else if (value === null) {
    return "null"; 
}
return typeof value; 
  }; 
 

/** _.first
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the first element in <array>.
*   3) Otherwise, return the first <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.first("ponies", 1) -> []
*   _.first(["a", "b", "c"], "ponies") -> "a"
*   _.first(["a", "b", "c"], 1) -> "a"
*   _.first(["a", "b", "c"], 2) -> ["a", "b"]
*/
// parameter is array and number 
// if !Array.isArray()
_.first = function(array,number) {
    let arr = [];
    if (!Array.isArray(array)) {
        return [];
    } else if (typeof number !== 'number') {
        return array[0];
    } else {
        return array.splice(0, number); 
    }
}; 

/** _.last
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the last element in <array>.
*   3) Otherwise, return the last <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.last("ponies", 2) -> []
*   _.last(["a", "b", "c"], "ponies") -> "c"
*   _.last(["a", "b", "c"], 1) -> "c"
*   _.last(["a", "b", "c"], 2) -> ["b", "c"]
*/
//parameter is array and number
// if !ARRAY.isArray() return []
// if number is number return last element in array [array.length -1]

_.last = (array, number) => {
    if(!Array.isArray(array) || number < 0) {
        return []; 
    }else if (typeof number !== "number"){
        return array[array.length - 1]
    } else if (number > array.length){
        return array; 
    } else {
        return array.slice(array.length - number); 
    }
}

/** _.indexOf
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return the index of <array> that is the first occurrance of <value>
*   2) Return -1 if <value> is not in <array>
*   3) Do not use [].indexOf()!
* Edge Cases:
*   1) What if <array> has multiple occurances of val?
*   2) What if <val> isn't in <array>?
* Examples:
*   _.indexOf(["a","b","c"], "c") -> 2
*   _.indexOf(["a","b","c"], "d") -> -1
*/
// parameter is array andn value 
// return the index of array that is the first occurance of value
//return -1 if the value is not in array
// dont use .indexOf
// edgeCase = what if array has mulitple occurances of falue 
//what if value isnt in array 
_.indexOf = (array, value) => {
     for (let i = 0; i < array.length; i++) {
        if (array[i] === value) {
            return i;
        }
    } return -1;
};


/** _.contains
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return true if <array> contains <value>
*   2) Return false otherwise
*   3) You must use the ternary operator in your implementation.
* Edge Cases:
*   1) did you use === ?
*   2) what if no <value> is given?
* Examples:
*   _.contains([1,"two", 3.14], "two") -> true
*/
// param an array and value 
// check if array contains value => true, false otherwise
// must use ternary operator 

_.contains = (array, value) => array.includes(value) ? true : false; 

/** _.each
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) if <collection> is an array, call <function> once for each element
*      with the arguments:
*         the element, it's index, <collection>
*   2) if <collection> is an object, call <function> once for each property
*      with the arguments:
*         the property's value, it's key, <collection>
* Examples:
*   _.each(["a","b","c"], function(e,i,a){ console.log(e)});
*      -> should log "a" "b" "c" to the console
*/

// parameter is a collection and a function
// if the collection is an array, call the function once for each element 

// if the collection is an object call the function once for each property 
// w/ the arguments the property value, key and c for collection 

_.each = (collection, action) => {
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
}


/** _.unique
* Arguments:
*   1) An array
* Objectives:
*   1) Return a new array of all elements from <array> with duplicates removed
*   2) Use _.indexOf() from above
* Examples:
*   _.unique([1,2,2,4,5,6,5,2]) -> [1,2,4,5,6]
*/
// parameter is an array 
// return a new array with all duplicates revoved 
// use _.indexOf()

_.unique = array => {
let newArr = []; 
for(let i = 0; i < array.length; i++){
    if(_.indexOf(newArr, array[i]) === -1) {
        newArr.push(array[i]); 
    }
 }return newArr; 
}
/** _.filter
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned true
* Edge Cases:
*   1) What if <function> returns something other than true or false?
* Examples:
*   _.filter([1,2,3,4,5], function(x){return x%2 === 0}) -> [2,4]
* Extra Credit:
*   use _.each in your implementation
*/

// parameters are array and function
// call <functino> fro each element in array passing the arg
// passing the arguments e, i 
// return a new array of elements 
// reutnr a new array of elements for which calling function returned true 

_.filter = (array, func) => {
    const arr = []; // empty array
    // loop though array
    for (let i = 0; i < array.length; i++) {
         let result = func(array[i], i, array);
        // push the current element if result is true
        if(result) {
        arr.push(array[i]);
        }
    } return arr;
};

/** _.reject
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned false
*   3) This is the logical inverse if _.filter()
* Examples:
*   _.reject([1,2,3,4,5], function(e){return e%2 === 0}) -> [1,3,5]
*/
_.reject = (a, func) => {
const newArr = []; 
_.each(a, function(elem, index, a){
    let result = func(elem, index, a)
    if(result !== true) {
        newArr.push(elem);
    }
})
return newArr; 
 
}; 
/** _.partition
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) Call <function> for each element in <array> passing it the arguments:
*       element, key, <array>
*   2) Return an array that is made up of 2 sub arrays:
*       0) An array that contains all the values for which <function> returned something truthy
*       1) An array that contains all the values for which <function> returned something falsy
* Edge Cases:
*   1) This is going to return an array of arrays.
* Examples:
*   _.partition([1,2,3,4,5], function(element,index,arr){
*     return element % 2 === 0;
*   }); -> [[2,4],[1,3,5]]
}
*/
// two params: array and func
//call the function for each element key (e, k a)
// return an array that is made up of 2 sub arrays 
// an array that contais values from truthy 
// an array that contains all values for falsy 
// return an array of arrays 

_.partition = (array, func) => {
    let newArr =[[], []];
    _.filter(array, function(e, k, a){
        let result = func(e, k, a);
        if(result === true){
            newArr[0].push(e);
        } else if (result === false){
            newArr[1].push(e);
        }
    }); return newArr;
};
// _.partition = (array, func) => {
//     let truArr = [];
//     let falsArr = [];
//     for (let i = 0; i < array.length; i++) {
//         let result = func(array[i], i, array);
//         if (result) {
//             truArr.push(array[i]);
//         } else falsArr.push(array[i]);
//     } return [truArr, falsArr];
// };


/** _.map
* Arguments:
*   1) A collection
*   2) a function
* Objectives:
*   1) call <function> for each element in <collection> passing the arguments:
*        if <collection> is an array:
*            the element, it's index, <collection>
*        if <collection> is an object:
*            the value, it's key, <collection>
*   2) save the return value of each <function> call in a new array
*   3) return the new array
* Examples:
*   _.map([1,2,3,4], function(e){return e * 2}) -> [2,4,6,8]
*/
_.map = (collection, func) => {
    let resultArr = []; 
    _.each(collection, function(e, i, a){
        resultArr.push(func(e, i, a));
    });
    return resultArr; 
}; 

/** _.pluck
* Arguments:
*   1) An array of objects
*   2) A property
* Objectives:
*   1) Return an array containing the value of <property> for every element in <array>
*   2) You must use _.map() in your implementation.
* Examples:
*   _.pluck([{a: "one"}, {a: "two"}], "a") -> ["one", "two"]
*/
// parameters array of objects and prpoerty 
// return ar array containing the value of property for every element in the array
// must use map

_.pluck = (array, prop) => {
    let newArr = [];
    _.map(array, function(e, i, a){
        newArr.push(array[i][prop]);
    }); return newArr;
};

/** _.every
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*      if <collection> is an array:
*          current element, it's index, <collection>
*      if <collection> is an object:
*          current value, current key, <collection>
*   2) If the return value of calling <function> for every element is true, return true
*   3) If even one of them returns false, return false
*   4) If <function> is not provided, return true if every element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.every([2,4,6], function(e){return e % 2 === 0}) -> true
*   _.every([1,2,3], function(e){return e % 2 === 0}) -> false
*/
// a collection and a collection
//call function for every element of collection with the parameters: 
//if collection is an array: current element, its index, collection
//if collection is an object: current value of calling fucntion for every element is true, return true
//if any is false its false
// if not provided return true if every element is truthy orhter false 

_.every = (collect, func) => {
    let result = true; 
    _.each(collect, function(e, i, c){
        if(typeof func === "function"){
            if(!func(e, i, c)){
                result = false;
            }
        }
        else if (!e){
            result = false; 
        }
            
        });
        return result; 
        
    }
/** _.some
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*       if <collection> is an array:
*        current element, it's index, <collection>
*       if <collection> is an object:
*        current value, current key, <collection>
*   2) If the return value of calling <function> is true for at least one element, return true
*   3) If it is false for all elements, return false
*   4) If <function> is not provided return true if at least one element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.some([1,3,5], function(e){return e % 2 === 0}) -> false
*   _.some([1,2,3], function(e){return e % 2 === 0}) -> true
*/

_.some = (collection, func) => {
    let result = false;
    _.each(collection, function(e, i, c){
        if(typeof func === 'function'){
            if(func(e, i, c)){
                result = true;
            }
        } else if(e){
            result = true;
        }
    });
    return result;
};


/** _.reduce
* Arguments:
*   1) An array
*   2) A function
*   3) A seed
* Objectives:
*   1) Call <function> for every element in <collection> passing the arguments:
*         previous result, element, index
*   2) Use the return value of <function> as the "previous result"
*      for the next iteration
*   3) On the very first iteration, use <seed> as the "previous result"
*   4) If no <seed> was given, use the first element/value of <collection> as <seed> and continue to the next element
*   5) After the last iteration, return the return value of the final <function> call
* Edge Cases:
*   1) What if <seed> is not given?
* Examples:
*   _.reduce([1,2,3], function(previousSum, currentValue, currentIndex){ return previousSum + currentValue }, 0) -> 6
*/
_.reduce = (array, func, seed) => {
  let previousResult;
  if(seed !== undefined){
    previousResult = seed;
    _.each(array, function (e,i,a){
      previousResult = func(previousResult, e, i,a);
    });
  }else {
    previousResult = array[0];
    for (let i = 1; i < array.length; i++){
      previousResult = func(previousResult, array[i], i, array);
    }
  }
  return previousResult;
}


/** _.extend
* Arguments:
*   1) An Object
*   2) An Object
*   ...Possibly more objects
* Objectives:
*   1) Copy properties from <object 2> to <object 1>
*   2) If more objects are passed in, copy their properties to <object 1> as well, in the order they are passed in.
*   3) Return the update <object 1>
* Examples:
*   var data = {a:"one"};
*   _.extend(data, {b:"two"}); -> data now equals {a:"one",b:"two"}
*   _.extend(data, {a:"two"}); -> data now equals {a:"two"}
*/

// 2 parameters: obj and obj maybe more obj
// copy the properties from obj2 to obj1
_.extend = (obj1, ...obj2) => Object.assign(obj1, ... obj2); 

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = _;
}
