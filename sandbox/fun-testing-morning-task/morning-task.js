const { check, runTest } = require('./test-api/index.js');

// Instructions to today's morning task are found in the README.md file of this repo

function isPositive(num) {
  return typeof num === 'number' && num > 0;
}

// Add your tests to the below runTest block

runTest(
  'isPositive() checks if a number is positive and returns a boolean',
  function () {
    // checks that the function returns a boolean
    check(typeof isPositive(3)).isEqualTo('boolean');
  }
);

runTest(
  'isPositive() checks if a number is positive and returns true',
  function () {
    // checks that the function returns true when passed a positive number
    check(isPositive(4)).isEqualTo(true);
  }
);

runTest(
  'isPositive() checks if a number is negative and returns false',
  function () {
    // checks that the function returns false when passed a negative number
    check(isPositive(-3)).isEqualTo(false);
  }
);

runTest(
  'isPositive() checks that the function returns false when passed zero',
  function () {
    // checks that the function returns false when passed zero
    check(isPositive(0)).isEqualTo(false);
  }
);

runTest(
  'isPositive() checks that if the passed argument is not a number, the function returns false',
  function () {
    // checks that if passed an argument that is not a number, the function returns false
    check(isPositive('string')).isEqualTo(false);
    check(isPositive(null)).isEqualTo(false);
    check(isPositive(undefined)).isEqualTo(false);
  }
);
