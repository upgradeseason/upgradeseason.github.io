const sonnet = `Let me not to the marriage of true minds
That looks on tempests and is never shaken;
It is the star to every wand'ring bark,
Love's not time's fool, though rosy lips and cheeks
Within his bending sickle's compass come:
Love alters not with his brief hours and weeks.`;

// Our task: Extract all the unique words in long piece of text, and count how many times each word appears

let uniques = {}; // Create our object composed of unique words

let words = sonnet.match(/\w+/g); // Returns an array of all the strings that match “one or more word characters in a row” aka all the words

// Iterate through `words` and build up an hash of unique words.
for (let i = 0; i < words.length; i++) {
  let word = words[i];
  if (uniques[word]) {
    uniques[word] += 1;
  } else {
    uniques[word] = 1;
  }
}

console.log(uniques)
