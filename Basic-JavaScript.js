// Basic JavaScript ---> ES5 : using this we can write our code in JS.

//DATATYPE : in JS there is a 8 datatypes
    // undefined : when JS variable declares they have initial value of "undefine". (if we do mahematical operation on it we get --> NaN) & (if we concatenate string with undefine we get --> undefine)
    // null
    // boolean : return true/false
    // string
    // symbol
    // gidint
    // number
    // object

//"var" keyword : we use it for declare variable
// note:
// 1) varibles name can be made up of --> numbers, letters, $, _
// 2) varibles name not containt space and it is not start with space.
// 3) for variable name we use camelCase method
// 4) "JS is case sencitive laguage." so --> It is possible to have multiple distinct variables with the same name but different casing. 

var myName;

// "=" operator : for assign value to variable

myName = "Priyank";

//initializing variable
var name = "xyz" // here name --> have string datatype

// note : if we declare variables using "var" we can redeclare that variables and it leeds to --> ERROR --> solution of this is use "let"

// "let" keyword: it is use for decalring varibles.

// "const" keyword: it is use for declare read-only variables
// Note : Most of JS-developers use "const" for declare their all variable and moreover this if they know they will need to reassign that variable than they use "let". 


// "+" : addition 
// "-" : substraction
// "/" : divide
// "*" : multiplication
// "%" : reminder
// "++" : increament variable value by 1
// "--" : decreament variable value by 1
// "+=" : Compound Assignment With Augmented addition
// "-=" : Compound Assignment With Augmented substraction
// "*=" : Compound Assignment With Augmented multiplication
// "/=" : Compound Assignment With Augmented division

// note : "\" we use it --> when we want to use any key-symbol as value (matalab uss keyword ki property ko nahi but use as value use karna chahte ho, for ex. agar hum "" kisi sentense me lagana chahte hoo. )

// CONCATE STRINGS: 1) "+" op. 
//                  2) "+=" op.

//-----------STRING-------------
// 1) length of string : (<string/ string name>.length)
// 2) first character of string : <string/ string name>[0]

// immutable value of string : In this we can't change any letter of string individually but we can change entire string value

//---------------Array------------
// Syntex : let/var/const <array name> = [<elements>].

// some besic concepts follow here --> which we show before in c/c++
// push() : it is use for append data at the end of an array.
// pop() : it is use for remove last element of array.
// shift() : it is use for remove first element of array.
// unshift() : it is use for add first element in array.



// ------------function--------------
// Sysntex : function <function name>() {---code---}
        // function reusableFunction() {  ---> declaration
        //     console.log("Hi World");
        // }
        // reusableFunction(); ---> call/invoke function


        // function reusableFunction(param1, param2) {  ---> declaration of function with arguments
        //     console.log("Hi World");
        // }
        // reusableFunction(); ---> call/invoke function

// Global scope : Variables which are defined outside of a function block have Global scope. This means, they can be seen everywhere in your JavaScript code.
// note : variables which are declare without "let" or "const" variables --> they are automatically declare as Global variable

// Local scope : variables which are decalre within function have local scope.

// note : It is possible to have both local and global variables with the same name.
//        in function if we not declare any local variables than all operation done on globle variables.

//---------------Queue--------------
// Queue : abstract data structure where items are kept in order.
//       : LIFO rule
// make array Queue --> 1) push() element at the end 2) shift() remove element from front
// 
// -------------if : for conditional logic------------
// syntex : 
    // if (condition is true) {
    //   statement is executed
    // }

// Comparison operators : (all this operators return either true or false) 
// 1) Equality Operator (==) : (NOTE: when we compare two different data types using it ---> it must convert one type to another ==> it called "Type Coercion")
// 2) Strict Equality Operator (===) : it is counter part of (==). (NOTE: it is note perform a type conversion.) --> therefor, It return "false" when two values are same but they have different datatype.
// 3) Inequality operator (!=) : "false" --> equal values and (data types same/different) & "true" --> not equal
// 4) Strict inequality operator (!==) --> "false" --> equal values and (data types must be same) & "true" --> not equal
// 5) Greater Than Operator(>)
// 6) Greater Than Or Equal To Operator(>=)
// 7) Less Than Operator(<)
// 8) Less Than Or Equal To Operator(<=)
// 9) Logical And Operator(&&) : it tests more than one thing at a time.
// 10) Logical or operator (||) 

