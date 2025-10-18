function createPoll(votesArray) {
  const votesCopy = [...votesArray];
  return votesCopy.reduce((acc, currentValue) => {
    acc[currentValue] = (acc[currentValue] || 0) + 1;
    return acc;
  }, {});
}

module.exports = createPoll;
