// Please do not change the name of this function
const findMostRepeated = (arr) => {
  if (arr.length === 0)
    return {
      elements: [],
      repeats: null,
    };
    // freq counter object
  const freq = arr.reduce((acc, curr) => {
    acc[curr] = (acc[curr] || 0) + 1;
    return acc;
  }, {});

  // which repeats the most
  const maxRepeats = Math.max(...Object.values(freq));

  // console.log(maxRepeats);

  // Keys
  const elements = Object.keys(freq).filter((key) => freq[key] === maxRepeats);

  return {
    elements,
    repeats: maxRepeats,
  };
};

module.exports = { findMostRepeated };
