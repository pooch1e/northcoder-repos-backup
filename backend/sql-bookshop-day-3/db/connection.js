// create you connection here!
const { Pool } = require('pg');
const pool = new Pool();

const ENV = process.env.NODE_ENV || 'dev';
console.log(ENV);

const path = `${__dirname}/../.env.${ENV}`;
require('dotenv').config({ path: path });
console.log(path);
console.log(process.env.PGDATABASE);


// pool.query(`DELETE FROM books WHERE author_id = 15`).then((response) => {

//   console.log(response.rows)
//   console.log(response)
 
// })

// pool.query(`INSERT INTO books (title, price, quantity_in_stock, release_date, is_fiction, author_id) VALUES ('Normal People', 9, 1, '2018-08-29', TRUE, 16)`).then((response) => {
//   console.log(response)
// })

// pool.query(`UPDATE books SET price = 9.99 WHERE title = 'A Brief History of Time'`).then((response) => {
//   console.log(response)
  
// })

// pool.query(`SELECT * FROM books`).then((response) => {
//   console.log(response.rows)
//   pool.end();
  
// })


// -- test db queries

// pool.query(`SELECT author_name FROM authors`).then((response) => {
//   console.log(response.rows)
 
// })

// pool.query(`SELECT title FROM books`).then((response) => {
//   console.log(response.rows)

// })

// pool.query(`SELECT title FROM books WHERE release_date < '2000-01-01' AND quantity_in_stock > 1000`).then((response) => {
//   console.log(response.rows)
  
// })

pool.query(`SELECT author_name 
  FROM authors 
  JOIN books ON authors.author_id = books.author_id 
  WHERE authors.fun_fact ILIKE '%Author%' AND books.quantity_in_stock = 0`).then((response) => {
  console.log(response.rows)
  pool.end();
})



module.exports = pool;
