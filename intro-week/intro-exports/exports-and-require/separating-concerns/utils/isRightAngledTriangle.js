const maths = require('./mathFunctions');
function isRightAngledTriangle(sideA, sideB, sideC) {
  const sideASquared = maths.squareNumber(sideA);
  const sideBSquared = maths.squareNumber(sideB);
  const sideCSquared = maths.squareNumber(sideC);

  return sideCSquared === sideASquared + sideBSquared;
}

module.exports = isRightAngledTriangle;
