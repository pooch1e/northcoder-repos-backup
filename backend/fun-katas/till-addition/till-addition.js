// Please do not change the name of this function
function tillAddition(cash) {
  const cashMap = {
    '1p': 0.01,
    '2p': 0.02,
    '5p': 0.05,
    '10p': 0.1,
    '20p': 0.2,
    '50p': 0.5,
    '£1': 1.0,
    '£2': 2.0,
  };

  let cashSum = Object.entries(cash).reduce((acc, [key, money]) => {
    const value = cashMap[key];
    return acc + value * money;
  }, 0);

  return `£${cashSum.toFixed(2)}`; //rep cash to fixed 2
}

module.exports = tillAddition;
