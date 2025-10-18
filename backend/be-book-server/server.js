const http = require('http');
// const db = require("./db/data/dev-data/index.js");
const connection = require('./db/connection');

const server = http.createServer((request, response) => {
  const { method, url } = request;
  const regex = /^\/api\/books\/(\d+)$/;

  if (url === '/api' && method === 'GET') {
    response.setHeader('Content-Type', 'application/json');
    response.statusCode = 200;
    response.write(JSON.stringify({ msg: 'Hello' }));
    response.end();
  }

  if (url === '/api/books' && method === 'GET') {
    connection.query('SELECT * FROM books;').then(({ rows }) => {
      response.setHeader('Content-Type', 'application/json');
      response.statusCode = 200;
      response.write(JSON.stringify({ books: rows }));
      response.end();
    });
  }

  if (url === '/api/authors' && method === 'GET') {
    connection.query('SELECT * FROM authors;').then(({ rows }) => {
      response.setHeader('Content-Type', 'application/json');
      response.statusCode = 200;
      response.write(JSON.stringify({ authors: rows }));
      response.end();
    });
  }
  // ADD A BOOK TO TABLE
  if (url === '/api/books' && method === 'POST') {
    let body = '';
    request.on('data', (packet) => {
      body += packet.toString();
    });

    request.on('end', () => {
      try {
        let dataObj = JSON.parse(body);
        connection
          .query(
            'INSERT INTO books (book_title, author_id, is_fiction) VALUES ($1, $2, $3);',
            [dataObj.book_title, dataObj.author_id, dataObj.is_fiction]
          )
          .then(() => {
            console.log('this is the book');
            response.setHeader('Content-Type', 'application/json');
            response.statusCode = 202;
            response.end(JSON.stringify({ book: dataObj }));
          });
      } catch (err) {
        response.statusCode = 500;
        response.end(JSON.stringify({ error: err.message }));
      }
    });
  }
  //figure this out...?
  const index = url.match(regex);

  console.log(index);

  if (index && method === 'GET') {
    connection
      .query('SELECT * FROM books WHERE books.book_id = $1', [index[1]])
      .then(({ rows }) => {
        response.setHeader('Content-Type', 'application/json');
        response.statusCode = 200;
        response.write(JSON.stringify({ book: rows }));
        response.end();
      });
  }

  if (url === `/api/books/1/author` && method === 'GET') {
    console.log("you've hit api/books/author :)");
    connection
      .query(
        `SELECT authors.author_id, books.book_id FROM authors JOIN books ON authors.author_id = books.author_id`
      )
      .then(({ rows }) => {
        console.log({ rows });
        response.end();
      });
  }
});

server.listen(9090, () => {
  console.log('Hello');
});
