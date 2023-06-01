//Regular Expressions are also know as "regex" or "regexp".
//It is one type of pattern which helps Programmers in -------> match, search, replace text.
//It is very powerful but can be hard in read because they use special characters to make more complex formates.




//TOPIC 1: Find specific word from String.
//ex: we want to find "The" from string "The dog chased the cat." --------------> regular expression for this = /The/
//Syntex: /regex/.test('string');
//==> Use of ".test()" keyword -----------> It return "true" if, whatever word we want to find are present in given String.
//ex:    let GIVEN_STRING = "freeCodeCamp";
        // let WORD_WHICH_WE_WANT_TO_FIND_FROM_STRING = /Code/;
        // WORD_WHICH_WE_WANT_TO_FIND_FROM_STRING.test(GIVEN_STRING);




//TOPIC 2: Find multiple words from String
//==> for this type of serch we need regex which use "alternation" or "|(OR)".
//example, if you wanted to match the strings "yes or no", the regex you want is "/yes|no/".
//==> using above method we can also search for more than two words.





//TOPIC 3: Ignore case while you matching
// use : "i-flag".
// Syntex : <find-word>.test(<string>)
//          where, <find-word> = /<fing-word>/i




//TOPIC 4: Find specific word match in string
// use : "match()" method
// Note : Syntex of "match()" is exectly opposite of "test()"
// Syntex : 'string'.match(/regex/);
//ex:
    // "Hello, World!".match(/Hello/);
    // let ourStr = "Regular expressions";
    // let ourRegex = /expressions/;
    // ourStr.match(ourRegex);




//TOPIC 5: Find more than one matches of specific word in String.
//==> Using this Regexp we can find multiple occurence of specific word from given string.
//use : g-flag.(GLOBALE flag)
//Syntex : /regex/g.match('string');
//ex:
    // let testStr = "Repeat, Repeat, Repeat";
    // let ourRegex = /Repeat/g;
    // testStr.match(ourRegex);
//OUTPUT : ["Repeat", "Repeat", "Repeat"]


//NOTE : Muliple flags in regexp
// ex: /search/gi ----------> means search multiple ocuurence with ignorecase.




//TOPIC 6 : Wildcard Period.
//==> wildcard character(.) : it also know as "dot" and "period".
//ex : to match hug, huh, hut, and hum ---------->  /hu./
//ex:
    // let humStr = "I'll hum a song";
    // let hugStr = "Bear hug";
    // let huRegex = /hu./;
    // huRegex.test(humStr);
    // huRegex.test(hugStr);
//OUTPUT : both test() give "true".




//TOPIC 7 : Match Single Character with Multiple Possibilities
// use : character classes(in this we put all character inside [] which we are want to match)
// ex : to match bag, big, and bug but not bog.----------> regex : /b[aiu]g/ 
// ex : for find all vowels from given string ---> regex : /aeiou/




//TOPIC 8 : match a large range of character in String.
//use : (-) = hyper character. 
// use of (-) for define range : if I want to match letters from "a" to "g" ----> [a-e]
//ex:
    // let catStr = "cat";
    // let batStr = "bat";
    // let matStr = "mat";
    // let bgRegex = /[a-e]at/;
    // catStr.match(bgRegex);
    // batStr.match(bgRegex);
    // matStr.match(bgRegex);
//OUTPUT : ["cat"], ["bat"], and null -----> in last match Answer = "null" because, "m" is out of range character.

//NOTE : for match all characters in given String ----> regex : /[a-z]/gi




//TOPIC 9: Match Number and letters of the Alphabet.
//NOTE : for matches all numbers and characters -----> regex : /a-z0-9/ig





//TOPIC 10: Match Single Characters Not Specified
//==> "negated character set" ------> regex : /[^<match character>/gi] = this regular expressions matches all character which are not vowel.




//TOPIC 11: Match Characters that Occur "One or More Times"
//regex : /<character value>+/gi
//ex: if regex = /a+/g 
//    then, in "abc" and return ["a"]. Because of the +, and in "aabc" and return ["aa"].




//TOPIC 12: Match Characters that Occur "Zero or More Times".
//regex : /<Characters>*/ 
//==> Here, I use "*" for make regex.
//Syntex : 'string'.match(regex);
//ex :  
    // let soccerWord = "gooooooooal!";
    // let gPhrase = "gut feeling";
    // let oPhrase = "over the moon";
    // let goRegex = /go*/;
    // soccerWord.match(goRegex);-----------------------------> ["goooooooo"]
    // gPhrase.match(goRegex);--------------------------------> ["g"]
    // oPhrase.match(goRegex);--------------------------------> null




//TOPIC 13: 
