const getMessage = require('./getMessage');
const {message, author} = require('./data/devData.json')

console.log(getMessage({message, author}))