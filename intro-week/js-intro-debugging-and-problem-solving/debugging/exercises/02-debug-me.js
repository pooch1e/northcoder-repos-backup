const { check, runTest, skipTest } = require("../../test-api/index.js");

// Fix the function below to pass the test!

function getCatGreeting() {
  const catName = "Jewels";
  return `Hello, I am a cat and my name is ${catName}`;
}

// Please do not change code below this line. You do not need to alter the tests or the test suite.

runTest('Get getCatGreeting to return "Hello, I am a cat and my name is Jewels"', function () {
  check(getCatGreeting()).isEqualTo("Hello, I am a cat and my name is Jewels");
});