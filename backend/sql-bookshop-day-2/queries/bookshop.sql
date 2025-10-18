\c my_bookshop;

-- which authors do not have an associated book
-- SELECT authors.*
-- FROM authors
-- LEFT JOIN books ON authors.author_id = books.author_id
-- WHERE books.book_id IS NULL;

-- select * FROM genres;

-- SELECT * FROM book_genres;

-- List all genres that a certain book belongs to. Make sure this works for books that belong to more than one genre.

-- SELECT books.title, genres.genre_description
-- FROM books
-- JOIN book_genres ON books.book_id = book_genres.book_id
-- JOIN genres ON book_genres.genre_id = genres.genre_id
-- WHERE books.book_id IN (4, 5); -- this is how to list multiple 

-- List all the books belonging to a certain genre. Make sure this works for genres with multiple books.
-- SELECT genres.genre_description, books.title
-- FROM genres
-- JOIN book_genres ON genres.genre_id = book_genres.genre_id
-- JOIN books ON book_genres.book_id = books.book_id
-- WHERE genres.genre_id = 3;

-- What is the sum of all books in stock?
-- SELECT SUM(quantity_in_stock) AS total_number_in_stock
-- FROM books;

-- List the total number of books we have by each author.
-- SELECT books.author_id, authors.author_name, genres.genre_description, SUM(quantity_in_stock) AS total_books_per_author
-- FROM authors
-- JOIN books ON authors.author_id = books.author_id
-- JOIN genres ON books.book_id = genres.genre_id
-- GROUP BY books.author_id, authors.author_name, genres.genre_description;

-- List the average price for books of a specific genre. Make sure this works for genres with multiple books.
-- SELECT genres.genre_description, avg(books.price) AS average_price
-- FROM genres
-- JOIN books ON genres.genre_id = books.book_id
-- GROUP BY genres.genre_description;

-- Handle the deletion of a book. When it is deleted, all of the associated records in the books_genres table should get deleted too. For this, update the CREATE TABLE statement in insert filename to make your books_genres table automatically delete the relevant rows.
-- how should I test this? 


-- 1: Use the ARRAY_AGG() function to get a list of each book in a single row, with all genres that the book belongs to.
-- so one col of book title and second col of array of all genres eg [fantasy, horror, sciFi]

-- SELECT books.title, ARRAY_AGG(genres.genre_description) AS genres
-- FROM books
-- JOIN book_genres ON books.book_id = book_genres.book_id
-- JOIN genres ON book_genres.genre_id = genres.genre_id
-- GROUP BY books.title;

-- 2: Add the ability to add reviews to the books. You should then be able to query to find:

--     All reviews of a specified book.
--     The average rating of a book.
--     See only the most favourable and unfavourable reviews for a specified book.
--     List all books above a certain average rating.

-- selects all reviews for every book
-- SELECT books.title, reviews.review_text
-- FROM books
-- JOIN reviews ON books.book_id = reviews.book_id;

-- reviews of a specified book (currently only book with more than one review)
-- SELECT books.title, ARRAY_AGG(reviews.review_text) AS review_list
-- FROM books
-- JOIN reviews ON books.book_id = reviews.book_id
-- WHERE books.title = 'The Hitchhiker''s Guide to the Galaxy'
-- GROUP BY books.title;

-- average ratings of hitchiker guide
SELECT books.title, AVG(reviews.rating) AS average_score
FROM books
JOIN reviews ON books.book_id = reviews.book_id
WHERE books.title = 'The Hitchhiker''s Guide to the Galaxy'
GROUP BY books.title;

-- see only best rating and worst rating/review
SELECT MIN(reviews.rating) AS lowest_rating, MAX(reviews.rating) AS highest_rating, books.title
FROM reviews
JOIN books ON reviews.book_id = books.book_id
GROUP BY books.title;


-- for specific book
SELECT MIN(reviews.rating) AS lowest_rating, MAX(reviews.rating) AS highest_rating, books.title
FROM reviews
JOIN books ON reviews.book_id = books.book_id
WHERE books.title = 'The Hitchhiker''s Guide to the Galaxy'
GROUP BY books.title;

-- list all books above a specified average rating
-- wrap in query? From Stack overflow
SELECT * 
FROM (
  SELECT books.title, AVG(reviews.rating) AS average_score
  FROM books
  JOIN reviews ON books.book_id = reviews.book_id
  GROUP BY books.title
) WHERE average_score > 4.2;

-- 3: Add users to the database so that each review can be associated to a user. You should then be able to:

--     List all reviews by a single user.
--     Find out the average rating that a user has given in all of their reviews.
--     List books that a user has not reviewed.

-- SELECT * FROM reviews;
-- List all reviews by a single user.

SELECT reviews.user_id, reviews.rating, books.title
FROM reviews
JOIN books ON reviews.book_id = books.book_id
WHERE reviews.user_id = 1;
