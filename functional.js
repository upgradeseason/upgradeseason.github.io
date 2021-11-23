let states = ["Kansas", "Nebraska", "North Dakota", "South Dakota"];

// urls: Functional version
function functionalUrls(elements) { //Takes in array of elements
// Take array(called elements), call map, give it anon function, mutate array, return results
  return elements.map(element => element.toLowerCase().split(/\s+/).join('-'));
}
console.log(functionalUrls(states));

// Takes in a string and returns a URL version of the string.
//  Example: "North Dakota" -> "north-dakota"
let state = "Arizona"
function urlify(string) {
  return string.toLowerCase().split(/\s+/).join('-');
}

console.log(urlify(state));

console.log(16 % 2 === 0);

console.log([1, 3, 5, 6, 8].filter(n => n % 2 === 0));

// Singles
function singles(elements) {
  return elements.filter(element => element.split(/\s+/).length ===1);
}

console.log(singles(states));

console.log(states);

function kansas(elements) {
  return elements.filter(element => element.includes('Kansas'));
}

console.log(kansas(states));

function twoWordStates(states) {
  return states.filter(state => state.split(/\s+/).length === 2);
}
console.log(twoWordStates(states));

let numbers = [1, 2, 3];

function sum(elements) {
  elements.reduce((total, n) => { return total += n; });
}

console.log(sum(numbers));
//March thru the array and do smth w each element returning array all at once
// Reduce contents of array down to single number, sum of elements in array
//console.log(sum(numbers));

// lengths

function lengths(elements) {
  return elements.reduce((lengths, element) => { //starting at empty plain object (lengths)
                            lengths[element] = element.length; // lenghts of each elemnt is the length of that elemtnt
                            return lengths; //returning it to next element in array
                            }, {});
}
console.log(lengths(states));