// -------------if else: for conditional logic------------
// syntex : 
    // if (condition is true) {
    //   statement is executed
    // }
    // else {

    // }

// -------------if else if: for conditional logic------------
// syntex : 
    // if (condition is true) {
    //   statement is executed
    // }
    // else if{

    // }
    // else {

    // }
// --------Chaining If Else Statements------------
// syntex : 
    // if (condition1) {
    //     statement1
    //   } else if (condition2) {
    //     statement2
    //   } else if (condition3) {
    //     statement3
    //   . . .
    //   } else {
    //     statementN
    //   }

// -------------Switch Statements------------
//que:Write a switch statement which tests val and sets answer for the following conditions:
    // 1 - alpha
    // 2 - beta
    // 3 - gamma
    // 4 - delta
//ans:
function caseInSwitch(val) {
    let answer = "";
    // Only change code below this line
    
    switch(val) {
      case 1 :
        answer = "alpha";
        break;
      case 2:
        answer = "beta";
        break;
      case 3:
        answer = "gamma";
        break;
      case 4:
        answer = "delta";
        break;
    }
  
  
    // Only change code above this line
    return answer;
  }
  
  caseInSwitch(1);

//-------switch with default----
// switch (num) {
//     case value1:
//       statement1;
//       break;
//     case value2:
//       statement2;
//       break;
//   ...
//     default:
//       defaultStatement;
//       break;
//   }

// ------------- Object------------
// OBJECT : it is simillar to arrays, but except the indexes to access data we use "properties".
// access properties : 
// method 1 : dot notation (.) ---> we use it when we know properties name
// method 2 : bracket notation ([])
// Add properties in object ==> Syntex : <object name>.<new property name> = <property value>;
// Delete properties of object ==> Syntex : delete <object name>.<new property name>;
// Add Property into object ==> "prototype" keyword ==> Syntex : <object>.prototype.<new property>



// QUE : we can convert "switch stmt" into "object"
// see ---> SwitchToObject.js

//-------"Array of Objects"-------
// example,
          // const ourMusic = [
          //   {
          //     "artist": "Daft Punk",
          //     "title": "Homework",
          //     "release_year": 1997,
          //     "formats": [ 
          //       "CD", 
          //       "Cassette", 
          //       "LP"
          //     ],
          //     "gold": true
          //   },
          //   {
          //     "artist": "Daft Punk1",
          //     "title": "Homework1",
          //     "release_year": 19971,
          //     "formats": [ 
          //       "CD1", 
          //       "Cassette1", 
          //       "LP1"
          //     ],
          //     "gold": true
          //   }
          // ];

//-----"Nested Objects"-----
// note : The sub-properties of objects can be accessed by chaining together the dot or bracket notation.
//example,
          // const ourStorage = {
          //   "desk": {
          //     "drawer": "stapler"
          //   },
          //   "cabinet": {
          //     "top drawer": { 
          //       "folder1": "a file",
          //       "folder2": "secrets"
          //     },
          //     "bottom drawer": "soda"
          //   }
          // };

          // ourStorage.cabinet["top drawer"].folder2;
          // ourStorage.desk.drawer;

// NOTE : object can contain "Nested Objects" and "Nested Array".
//-----Nested Arrays of Objects-----
//example,
        // const ourPets = [
        //   {
        //     animalType: "cat",
        //     names: [
        //       "Meowzer",
        //       "Fluffy",
        //       "Kit-Cat"
        //     ]
        //   },
        //   {
        //     animalType: "dog",
        //     names: [
        //       "Spot",
        //       "Bowser",
        //       "Frankie"
        //     ]
        //   }
        // ];
// how to call Nested arrays( elements = objects)
        // ourPets[0].names[1];
        // ourPets[1].names[0];

//QUE : Record Collection
//see code


// Note : here, we use (for, while, do..while) like we use them in c++;
// Note : the do...while different from other loops is how it behaves when the condition fails on the first check.





