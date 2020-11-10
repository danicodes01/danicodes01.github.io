/*
 * VARIABLES:
 *
 * 0. To hold things in memory we can use variables. Variables are like labled jars for a value
 * in JavaScript. You can store info to be called at a later time. 
 *
 * 1. To create a variable we can use the key words "var", "let", or "const", followed by a "name" 
 * or "id" for the varial. "var" is hoisted and is scoped to functions. "Let", and "Const" are not
 * hoisted and are block scoped. 
 *
 * 2. There are 2 phases of using variables: declaration and initialization (or assignment).
 */

// 1. declaration //
var myName;


/*
 * At the declaration phase, the variable myName is undefined because we have NOT initialized
 * it to anything
 */
console.log(myName); // prints => undefined

// 2. initialization or assignment //
myName = 'john';
console.log(myName); // prints => john

// 3. re-assignment //
myName = 'bob';
console.log(myName); // prints => bob

// NOTE: We can assign and re-assign anything to a variable - we cannot do this with constants //
var myVariable = 1;
var myVariable = true;
myVariable = "someString";