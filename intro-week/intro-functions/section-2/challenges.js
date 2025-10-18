const { check, runTest, skipTest } = require("../test-api/index.js");

// Challenge 0
function multiply(a, b) {
  // This function should return the product of two numbers passed as arguments
  return a * b
}

runTest("multiply() can multiply 2 numbers together", function () {
  check(multiply(3, 5)).isEqualTo(15);
  check(multiply(17, 19)).isEqualTo(323);
  check(multiply(-180, 2)).isEqualTo(-360);
});

// Challenge 1
function roundDown(num) {
  // This function should take a single argument of a decimal number and return its value rounded DOWN to the nearest integer.
  return Math.floor(num);
}

runTest(
  "roundDown() returns the result of rounding down to the nearest integer",
  function () {
    check(roundDown(100.1)).isEqualTo(100);
    check(roundDown(25.5)).isEqualTo(25);
    check(roundDown(121.999)).isEqualTo(121);
  }
);

// Challenge 2
function raiseToPower(a, b) {
  // This function should take two number arguments, m and n, and return m raised to the power of n.
  return a ** b;
}

runTest("raiseToPower() raises given number to the given power", function () {
  check(raiseToPower(10, 3)).isEqualTo(1000);
  check(raiseToPower(25, 2)).isEqualTo(625);
  check(raiseToPower(10, 0)).isEqualTo(1);
});

// Challenge 3
function isMultipleOf6(n) {
  // This function should take a number as an argument, and return true if it is a multiple of 6, and false otherwise.
  return n % 6 === 0 ? true : false;
}

runTest(
  "isMultipleOf6() should check if a number is divisible by 6",
  function () {
    check(isMultipleOf6(6)).isEqualTo(true);
    check(isMultipleOf6(10)).isEqualTo(false);
    check(isMultipleOf6(15)).isEqualTo(false);
    check(isMultipleOf6(36)).isEqualTo(true);
    check(isMultipleOf6(60)).isEqualTo(true);
    check(isMultipleOf6(61)).isEqualTo(false);
  }
);

// Challenge 4
function capitaliseFirstLetter(string) {
  // This function should take a string as an argument and return the same string with the first letter capitalised.
  // let strArr = string.split('')
  // let capital = strArr[0].toUpperCase();
  // let body = strArr.splice(1);
  // return capital+body.join('');

  return string.charAt(0).toUpperCase() + string.slice(1); //refractored 
}

runTest(
  "capitaliseFirstLetter() capitalises the first letter in a string",
  function () {
    check(capitaliseFirstLetter("bang")).isEqualTo("Bang");
    check(capitaliseFirstLetter("apple")).isEqualTo("Apple");
    check(capitaliseFirstLetter("coding")).isEqualTo("Coding");
  }
);

// Challenge 5
function isInThe20thCentury(n) {
  // This function should take a number as an argument representing a year,
  // and return true if that year is in the 20th century and false otherwise.
  return n >= 1901 && n <= 2000 ? true : false;
}

runTest(
  "isInThe20thCentury() checks if a number is within 1901 to 2000 (inclusive)",
  function () {
    check(isInThe20thCentury(1962)).isEqualTo(true);
    check(isInThe20thCentury(1901)).isEqualTo(true);
    check(isInThe20thCentury(1900)).isEqualTo(false);
    check(isInThe20thCentury(1913)).isEqualTo(true);
    check(isInThe20thCentury(1876)).isEqualTo(false);
    check(isInThe20thCentury(2001)).isEqualTo(false);
    check(isInThe20thCentury(2000)).isEqualTo(true);
  }
);

// Challenge 6
function isAbsolutePath(str) {
  // This function should take a string as an argument representing a file path and return true if it is an absolute path, and false otherwise.
  // HINT: all absolute file paths start with a /
  let regex = /^\//
  return regex.test(str);
}

runTest(
  "isAbsolutePath() checks if a file path is absolute or relative",
  function () {
    check(isAbsolutePath("/Users/mitch")).isEqualTo(true);
    check(
      isAbsolutePath(
        "/Users/mitch/northcoders/remote_course/remote_precourse_1"
      )
    ).isEqualTo(true);
    check(isAbsolutePath("../composers")).isEqualTo(false);
    check(isAbsolutePath("./applications/my-awesome-app.js")).isEqualTo(false);
  }
);

// Challenge 7

/*

This function should take a string as an argument and return a string which describes the ASCII code of that character

The returned string should be in the following format:

"The ASCII code for <character> is <character-code>"

If you are unfamiliar with what an ASCII code is, you can read about it here: https://www.w3schools.com/charsets/ref_html_ascii.asp
*/

