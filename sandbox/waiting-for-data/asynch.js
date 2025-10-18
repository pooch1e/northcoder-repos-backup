
// function getUser() {
//   return Promise.resolve({ name: 'Zahra', id: 42 });
// }

// const user = getUser();

// console.log(user);

function getUser() {
  return Promise.resolve({ name: 'Zahra', id: 42 });
}

const user = getUser();

user.then((response) => {
  console.log('1. Value of user: ', response);
});

console.log('2. Value of user: ', user);