const export_f = require('./export')

console.log(export_f); // it print whole object which is exported
// output: { x: 10, fun: [Function: fun] }

console.log(export_f.fun()); 
// output: Welcome in NodeJS world.
