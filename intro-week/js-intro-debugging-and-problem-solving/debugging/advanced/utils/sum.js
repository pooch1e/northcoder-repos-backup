function sumArray(array) {
  let total = array.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  }, 0);
  return total;
}

module.exports = { sumArray };