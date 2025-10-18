const orderVeg = require('../katas/day-2/orderVeg');

describe('test orderVeg function', () => {
  test('last item in array has greatest quantity of all items', () => {
    const testFor2arrays = [
      { name: 'Parsnip', type: 'root', quantity: 4 },
      { name: 'Broccoli', type: 'brassica', quantity: 1 },
    ];

    const actual = orderVeg(testFor2arrays);
    expect(actual).toEqual([
      { name: 'Broccoli', type: 'brassica', quantity: 1 },
      { name: 'Parsnip', type: 'root', quantity: 4 },
    ]);
  });

  test('test that quantity of previous item is less than or equal to current item', () => {
    const actual = [
      { name: 'Parsnip', type: 'root', quantity: 4 },
      { name: 'Broccoli', type: 'brassica', quantity: 1 },
      { name: 'Carrot', type: 'root', quantity: 5 },
      { name: 'Onion', type: 'bulb', quantity: 3 },
      { name: 'Chard', type: 'leaf', quantity: 3 },
      { name: 'Runner beans', type: 'legume', quantity: 8 },
    ];

    const solution = [
      { name: 'Broccoli', type: 'brassica', quantity: 1 },
      { name: 'Onion', type: 'bulb', quantity: 3 },
      { name: 'Chard', type: 'leaf', quantity: 3 },
      { name: 'Parsnip', type: 'root', quantity: 4 },
      { name: 'Carrot', type: 'root', quantity: 5 },
      { name: 'Runner beans', type: 'legume', quantity: 8 },
    ];
    const expected = orderVeg(actual);

    expect(expected).toEqual(solution);
  });

  test('Check that its returning a copy/new array', () => {
    const arrayForOriginal = [
      { name: 'Parsnip', type: 'root', quantity: 4 },
      { name: 'Broccoli', type: 'brassica', quantity: 1 },
    ];
    const actual = orderVeg(arrayForOriginal);
    expect(actual).not.toEqual(arrayForOriginal);
  });
  test('Check that the original array is unmutated', () => {
    const arrayForOriginal = [
      { name: 'Parsnip', type: 'root', quantity: 4 },
      { name: 'Broccoli', type: 'brassica', quantity: 1 },
    ];
    const arrayForOriginalCheck = [...arrayForOriginal];
    orderVeg(arrayForOriginal);
    expect(arrayForOriginal).toEqual(arrayForOriginalCheck);
  });
});
