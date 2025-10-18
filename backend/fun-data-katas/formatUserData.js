/* formatUserData

Given an array of individual film ratings and an array of users, format the favFilms array so each film is represented by an object with the key of name and score which is calculated from filmRatings.

You may wish to break this down into separate functions which are individually tested.

const filmRatings = [
  { title: "Barbie", rating: 3 },
  { title: "Barbie", rating: 1 },
  { title: "Barbie", rating: 5 },
  { title: "Babe", rating: 1 },
  { title: "Bambi", rating: 2 },
  { title: "Bambi", rating: 4 },
  { title: "Ben-Hur", rating: 5 },
  { title: "Ben-Hur", rating: 3 },
  { title: "Ben-Hur", rating: 4 },
  { title: "Braveheart", rating: 4 },
  { title: "Braveheart", rating: 3 },
  { title: "Barbie", rating: 4 },
];

const users = [
  { username: "bartyBoo", favFilms: ["Barbie", "Braveheart", "Ben-Hur"] },
  { username: "rosieandjim", favFilms: ["Braveheart", "Bambi", "Babe"] },
];

// expected output
const formattedUsers = [
  {
    username: "bartyBoo",
    favFilms: [
      { name: "Barbie", score: 3.25 },
      { name: "Braveheart", score: 3.5 },
      { name: "Ben-Hur", score: 4 },
    ],
  },
  {
    username: "rosieandjim",
    favFilms: [
      { name: "Braveheart", score: 3.5 },
      { name: "Bambi", score: 3 },
      { name: "Babe", score: 1 },
    ],
  },
];
*/

const getUser = (user) => {};

const getFilm = (film) => {};

const getFormattedUser = (input) => {};
