const { processItemRequest } = require("./process-item-request");

describe("processItemRequest()", () => {
  test("returns a promise", () => {
    expect(processItemRequest("cake")).toBeInstanceOf(Promise);
  });
  test("promise resolves with an object with an itemName property with a value of the given item", () => {
    return processItemRequest("cake").then((response) => {
      expect(response.itemName).toBe("cake");
    });
  });
  test("promise resolves with an object with an ingredients property with a value of the given items' ingredients", () => {
    return processItemRequest("cake").then((response) => {
      expect(response.ingredients).toEqual([
        "eggs",
        "flour",
        "butter",
        "sugar",
      ]);
    });
  });
  test("if item not found resolves with object with msg of `<item> not found`", () => {
    return processItemRequest("mashed potatoes").then((error) => {
      expect(error.msg).toBe("mashed potatoes not found");
    });
  });
});