//--------------RANDOM-------------
//Math.random() ==> function that generates a random decimal number between 0 (inclusive) and 1 (exclusive). 
// ---> Thus Math.random() can return a 0 but never return a 1.


// Math.floor() ==> to round the value down to the nearest whole number.

// ------Generate Random Whole Numbers within a Range-------
// Using this method we can generate random whole number in range ---> (0 to <given number>) / (min to max)
// formula : Math.floor(Math.random() * (max - min + 1)) + min


// ---------parseInt()-----------
// parseInt() ==> It take a string and returns an integer. 
// example,
          //const a = parseInt("007"); -----------> O/P = 7

// parseInt() : takes a second argument for the "radix", which specifies the base of the number in the string. 
// The radix can be an integer "between 2 and 36".
//Syntex, 
          // parseInt(string, radix);
//example,
          // const a = parseInt("11", 2);
          // The radix variable says that 11 is in the binary system, or base 2. This example converts the string 11 to an integer 3.


// ------------------Conditional (Ternary) Operator--------------------
// ==> a ? b : c, where a is the condition, b is the code to run when the condition returns true, and c is the code to run when the condition returns false.
// Note : Using this we can replace if/else loop     

//-------------------Multiple Conditional (Ternary) Operators--------------------
// we can convert,
          // if (a === b) {
          //   return "a and b are equal";
          // }
          // else if (a > b) {
          //   return "a is greater";
          // }
          // else {
          //   return "b is greater";
          // }
// Into,
          //(a === b) ? "a and b are equal" : (a > b) ? "a is greater" : "b is greater";







//--------------------PREDEFINE - METHOD-----------------------
// Note : we can use "this" keyword for use object own property into object's function etc. ----> we use 

//1) call() : Function Borrowing
//--> When one object need to use another object method than for this we use it
//example, 
// In below code, in "person" object we write function --> which prints that object properties.
// Now, "person1" is similer object of "person" just different values of properties. Now, if we want to use same function here than we have to ways: 1) again write same function into "person1". ----> it leeds to retundance of code because write same type of code more than one time is not good.
                                                                                                                                                  // 2) use call() method ---> it is more effective. 

        // const person = {
        //   fullName: function() {
        //     return this.firstName + " " + this.lastName;     --> here, using "this" => it refers properties of that object from which we invoke that property.
        //   }
        // }
        // const person1 = {
        //   firstName:"John",
        //   lastName: "Doe"
        // }

        // person.fullName.call(person1);     ------> Here, whan we use call() on "person1" than in function() "this" keyword point now "person1" properties.



// Note: If we know that we need to reuse any object function into another function than ----> it is more effective to make that function Global.
//example,

        // let fullname = function( ) {
        //     return this.firstName + " " + this.lastName;     --> here, using "this" => it refers properties of that object from which we invoke that property.
        // }
        // const person = {
        //   firstName:"asd",
        //   lastName: "zxc"
        // }
        // const person1 = {
        //   firstName:"John",
        //   lastName: "Doe"
        // }

        // fullName.call(person1);     ------> Here, whan we use call() on "person1" than in function() "this" keyword point now "person1" properties.
//----------------------------------------------------------------------------
// This global function with argument ---> than we need to pass that argument value after 
        // let fullname = function(lastName) {
        //     return this.firstName + " " + this.lastName;     --> here, using "this" => it refers properties of that object from which we invoke that property.
        // }
        // const person = {
        //   firstName:"asd",
        //   lastName: "zxc"
        // }
        // const person1 = {
        //   firstName:"John",
        //   lastName: "Doe"
        // }

        // fullName.call(person1, "JADAV");     ------> Here, whan we use call() on "person1" than in function() "this" keyword point now "person1" properties.

//2) Math.max() : it is use to find largest number from list of num.
//ex: Math.max(1,2,3) ---------> 3


//3) apply() : in array we not directly use "Math.max()" method -----> solution is we need to apply this type of methods on array
//ex: Math.max.apply(null,[1,2,3]) -----> 3

// Difference between call() and apply() method : is that how we pass arguments in this
// In call() : (first args = refernce object, etc.) and second args = all valuse on which we want to apply function
// In apply() : (first args = refernce object, etc.) and second args = list of all values on which we want to apply function.





// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice

