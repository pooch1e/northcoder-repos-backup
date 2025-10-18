const inquirer = require('inquirer');
const Spinner = require('cli-spinner').Spinner;
const chalk = require('chalk');

const spinner = new Spinner(`${chalk.cyan('processing...')}`);
spinner.setSpinnerString('◡◡ ⊙⊙ ◠◠');

const question = [
  { type: 'input', name: 'first_name', message: "What's your first name?" },
];

inquirer.prompt(question).then((answer) => {
  spinner.start();
  setTimeout(() => {
    spinner.stop(true);
    console.log(chalk.white.bgBlue('Hello ' + answer.first_name));
  }, '2000');
});
