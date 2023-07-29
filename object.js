//Object:
//non-primitive data types in JS
// It hoalds multiple values innterms of properties and method
// property = holds values of primitive datatype
// methods = functions

// object = associative arrays.
// In JavaScript, an object is a standalone entity because there is no class in JavaScript. 
// but we can achive class using functinality of function.

//object create in two ways: 
// 1. object literal
// 2. object constructor

//----------------------------------------------------------------
//object literal:
var obj = {
    name: "John",
    age: 25,
    city: "New York"
};
console.log(obj);//output:{ name: 'John', age: 25, city: 'New York' }

// obj. with no properties and no arguments
var obj1 = {};
console.log(obj1);//output:{}

//obj. with properties and arguments
var obj2 = {
    name: "asd",
    id: 1
};
console.log(obj2);//output:{ name: 'asd', id: 1 }

//obj. with method
var obj3 = {
    show () {
        console.log("Hello");
    }
};
console.log(obj3);

// Object with method and properties
var person1 = {
    name : 'John',
    age : 21,
    city : 'USA',
    show: function() {
            console.log("Hello, " + this.name + ", " + this.age + ", " + this.city + ", ");
    }
};
console.log(person1.show());//output:Hello, John

//----------------------------------------------------------------
// Object constructor:
// Using "new" keyword.
// In this we can add propeties and methods using "."
// Also create properties using "[<properties name>]"

// Why we need to use Object constructor method for object creation? : 
    // => Because in object creation literal method if we need another object which have same properties and method but they containt different values
    // as existing one object than we need to create this second object as below.
            // var person1 = {
            //     name: "John",
            //     age: 25,
            //     city: "New York"
            // };

            // var person2 = {
            //     name: "sd",
            //     age: 21,
            //     city: "India"
            // };
    // here, we can see that if we need more than one objects with same properties and methods than we need to create manually them.
    // And this type of object creation is very insufficient and not effective at all.

//Solution for this we required one (blue print)class for object so when we create new objects we use that class.
// But in JS we have not specifically defined classes we make them using function -----> which know as "Object constructor"
//"Object constructor" is more effective than "Object literal" method.

//ex:
function Person(name, age, city) {
    this.name = name;
    this.age = age;
    this.city = city;

    this.Information = function() {
        console.log("Hello, " + this.name + ", " + this.age + ", " + this.city);
    } 
}

var person2 = new Person("John", 211, "USA");
console.log(person2); // output : Person { name: 'John', age: 211, city: 'USA', Information: [Function (anonymous)] }
// above output is same as person1 which we carete using "Object Literal" method.
// call method of object
console.log(person2.Information()); // output: Hello, John, 211, USA

var person3 = new Person("asd", 211, "India");
console.log(person2); //output : Person { name: 'John', age: 211, city: 'USA', Information: [Function (anonymous)] }

var person4 = new Person("ert", 31, "USA");
console.log(person4); // output : Person { name: 'ert', age: 31, city: 'USA', Information: [Function (anonymous)] }

// Now, we easly identify that why "Object constrctor" is more effective becase it reuse Person class for creation of new object.

//Addition of properties in perticuler object (this is modify ony that object which we use below not all)
//ex:
person2.Dharm = "Hindu";
console.log(person2);
// output: 
    // Person {
    //     name: 'John',
    //     age: 211,
    //     city: 'USA',
    //     Information: [Function (anonymous)],
    //     Dharm: 'Hindu'
    // }

//addition of method in perticuler object
person2.welcome = function() {
    return ("Hello, " + this.name);
}

console.log(person2.welcome()); //output : Hello, John


//Addition of properties/method object in Class ---> we use them into all object which we create using them
// method1 : direct modify "Person" constructor funtion.

// method2 : add after Constructor functional. not modity costructor function
    //DYYNAMIC
    //For this we use "Prototype": using this we can add methods/properties after declaration of constructor-function into constructor-function 
    //ex:
    Person.prototype.gender = "m/f";
    console.log(person2.gender); // output : m/f
