function convertToPounds(cost, exchangeRate) {
  const totalInPounds = cost / exchangeRate;
  return totalInPounds;
}

module.exports = convertToPounds;
