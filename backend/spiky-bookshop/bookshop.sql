-- Connect to database
\c bookshop

-- Drop and recreate the table
DROP TABLE IF EXISTS books;

CREATE TABLE books (
  book_id SERIAL PRIMARY KEY,
  title VARCHAR(100) NOT NULL,
  price DECIMAL(10, 2) NOT NULL,
  quantity_in_stock INT NOT NULL,
  release_date DATE NOT NULL,
  is_fiction BOOLEAN NOT NULL,
  author_id SERIAL,
  author_name VARCHAR(300),
  trivia_fact VARCHAR(300)
);

-- Clean insert of all books in one go
INSERT INTO books (title, price, quantity_in_stock, release_date, is_fiction, author_name, trivia_fact)
VALUES 
  ('Emma', 5.22, 390, '1815-12-23', TRUE, 'Jane Austen', 'The author of her first novel...'),
  ('Nineteen Eighty-Four: A Novel', 7.99, 420, '1949-06-08', TRUE, 'George Orwell', 'Orwell intentionally got himself arrested...'),
  ('The Handmaid''s Tale', 8.99, 10, '1985-08-01', TRUE, 'Margaret Atwood', 'Atwood was the first author to contribute...'),
  ('The War of the Worlds', 2.50, 17, '1897-04-01', TRUE, 'H. G. Wells', 'In 1914 H.G. Wells published...'),
  ('Captain Corelli''s Mandolin', 9.99, 0, '1995-08-29', TRUE, 'Louis de Bernières', 'De Bernières is an avid musician...'),
  ('A Brief History of Time', 8.25, 0, '1988-04-01', FALSE, 'Stephen Hawking', 'Doctors told him he wouldn''t live past...'),
  ('Pride and Prejudice', 6.99, 4, '1813-01-28', TRUE, 'Jane Austen', 'The author of her first novel...'),
  ('The Da Vinci Code', 10.99, 100, '2003-03-18', TRUE, 'Dan Brown', 'Favourite colour is not brown.'),
  ('The Little Prince', 6.50, 80, '1943-04-06', TRUE, 'Antoine de Saint-Exupéry', 'He was a successful commercial pilot...'),
  ('The Hitchhiker''s Guide to the Galaxy', 7.50, 60, '1979-10-12', TRUE, 'Douglas Adams', 'He made two appearances in Monty Python''s Flying Circus.'),
  ('The Very Hungry Caterpillar', 5.99, 200, '1969-06-03', TRUE, 'Eric Carle', 'Carle had a dream he would build a bridge from Germany to America.'),
  ('The Catcher in the Rye', 6.89, 50, '1951-07-16', TRUE, 'J. D. Salinger', 'Only novel published during his lifetime.'),
  ('The Tale of Peter Rabbit', 4.99, 90, '1902-10-01', TRUE, 'Beatrix Potter', 'She wrote a journal in a secret code that was cracked only in 1958.'),
  ('The Lion, the Witch and the Wardrobe', 7.99, 70, '1950-10-16', TRUE, 'C. S. Lewis', 'He set up a charitable trust to give away his book royalties.'),
  ('Charlie and the Chocolate Factory', 6.50, 65, '1964-01-17', TRUE, 'Roald Dahl', 'He passed intelligence to MI6 during WWII.');