// Note : this type of modification not directly reflect on Constroctor-function but it show in [[prototype]] object
// But it added into Counstrator-function.


//NOTE:
    // An object's methods can be called using () operator 
        // e.g. person.getFullName().
    // Without (), it will return function definition


//----------------------------------------------------------------
//get properties of object 
console.log(person2["name"]); // output : John

//JS return "undefined" : when we try to access properties or call methods that do not exist.


//----------------------------------------------------------------
//hasOwnProperty():
// Use : check for property is present in object or not
// ex:
console.log(person2.hasOwnProperty("name")); //Outpur : true
console.log(person2.hasOwnProperty("Dharm")); // outpur : error bcz, "Dharm" is not property of person2 object but it is property of person of person1.prototype object
console.log(person2.hasOwnProperty("na")); //Outpur : false // bcz, this property not in object person2


//----------------------------------------------------------------
//Access object keys
// 1) using for..in loop
for(var key in person2) { 
    console.log(key);
}
    //output:
    // name
    // age
    // city
    // Information
    // Dharm
    // welcome
    // gender


// 2) using Object.keys(<object name>)
// it return array of objects properties

    //Print object properties name:
        console.log(Object.keys(person2));
        //output:[ 'name', 'age', 'city', 'Information', 'Dharm', 'welcome' ]

    //print object properties values
        Object.keys(person2).forEach((i) => console.log(person2[i]))
        //output :
        // John
        // 211
        // USA
        // [Function (anonymous)]
        // Hindu
        // [Function (anonymous)]

// Object.values(<object name>): This method return object properties values
// return : array of object properties values
    // var value = Object.values(person2);
    // console.log(value);
    // output:
    // [
    //     'John',
    //     211,
    //     'USA',
    //     [Function (anonymous)],
    //     'Hindu',
    //     [Function (anonymous)]
    // ]

// note: This method better than use (Object.keys() + for..in loop)

// Object.entries() : use for see both Object properties names and values together
//return : array which one element is another array of object properties name + values

    //ex:
    let entries = Object.entries(person2);
    console.log(entries);
    // output:
    // [
    //     [ 'name', 'John' ],
    //     [ 'age', 211 ],
    //     [ 'city', 'USA' ],
    //     [ 'Information', [Function (anonymous)] ],
    //     [ 'Dharm', 'Hindu' ],
    //     [ 'welcome', [Function (anonymous)] ]
    // ]

//----------------------------------------------------------------
// Two objects poins to the same object
//=> then if one object change any propeties value it also refects in the other object

    var p1 = person2;
    console.log(person2.name); // output : John
    p1.name = "Nikita";
    console.log(person2.name); // output: Nikita


//----------------------------------------------------------------
// Nested objects:
// (object within object)
// Insort object have properties in terms of another object
var person5 = {
    name : "Nahi",
    age : "18",
    address : {
        city : "Junagadh",
        state : "Gujarat"
    }
};

console.log(person5);
    //output :
    // {
    //     name: 'Nahi',
    //     age: '18',
    //     address: { city: 'Junagadh', state: 'Gujarat' }
    // }
console.log(person5.address);
    //output :
    // { city: 'Junagadh', state: 'Gujarat' }
console.log(person5.address.city);
    //output : Junagadh

//Use of nested objects use to make JSON Object --> which use to make APIs 


//----------------------------------------------------------------
// Make constructor for Class(Object Constructor)

//Before make constructor: if we define class without giving any values.. 
    // person6 = new Person();
    // console.log(person6);
    // output:
    // Person {
    //     name: undefined,
    //     age: undefined,
    //     city: undefined,
    //     Information: [Function (anonymous)]
    // }

function Person(name, age, city) {
    this.name = name || 'Unknown';
    this.age = age || 0;
    this.city = city || 'XYZ';

    this.Information = function() {
        console.log("Hello, " + this.name + ", " + this.age + ", " + this.city);
    } 
}

