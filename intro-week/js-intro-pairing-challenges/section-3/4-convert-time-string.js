const { check, runTest, skipTest } = require('../test-api/index.js');

function convertTimeString(string) {
  /*
This function should take a string representing a time with hours and minutes separated by a colon e.g. "13:25"
Some of the times are written in the 24-hour clock format
This function should return the time written in the 12-hour clock format
  */
  // check string is correct format 00:00
  // extract numbers from string
  // if number is over 13 - 24 subtract 12 eg 1300 - 1200 = 01;00
  // edge case, if number is 00 - change to 12

  // validate input
  let timeFormatRegex = /^\d{2}:\d{2}$/;
  if (!timeFormatRegex.test(string)) {
    return false;
  }

  let digitExtractionRegex = /\d/g;

  let digitArray = string.match(digitExtractionRegex);

  
  let timeFormatedArray = [
    Number(digitArray[0] + digitArray[1]), // first numbers
    digitArray[2] + digitArray[3], // second numbers stay as strings
  ];

  // check if digits are in 24 hour 
  if (timeFormatedArray[0] >= 13 && timeFormatedArray[0] <= 24) {
    timeFormatedArray[0] = timeFormatedArray[0] - 12;
  } // it is 24 hour

  //check for midnight
  if (timeFormatedArray[0] === 0) {
    timeFormatedArray[0] = 12;
  }
  return `${String(timeFormatedArray[0]).padStart(2, '0')}:${
    timeFormatedArray[1]
  }`;
}

console.log('convertTimeString()');

runTest(
  'returns the string unchanged if already within the right format',
  function () {
    check(convertTimeString('06:28')).isEqualTo('06:28');
  }
);

runTest('converts an afternoon time to the 12 hour format', function () {
  check(convertTimeString('16:07')).isEqualTo('04:07');
});

runTest(
  'converts times in the hour after midnight to the 12 hour format',
  function () {
    check(convertTimeString('00:56')).isEqualTo('12:56');
    check(convertTimeString('00:00')).isEqualTo('12:00');
  }
);
