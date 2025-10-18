const https = require("https");
const fs = require("fs");

//Task 1
// Write a function called `getPeople` that will retrieve list of all the available people on the `northcoders` server . This should:

// 1. Use node's `https` module to make a request to `https://nc-leaks.herokuapp.com/api/people`.\n
// 2. Once you have the response as a useable object, look through the people to find anyone who has `northcoders` as the workplace.\n
// 3. Save these `northcoders` employees to a file called `northcoders.json` - remember that the data argument of `fs.writeFile` must be of type string\\_ so you may need to manipulate the data before saving it.\\_ _Or Buffer, Typedarray or DataView but these won't be as relevant to you!_>

// Note: If you have `prettier` installed, you can go into this `.json` file, press save and prettier can format your data in a more readable way.####
const getPeople = async () => {
  console.log("one");
  const options = {
    hostname: "nc-leaks.herokuapp.com",
    path: "/api/people",
    method: "GET",
  };

  const done = () => {
    console.log("file written successfully");
  };
  let body = "";
  const req = https.request(options, (res) => {
    res.on("data", (packet) => {
      body += packet;
    });
    res.on("end", () => {
      const parsedBody = JSON.parse(body);
      const peopleArray = parsedBody.people;
      const ncEmployeesArray = [];
      peopleArray.forEach((person) => {
        if (person.job.workplace === "northcoders") {
          ncEmployeesArray.push(person);
        }
      });
      console.log(ncEmployeesArray);

      const stringyBody = JSON.stringify(ncEmployeesArray);
      fs.writeFile("northcoders.json", stringyBody, "utf-8", done);
    });
  });

  req.end();
};

module.exports = getPeople;
