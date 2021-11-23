let Phrase = require("mhartl-palindrome");
// Due to JS origins in browser, JS dont know bout require, cant include 1 js file into another
// Need node.JS added require
// node moduel browserfy converts node module into smth that can be included in browser
// Overall phrase object


// factor palindrome testing code into function
function palindromeTester(event) {
  event.preventDefault(); //Prevents sending info back to server that doesn't exist

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
