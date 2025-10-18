\c my_bookshop_test

CREATE TABLE authors (
    author_id SERIAL PRIMARY KEY,
    author_name TEXT,
    fun_fact TEXT
);


INSERT INTO authors
(author_name, fun_fact)
VALUES
('Author 1', 'Loves the number 1'),
('Author 2', 'Their brother-in-law is Author 1'),
('Author 3', 'Lived with Author 2 at University');

CREATE TABLE books (
    book_id SERIAL PRIMARY KEY,
    title VARCHAR(200),
    price NUMERIC(7,2),
    quantity_in_stock INT,
    release_date DATE,
    is_fiction BOOLEAN,
    author_id INT REFERENCES authors(author_id)
);
    
INSERT INTO books 
(title, price, quantity_in_stock, release_date, is_fiction, author_id)
VALUES
('Book 1', 8.99, 560, '1997-10-12', TRUE, 1),
('Book 2', 6.99, 1020, '1943-04-06', TRUE, 2),
('Book 3', 5.99, 1000, '1902-10-01', TRUE, 3);







