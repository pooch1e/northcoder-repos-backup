const { check, runTest, skipTest } = require("../../test-api/index.js");

// Fix the function below to pass the test!

function greetMentor(mentor) {
  return "Hello " + mentor + "!";
}

// Please do not change code below this line. You do not need to alter the tests or the test suite.

runTest('Get greetMentor to return "Hello Hannah!"', function () {
  check(greetMentor("Hannah")).isEqualTo("Hello Hannah!");
});
runTest('Get greetMentor to return "Hello Lewis!"', function () {
  check(greetMentor("Lewis")).isEqualTo("Hello Lewis!");
});
runTest('Get greetMentor to return "Hello Harrison!"', function () {
  check(greetMentor("Harrison")).isEqualTo("Hello Harrison!");
});