//After make constructor: if we define class without giving any values.. 
person7 = new Person();
console.log(person7);
    // output:
    // Person {
    //   name: 'Unknown',
    //   age: 0,
    //   city: 'XYZ',
    //   Information: [Function (anonymous)]
    // }

//----------------------------------------------------------------
//Read only properties: (Make private property)
// Using Object.defineProperty() :
// type1: using "writable" property

var user1 = {
    name : "Rekha",
    id : 1
}

Object.defineProperty(user1, "id", {
    writable : false // means now id is "ReadOnly property"
    // writable : true // means we can rewrite "id" property.(output of second console change this time by "4" bcz, I rewrote "id" by 4 before that console.)
})

console.log(user1.id); // output: 1
user1.id = 4;
console.log(user1.id); // output: 1
// here we can see that after change the input in id it's value doesn't change

//type2 : using "Getter & Setter"
var user2 = {
    name : "Rekha",
    _id : 1
}

Object.defineProperty(user2, "id", {
    get : function () {
        return this._id;
    },
    set: function(value) {
        this._id = value;
    }

});

console.log(user2.id); // output: 1
user2.id = 4;
console.log(user2.id); // output: 4

//----------------------------------------------------------------
// Property Descriptor:
// In object each property have property descriptor: it define nature of a property and
// It retrive using: Ovject.getOwnPropertyDescriptor() method
// Syntex : Object.getOwnPropertyDescriptor(<object name>, 'property name')
//ex: 
    var prop_descriptor = Object.getOwnPropertyDescriptor(person2, 'name');
    console.log(prop_descriptor); 
    // output:
    // {
    //     value: 'Nikita',
    //     writable: true,
    //     enumerable: true,
    //     configurable: true
    // }

//* Property Attribute:
// 1) value: cantains actual value of property
// 2) writable: indicated wether property is writable or ReadOnly 
        // writable = true (we can rewrite)
        // writable = false (we can't rewrite)
// 3) enumerable: indicates wether property is avilable inside for_loop for iteration.
// 4) configurable: indicates wether property can be deleted or modify

// writable, enumerable, configurable all are optional and bydefault "true"

//----------------------------------------------------------------
// Define properties:
// allow user to define new property on an object.
// also use for change descriptor of existing property

// Syntex : Object.defineProperty(<object name>, descriptor);
    Object.defineProperty(person2, 'Dharm', {writable: false});
    var prop_descriptor1 = Object.getOwnPropertyDescriptor(person2, 'Dharm');
    console.log(prop_descriptor1);
    // output:
    // {
    //     value: 'Hindu',
    //     writable: false,
    //     enumerable: true,
    //     configurable: true
    // }
    person2.Dharm = 'XYZ';
    console.log(person2.Dharm); // output : hindu
    
    //ex:2
    Object.defineProperty(person2, 'Dharm', {writable: true, configurable: false});
    delete person2.Dharm; // it not work bcz, configuration = false
    console.log(person2.Dharm);

//----------------------------------------------------------------
// Defining getters and setters:
// ex: 
    var user4 = {
        name : 'John',
        lname : "asd", 
        get gname() {
            return this.name + ' ' + this.lname;
        },
        set sname(value) {
            [this.name, this.lname] = value.split(" ");
            
        }
    }
    user4.sname = "Hina Jadav";
    console.log(user4.gname); //Hina Jadav


// Add properties
var obj = {counter: 0};
Object.defineProperty(obj, "reset", {
    get: function(value) {this.counter += value;}});

var c = (obj.reset = 10);
console.log(c); // 10

//----------------------------------------------------------------
var user5 = {
    name : 'John',
    lname : "asd", 
    get: () => this.name.toUpperCase(),
    set: value =>  {this.name = value;}
}
console.log(user5);
    //output:
    // {
    //     name: 'John',
    //     lname: 'asd',
    //     get: [Function: get],
    //     set: [Function: set]
    // }

