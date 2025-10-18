



-- - Find the average price of all books written by Jane Austen.
-- - List all authors who haven't written any books (hint: which kind of join might help?).

\c my_bookshop
-- List all book titles along with their author's name.
SELECT books.title, authors.author_name
FROM books
JOIN authors ON authors.author_id = books.author_id;

-- Show each author and the number of books they've written.
SELECT authors.author_name, COUNT(*) AS total_books
FROM authors
JOIN books ON books.book_id = authors.author_id
GROUP BY authors.author_name;

-- List the titles and prices of all fiction books written by authors who have the word "George" in their name.
SELECT books.title, books.price, authors.author_name
FROM books
JOIN authors ON authors.author_id = books.author_id
WHERE authors.author_name LIKE '%George%';
-- that was annoying

-- Show the name of each author along with the total number of books they've written that are in stock (quantity_in_stock > 0).
