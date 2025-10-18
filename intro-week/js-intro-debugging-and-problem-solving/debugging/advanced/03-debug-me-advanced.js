const { check, runTest, skipTest } = require("../../test-api/index.js");

function getCapitalisedArtists(arr) {
  const artists = arr.map((pair) => {
    let splitArray = pair.split('-');

    return splitArray[0].trim().toUpperCase();
  });

  return artists;
}
//maybe try filter inside the map method?

// Please do not change code below this line. You do not need to alter the tests or the test suite.

runTest("An empty array should return an empty array", function () {
  check(getCapitalisedArtists([])).isEqualTo([]);
});
runTest("Returns an array of 1 capitalised music artist", function () {
  check(getCapitalisedArtists(["Cher - Believe"])).isEqualTo(["CHER"]);
});
runTest("Returns an array of capitalised music artists ", function () {
  check(
    getCapitalisedArtists(["Cher - Believe", "Adele - Hello", "Coldplay - Yellow"])
  ).isEqualTo(["CHER", "ADELE", "COLDPLAY"]);
});