function getCharCode(str) {
  
  const index = 0;
  let asci = str.charCodeAt(index);
  return `The ASCII code for ${str} is ${asci}`;
}

runTest(
  "getCharCode() will return a message stating the ASCII code of a passed char",
  function () {
    check(getCharCode("A")).isEqualTo("The ASCII code for A is 65");
    check(getCharCode("b")).isEqualTo("The ASCII code for b is 98");
    check(getCharCode("z")).isEqualTo("The ASCII code for z is 122");
    check(getCharCode("k")).isEqualTo("The ASCII code for k is 107");
    check(getCharCode("!")).isEqualTo("The ASCII code for ! is 33");
    check(getCharCode("M")).isEqualTo("The ASCII code for M is 77");
  }
);

// Challenge 8
function createArray(len, char) {
  // This function should take a length and a character as arguments and return an array of the given length populated with the given character.
  // let result = [];
  // for (let i = 0; i < len; i++) {
  //   result.push(char);
  // }
  // return result;
  return new Array(len).fill(char); // found the fill method... I knew this was simpler!!!!
}

runTest(
  "createArray() creates an array of the specified length using a specified character",
  function () {
    check(createArray(3, "!")).isEqualTo(["!", "!", "!"]);
    check(createArray(5, "a")).isEqualTo(["a", "a", "a", "a", "a"]);
  }
);

// Challenge 9
/*
This function should take a number representing a battery level as a percentage
If the battery level is less than or equal to 5%, then you should return a string stating:
    "Warning - battery level low: <number-here>%, please charge your device"
If the battery level is between 5 and 99% then it should return a string stating:
    "Battery level: <number-here>%"
If the battery level is 100% then it should return a string stating:
    "Fully charged :)"
*/

function checkBatteryLevel(n) {
  // code here
  // if (n <= 5) {
  //   return `Warning - battery level low: ${n}%, please charge your device`
  // } else if (n > 5 && n <= 99) {
  //   return `Battery level: ${n}%`
  // } else {
  //   return "Fully charged :)"
  // }

  return n <=5
   ? `Warning - battery level low: ${n}%, please charge your device`
  : n > 5 && n <= 99
   ? `Battery level: ${n}%` : "Fully charged :)"

   // doesnt seem much clearer?
};

runTest(
  "checkBatteryLevel() should return a message with info about the battery level",
  function () {
    check(checkBatteryLevel(100)).isEqualTo("Fully charged :)");

    check(checkBatteryLevel(99)).isEqualTo("Battery level: 99%");
    check(checkBatteryLevel(80)).isEqualTo("Battery level: 80%");
    check(checkBatteryLevel(30)).isEqualTo("Battery level: 30%");
    check(checkBatteryLevel(10)).isEqualTo("Battery level: 10%");
    check(checkBatteryLevel(6)).isEqualTo("Battery level: 6%");

    check(checkBatteryLevel(5)).isEqualTo(
      "Warning - battery level low: 5%, please charge your device"
    );
    check(checkBatteryLevel(4)).isEqualTo(
      "Warning - battery level low: 4%, please charge your device"
    );
    check(checkBatteryLevel(3)).isEqualTo(
      "Warning - battery level low: 3%, please charge your device"
    );
    check(checkBatteryLevel(1)).isEqualTo(
      "Warning - battery level low: 1%, please charge your device"
    );
  }
);

// Challenge 10
function collectStrings(arr) {
  // This function should take an array as an argument and return an array containing all string elements from the input (retaining the order)
  // let result = [];
  // for (let i = 0; i < arr.length; i++) {
  //   if (typeof arr[i] === 'string') {
  //   result.push(arr[i])
  //   }
  // }
  // return result;
  let result = [];
  arr.forEach(element => {
    if (typeof element === 'string') {
      result.push(element);
    }
  });
  return result;
}

runTest("collectStrings() can get all the strings from an array", function () {
  check(collectStrings(["a", "b", "c"])).isEqualTo(["a", "b", "c"]);
  check(collectStrings(["a", 10, "b", 1000, "c"])).isEqualTo(["a", "b", "c"]);
});

// Challenge 11
function greetingGenerator(name) {
  return () => {
    return `Hello, ${name}!`
  };
  // This function should take a name as an argument and return a new function which returns "Hello <name>"
}

runTest(
  "greetingGenerator() should return a function that can be invoked to greet a user",
  () => {
    const greetRose = greetingGenerator("Rose");
    const greetDavid = greetingGenerator("David");
    check(greetRose).isOfType("function");
    check(greetDavid).isOfType("function");

    check(greetRose()).isEqualTo("Hello, Rose!");
    check(greetDavid()).isEqualTo("Hello, David!");
  }
);

// Mark your progress on the Learn 2 Code platform before moving on to the next set of challenges!
