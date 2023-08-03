// Be default JS is "Synchronous" and "Single threaded".

//Synchronous programming
    // In synchronous operations tasks are performed one at a time and only when one is completed, the following is unblocked.
    // Problem : it is a blocking mode

//Asynchronous programming
    // you can move to another task before the previous one finishes. 
    // able to deal with multiple requests simultaneously, thus completing more tasks in a much shorter period of time.

// AJAX : Asynchronous JacaScript And XML
// not programming langusge
// use to combine 1)  A browser built-in XMLHttpRequest object (to request data from a web server)
                //2)  Java Script and HTML DOM (to display or use the data)

// it work like "JSON".
//AJAX allows web pages to be updated asynchronously by exchanging data with a web server behind the scenes. 
//This means that it is possible to update parts of a web page, without reloading the whole page


//**Callback hell:
    // Callback hell is a phenomenon where multiple callbacks are nested after each other. 
    // It can happen when you do an asynchronous activity that’s dependent on a previous asynchronous activity.
    // These nested callbacks make code much harder to read.

//Handling Callback Hell
    // 1) Promise
    // 2) async/await

//1) Promise : 
    // one type of JS object, which contains both producing and calls to consuming code.
    
//*Promise : Executor code
    //function passed to new Promise is called the executor.
    //When new Promise is created, the executor runs automatically.
    //It contains the producing code which should eventually produce the result.
    // Its arguments myResolve and myReject are callbacks provided by JavaScript itself. Our code is only inside the executor.

    // When the executor obtains the result, it should call one of these callbacks:
        // myResolve(value) — if the job is finished successfully, with result value.
        // myReject(error) — if an error has occurred, error is the error object

    //When the executor obtains the result, it should call one of these callbacks:
        // myResolve(value) — if the job is finished successfully, with result value.
        // myReject(error) — if an error has occurred, error is the error object.

    //A promise that is either resolved or rejected is called “settled”, as opposed to an initially “pending” promise

//*Promise : consumers

// A Promise object serves as a link between the executor (the “producing code”) and the consuming functions, which will receive the result or error. 
// Consuming functions can be registered using methods .then, .catch and .finally.

//.then : using this we can handle both success and error


//.catch(f) : using this we can handle only "error".
    //Syntex:
    // promise.then(null, errorHandlingFunction)
                //or
    // promise.then(errorHandlingFunction)
// note: The call ".catch(f)" is a complete analog of ".then(null, f)"


//.finally(f) : ucall .finally(f) is similar to .then(f, f) in the sense that f always runs when the promise is settled: be it resolve or reject.
// finally is a good handler for performing cleanup
    // ex: stopping our loading indicators
//  A finally handler has no arguments. In finally we don’t know whether the promise is successful or not. That’s all right, as our task is usually to perform “general” finalizing procedures.
// A finally handler passes through results and errors to the next handler.

// SEE CODE OF LECTURE-12









