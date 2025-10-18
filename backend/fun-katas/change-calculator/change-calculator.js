// Please do not change the name of this function
function changeCalculator(num) {
  if (num === 0) {
    return {};
  }
  const cashMap = {
    '2': 200,
    '1': 100,
    '50p': 50,
    '20p': 20,
    '10p': 10,
    '2p': 2,
    '1p': 1,
  };

  let change = {
    '1p': 0,
    '2p': 0,
    '5p': 0,
    '10p': 0,
    '20p': 0,
    '50p': 0,
    '1': 0,
    '2': 0,
  };
  //subtract by the numbers starting at 200 until there is no 'num' left
  const denominations = Object.keys(cashMap);
  for (let int in denominations) {
    console.log(int);
    while (num >= cashMap[int]) {
      num -= cashMap[int];
      change[int]++;
    }
  }
  // cannot get to work past 1p

  return change;
}

module.exports = changeCalculator;
