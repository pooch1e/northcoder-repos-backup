const { runTest, check } = require("./test-api");

function squareEveryNumber(number) {
  // we unlinked the chained methods so they're easier to follow with clear variable names for each step
  const stringified = String(number)
  const splitNumbers = stringified.split("")
  const squareAll = splitNumbers.map(digit => digit * digit);
  const rejoinNumbers = squareAll.join('');
  const backToNumber = +(rejoinNumbers);
  const result = backToNumber

  return result;
}

runTest("squareEveryDigit", () => {
  check(squareEveryNumber(111)).isEqualTo(111);
  check(squareEveryNumber(123)).isEqualTo(149);
  check(squareEveryNumber(123456)).isEqualTo(149162536);
});
