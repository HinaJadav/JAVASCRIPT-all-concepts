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
// use : it  allows to expand array 


