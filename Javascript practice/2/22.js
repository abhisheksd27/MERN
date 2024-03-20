// create a counter function using closures that increments and returns the count on each call
// this is an example of how to use closures in JavaScript
function makeCounter() {
  let count = 0;
  
  return function () {
    count++;
    return count;
  };
}

const myCounter = makeCounter();
console.log(myCounter()); // Output: 1
console.log(myCounter()); // Output: 2