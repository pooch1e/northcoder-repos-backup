function removeDuplicates(array) {
  const resultArray = [...new Set(array)];
  return resultArray;
}

module.exports = removeDuplicates;
