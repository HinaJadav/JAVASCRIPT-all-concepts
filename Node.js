// What is node.js?
// Node is note language
// open source server enviroment built on Google's Chrome JS engine.
// free
// able to run on verious platforms.
// use JS on the server.

// Defination : Node.js is a patform build on Chrome's JavaScript runtime for easily building fast and scalable network application.
// It uses event-driver and non-blocking I/O model tha makes it lightweight and efficient, perfect for data-intensive real-time applications that run across distributed devices. 

//----------------------------------------------------------------
// Why do we use Node ?
// It mostly used for API
// So we can connect the same Database with Web App, Mobile App.
// Node is super-fast for APIs.

//----------------------------------------------------------------
// JavaScript & Node are Same?
// Both code syntex is Same.
// Both are not exactly same.
// Because we can't connect JS to DB & Node is able to connect with DB.
// JS run on the browser while Node run on the Server-side.
 
//----------------------------------------------------------------
// Interview Quetions
// 1) when we execute any sentence like console.log() or only declare any variable after run that line why browser/console show "undefined"?
// => Because after that line we not returning any thing

// 2) Is browser console and VS-code console is Same?
// => No, both are not similer. "Browser console" is provided by browser where console pannel which we use into VS-code is provided by Node JS installation and it is internal module of NOdeJS. 

// 3) why use filter in NodeJS? and How?
// => Using filter() function we able to apply filter no array for specific conditions.
    // ex:
    var arr = [1, 2, 3];
    const result = arr.filter((i) => {
        return (i >= 2);
    })
    console.log(result);
    // output : [ 2, 3 ]

//----------------------------------------------------------------
// Core Modules in NodeJS:
// core modules for any language : It is feature who handle data and other information about language.
// ex: console.log() is one of the core module of JS

// Type of core modules:
// 1) Global core modules : This type of module is not need to import from any where.
// 2) Non-global core module : 







//----------------------------------------------------------------
// Note : Like JS we can't export and import content of files for this ,
// we need to create "module.exports" object in file from which we want to export content
// and in import file create const variable (mostly it has similer name to export file) ------code:-----> const exports = require('./<export file name>')
// ex: show import.js and export.js files


//----------------------------------------------------------------




