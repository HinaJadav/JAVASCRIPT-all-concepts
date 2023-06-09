// .splice() : it removes any number of consecutive elements from anywhere in an array. 
// This method modify array.
// Syntex1 : <array>.slice(<start index>, <no. of element remove>);
// ex:
    // let array = ['today', 'was', 'not', 'so', 'great'];
    // array.splice(2, 3);---------------> means, it removes 3 elements from index 2

// we can also modify ".splice()" method so we can also do "remove" and "replace" together
// Syntex2 : <array>.slice(<start index>, <no. of element remove>, <replace valuse>);
// ex:
    // const numbers = [10, 11, 12, 12, 15];
    // const startIndex = 3;
    // const amountToDelete = 1;

    // numbers.splice(startIndex, amountToDelete, 13, 14);
    // console.log(numbers);




// .slice() :
// Rather than modify the array it copies or extracts a given number of elements to a new array.
// it takes ,two parameters : Begin-index & End-index
// Syntex : <array>.splice(<start-index>, <end-index>);
// ex:
    // let weatherConditions = ['rain', 'snow', 'sleet', 'hail', 'clear'];
    // let todaysWeather = weatherConditions.slice(1, 3);




//==> How to use one array for make another array
//use : "Spread" operation[...]
//ex:
// let thisArray = ['sage', 'rosemary', 'parsley', 'thyme'];
// let thatArray = ['basil', 'cilantro', ...thisArray, 'coriander'];----------> ['basil', 'cilantro', 'sage', 'rosemary', 'parsley', 'thyme', 'coriander'].




//==> "indexOf()" operation
// it is use for quickly and easily check the presence of an element on an array.
// if (element is in array) ----------> return : (index no)
// else -------------> return : (-1)




//==> Convert object into Array
// for this we use : "Object.keys(<object name>);"




//==> Reverse String

//Method 1:
// Syntex : <string>.split(" ").reverse().join(""); 
// In above method, we use three different method in which( 1. ".split(" ")" : which split <string> into array 
//                                                          2. ".reverse()" : which reverse the array which we get above.
//                                                          3. ".join("")" : which join array all element amd convert into string.
function reverseString(str) {
    return str.split("").reverse().join("");
}

reverseString("hello");


//Method 2:
// Using for loop
function reverseString(str) {
    var newString = "";
    for (var i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}

reverseString('hello');


//Method 3:
//Using Recursion
function reverseString(str) {
    if (str === "")
      return "";
    else
      return reverseString(str.substr(1)) + str.charAt(0);
}

reverseString("hello");




//==> subString into String
//Method 1:
// ".endsWith()" : it check that given subString is present in String or not.
// Syntex : <String>.endsWith(<subString);

//Method 2:
    // if (string.substr(-target.length) === target) {
    //     return true;
    // } else {
    //     return false;
    // }




//==> Reapeat given String.
//Method 1:
//".repeat()" : if we want to repeat string "n" times than we use this.
// Syntex : <String>.repeat(<n>);

//Method 2:
    // let ans = "";
    // for(let i = 0; i < Number; i++) {
    //     ans += <string>;
    // }
    // retrun ans;




//==> convert character (lowercase---->Uppercase)
// ".toUpperCase()" 
// Syntex : <character>.toUpperCase();




//==> "Inheritance in Object":
// set Perant constructor into child
// when we make any instace of child object then they are instace of only child object not parent--> for make also those all instace of parent then do below code
// for this we need to manage constructor
// ex:
    // function Bird() { }
    // Bird.prototype = Object.create(Animal.prototype);
    // let duck = new Bird();
    // duck.constructor; ---------------> now, duck is instace of both "Bird" and "Animal".


//==>Add Methods After Inheritance
//ex:
    // function Animal() { }
    // Animal.prototype.eat = function() {
    //   console.log("nom nom nom");
    // };
    // function Bird() { }
    // Bird.prototype = Object.create(Animal.prototype);
    // Bird.prototype.constructor = Bird;

    // Bird.prototype.fly = function() {
    //     console.log("I'm flying!");
    // };

    // let duck = new Bird();
    // duck.eat();
    // duck.fly();

//==> Override Inherited Methods
//ex:
    // function Animal() { }
    // Animal.prototype.eat = function() {
    //   return "nom nom nom";
    // };
    // function Bird() { }

    // Bird.prototype = Object.create(Animal.prototype);

    // Bird.prototype.eat = function() {
    //   return "peck peck peck";
    // };----------------------------------------------------> Here, we override "eat()" method.




//==> the Immediately Invoked Function Expression (IIFE)
//ex:
    // (function () {
    //     console.log("Chirp, chirp!");
    //   })();

//Above function is anonymous function.


//==>Use an IIFE to Create a Module
//ex:
    //Here, we have teo different function,
        // function glideMixin(obj) {
        //     obj.glide = function() {
        //         console.log("Gliding on the water");
        //     };
        // }
        // function flyMixin(obj) {
        //     obj.fly = function() {
        //         console.log("Flying, wooosh!");
        //     };
        // }
    
    //Now, we make one module which combine them and make one group
        // let motionModule = (function () {
            // return {
            //     glideMixin: function(obj) {
            //     obj.glide = function() {
            //         console.log("Gliding on the water");
            //     };
            //     },
            //     flyMixin: function(obj) {
            //     obj.fly = function() {
            //         console.log("Flying, wooosh!");
            //     };
            //     }
            // }
        // })();
