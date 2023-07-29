//Objetc:
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
    var value = Object.values(person2);
    console.log(value);
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