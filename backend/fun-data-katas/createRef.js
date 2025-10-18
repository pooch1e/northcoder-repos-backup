const createRef = (northcoders, key, value) => {
  const copyOfNorthcoders = structuredClone(northcoders);

  return copyOfNorthcoders.reduce((acc, curr) => {
    acc[curr[key]] = curr[value];
    return acc;
  }, {});
};

module.exports = createRef;
