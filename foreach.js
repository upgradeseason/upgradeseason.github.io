let a = ["ant", "bat", "cat", 42];
a.forEach(function(element) {
  console.log(element);
});

a.forEach(element => {
  console.log(element);
});

a.forEach(element => console.log(element));
a.forEach(element => console.log(element));



// Our technique: Create an array from the string, then use forEach to iterate 1 element at a time

// Array.from("honey badger");

let song = "Foo bar ista";
Array.from(song).forEach(function(character) {
  console.log(character);
});
