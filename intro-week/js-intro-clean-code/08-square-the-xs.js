const { runTest, check } = require('./test-api');

function countXs(letters) {
  // changing variable names to be clearer
  // changed  map loop to forEach and used ternary for better logic
  let letterCount = 0;
  letters.forEach((letter) => (letter === 'x' ? letterCount++ : letterCount));
  return letterCount;
}

runTest('countXs', () => {
  check(countXs(['a', 'b', 'c'])).isEqualTo(0);
  check(countXs(['x', 'a', 'x', 'b', 'x', 'c', 'x'])).isEqualTo(4);
});
