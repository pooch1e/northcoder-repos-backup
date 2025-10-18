const countVeg = require('../katas/day-1/countVeg');

// going to take an array containing objects, and a type of veg
// find total quantity of vegebable type

// 1. test the [key] type of vegetable is correct
// 2. test quantity outputting is the expected quantity
// test that type actually exists in array DONE
// 3. we're expecting a number DONE
// 4. we're expecting the array to have something in it !empty

// const vegetables = [
//   {name: 'Parsnip', type: 'root', quantity: 4},
//   {name: 'Broccoli', type: 'brassica', quantity: 1},
//   {name: 'Carrot', type: 'root', quantity: 5},
//   {name: 'Onion', type: 'bulb', quantity: 3},
//   {name: 'Chard', type: 'leaf', quantity: 3},
//   {name: 'Runner beans', type: 'legume', quantity: 8}
// ]

describe('countVeg is a function to count vegetables', () => {
  const testArray = [
    { name: 'Parsnip', type: 'root', quantity: 4 },
    { name: 'Broccoli', type: 'brassica', quantity: 1 },
    { name: 'Carrot', type: 'root', quantity: 5 },
    { name: 'Onion', type: 'bulb', quantity: 3 },
    { name: 'Chard', type: 'leaf', quantity: 3 },
    { name: 'Runner beans', type: 'legume', quantity: 8 },
  ];

  test('test that type is a key of vegetables', () => {
    const actual = testArray;

    actual.forEach((object) => {
      expect(object).toHaveProperty('type');
      expect(object).toHaveProperty('quantity');
    });
  });

  test('test that output is a number', () => {
    const actual = countVeg(testArray, 'legume')
    expect(typeof actual).toBe('number');
  })
  
  test('test for types with more than one vegetable', () => {
    const actual = countVeg(testArray, 'root')
    expect(actual).toBe(9);
  })

});
