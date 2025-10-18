const { runTest, check } = require("./test-api");

const leapYear = (year) => year % 4 === 0 ? year % 100 === 0 ? year % 400 === 0 ? true : false : true : false;

runTest("leapYear", () => {
  check(leapYear(1999)).isEqualTo(false);
  check(leapYear(2024)).isEqualTo(true);
  check(leapYear(2000)).isEqualTo(true);
});
