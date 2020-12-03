// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require("lodown-danicodes01");

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./danicodes01.github.io/projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */

var maleCount = array => {
    return array.filter(function(customerObj){
        return customerObj.gender === 'male';
    }).length;
    
};

var femaleCount = array => {
//find number of female customers
//input: array
//output: number
//EC: use reduce 
return array.reduce(function(acc, customerObj){
    if(customerObj.gender === "female"){
        acc++;
    }return acc;
}, 0);

};

var oldestCustomer = array => {
//find the oldest customers name
//input: array
//output: string
let newAge = 0;  
return array.reduce((acc, customer) => {
    if(customer.age > newAge) {
        acc = customer.name;
        newAge = customer.age;
       } return acc;  
    },""); 
};

var youngestCustomer = array => {
  let newAge = 100;
  return array.reduce((acc, customer) => {
    if(customer.age < newAge) {
        acc = customer.name;
        newAge = customer.age;
    }  
    return acc; 
  },"")
};

var averageBalance = array => {
  //find the average 
  //input: array
  //output: number
 let totalBalance = array.reduce((acc, customerAge) => {
    return acc + Number(customerAge.balance.slice(1).split(",").join(""));
     
  },0); 
  
  return totalBalance / array.length; 
  
};

var firstLetterCount = (array, char) => {
//find how many customers names begin with a given letter
//input: (array, letter)
//output: number

return array.filter(customer => {
    return customer.name.toUpperCase().startsWith(char.toUpperCase()); 
}).length; 


// const startsWith = customers.filter((customers) => customers.name.toLowerCase().startsWith(char.toLowerCase()));
 
// return startsWith.length; 
};


var friendFirstLetterCount = (array, customer, letter) => {
//Find how many friends of a given customer have names that start with a given letter
//input: (array, customer, letter)
//output: number 
//return array.filter(customer, char => {
  //  return customer.friends.toUpperCase().startsWith(char.toUpperCase());
//}).length


let friend = []; 
array.filter(function(customerObj){
    if(customerObj.name === customer){
     customerObj.friends.filter(function(customerObj){
            if(customerObj.name[0].toUpperCase() === letter.toUpperCase()){
                friend.push(customerObj); 
            }
        });
    }
});
console.log(friend)
return friend.length; 
// const friendArr = customers.filter((customers) => customers.name.friends.toLowerCase().startsWith(char.toLowerCase())); 
// console.log(`this is ${friendArr}`); 
// return friendArr.length; 


};

var friendsCount = (array, name) => {
    //Find the customers’ names that have a given customer’s name in their friends list
    //input: (array, nmae)
    //output: array
    let arrayNames = []; 
    array.filter(function(e, i, array){
        e.friends.filter(function(b, i, array){
            if(b.name.includes(name)){
                arrayNames.push(e.name); 
            }
        });
    });
    return arrayNames;
}; 

var topThreeTags = array => {
    //Find the three most common tags among all customers’ associated tags
    //input: array
    //output: array
    let fullList = [];
    let tagArrays = pluck(array, "tags"); 
    tagArrays.forEach(function(e, i, a){
        fullList = fullList.concat(e);
    });
    let newObj = fullList.reduce(function(acc, e, i){
        if( acc[e]){
            acc[e]++;
        }else {
            acc[e] = 1; 
        }
        return acc; 
    },{});
    let arrayList = Object.entries(newObj);
    let finalArray = arrayList.sort(function(a,b){return b[1] - a[1]}).splice(0,3);
    return finalArray.map(function(e,i){
        return e[0];
    });

};

// var topThreeTags = array => {
//   let tagArray = []; 
//   // loop through array of objects and grapb all tag arrays and concat one big tag array
  
//   for(let i = 0; i < array.length; i++) {
//       let customerObj = array[i]; 
//       tagArray = tagArray.concat(customerObj.tags); 
//   }
//   /* using the reduce function and passing in the master tagArray
//   and a function that takes a tagObj initialized to an empty object and each tag
//   string, create an object that holds a property for each tag with the 
//   key of the number of times that the tag was used */
  
//   let tagCountObj = tagArray.reduce((tagObj, currentTag) =>{
//       // if the tag key exists in tagObj already, increase the count by 1
//       if(tagObj[currentTag]){
//           tagObj[currentTag]++
//       }
//       else {
//           // if not, create the property for the given tag and initialize the counter to 1
//           tagObj[currentTag] = 1; 
//       }
//       // return the tag obj
//       return tagObj; 
//   }, {})
 
//  let countsArr = []; 
//  //sort the sub arrays by the tag count in descending order
//  countsArr = Object.entries(tagCountObj); 
//  // sort function will sort in decending order
//  countsArr.sort((a,b) => b[1] - a[1]); 

//   let topThreeTags = countsArr.slice(0, 3);
  
  
// };
//

var genderCount = array => {
    //Create a summary of genders, the output should be:
    //{ male: 3, female: 4, non-binary: 1}
    //input: array
    //object
    
    return array.reduce(function(genderObj, cust){
        if(genderObj[cust.gender]){
            genderObj[cust.gender]++;
        }else {
            genderObj[cust.gender] = 1; 
        }
        return genderObj;
    }, {}); 
};

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;

function pluck(array, prop){
    let newArray = [];
      map(array, function(e, i, array){
        newArray.push(array[i][prop]);
    });
        return newArray;
}
 function map(collection, func){
   let newArray = [];
     each(collection,function(e, i, collection){
        newArray.push(func(e, i, collection));
    })
        return newArray;
}
function each(collection, action) {
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