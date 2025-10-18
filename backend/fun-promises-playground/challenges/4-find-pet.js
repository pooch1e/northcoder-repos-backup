const fs = require("fs/promises");

const findPet = (petName) => {
  return fs
    .readFile(`./data/${petName}.json`, "utf-8")
    .then((data) => {
      return JSON.parse(data);
    })
    .catch((err) => {
      return `soz couldnt find ${petName} :(`;
    });
};

module.exports = findPet;
