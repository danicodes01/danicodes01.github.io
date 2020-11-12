/**
 * Loops
 * 
 * 0. Loops are used to repeat logic. We use loops to repeat some code a certain number
 * of times. So we do not need to do it by hand. 
 * 
 * 1. Loops can also be used to loop through certain code and their keys or values making it 
 * possible to access those keys or values inside the code. 
 * 
 * 2. While loops: 
 * kind of like a if statement, conditional plus a loop. Best use is when you are writingn a loop that you dont 
 * know how many times it is going to loop until the end.
 * 
 */ 
 // declaration //
 
let num = 0;              
   while (num < 5) {                      

   
   
   /**
    * To declare while loops you use while, folowed by paranthesis. while the var is les then or more then an ending. 
    */ 
    
    // body //
      console.log(num);                   
       num++;                               
   }                             // prints  => 0, 1, 2, 3, 4                         
                 
   
   /**
    * the body of contains the conditional statement, or code to run. 
    * next you specify which direction you want to go. increment positivley or negatively. 
    */
    
    /**
     * For Loops: 
     * can be used like a while loop in the example above. Although its great to use to 
     * loop through a collection and return the indexes from the collection. This is good for 
     * looping through arrays because arrays are indexed. 
     */
     
     // declaration //
     const motorcyles = ["Honda cb550, Honda cb750, indian 650, Royal"]; 
     
     for ( let i = 0; i < motorcyles.length; i++) {
         
     
     
     /**
      * In the declaration stage we start with for followed by parenthesis. in the parenthasis we 
      * first declare a variable to to hold the indexed items in the array. We can call that variable 
      * "i". while i is less then the collection name.length we increment it by one each time.
      */
     
     // syntax for the body of the loop: 
     
     console.log(motorcyles[i]);  //prints =>     Honda cb550   Honda cb750  indian 650    Royal
     
     }
     
     
     
     // to loop backwards using a for loop //
     
     const stones = ["railroad stones", "flat river stones", "volcanic rocks", "limestone"]; // array to loop through
     
     for (let i = stones.length -1; i >= 0; i--) {
      console.log(stones[i])
     }              // prints => limestone volcanic rocks flat river stones railroad stones 
     
         
     
     
     /**
      * you can then use the variable i to access the different elements in the loop by thier index. 
      */
    
    
    /**
     * 3. For in loops: will loop over the keys. properties in a object 
     */
     
     // declariation //
     
     const greenAnole = {
      name: "glibson",
      home: "southeastern louisiana",
      commonName: "caralina Anole",
      superPower: "camaflage"
     }; 
      
     for (let key in greenAnole) {
      
     
     /**
      * to declare a for in loop you use "for" then parenthesis followed by the place holder for the varible properties (key) "in" and the 
      * name of the object. 
      */
      
      //body//
      
      console.log(greenAnole[key]);                       // prints => glibson  southeaster louisiana  caralina Anole  camaflage
     }
     
     
     /**
      * the code to run. gets the key values from object 
      */