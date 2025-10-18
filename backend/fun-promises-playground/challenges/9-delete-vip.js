const inquirer = require("inquirer");
const fs = require("fs/promises");

const question = {
  type: "input",
  name: "VIP",
  message: "Which VIP do you want to remove from the list?",
};

let answer2;
inquirer
  .prompt(question)
  .then((answer) => {
    answer2 = answer;
    return fs.readFile("vip-list.txt", "utf-8");
  })
  .then((output) => {
    const editedMessage = output.replace(answer2.VIP, "").trim();
    console.log(`Bye bye ${answer2.VIP}`);
    return fs.writeFile("vip-list.txt", editedMessage);
  });
