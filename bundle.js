(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
let Phrase = require("mhartl-palindrome");
// Due to JS origins in browser, JS dont know bout require, cant include 1 js file into another
// Need node.JS added require
// node moduel browserfy converts node module into smth that can be included in browser
// Overall phrase object


// factor palindrome testing code into function
function palindromeTester(event) {
  event.preventDefault();

  let phrase = new Phrase(event.target.phrase.value);
  let palindromeResult = document.querySelector("#palindromeResult");

  if (phrase.palindrome()) {
    palindromeResult.innerHTML = `"${phrase.content}" is a palindrome!`;
  } else {
    palindromeResult.innerHTML = `"${phrase.content}" is not a palindrome.`;
  }
//alert(string);
}

// Add JS code to listen to the event of the DOM being loaded
document.addEventListener("DOMContentLoaded", function() {

  // Finds/selects the actual element on the page, corresponding to ID palindomeTester (our button)
  let button = document.querySelector("#palindromeTester");
  // JS objects like button here have property called innerHTML
  // If we assign to that property we can change the value of the HTML displayed on the page
  // Add 2nd event listener corresponding to clicking the button
  button.addEventListener("submit", function() {
    // Call it(palindromeTester function) if button clicked
    palindromeTester(event);
  });
});

// To add event listener to the button, we need a js object that reps button itself

// built in js function prompt
// Specifics we're doing right now

// alert(new Phrase("Madam, I'm Adam.").palindrome()); // JS creates object instance FIRST, then calls palind.. method
// returns phrase object instance first

// include this into a webpage

// Whatever we add to this file, we can put it into the browser

},{"mhartl-palindrome":2}],2:[function(require,module,exports){
module.exports = Phrase;

// Adds `reverse` to all strings.
String.prototype.reverse = function() {
  return Array.from(this).reverse().join("");
}

function Phrase(content) {
  this.content = content;

  // Return content processed for palindrome testing.
  this.processedContent = function processedContent() {
    return this.letters().toLowerCase();
  }

  // Returns the letters in the content.
  // For example:
  //   new Phrase("Hello, world!").letters() === "Helloworld"
  this.letters = function letters() {
    return Array.from(this.content).filter(c => c.match(/[a-z]/i)).join("");
  }

  // Returns true if the phrase is a palindrome, false otherwise.
  this.palindrome = function palindrome() {
    return this.processedContent() === this.processedContent().reverse();
  }
}


},{}]},{},[1]);
