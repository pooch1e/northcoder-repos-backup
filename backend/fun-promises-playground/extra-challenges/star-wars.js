/* 
Make a command line app that contacts users can interact with to fetch data from the Star Wars API.

    Users should be presented with a list of star wars films and be able to choose which of the films they would like to know more about. list done

    Once they have chosen a film they should be presented with some info about it and some further options.

    They should be able to choose a character, planet or starship that features in the film to learn more about it.

    After viewing one of their choices they should be able to return to the previous film or the main menu.

    Users should be able to continue navigating around and viewing the available info until they are done and have the option to quit and return to the terminal.

Think about what information you can show your users and come up with a nice way to display that data. Do some research into how you can format your logs to make them more user friendly than just the raw data. If you're looking for some inspiration then do some research into adding colour to your logs or displaying the data as a table.*/

// need inquire
// need axiom

// starts of with list of films
// chosen should get appropriate details of film

const inquire = require('inquirer');
const question = {
  type: 'rawlist',
  name: 'options',
  message: 'pick one',
  default: 2,
  choices: ['1', '2', '3', '4'],
};
