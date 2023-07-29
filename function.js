//Function:
//JavaScript procedure
// Set of statements which perform some specific task
// for use function --> we must define it somewhere

//function definition
    // function <name> {
    //     stmts
    // }

//Note : Tn declaration no need to write datatype of parameters

function sum(a, b) {
    return a + b;
}

console.log(sum(10,2)); //output: 12

// Parameters types:
//1) primitive : pass by value
//2) object : pass by reference



//Function Expression:
var fun = function sum(a,b) { return(a+b); };
console.log(fun(10,2)); //output:12
var result = sum(10,2);
console.log(result); //output:12 but, it is not valid



//anonymous function: A function without name
//often not accessible after its initial creation

let show = function() {
    console.log("Hello");
};
console.log(show());//output:Hello




// passing Function as parameter of another function
function mul(a,b) { return (a*b);};
function div(a,b) { return (a/b);};
function calc(a,b,funtype) {
    return funtype(a,b);
}
console.log(calc(4,2,div)); // output:2
console.log(calc(4,2,mul)); // output:8


setTimeout(
    function () {
        console.log('Execute later after 3 second');
    }
);
// console.log(setTimeout()); // how we print this???




// JS functions are object
// JS function have both properties and methods

// function object properties:
// arguments, arguments.length, arguments.callee : Refers the currently executing function, 
// constructor, 
// length : The number of arguments defined by the function, 
// prototype : allow adding properties of function object

// function object methods:
// call : Permit to call a method of another object in the context of a different object, 
// toSource : Returns the source code of the function,
// toString : Returns a string representing the source code of the function,
// valueOf: ?

// Use argument property:
function findmax() {
    var max = -Infinity;
    for(let i = 0; i < arguments.length; i++) {
        if(max < arguments[i]) {
            max = arguments[i];
        }
    }
    return max;
};

var max_number = findmax(1,7,2,9,10,100);
console.log(max_number); //output : 100


//function constructor:
//ex:
var fn = new Function("a", "b", "return a * b");
// is same as
var fn = function (a, b) {return a * b};



//Function Hosting : 
//within scope

console.log(sqr(4)); // output : 16 
function sqr(n) {return (n*n);}; // give output
var fun = function sqr(n) {return (n*n);}; // error
// note : It works with function declaration only not for function expression

// function can also return function
function magic() {
    return function(x) { return x * 42; };
}
var answer = magic();
console.log(answer(1337)); // o/p: 56154



// Arrow functions(ES6):
// always anonymous
// does not have its own this, arguments, super, or new.target
//Syntex: (patameters) => {stmt};

let add1 = (a,b) => { return(a+b);};
console.log(add1(10,2)); //output:12

// Arrow functions with no parameters : 
//Syntex: () => {stmt};


// Nested functions:
// Inner function only use by outer function
// inner function use variables and arguments of outer function
// but, outer function can't be used variables or arguments of inner function
function A(x) {
    function B(y) {
        function C(z) {
            console.log(x + y + z);
        }
        C(3);
    }
    B(2);
}
console.log(A(1)); //output: 6



//*Self-Executing Anonymous Function:
(
    function () {   
        console.log("Hello");
    }
)
();// output: Hello

// see more ex. in pdf from pg=28
// function as object:

let person = {
    id : 1,
    name : "John"
};

(function (p) {
    console.log(p.id);
});
console.log((person)); // output: { id: 1, name: 'John' }
console.log(person.name); // output:john



//Benifits of function:
// Organizes JavaScript code
// Makes JavaScript code maintainable





//Closure: Closure means that an inner function always has access to the vars and parameters of its outer function, even after the outer function has returned.
//pg.38 *
// The inner function has access to the scope of the outer function
// A closure is a function having access to the parent scope, even after the parent function has closed

// function parameter: 1) default, 2)rest

function add(a, b = 10) { //here, b have default parameters
    return function (c) {
        return a + b + c;
    };
}
// a= multiplier

//ex: rest parameter
function add(a, ...values) { return values.map(i => i*a); }
var arr = add(2, 1, 2, 3);
console.log(arr); //output : [ 2, 4, 6 ]


//predifine function: pg.44 to 46(imp)





