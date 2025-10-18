\c my_bookshop
-- see what my queries are
\set ECHO queries 

-- -- A. All books
-- SELECT * FROM books;

-- -- B. All authors
-- SELECT * FROM authors;

-- -- C. Titles with their author IDs
-- SELECT title, author_id FROM books;

-- -- D. Any author with ID 3?
-- SELECT * FROM authors WHERE author_id = 3;

-- -- E. Which book was written by author 3?
-- SELECT title FROM books WHERE author_id = 3;

-- -- F. Which author wrote 'Emma'?
-- SELECT author_id FROM books WHERE title = 'Emma';

-- -- G. Any authors with more than one book?
-- SELECT author_id FROM books;

SELECT * FROM books JOIN author ON books.title = author.author_name;