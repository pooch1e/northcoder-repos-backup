\c my_bookshop;

CREATE TABLE IF NOT EXISTS genres 
(
  genre_id SERIAL PRIMARY KEY,
  genre_description VARCHAR(300)
);

INSERT INTO genres 
(genre_description)
VALUES
('science fiction'),
('children''s'),
('romance'),
('fantasy'),
('dystopian'),
('science'),
('adventure'),
('classics');