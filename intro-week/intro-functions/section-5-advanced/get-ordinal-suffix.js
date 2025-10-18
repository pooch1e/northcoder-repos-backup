const { check, runTest, skipTest } = require("../test-api/index.js");

/*
Ordinal suffixes are the letters we put after a number:
E.g. "nd" is an ordinal suffix as we'd write 2nd and "st" is an ordinal suffix as we'd write 1st etc

This function should take a number as an argument and should return the corresponding ordinal suffix

See here for more details: https://www.grammarly.com/blog/how-to-write-ordinal-numbers-correctly/
*/

function getOrdinalSuffix(num) {
  // giant switch statement? Or object?
    // handle 1-3
  if (num === 1) {
    return 'st';
  } else if (num === 2) {
    return 'nd';
  } else if (num === 3) {
    return 'rd';
  }

  if (num > 3 && num <= 20) {
    return 'th';
  } else if (num > 20 && num % 10 === 1) {
    return 'st'
  } else if (num > 20 && num % 10 === 2) {
    return 'nd';
  } else if (num > 20 && num % 10 === 3) {
    return 'rd';
  } else {
    return 'th';
  }
// this can definitely be refractored?

  
}

runTest("getOrdinalSuffix() returns 'st' when given 1", function () {
  check(getOrdinalSuffix(1)).isEqualTo("st");
});

runTest("getOrdinalSuffix() returns 'nd' when given 2", function () {
  check(getOrdinalSuffix(2)).isEqualTo("nd");
});

runTest("getOrdinalSuffix() returns 'rd' when given 3", function () {
  check(getOrdinalSuffix(3)).isEqualTo("rd");
});

runTest(
  "getOrdinalSuffix() returns 'th' given any single digit number above 3",
  function () {
    check(getOrdinalSuffix(4)).isEqualTo("th");
    check(getOrdinalSuffix(7)).isEqualTo("th");
    check(getOrdinalSuffix(9)).isEqualTo("th");
  }
);

runTest(
  "getOrdinalSuffix() returns 'th' given any value between 10 and 20 inclusive",
  function () {
    check(getOrdinalSuffix(10)).isEqualTo("th");
    check(getOrdinalSuffix(11)).isEqualTo("th");
    check(getOrdinalSuffix(15)).isEqualTo("th");
    check(getOrdinalSuffix(19)).isEqualTo("th");
    check(getOrdinalSuffix(20)).isEqualTo("th");
  }
);

runTest(
  "getOrdinalSuffix() returns 'st' for numbers above 20 ending in 1",
  function () {
    check(getOrdinalSuffix(21)).isEqualTo("st");
    check(getOrdinalSuffix(41)).isEqualTo("st");
  }
);

runTest(
  "getOrdinalSuffix() returns 'nd' for numbers above 20 ending in 2",
  function () {
    check(getOrdinalSuffix(22)).isEqualTo("nd");
    check(getOrdinalSuffix(32)).isEqualTo("nd");
  }
);

runTest(
  "getOrdinalSuffix() returns 'rd' for numbers above 20 ending in 3",
  function () {
    check(getOrdinalSuffix(23)).isEqualTo("rd");
    check(getOrdinalSuffix(63)).isEqualTo("rd");
  }
);

runTest("getOrdinalSuffix() returns 'th' for any other numbers", function () {
  check(getOrdinalSuffix(27)).isEqualTo("th");
  check(getOrdinalSuffix(98)).isEqualTo("th");
});
