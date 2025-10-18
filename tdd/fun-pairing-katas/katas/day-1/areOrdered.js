function areOrdered(unorderedArray) {
  if (unorderedArray.length === 0) {
    return false;
  }
  for (let i = 0; i < unorderedArray.length - 1; i++) {
    if (unorderedArray[i] > unorderedArray[i + 1]) {
      return false;
    }
  }
  return true;
}
module.exports = areOrdered;
// Checks if a given array of numbers are in ascending order. Arrays containing no numbers are considered unordered.
// Arguments

//     nums (Array): The array of numbers to inspect.

// Returns

//     (boolean): Returns true if nums is ordered or false if not.

// Examples

// isOrdered([1,2,3])
// // => true

// isOrdered([4,3,5])
// // => false
