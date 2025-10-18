const { runTest, check } = require("./test-api");

function isBobRoss(person) {
  return person.name === 'Bob' && person.occupation === 'artist' && person.mistakes === 'happy little accidents' ? true : false;
}

runTest("isBobRoss", () => {
  const bobTheBuilder = {
    name: "Bob",
    occupation: "builder",
    mistakes: "health and safety nightmare",
  };

  const bobRoss = {
    name: "Bob",
    occupation: "artist",
    mistakes: "happy little accidents",
  };

  check(isBobRoss(bobTheBuilder)).isEqualTo(false);
  check(isBobRoss(bobRoss)).isEqualTo(true);
});
