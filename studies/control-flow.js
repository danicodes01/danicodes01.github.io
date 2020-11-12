/**
 * Control Flow
 * 
 * 0. The control flow is the order in which the computer executes statements in a script.
 * 
 * 1. Code is run in order from the first line in the file to the last line, unless the 
 * computer runs across the (extremely frequent) structures that change the control flow, 
 * such as conditionals and loops. 
 * 
 * 2. Control flow means that when you read a script, you must not only read from start to
 * finish but also look at program structure and how it affects order of execution.
 *
 *3. we can use conditional statements, or if else statements to change the control flow. 
 * 
 */ 
 
// 1. declaration //

let catColor = "orange"; 
  
  if ( catColor === "blue" ) {
      return `no, the cat is ${catColor}`; 
  }

/*
 * At the declaration phase, the conditional statemnt starts with a if statement 
 */
  
// 2. else if

else if ( catColor === "black" ) {
    return `no, the cat is ${catColor}`;
}
  
/* 
 * if you want to have another condition you can use a else if statement.
 * you can use as many else if statemtns as you like.
 */
 
 // 3. else 
 
 else {
     return `the cat is ${catColor}`;
 }
 
 /* 
 * the else statement is the last part of a condition. it is your fallback. if no 
 * other statemnt was true then the else statement is printed by default. 
 */
 
/*
 * 3. switch statemtn. use a switch statement if you are taking a value and checking 
 * it against multiple values.
 */
 let catName = "charley"; 
 
 switch(catName){
  case "greg":
   console.log("my cats name is greg");
   break;
  case "craig":
   console.log("my cats name is charley");
   break;
  case "jessica":
   console.log("my cats name is jessica");
   break;
  case "fiskers": 
   console.log("my cats name is fiskers");
   break;
  default: 
   console.log("i dont know that cat")
 }

 //  prints => my cats name is charley 
/**
 * the declaration of a switch statemnt is to say "switch" followed by parenthesis
 * that include the variable name. If one of the cases match the value held in that 
 * variable then the code below it runs. You must add a break to make sure the code 
 * runs properly. If not added it will run everything after the first truthy statement. 
 */
 