const getOrderInfo = require('../katas/day-2/getOrderInfo');

describe('getOrderInfo returns a new function with specific properties', () => {
  const customer = {
    userId: 321,
    firstName: 'Bob',
    lastName: 'Frogs',
    hairstyle: null,
    hasMotorcycle: true,
    shippingAddress: '123 Example Road',
    orderId: 1,
    favouriteColour: 'chartreuse',
  };
  test('Test new object has only properties specified', () => {
    const returnedObject = getOrderInfo(customer);
    const expectedObject = {
      userId: 321,
      shippingAddress: '123 Example Road',
      orderId: 1,
    };
    expect(returnedObject).toEqual(expectedObject);
  });

  test('test new object properties matches properties of original object', () => {
    const actual = getOrderInfo(customer);
    expect(actual).toHaveProperty('userId', 321);
    expect(actual).toHaveProperty('shippingAddress', '123 Example Road');
    expect(actual).toHaveProperty('orderId', 1);
  });

  test('testing when passed an object, returns a new object', () => {
    const actual = getOrderInfo(customer);
    expect(actual).not.toEqual(customer);
  });

  test('testing original object remains unmutated', () => {
    const testInput = structuredClone(customer);
    getOrderInfo(customer);
    expect(customer).toEqual(testInput);
  });
});

// Test new object has only properties specified Complete
// Test that the new object properties match the properties of the old object
// Test that its a new object
// Test that the original object is unmutated
