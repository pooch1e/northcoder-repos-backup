const { runTest, check } = require("./test-api");

function friendIntroduction(friend1, friend2) { // two friends
  // returns sentence
  return `Hey ${friend1}, have you met my friend ${friend2}?`;
}

runTest("func", () => {
  check(func("Harry", "Sally")).isEqualTo(
    "Hey Harry, have you met my friend Sally?"
  );
});
