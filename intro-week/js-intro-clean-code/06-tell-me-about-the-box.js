const { runTest, check } = require('./test-api');

function getBoxDimensions(boxMeasurements) {
  const { depth, height, width, mass } = boxMeasurements;
  // destructured object

  const dimensions = {
    // named return object
    surfaceArea: 2 * (depth * height + width * height + width * depth),
    volume: width * height * depth,
    density: mass / (width * height * depth),
  };

  return dimensions;
}

runTest('getSurfaceAreaOfBox', () => {
  const ikeaBox = { depth: 10, height: 5, width: 15, mass: 1500 };

  check(getBoxDimensions(ikeaBox)).isEqualTo({
    surfaceArea: 550,
    volume: 750,
    density: 2,
  });

  const amazonBox = { depth: 12, height: 6, width: 5, mass: 1440 };
  check(getBoxDimensions(amazonBox)).isEqualTo({
    surfaceArea: 324,
    volume: 360,
    density: 4,
  });
});
