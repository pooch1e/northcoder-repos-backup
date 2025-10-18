function totalAtCheckout(items) {
  let shoppingEntries = Object.entries(items);
  return shoppingEntries.reduce((acc, currentValue) => {
    const obj = currentValue[1];
    return acc += obj.price * obj.quantity;
  }, 0)
  
}
module.exports = totalAtCheckout;
/*
This function takes an object representing items at checkout and returns the total cost.

Each key is the name of an item, and the value is an object with:
  - `price`: the price of a single unit, in pence
  - `quantity`: the number of units purchased

For example:

Input: {
  chocolate: { price: 120, quantity: 2 },
  water: { price: 90, quantity: 1 },
  eggs: { price: 250, quantity: 1 }
}

Output: 580

Start by writing a test for a simple case (e.g. one item, quantity 1).  
Then build up your tests to include more items and higher quantities.

Use the Jest notes to guide you, and implement the function to make each test pass.
*/