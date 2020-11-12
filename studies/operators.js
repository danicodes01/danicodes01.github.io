/**
 *
 * Operators
 * 
 * 0. An operator performs some operation on single or multiple  
 * data values and gives you a result a result. There are six different 
 * kinds of operators.
 * 
 * 1. Assignment operator: An assignment operator assigns a value to its left 
 * operand based on the value of its right operand.
 */ 
 let x = 2;   // x is being assigned the value of 2
 
 let a = x;  // a is being assigned the value of x 
  
 console.log(a); // prints => 2
 
/* 
 * 2. Arithmetic Operator: An arithmetic operator takes numerical values (either literals 
 * or variables) as their operands and returns a single numerical value.
 */
console.log( x * x ); // prints => 4 
 
/* 
 * 3. Comparison Operator: Compares its operands and returns a logical value based on
 * whether the comparison is true. 
 */
 console.log( 2 === 2); // prints => true
 
 console.log( 2 === "2") // prints => false 
 
 console.log( 2 == "2") // prints => true 
 
/* 
 * 4. Logical Operators: Typically used with Boolean (logical) values.  
 */
 
 //logical and
 true && true; // true
 false && true; // false
 
 //logical or
 true || false; // true
 
 //logical not
 !false; // true
 !true; // false 

 /*
 * 5. Unary Operator:  An operation with only one operand.
 * unary operators include; delete, void, typof
 */
  
 
/* 
 * 6. The conditional (ternary) operator is the only JavaScript operator that takes three operands: 
 * a condition followed by a question mark (?), then an expression to execute if the condition is truthy
 * followed by a colon (:), and finally the expression to execute if the condition is falsy. 
 */
 
 let height = 6; 
 
 let minHeight = ( height >= 4.5 ) ? "enter" : "must be taller";  // prints => "enter"  