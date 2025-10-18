const { createBulkOrder } = require("./create-bulk-order");

describe("createBulkOrder", () => {
  test("returns a promise", () => {
    expect(createBulkOrder("cake")).toBeInstanceOf(Promise);
  });
  test(
    "resolves with an object containing an empty itemsOrdered array and totalCost of 0 when passed an empty array", () => {
      return createBulkOrder([]).then((response) => {
      const { itemsOrdered, totalCost } = response;
      expect(itemsOrdered).toEqual([]);
      expect(totalCost).toBe(0);
    });
  }
  );
  test(
    "resolves with an object containing an itemsOrdered array property and a totalCost number property when all items and ingredients are valid", () => {
      return createBulkOrder(['cake', 'pasta']).then((response) => {
        const { itemsOrdered, totalCost } = response;
        expect(itemsOrdered).toEqual([{itemName : 'cake', ingredients: ["eggs", "flour", "butter", "sugar"], cost : 90}, {itemName: 'pasta', ingredients: ['eggs', 'flour'], cost: 15}])
        expect(totalCost).toBe(105);
      })
    }
  );
  test.todo(
    "each item in itemsOrdered includes itemName, ingredients, and itemCost"
  );
  test.todo("resolves with correct totalCost for multiple valid items");
  test.todo(
    "resolves with object with msg string property 'Order could not be completed: item or ingredient missing' if any item is not found"
  );
  test.todo(
    "resolves with object with msg string property 'Order could not be completed: item or ingredient missing' if any ingredient is not in stock"
  );
  test.todo(
    "preserves the order of input items in the output itemsOrdered array"
  );
});
