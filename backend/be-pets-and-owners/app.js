const express = require('express');
const db = require('./db/connection');

const app = express();
app.use(express.json());

app.get('/api/owners/:owner_id', (req, res) => {
  const { owner_id } = req.params;
  return db
    .query(`SELECT * FROM owners WHERE owner_id = $1`, [owner_id])
    .then(({ rows }) => {
      res.status(200).send({ owner: rows[0] });
    });
});

app.get('/api/owners', (req, res) => {
  return db.query(`SELECT * FROM owners`).then(({ rows }) => {
    res.status(200).send({ owners: rows });
  });
});

app.get('/api/owners/:owner_id/pets', (req, res) => {
  const { owner_id } = req.params;
  return db
    .query(
      `SELECT * FROM pets 
        JOIN owners ON pets.owner = owners.owner_id
        WHERE owner_id = $1`,
      [owner_id]
    )
    .then(({ rows }) => {
      res.status(200).send({ pets: rows });
    });
});

app.get('/api/pets', (req, res) => {
  const temperament = req.query.temperament;
  return db
    .query(`SELECT * FROM pets WHERE temperament = $1`, [temperament])
    .then(({ rows }) => {
      res.status(200).send({ pets: rows });
    });
});

// pets:id
app.get('/api/pets/:pet_id', (req, res) => {
  const { pet_id } = req.params;
  return db
    .query(`SELECT * FROM pets WHERE pet_id = $1`, [pet_id])
    .then(({ rows }) => {
      res.status(200).send({ pet: rows[0] });
    });
});

// PATCH owner name and age
app.patch('/api/owners/:owner_id', (req, res) => {
  const { owner_id } = req.params;
  //get req object
  const { name, age } = req.body;
  return db
    .query(
      `UPDATE owners SET name = $1, age = $2 WHERE owner_id = $3 RETURNING *`,
      [name, age, owner_id]
    )
    .then(({ rows }) => {
      res.status(200).send({ owner: rows[0] });
    });
});

app.post('/api/owners', (req, res) => {
  const { name, age } = req.body;
  return db
    .query(
      `INSERT INTO owners (name, age)
    VALUES ($1, $2) RETURNING *;`,
      [name, age]
    )
    .then(({ rows }) => {
      res.status(201).send({ owner: rows[0] });
    });
});

app.post('/api/owners/:owner_id/pets', (req, res) => {
  const { owner_id } = req.params;
  const { name, avatar_url, fave_food, age, temperament } = req.body;
  return db
    .query(
      `INSERT INTO pets (name, avatar_url, fave_food, owner, age, temperament)
    VALUES ($1, $2, $3, $4, $5, $6) RETURNING *;`,
      [name, avatar_url, fave_food, owner_id, age, temperament]
    )
    .then(({ rows }) => {
      res.status(201).send({ pet: rows[0] });
    });
});

module.exports = app;
