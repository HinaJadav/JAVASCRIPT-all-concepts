// 1) Prototype property:
// all JS object have a special property --> "prototype" that is either "null" or "refernce of another object".
// Object ----------> prototype
// we can change the prototype property of onject
// prototype : contain methods
// object : can access those properties

//Prototype inheritance : prototype contains methos which are access by all objects like to that prototype.

// Implementation of prototype Inheritance:
// 1) Construnctor functions
    //ex : inbuilt JS objects like Array,Set, Maps etc..

// 2) ES6 classes:
    //"Syntactic sugar" for prototype inheritance which works as constructor function behind the seen

// 3) Object.crete():
    //* The easiest and Straightforward way of linking an object to a prototype object.

//----------------------------------------------------------------
//Prototype:  [[Prototype]]/ __proto__

// "use strict";

function Person(fname, lname) {
    this.fname = fname;
    this.lname = lname;
}

var p1 = new Person("Hina", "Jadav");
console.log(p1);

console.log(Person.prototype); // show prototype of Person object

console.log(Person.prototype === p1.__proto__); // It compare prototype property of both "Person" and "p1" bcz both points same constructor function.
// true

//----------------------------------------------------------------
// Prototypal innheritance / Deledation:

// For prototype chain theory pdf-07 pag 10,11 digram see




//----------------------------------------------------------------

//* Classes in JS:
// It’s a syntactical sugar over JavaScript's existing prototype-based inheritance


//Defining xlasses
// 1) class declarations
    //ex:
    class Person1 {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        show() {
            console.log(this.name + ': ' + this.age);
        }
    }

    const p2 = new Person1("Hina", 21);
    p2.show();  //Hina: 21

// 2) class expression
    //ex:(Unnamed class)
    var Person2 = class {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        show() {
            console.log(this.name + ': ' + this.age);
        }
    }
    var p3 = new Person2("Hina", 21);
    console.log(p3.show()); //Hina: 21
    console.log(Person2.name); // Person2 // it referse variable name using which we create it

    //ex:(named class)
    var Person3 = class Madhu {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        show() {
            console.log(this.name + ': ' + this.age);
        }
    }
    console.log(Person3.name); // Madhu (noe it return class name)


//----------------------------------------------------------------
//* Hoisting 
// his means that you can use variables and functions before they are actually declared in the code.
// note : it's important to note that only the declarations are hoisted, not the initializations

    // Function decalrations -----> Hosted
    show1("hima"); // Output : Hello
    function show1(value) {
        console.log(value + ", Hello");
    }

    // Variable declaration -----> Hosted but not initializaed
    console.log(x); // Output : undefined
    var x = 10;
    console.log(x); // Output : 10

    // Function expression -----> Not Hosted
        // show2(); // error
        // var show2 = function () {
        //     console.log("Hello jii");
        // }
    
    //class declaration -----> not Hosted
        // const s1 = new Student(); //error
        // class Student {
        //     constructor(name) {
        //       this.name = name;
        //     }
        // }

    // constructor function -----> Hosted
    const s1 = new Student(); // it create s1 object
    function Student(name) {
        this.name = name;
    }


//----------------------------------------------------------------
//Cunstructor method in class
//Note:
//1) A SyntaxError will be thrown if the class contains more than one occurrence of a constructor method
//2) A constructor can use the super keyword to call the constructor of the super class
//3) Methods defined in class are added in the prototype and not considered as property



//* Class V/S Function
// class constructor can't call w/o "new" keyword
// class methods are non-emumerable.
// class always use "strict mode".  All code inside the class construct is automatically in strict mode.


//----------------------------------------------------------------
//Static methods:
// • The static keyword defines a static method for a class
// • Static methods are called only on class and not on the instance.
// • Static methods are often used to create "utility functions" for an application


//----------------------------------------------------------------
// Object.create();

//1) create object with "no prototype"
var o4 = Object.create(null);
console.log(typeof o4); // Object
console.log(o4); //{} No prototype



//2) create object with "prototype"
obj1 = {
    constructor(name) {
        this.name = name;
    }
}

var o5 = Object.create(obj1);
console.log(typeof o5); // Object
console.log(o5); 
//constructor {} 
o5.name = "Hina";
console.log(o5);
//constructor {name: 'Hina'}



//3) create object with "propertiesObject"
var o6 = Object.create(obj1, {fname: {value:'Hina'}});
console.log(o6); // constructor {fname: 'Hina'}


//----------------------------------------------------------------
//* Inheritance & Encapsulation:

//Inheritance b/w classes
    // 1) Using constructor functions
    // make below things 
        // person class ----> (person.__proto__ -> object.__proto__)
        // student class ----> (student.__proto__ -> object.__proto__)
        // Now, I want that student prototype refers "person" class
            // Student.prototype = Object.create(person.__proto__); 
        
    // 2) Using ES6 classes
    // 3) Using Object.create()
