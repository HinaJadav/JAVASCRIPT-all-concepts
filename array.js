
// array = list like object
// basically single object
// contains multiple values store in a list
// neither the length and type of its elements are fixed

// create array:
let shopping = [1, "b", "c"];
shopping[5] = 3;
console.log(shopping); // it give all information about Array 
console.log(shopping[0]); // give 0th element of array

shopping[0] = "d";
console.log(shopping); // it show all info. about updated array

// create array using "new" keyword:
let arr = new Array("t", "b", "c");
console.log(arr);
console.log(arr[0]);

// above both methods are Equivalent

// create array using "Array.of"
let arr1 = Array.of(1,"hello");
console.log(arr1);

// check for array
// true = yes array, false = no array
console.log(Array.isArray(arr1)); // true
console.log(Array.isArray('asd')); // false

// Looping in array
for(let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
// output :
// t
// b
// c

// looping using "callback" function
arr.forEach(loop);
function loop(arr,i) {
    console.log(i, arr);
}
//output:
// 0 t
// 1 b
// 2 c

//optimization version of above loop
arr.forEach((arr,i) => console.log(i,arr));
//output:
// 0 t
// 1 b
// 2 c

arr.forEach(i => console.log(i));
//output:
// t
// b
// c

// merge two array
const arr3 = arr + arr1;
console.log(arr3); // output: t,b,c1,hello


// add or remove item from "end" of array using push() and pop()
arr1.push("q");
console.log(arr1); //output : [ 1, 'hello', 'q' ]

let v = arr1.pop();
console.log(v); // output : q
console.log(arr1); // Output : [ 1, 'hello' ]

// add or remove item from "begining" of array using shift()
let v1 = arr1.shift();
console.log(v1); // output :1
console.log(arr1); //output : [ 'hello' ]

let new_length = arr1.unshift('hii'); // it return size of new array after add value from begining 
console.log(new_length); // output: 2
console.log(arr1); // output: [ 'hii', 'hello' ]

// "indexOf" in array : use to find index of specific value from array
let index_find = arr1.indexOf('hello'); 
console.log(index_find); // output : 1

// Splice : 
// It modify original array
// remove element from array using splice
let i = arr1.indexOf('hello');
let remove_item = arr1.splice(arr1, i);
console.log(remove_item); // output : [ 'hii' ]
console.log(arr1); // output : [ 'hello' ]

// inser or replace using splice
// Syntex : <array>.splice(<start index>, <no. of element>, <value> )
let arr4 = [1,2,3,4,5,6,7];
//1)replace:
arr4.splice(1,4,'h','f'); // means from index 1 to 4 elements of arr4 replace with 'h','b'
console.log(arr4); // output : [ 1, 'h', 'f', 6, 7 ]
//2)insert
arr4.splice(1,0,'k','g'); // if we take no. of element = 0 in above syntex than we able to insert value on start_index of array
console.log(arr4); // output : [ 1, 'k', 'g', 'h', 'f', 6, 7 ]

//Slice:
// It not modify original array
// 1) copy array
let arr4_copy = arr4.slice();
console.log(arr4_copy); // output : [ 1, 'k', 'g', 'h', 'f', 6, 7 ]

//2) copy subarray
let arr4_subcopy = arr4.slice(2); // it copy arr4 from index 2 to n
console.log(arr4_subcopy); // output : [ 'g', 'h', 'f', 6, 7 ]

let arr4_subcopy1 = arr4.slice(2,4); // it copy arr4 from index 2 to 4
console.log(arr4_subcopy1); // output : [ 'g', 'h' ]



// Convertion:
// Array to String : using join() method

const str1 = arr4.join();
console.log(str1); // output :1,k,g,h,f,6,7

const str2 = arr4.join("    ");
console.log(str2); // output : 1    k    g    h    f    6    7

const str3 = arr4.join("-");
console.log(str3); // output : 1-k-g-h-f-6-7

// String to Array : using split()
// in split() write that special character using which we want split string
const arr5 = str1.split(','); 
console.log(arr5); //output:  ['1', 'k', 'g', 'h', 'f', '6', '7']

const arr6 = str3.split('-');
console.log(arr5); //output:  ['1', 'k', 'g', 'h', 'f', '6', '7']



// Check for item's presents in array : using includes()
//Syntex : includes(<check item vaue);
console.log(arr4.includes('h')); //output : true
console.log(arr4.includes('z')); //output : false



// Check for criteria in array : using every()
//Syntex : <arry>.every(i => <criteria condition>); // i = index value
console.log(arr4.every(i => i < 10)); //output : false(condition not follow by any elemnts)
let arr7 = [89,78,90];
console.log(arr7.every(i => (i >= 70 && i <= 100))); //output : true (condition follow by every elements)




// Create new array by pass criteria using filter() in array.
// Syntex : <array>.filter(i => (condition));
console.log(arr7.filter(i => (i < 90 && i >= 70))); //output : [ 89, 78 ]




// Create new array using : map()
//Syntex : <new array> = <array>.map(i => (condition));
const new_arr = arr7.map(i => i/2);
console.log(new_arr); //output : [ 44.5, 39, 45 ]

// copy original array using map()
const new_arr1 = arr7.map(i => i);
console.log(new_arr1); //output : [ 89, 78, 90 ]



// Find first matching element from array : using find()
//Syntex : <array>.find(i => (condition));
console.log(arr7.find(i => (i > 80))); //output : 89
console.log(arr7.find(i => (i < 0))); //output : undefined (means, if any element is not found that find() return "indefined")




// find index of first mathching element from array : using findIndex()
//Syntex: <array>findIndex(i => (condition));
console.log(arr7.findIndex(i => (i > 80))); //output : 2
console.log(arr7.findIndex(i => (i < 0))); //output : -1 (means, if any element is not found that findIndex() return -1)



// apply function on each element of array : using reduce()
const multipleElements = (accumulator,currentvalue) => accumulator * currentvalue;
console.log(arr7.reduce(multipleElements)); //output : 624780

const multipleElements1 = (accumulator,currentvalue) => accumulator * currentvalue;
console.log(arr7.reduce(multipleElements1, 10)); //output : 6247800
// here, 10 is initial value in accumulator.



//Reversing array (reverse)
const reverse_arr7 = arr7.reverse();
console.log(reverse_arr7); //output : [ 90, 78, 89 ]


//Sorting array : using sort()
const sort_arr7 = arr7.sort();
console.log(sort_arr7); //output: [ 78, 89, 90 ]













