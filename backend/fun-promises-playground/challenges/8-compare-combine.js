const fs = require("fs/promises");

Promise.all([
  fs.readFile("secret-message.txt", "utf-8"),
  fs.readFile("super-secret-message.txt", "utf-8"),
])
  .then((array) => {
    if (array[0].length > array[1].length) {
      console.log(
        `Message is "${array[0]}" and is ${
          array[0].length - array[1].length
        } characters longer`
      );
    } else
      console.log(
        `Message is "${array[1]}" and is ${
          array[1].length - array[0].length
        } characters longer`
      );
    return array;
  })
  .then((array) => {
    return fs.writeFile("mega-secret-message.txt", array, { flag: "w+" });
  });
