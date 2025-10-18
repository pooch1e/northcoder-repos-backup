const inquirer = require('inquirer');
const axios = require('axios');
const fs = require('fs/promises');

/*
Use the author and book title to request the book details using axios to make a request to retrieve the books on the google books api (https://www.googleapis.com/books/v1/volumes?q=${book}+inauthor:${author})
Save the details to a details.txt file using fs/promises
You may want to take a look at the data you receive and pick some of the interesting properties to save!
Update your code to save the details to a file that includes the author and book title, i.e. <author>-<bookTitle>.txt. Hint: Promise.all() will be useful here!
Add the option to choose between exiting or getting another book with inquirer. Hint: You will need to consider how to make your code re-usable
*/

// Use inquirer to ask for an author and a book.
const questions = [
  {
    type: 'input',
    name: 'author',
    message: 'Which author do you want to read?',
  },
  {
    type: 'input',
    name: 'title',
    message: 'Which book of theirs do you want to read?',
  },
  {
    type: 'confirm',
    name: 'is_finished',
    message: 'ARE YOU FINISHED??',
  },
];

inquirer.prompt(questions).then((answer) => {
  Promise.all([
    answer,
    axios.get(
      'https://www.googleapis.com/books/v1/volumes?q=${book}+inauthor:${author}'
    ),
  ]).then(([answer, books]) => {
    if (
      books.data.items[0].volumeInfo.title === answer.title &&
      books.data.items[0].volumeInfo.authors.includes(answer.author)
    ) {
      const content = `${
        books.data.items[0].volumeInfo.title
      }\n${books.data.items[0].volumeInfo.authors.join(', ')}`;
      return fs.writeFile('details.txt', content, { flag: 'w' });
    }
  });
});

