let Phrase = require("mhartl-palindrome");
// Due to JS origins in browser, JS dont know bout require, cant include 1 js file into another
// Need node.JS added require
// node moduel browserfy converts node module into smth that can be included in browser
// Overall phrase object

// built in js function prompt
// Specifics we're doing right now
let string = prompt("Please enter a string for palindrome testing:");
let phrase = new Phrase(string);

if (phrase.palindrome()) {
  alert(`"${phrase.content}" is a palindrome!`);
} else {
    alert(`"${phrase.content}" is not a palindrome.`);
}
alert(string);

// alert(new Phrase("Madam, I'm Adam.").palindrome()); // JS creates object instance FIRST, then calls palind.. method
// returns phrase object instance first

// include this into a webpage

// Whatever we add to this file, we can put it into the browser
