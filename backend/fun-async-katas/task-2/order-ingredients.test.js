const { orderIngredients } = require("./order-ingredients");

describe.skip("orderIngredients()", () => {
  test("returns a promise", () => {
    expect(orderIngredients("cake")).toBeInstanceOf(Promise);
  });
  test("resolves with an object containing the requested food item and ingredients array", () => {
    return orderIngredients("cake").then((response) => {
      const { itemName, ingredients } = response;
      expect(itemName).toBe("cake");
      expect(ingredients).toEqual(["eggs", "flour", "butter", "sugar"]);
    });
  });
  test("resolved object contains totalCost property, which is the total cost of the ingredients", () => {
    return orderIngredients("cake").then((response) => {
      const { totalCost } = response;
      expect(totalCost).toBe(90);
    });
  });
  test("if any of the ingredients are not in stock should respond with object with msg of `could not find one or more ingredients`", () => {
    return orderIngredients("bread").then((error) => {
      expect(error.msg).toBe("could not find one or more ingredients");
    });
  });
});
