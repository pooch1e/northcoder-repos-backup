\c my_bookshop;

CREATE TABLE IF NOT EXISTS book_genres (
  book_id INT REFERENCES books(book_id) ON DELETE CASCADE,
  genre_id INT REFERENCES genres(genre_id),
  PRIMARY KEY (book_id, genre_id)
);
--  need to insert genre and book for each junction map
INSERT INTO book_genres (book_id, genre_id) VALUES (1, 1); -- Hitchhiker's Guide, science fiction
INSERT INTO book_genres (book_id, genre_id) VALUES (1, 7); -- Hitchhiker's Guide, adventure

INSERT INTO book_genres (book_id, genre_id) VALUES (2, 2); -- Little Prince, children's
INSERT INTO book_genres (book_id, genre_id) VALUES (2, 8); -- Little Prince, classics
INSERT INTO book_genres (book_id, genre_id) VALUES (2, 4); -- Little Prince, fantasy

INSERT INTO book_genres (book_id, genre_id) VALUES (3, 2); -- Peter Rabbit, children's
INSERT INTO book_genres (book_id, genre_id) VALUES (3, 8); -- Peter Rabbit, classics

INSERT INTO book_genres (book_id, genre_id) VALUES (4, 3); -- Emma, romance
INSERT INTO book_genres (book_id, genre_id) VALUES (4, 8); -- Emma, classics

INSERT INTO book_genres (book_id, genre_id) VALUES (5, 5); -- 1984, dystopian
INSERT INTO book_genres (book_id, genre_id) VALUES (5, 8); -- 1984, classics

INSERT INTO book_genres (book_id, genre_id) VALUES (6, 5); -- Handmaid's Tale, dystopian
INSERT INTO book_genres (book_id, genre_id) VALUES (6, 8); -- Handmaid's Tale, classics

INSERT INTO book_genres (book_id, genre_id) VALUES (7, 1); -- War of the Worlds, science fiction
INSERT INTO book_genres (book_id, genre_id) VALUES (7, 7); -- War of the Worlds, adventure

INSERT INTO book_genres (book_id, genre_id) VALUES (8, 3); -- Captain Corelli's Mandolin, romance

INSERT INTO book_genres (book_id, genre_id) VALUES (9, 6); -- Brief History of Time, science

INSERT INTO book_genres (book_id, genre_id) VALUES (10, 3); -- Pride and Prejudice, romance
INSERT INTO book_genres (book_id, genre_id) VALUES (10, 8); -- Pride and Prejudice, classics


