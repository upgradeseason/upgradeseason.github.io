// Reverses a string
function reverse(string) {
//  return string.split("").reverse().join(""); // Doesn't handle emojis
  return Array.from(string).reverse().join("")
}


function Phrase(content) {
  this.content = content; // This is the phrase object itself, it refers to a specific instance of phrase
// Everytime we use the new constuctor, we create a new instance, and that creates a new object
// and inside the object, THIS refers to the object itself
// Returns true for a palindrome, false otherwise.
// Bind this fucntion to a variable inside the Phrase object
// We can do this w the same THIS notation
// The method is just a property that happens to be a function
  this.louder = function() {
    return this.content.toUpperCase();
}
// returns content processed for palendrome testing
  this.processedContent = function processedContent() {
    return this.content.toLowerCase(); //this is a fucntion, need to return the value
// instead of processedContent being a variable, its a function of zero args intenral to the obj
}
  this.palindrome = function palindrome() {
  //Phrase knows its own content, can replace string with this.content
// This is how we access a property inside an object
  //let lowerCaseString = this.content.toLowerCase(); // Move lowerCaseString variable into its own method, its a seperate
// operation
  //return lowerCaseString === reverse(lowerCaseString);
    return this.processedContent() === reverse(this.processedContent());
}
}
//we've added a property, now lets add a method
// Defines trnslated phrase object
function TranslatedPhrase(content, translation) {
  this.content = content; //assign these here
  this.translation = translation;
// override processContnent method in parent object to check if translation is palindrome isntead of contnet
  this.processedContent = function processedContent() {
    return this.translation.toLowerCase(); //this is a fucntion, need to return the value

}
TranslatedPhrase.prototype = new Phrase(); //assign directly to this prototype
// Inheritanc ein Ruby
// when we call new translatied phrase, resulitng instance obj will have processdcontena nd palindrom methods
// Translated phrase inherits methods from a parent object
// TranslatedPhrase inherits palindrome function from the phrase object, we can ask it if palindrome.
