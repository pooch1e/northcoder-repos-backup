const https = require("https");
const fs = require("fs");

const options = {
  hostname: "nc-leaks.herokuapp.com",
  path: "/api/confidential",
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
    const stringyBody = JSON.stringify(parsedBody.instructions);
    fs.writeFile("./instructions.md", stringyBody, "utf-8", done);
    console.log(body);
  });
});

req.end();
