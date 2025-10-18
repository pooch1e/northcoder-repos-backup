const https = require("https");
const fs = require("fs/promises");
const getPeople = require("./instructions-1");
const getInterests = require("./instructions-2");
const getPets = require("./instructions-3");

//Task 4
// Automation is great. Create a function called `scavengeForNcData` that uses all of the functions you created in Tasks 1-3 to automate your hunt for data.
//Note: Remember `getInterests` and `getPets` must only be used when you can be sure that the `northcoders.json` has finished being created. Considering these are all asynchronous functions, how can you ensure this?

async function scavengeForNcData() {
  const testOne = await getPeople();
  const testTwo = await getInterests();
  const testThree = await getPets();
}

scavengeForNcData();
