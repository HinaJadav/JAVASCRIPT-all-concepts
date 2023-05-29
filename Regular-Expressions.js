//Regular Expressions are also know as "regex" or "regexp".
//It is one type of pattern which helps Programmers in -------> match, search, replace text.
//It is very powerful but can be hard in read because they use special characters to make more complex formates.

//TOPIC 1: Find specific word from String.
// ex we want to find "The" from string "The dog chased the cat." --------------> regular expression for this = /The/

//==> Use of ".test()" keyword -----------> It return "true" if, whatever word we want to find are present in given String.
//ex: let GIVEN_STRING = "freeCodeCamp";
    // let WORD_WHICH_WE_WANT_TO_FIND_FROM_STRING = /Code/;
    // WORD_WHICH_WE_WANT_TO_FIND_FROM_STRING.test(GIVEN_STRING);