const robot = {
  reportType: function () {
    return `I am a ${this.type} type robot`;
  },
};

function createRobot(type) {
  const cleaner = Object.create(robot);
  cleaner.type = type; // Assign the 'type' property to the cleaner object
  return cleaner;
}

const cleaner = createRobot('cleaner'); // Assign the returned object to a variable
console.log(cleaner.type); // 'cleaner'
console.log(cleaner.reportType()); // 'I am a cleaner type robot'

const pizzaBot = createRobot('chef');
pizzaBot.favouriteFood = 'pepperoni pizza';
console.log(pizzaBot.hasOwnProperty('type')); //  True
console.log(pizzaBot.hasOwnProperty('reportType')); // False
console.log(pizzaBot.hasOwnProperty('favouriteFood')); // True
console.log(Object.getPrototypeOf(pizzaBot));
