/**
 * Data Types
 * 
 * 0. Data structures that are built into javaScript. There are simple data types, and complex data types. 
 * simple data types are immutable, they do not hold or collect other values. they do not change the original value.
 * simple data types are copy by value. When we assign these variables to other variables using =, 
 * we copy the value to the new variable. They are copied by value.
 * 
 * Complex data types can take on a unlimited number of values. They can constantly grow, like collections.
 * Complex data types are copy by reference. When a reference type value, an object, is copied to another variable using =,
 * the address of that value is what’s actually copied over as if it were a primitive. Objects are copied by reference
 * instead of by value.
 * 
 */ 
  
  //simple data types 
/* 
 * 1. Number:  number is a numerica data type. 
 * infinity is also a number. it is a numeric value representing infinity.
 */  
 6; // the number 6
 
 20; // the number 20
 
 1 / 0; // infinity  
/*  
 * 2. String: Text wrapped in quotation marks. 
 */ 
  "The cat was very tired"; // a string
  
  "She liked to nap in the sun";  // a string 
  
/* 
 * 3. Boolean: simple true or false values yes or no. 1 or 0
 */
 
 true; //true
 
 false; //false
 
 console.log( 2 < 5 ); // prints => true; 
 
 console.log( 2 > 5 ); // prints => false;
 
  /*
 * 4. NaN:    not a number, is a number in javascript. if you take NaN and add it to a number you get NaN
 */
 0 / 0; // prints => NaN
 
  /*
 * 5. Undefined: no value
 */
 let noValue; // they variable is declared, but not given a value
 
 console.log(noValue); // prints => Undefined 
 
  /*
 * 6. Null: no value, when the programmer purposely whats a element to have no value. 
 */
 
 let nully = null; 
 
 console.log(nully); // prints => undefined 
 
 //Complex data types 
 
/*
 * 7. Array: List lock objects that hold indexed information. arrays can hold all sorts of things. can hold all 
 different types of data. 
 */
 
 const fishingGear = ["pbr", "book", "suntan lotion", "snacks"]; // array of things possibly kept in a fishermans tackle box
 
 const favNumbers = ["3", "6", "9"]; // an array of numbers 
 
 const whatsOnYourMind = ["9", "suntan lotion", true, 9, ]; // array of mixed data types 
 
 
 /*
 * 8. Object: Objects are collections of properties. Properties are pairs of information, we have a key value pair.
 */
 
 const musicStuff = {         // a object that is holding a list of music equipment
  guitar: "fender strat",      
  amp:    "twin reverb", 
  synth:  "minimoag"
  }; 
  
 /*
 * 9. Function:  Functions are reusable blocks of code. They can be created and then accessed later by calling them. 
 * or you can creat them and call them at the same time. 
 */
 
 function square(num) { // a function that takes a number and squares it. 
  num * num; 
 }
 
square(2); // calls the function
 
 
 
 
 