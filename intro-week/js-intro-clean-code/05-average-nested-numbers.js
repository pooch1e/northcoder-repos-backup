const { runTest, check } = require("./test-api");

function averageNestedNumbers(nestedArray) {
  // extract all the numbers - so identify numbers in each string
  let flattenedArray = nestedArray.flat(); // flattened the array as removes looping logic
  let sumOfNumbers = 0;
  let numberCount = 0;

  // for each string in flattened array
  flattenedArray.forEach((string) => {
    // regex test for is number
    let isNumber = /\d/.test(string);
    // performs calculations only on digits found - isNumber evaluates to true
    if (isNumber) {
      numberCount++; // increments numberCount
      sumOfNumbers += Number(string); // sums up all numbers
    }
  });
  // assign expression to variable to understand expression
  let meanOfNumbers = sumOfNumbers / numberCount;
  // return it
  return averageNumber;
}

runTest("averageNestedNumbers", () => {
  const nestedNumbers = [
    ["1", "cat", "7"],
    ["14", "12", "duck"],
    ["pig", "red panda", "37"],
  ];

  check(averageNestedNumbers(nestedNumbers)).isEqualTo(14.2);
});
