/**
 * Functions
 * 
 * 0. Functions allow us to write reusable modular code. 
 * We define a "chunk" of code that we can then execute at 
 * a later point.
 * 
 * 1. parameters can be added as place holders. when calling the function you can pass values to the parameters, in this form 
 * they are called arguments. you can have as many parameters as your heart desires. 
 * 
 * 2.Two step process for functions  Define/Run
 *  To execute the function to run it you need to call it with ()
 */ 
 
 // 1. declaration //
 function square(num) {
     
  
 
 /*
 * At the declaration phase, we define the function and give it parameters in paranthesis. followed by curly brackets 
 */
 
 // 2. code body, conditional 
 
 num * num; 
 }
 
 /**
  * inside the curly brackets we add the code body. arguments or conditional statements that tell the code what to do 
  */ 
  
  // 3. calling a function
  
  /**
  * to call a function we use the function name followed by parenthesis. We then place the argument/arguments inside of 
  * the paranthesis. giveing value to the parameters, or place holders. 
  */ 
  
  square(2); // prints => 4
  
  /**
   * 3. First class class functions: Functions are first-class objects. In JavaScript, functions are objects. 
   * You can assign functions to variables, to array elements, and to other objects. They can also be passed 
   * around as arguments to other functions or be returned from those functions.
   */
   
   //1. declaration //
   
   const multiply = function(a,b) {
    
    
    
    
    
    
    /**
     * to declare a variable to the function. creat a variable called multiply, followed by = function. then parameters then
     * curly brace. 
     */
     
   // 2. code to run //
     return a * b; 
   }
   
   
   /**
     * you put the code you want to be executed inside the curly brackets of the function. in this case the two parameters 
     * will be multiplied togeter. 
     */
   
   //2. calling function
   
   multiply( 4 , 2 );         // prints => 8 
   
   /**
     * you call the function with the function name followed by parenthesis.  
     */
     
     /**
      * 4. Function Scope or local Scope
      * Local scope is anthing that happens within the body of a Function. 
      * Whatever you declare there can only be accessed within the Function
      * itself or any functions declared within.
      */
      
   // 1. local scope //
   
   function add( a, b ) {             // declaring a function and giving it two parameters. 
    console.log( a + b );            // this code runs because it sits in the local scope of the variable 
    
   }
   
   //console.log ( a + b );  // this code is outside the local scope so it throws an error
   
   
   
   /**
    * 5. Closure: 
    * a function definition can carry in its body, references to variables in its 
    * parent scope. Function definition forms a closure around the enviroment in which
    * it was defined. So that function if called again has access to variables of its 
    * parent scope. 
    */
    
    // 1. closure 
    
    function makeFunc() {
     var name = "vesper"; 
     function hello() {
      "hello " + name; 
     }
     return hello;    
    }
    var myFunc = makeFunc();    // function hello() is the inner function and it is returned 
                                //from the outer function before being executed. 
    myFunc(); 