user5.set("hina");
console.log(user5.get()); //HINA

//----------------------------------------------------------------
// Accessor Descriptor
// accesor : it have getters and setters methods
// Object.defineProperty() : it have property values
// property is either accesssor or data property not both


//----------------------------------------------------------------
//Enumerate the properties of an Object:
//1) For..in loop : Iterates over all enumerable properties of an object.
    for(var i in user5) {
        console.log(i);
    }
    // output:
    // name
    // lname
    // get
    // set

//2) Object.keys()
    console.log(Object.keys(user5));
    //output : [ 'name', 'lname', 'get', 'set' ]

//3) Object.getOwnPropertyNames()
    console.log(Object.getOwnPropertyNames(user5));
    //output : [ 'name', 'lname', 'get, set' ]


//----------------------------------------------------------------
// "this" kryword:
// it points peticuler object.(here, which object we refers it depends on how function called that object)

// Rule of use "this"
// 1) if we use this alone ---> it points Global scope. & work as refernce of window object
    var x = this;
    console.log("x:" + x); // [object Window]

    //ex:2
    var n = 1000;
    function number() {
        var n = 100;
        console.log("n = " + n); 
        console.log("this.n = " + this.n);
    }
    number();
    // (see output on console)
    //n = 100 -----> refers local variable
    //this.n = 1000 ------> refer global variable
//Note : 
// So, if 'this' is used inside any global function and called without dot 
// notation or using window. then this will refer to global object which is 
// default window object.


//2) "this" Inside Object method:
//if we use this with object ---> refernce of that object
    var y = {
        name: "asd"
    }
    console.log(this.y); 
    // {
    //     "name": "asd"
    // } 

// When we create object using "new" keyword then ---> "this" refers that object
    var n1 = 200;
    function number1() {
        this.n1 = 100;
    }
    var num = new number1();
    console.log(num.n1); //100

    var num1 = new number1();
    num1.n1 = 600;
    console.log(num1.n1); //600

//3) call() & apply():
// Main purpose of use call() and apply() method is to set the context of this inside a function  
// irrespective whether that function is being called in the global scope or as object's method

var fname = "MM";
function Women() {
    console.log(this.fname);
}

// create object of "Window class (global class)"
var o1 = {fname : "Madhu", Women: Women}; 
var o2 = {fname : "Anjali", Women: Women};

Women();// (because it call globally so this refers global variable)
 // MM
Women.call(o1); // this points o1
 // Madhu
Women.apply(o2); // this points o2
 // Anjali

o1.Women.call(window); // this points window
 // MM


// bind() :used to set the context of 'this' to a specified object when a function is invoked
// *usually helpful in setting up the context of this for a callback function.


function bahen(callback) {
    var fname = "YY";
    callback();
};
var o3 = {
    fname : "WW",
    show: function() {
        console.log(this + ":" + this.fname);
    }
};
bahen(o3.show); // [object window]:MM
bahen(o3.show.bind(o3)); // [object Object]:WW

// How "new" key word work behind the seen for creation of new object.
// 1) it create empty object ---> {}
// 2) assign function prototypr ---> {__proto__ = <function name>.prototype}
// 3) assign properties and methods declare with "this" keyword ---> {__proto__ = <function name>.protutype, <properties with their values>}
// 4) return newly created object ---> var obj =  {__proto__ = <function name>.protutype, <properties with their values>}

// if "new" keyword retur "primitive" values ---> then it can perform following 4 task
// if "new" keyword retur "non-primitive" values ---> then it can't perform following 4 task

















//Note: Only property or method name without value is not valid. The following syntax is invalid.
// var obj ={name}; --> this is invalid
// object constructor:
// function xyz(name, age, city) {
//     this.name = name;
//     this.age = age;
//     this.city = city;

    
// };
// var p1 = xyz("hmm", 10, "nju"); 
// console.log(p1.show());
