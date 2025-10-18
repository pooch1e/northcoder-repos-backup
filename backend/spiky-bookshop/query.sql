\c bookshop
\set ECHO queries

SELECT * FROM books; -- gets all data

-- SELECT book_id, title, quantity_in_stock FROM books;

-- books released after 1900
-- SELECT book_id, title, release_date
-- FROM books
-- WHERE release_date > '1900-01-01';

-- books with 'the' in title
-- SELECT book_id, title
-- FROM books
-- WHERE title LIKE '%the%'; -- use % as a match

-- ascending order
-- SELECT * FROM books
-- ORDER BY title ASC;

-- sorted from most to least expensive
-- SELECT * FROM books
-- ORDER BY price DESC;

-- Grab most expensive book
-- SELECT * FROM books
-- WHERE price > 9;

-- in stock and are under 7$
-- SELECT * FROM books
-- WHERE quantity_in_stock > 0
-- AND price < 7;

-- books under 6 and are non fixtion
-- SELECT * FROM books
-- WHERE price < 6
-- AND is_fiction = FALSE;

-- delete some books
-- DELETE FROM books
-- WHERE quantity_in_stock = 0
-- RETURNING *; -- shows what was deleted

-- update price
-- UPDATE books
-- SET
--   price = price * 0.9
-- WHERE quantity_in_stock > 10
-- RETURNING *;

