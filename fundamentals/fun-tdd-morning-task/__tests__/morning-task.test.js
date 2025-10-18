const totalAtCheckout = require('../morningTask');

describe('Testing checkout function to return total cost of items', () => {
  const testItems = {
    chocolate: { price: 120, quantity: 2 },
    water: { price: 90, quantity: 1 },
    eggs: { price: 250, quantity: 1 },
  };

  const singleItem = {
    water: { price: 90, quantity: 1 },
  };

  const multiItem = {
    water: { price: 90, quantity: 2 },
  };

  test('returns price of item when passed single item', () => {
    const actual = totalAtCheckout(singleItem);
    expect(actual).toBe(90);
  });

  test('returns price of multiple of the same item', () => {
    const actual = totalAtCheckout(multiItem);
    expect(actual).toBe(180);
  });

  test('returns price of shopping cart when passed multiple items of different qualities', () => {
    const actual = totalAtCheckout(testItems);
    expect(actual).toBe(580);
  });
});
