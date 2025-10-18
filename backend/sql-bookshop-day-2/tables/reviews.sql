\c my_bookshop
CREATE TABLE IF NOT EXISTS reviews (
  reviews_id SERIAL PRIMARY KEY,
  review_text VARCHAR(300),
  rating FLOAT,
  book_id INT REFERENCES books(book_id) ON DELETE CASCADE  
);

-- INSERT INTO reviews (review_text, rating, book_id) VALUES
-- ('A hilarious and clever sci-fi adventure!', 4.8, 1),
-- ('A timeless tale with deep meaning for all ages.', 4.9, 2),
-- ('Charming and delightful for children and adults.', 4.5, 3),
-- ('A witty and insightful look at society.', 4.2, 4),
-- ('Chilling and thought-provoking dystopia.', 4.7, 5),
-- ('Disturbing and powerful, a modern classic.', 4.6, 6),
-- ('Exciting and imaginative alien invasion story.', 4.3, 7),
-- ('A moving and romantic wartime story.', 4.1, 8),
-- ('Fascinating and mind-bending science explained.', 4.4, 9),
-- ('A brilliant and romantic classic.', 4.8, 10);

-- INSERT INTO reviews (review_text, rating, book_id) VALUES
-- ('Another perspective on this book.', 4.0, 1),
-- ('Loved the pacing and style!', 4.6, 1),
-- ('Felt a bit slow, but worth the read.', 3.8, 1);
INSERT INTO reviews (review_text, rating, book_id, user_id) VALUES
('Bad', 1.1, 2, 1),
('Good', 4.9, 2, 1),
('Test', 3.0, 3, 2);
