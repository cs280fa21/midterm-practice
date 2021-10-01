// You may not change the signature of min()
function min() {
  const args = Array.from(arguments);
  let min = args[0];
  for (const arg of args) {
    if (min > arg) {
      min = arg;
    }
  }
  return min;
}

/*

// Alternatively:

function min() {
  return Array.from(arguments).reduce(
    (minSofar, current) => (minSofar < current ? minSofar : current),
    arguments[0]
  );
}

*/

console.log(min()); // undefined
console.log(min(1)); // 1
console.log(min(1, 0)); // 0
console.log(min(1, 0, 2, -3, 5)); // -3