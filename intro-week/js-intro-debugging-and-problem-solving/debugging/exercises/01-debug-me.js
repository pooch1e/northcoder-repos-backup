const { check, runTest, skipTest } = require("../../test-api/index");

// Fix the function below to pass the test!

function sayHello() {
  return "hello students";
}

// Please do not change code below this line. You do not need to alter the tests or the test suite.

runTest('Get sayHello to return "hello students"', function () {
  check(sayHello()).isEqualTo("hello students");
});