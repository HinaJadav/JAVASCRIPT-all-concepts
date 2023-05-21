//DATATYPE : in JS there is a 8 datatypes
    // undefined : when JS variable declares they have initial value of "undefine". (if we do mahematical operation on it we get --> NaN) & (if we concatenate string with undefine we get --> undefine)
    // null
    // boolean
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




