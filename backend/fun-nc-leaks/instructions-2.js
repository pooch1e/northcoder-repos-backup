const https = require("https");
const fs = require("fs/promises"); // optional for promises over callbacks

//task 2
// Write a function called `getInterests` that uses the newly found usernames for each Northcoder to retrieve information on everyone's interests. This function should:

// 1. Use `fs` to read the `northcoders.json` file you created in Task 1.
// 2. For every person, use their `username` and make a request to:
//    `https://nc-leaks.herokuapp.com/api/people/:username/interests`
// 3. Each response will be an object with a `person` key. Collect the data at this key into an array.
// 4. Once all responses are collected, save the array to a file called `interests.json`.

const getInterests = async () => {
  console.log("two");
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
          path: `/api/people/${username}/interests`, //changed to string literal
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
  fs.writeFile(
    "interests.json",
    JSON.stringify(userNamePersonKey),
    "utf-8",
    done
  );
};

// getInterests();
module.exports = getInterests;
