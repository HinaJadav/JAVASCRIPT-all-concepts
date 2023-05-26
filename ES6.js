// (ECMAScript == ES) ---> it is a standardized version of JS.
// ES6 : This is updated version of JS, and most of browsers follows this specifications.


//TOPIC 1:  Compare Scope of the "var" and "let" keywords
// "var" : When we declare any variable using it we can indirectlu creating global variable --> for example if we declare any variable using it in block ==> scope of that variavle is not limited it also global, therefor we can use that variable outside that block.----------> this leeds to big disadvantages sometimes.
// "let" : it remove "var" above disadvantage ---> by givinh limited scope to variable(means scope of variable is limited from where and in which scope we declare it).

//TOPIC 2: Mutate an Array Declared with const
//objects/arrays/functions ---> which are declare using "const" are mutable (means, we can prevent only reassignment but we can change individual values for them.)
//exampl,
        // const s = [5, 6, 7];
        // s = [1, 2, 3]; ---> it give ERROR
        // s[2] = 45; ---> it allows and now (s = [5, 6, 45])

//TOPIC 3: Prevent Object Mutation
//Syntax : Object.freeze(<object name>);  ----> Using this function we can prevent data mutation(means, we don't change that object)

//TOPIC 4: Concise Anonymous Functions(means, functi) === "Arrow function"
// Use of "inline function" : we use this method when we want to pass one function as a argument of another function.
// When we use "inline function" method -----> we can use "Anonumous function" (because if we declare any "inline fun" no need to write that function name)

// exampls,
        // const myFunc = function() {
        //     const myVar = "value";
        //     return myVar;
        // }
// Anonymous function of above function,

        // const myFunc = () => {
        //     const myVar = "value";
        //     return myVar;
        // }

// How to write one line function, ---> example, const myFunc = () => "value";

//  How to pass argument in anonymous function
// example,
            // const doubler = (item) => item * 2;
            // doubler(4);
// ---> if we need to pass single parameter in anonymous function than ----> we can ignore parentheses
//example,
            // const doubler = item => item * 2; 
        
//TOPIC 5: Set Default Parameters for Your Functions
// example,
            // const greeting = (name = "Anonymous") => "Hello " + name;

//TOPIC 6: Use the "Rest" Parameter with Function Parameters
// we use it for make more flexible function.
// "rest parameter" : using this we can create function which take a variable number of arguments. These arguments are stored in array & we can accessed them later from inside function.

//TOPIC 7: spread operator
// use : it returns unpacked array. (it's in-place operator) Main use of this is assign values from one array to anther.
//ex: const spreaded = [...arr];

//TOPIC 8: Destructuring assignment
// const { name, age } = user; ---------> using this line code "name" have value of "user object name property" and "age" have value of "user object age property".
// above code is more effective than we use old method like below
                // const user = { name: 'John Doe', age: 34 };
                // const name = user.name;
                // const age = user.age;

//Note : Destructuring allows you to assign a new variable name when extracting values.

//==> Destructuring Assignment to Assign Variables from Nested Objects
//ex:
//OLD:
        // const user = {
        //         johnDoe: { 
        //         age: 34,
        //         email: 'johnDoe@freeCodeCamp.com'
        //         }
        // };

//In ES6,
        // const { johnDoe: { age, email }} = user;             

//==> Using Destructuring Assignment : we can assign values from one array to anther.
//ex: const [a, b] = [1, 2, 3, 4, 5, 6];---------> a = 1, b = 2
//ex: const [a, b,,, c] = [1, 2, 3, 4, 5, 6];-----------> a = 1, b = 2, c = 5

//==>Destructuring Assignment to Pass an Object as a Function's Parameters
//ex: 
        // const stats = {
        //   max: 56.78,
        //   standard_deviation: 4.34,
        //   median: 34.54,
        //   mode: 23.87,
        //   min: -0.75,
        //   average: 35.85
        // };

        // // Only change code below this line
        // const half = ({max,min}) => (max + min) / 2.0; 
        // // Only change code above this line



//TOPIC 9: Template Literals
//use : This is a special type of string that makes creating complex strings easier.
//how? : 
// Syntax : ${ <needed code> };


//TOPIC 10:Declarative Functions with ES6
//remove the function keyword and colon altogether when defining functions in objects. 
//ex: 
        // const person = {
        //         name: "Taylor",
        //         sayHello() {
        //         return `Hello! My name is ${this.name}.`;
        //         }
        // };

//TOPIC 11: Define a Constructor Function
//In ES6, we can create object using "class" keyword.
// in class declaration has a "constructor" function and using "new" keyword it initiallize object.
// Syntex : 
                // class <class name> {
                //         constructor(<property name>) {
                //              this.<property name> = <property name>;
                //         }
                // }

//TOPIC 12: getters and setters to Control Access to an Object
        // class Book {
        //         constructor(author) {
        //         this._author = author;
        //         }
        //         // getter
        //         get writer() {
        //         return this._author;
        //         }
        //         // setter
        //         set writer(updatedAuthor) {
        //         this._author = updatedAuthor;
        //         }
        // }
        // const novel = new Book('anonymous');
        // console.log(novel.writer);
        // novel.writer = 'newAuthor';
        // console.log(novel.writer);


//TOPIC 13: Module Script
// It is use for import external JS file in HTML code.
// Syntex : <script type="module" src="<filename>.js"></script>

//TOPIC 14: sharing of block/ Export block
// for this we use "export" keyword.
//ex:
        // export const add = (x, y) => {
        //         return x + y;
        // }
//OR......
        // const add = (x, y) => {
        //         return x + y;
        // }
        // export { add };

//Note : if we want to export "only one value" than we also use "export default" keyword.
//ex:
        // export default function add(x, y) {
        //         return x + y;
        // }
        
        // export default function(x, y) {
        //         return x + y;
        // }

//Remark : we can't use "export" with "const", "var", "let".




//TOPIC 15: Reuse JS code/ Import JS code
// for this we use "import" keyword
//"import" : it allows us to choose specific part of specific file/module for load.
//Syntex : import { <object, etc. name> } from '<file address>.js';

// Note: if we want import only one value
// Syntex : import <value name> from <file location>.js;





//TOPIC 16: Import Everything from a File
// for this we use "*".
//Syntex : import * as <obj. name> from "<file location>.js";
//        where, (obj. name) = current file object name which we create for store this import things from another file.




//TOPIC 17: Create a JavaScript Promise
//for this we use "Promise()" function.It is a constructor function, so we also use "this" keyword with it.
//"Promise()" has two args 1)resolve, 2)reject.
//Syntex : const myPromise = new Promise((resolve, reject) => { });

// JS-Promise has three states: 1)pending, 2)fulfilled, 3)rejected.
// use of resolve ---> when we want to sucessed of our promise
// use of reject ---> when we want to fail our promise.
//ex:
        // const makeServerRequest = new Promise((resolve, reject) => {
        //         // responseFromServer represents a response from a server
        //         let responseFromServer;
                
        //         if(responseFromServer) {
        //         resolve("We got the data");
        //         } else {  
        //         reject("Data not received");
        //         }
        // });



//TOPIC 18: Handle a Fulfilled Promise with then
//==> When we use Promise() function for that kind of process which takes time in process and after completion of process we decide next action ---> how to do this all things? ----> "then" keyword.
//"then" mwthod exicute immediately after Promise() method is fulfilled with "resolve".




//TOPIC 19: Handle a Rejected Promise with catch
//"catch()" is the method will be use when Promise() method rejected.
