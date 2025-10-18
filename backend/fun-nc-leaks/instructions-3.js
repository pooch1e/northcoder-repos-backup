// ### Task 3 – `getPets`

// Write a function called `getPets` that works like Task 2 but for pets.
// The endpoint is:
// `https://nc-leaks.herokuapp.com/api/people/:username/pets`

const https = require("https");
const fs = require("fs/promises");

//basically a copypaste of task 2 - some null values within our pets.json - am I handling errors incorrectly?
const getPets = async () => {
  console.log("three");
  //read json file with promises, otherwise use CB
  const data = await fs.readFile("./northcoders.json", "utf-8");
  const userNamesFirst = JSON.parse(data);
  // console.log(userNames); // just our json object so far
  const userNameArray = [];
  userNamesFirst.forEach((person) => {
    userNameArray.push(person.username);
  });

  // console.log(userNameArray);

  console.log(userNameArray);
  // const username = await readUserName()????
  // console.log(userNames); // yep, it works!
  const userNamePersonKey = await Promise.all(
    //could've broken this promise.all step up to avoid the pyramid of doom?
    userNameArray.map((username) => {
      //need to use .map instead of .forEach with promises
      return new Promise((resolve, reject) => {
        const options = {
          hostname: "nc-leaks.herokuapp.com",
          path: `/api/people/${username}/pets`, //changed to string literal
          method: "GET",
        };
        let body = "";
        const req = https.request(options, (res) => {
          res.on("data", (packet) => {
            body += packet;
          });
          res.on("end", () => {
            try {
              const parsedBody = JSON.parse(body);
              resolve(parsedBody.person);
            } catch (err) {
              reject(err);
            }
          });
        });
        req.end();
      });
    })
  );
  // console.log(userNamePersonKey);

  const done = () => {
    console.log("file written successfully");
  };
  fs.writeFile("pets.json", JSON.stringify(userNamePersonKey), "utf-8", done);
};

module.exports = getPets;
