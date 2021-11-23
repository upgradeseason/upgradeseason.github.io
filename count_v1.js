const song = `Change come from the inside out
No fear, live free, let the truth ride out
I'm steady, shakin' off the shackles of the old me
Wakin' up daily, meditation, feelin' so free
They hate to see you change {yeah}
But they don't understand {no}
The less you see for yourself, you won't comprehend
The caterpillar don't care what you think about him
He was born to be fly, his nature gonna bring it outta him
By the struggle I was never broken, I was broken open
I tapped into a source that was omnipotent
Had to shift my focus to my higher purpose
Ain't nothing weak about broke, it takes a fighter's courage
People say they want a revolution
But steady holdin' on the slave ideas, afraid of evolution
In life we live and learn, it's pratice, theory, practice
Wisdom is organically grown, its not pre-packaged
We think we found the absolute truth
But only to discouver it's a labyrinth, we go from on maze to another
So many chambers and angles, peelin' the onion layers
Within it all I see the same gang, just different players
So I rebel from the prison cell of the pidgeon hole
And dare to be myself, original
A man lives on principles --I don't posture to be popluar
Born to be a leader not just a blind follower`

// console.log(song);

// Our task: Extract all the unique words in long piece of text, and count how many times each word appears

// Now we need object to hold all of the unique words.

// How find the unique words? Go through and use our RegEx matcher to pull out all words
// Iterate through those words
// If it already exists in our 'uniques' object, we'll increment the count, otherwise set the count = to 1


// let uniques = {}
let uniques = new Map();

let words = song.match(/[\w+']+/g);
// Lets console.log this thing
// console.log(words);
//We're ready to iterate through this with for loop for now (there's better way)
// i is loop var, counter, < lngth of words is a property of the array
for (let i = 0; i < words.length; i++) {
  let word = words[i]; // The i-th word aka word n (or i in this case)
// Now we keep count inside this uniques variable
// If uniques already has the word as a key, we increment the count by 1, or set it equal to 1 bc first time word
// appeared
  if (uniques[word]) {
    // console.log(`Old word: ${word}`); // Useful to print thigns out as we go along
    uniques[word] += 1;
  } else {
    // console.log(`New word: ${word}`)
    uniques[word] = 1;
  }
    // console.log(uniques[word]); // Just console.log stuff, get insight into the execution of programs
}

console.log(uniques);




















