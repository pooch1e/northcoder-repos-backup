const { runTest, check } = require("./test-api");

const countNumOfVowels = (words) =>
  words.map(
    (x, i) => x.split("").filter((y) => y.match(/[aeiou]/gi) || 0).length
  );

runTest("countNumOfVowels", () => {
  check(countNumOfVowels(["a", "b", "c"])).isEqualTo([1, 0, 0]);
  check(countNumOfVowels(["apple", "banana", "carrot"])).isEqualTo([2, 3, 2]);
});
