// write your functions here

// Reverse String
function reverseString(word) {
  if (word.length <= 0) {
    return '';
  } else {
    //recursive case
    return reverseString(word.substring(1)) + word.charAt(0);
  }
}

function sumDigits(digits) {
  if (isNaN(digits)) {
    return undefined;
  } else if (digits < 10) {
    return digits;
  } else {
    return sumDigits((digits % 10) + Math.floor(digits / 10));
  }
}

function findMyFib(number) {
  //base case will be if 0 or 1?
  if (isNaN(number)) {
    return undefined;
  }
  if (number === 0) {
    return 0;
  } else if (number === 1) {
    return 1;
  } else {
    //recursive case will kinda be number + prev number?
    // let previousNumber = number - 1;
    // let twoStepsBack = number - 2;
    return findMyFib(number - 1) + findMyFib(number - 2);
  }
}

function deepTotal(array) {
  let sum = 0;
  if (array.length === 0) {
    return 0;
  } else {
    for (const el of array) {
      if (Array.isArray(el)) {
        //added check to see if current element was array or number
        const nested = deepTotal(el);
        sum += nested;
      } else if (typeof el === 'number') {
        sum += el;
      }
    }
    return sum;
  }
}

function deepIncludes(array, target) {
  for (const element of array) {
    //if finds in first iteration
    if (target === element) {
      return true;
      // found target
    } else {
      if (Array.isArray(element)) {
        // if element is an array
        if (deepIncludes(element, target)) {
          // if element0 of array is target
          return true;
        }
      }
    }
  }
  return false; // not found
}

module.exports = {
  reverseString,
  sumDigits,
  findMyFib,
  deepTotal,
  deepIncludes,
};
