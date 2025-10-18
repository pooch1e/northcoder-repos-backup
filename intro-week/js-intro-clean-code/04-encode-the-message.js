const { runTest, check } = require('./test-api');

function encodeString(word) {
 
 // no need for separate output array with map method
  const alphabetOffset = 97;
  let inputArr = word.split(''); // turns string into array

  //  changed loop to map to eliminate pushing to output array
  let alphabetCode = inputArr.map((letter) => {
    return letter.charCodeAt(0) - alphabetOffset;
  });

  return alphabetCode.join('');
}

runTest('encodeString', () => {
  check(encodeString('a')).isEqualTo('0');
  check(encodeString('abc')).isEqualTo('012');
  check(encodeString('hello')).isEqualTo('74111114');
});
