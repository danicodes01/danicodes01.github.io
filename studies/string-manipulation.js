/**
 * String Manipulation
 * 
 * 0. In javaScript we have built in methods that you can use to manipulate strings.
 * We can join strings, split strings, change characters in a string etc. etc. 
 * 
 * 1. we can use operators on strings to perform certain tasks. 
 */ 
 
 // 1. You can use the + operator to append multiple strings together, like this:

let string1 = "hi, my name is joe. "; 
let string2 = "i like to play video games";

console.log(string1 + string2); // prints => "hi, my name is joe. i like to play video games"

// 2. You can compare strings using operators. 

string1 < string2; // prints => true
  
/* 
 * 2.  built in string methods 
 */ 
 
 // 1. The substring() method returns the part of the string between the start and end indexes, or to the end of the string.

console.log(string1.substring(3, 18)); //prints => my name is joe

// 2. You can use .toUpperCase or .toLowerCawe to change the case of the text 

console.log(string1.toUpperCase()) // prints => "HI, MY NAME IS JOE. "

// 3. The trim() method removes whitespace from both ends of a string.

let testString = "     i love you.   "; 

console.log(testString.trim()); // prints => "i love you."

// 4. The concat() method concatenates the string arguments to the calling string and returns a new string.

console.log(string1.concat(string2)); // prints => "hi, my name is joe. i like to play video games"

// 5. The includes() method determines whether one string may be found within another string, returns true or false

string1.includes("joe"); // prints => true; 

// 6. indexof returns the index that the substring is found within the string 

console.log(string1.indexOf("joe")); // prints => 15

// 7. The replace() method returns a new string with some or all matches of a pattern replaced by a replacement.

console.log(string1.replace("joe", "charley")); // prints => "hi, my name is charley "

// 8. The repeat() method constructs and returns a new copy of the string as many times as you tell it to, concatenated together.



let chorus = "rockin the casbah "; 

console.log(chorus.repeat(2)); // prints => rockin the casbah rockin the casbah 