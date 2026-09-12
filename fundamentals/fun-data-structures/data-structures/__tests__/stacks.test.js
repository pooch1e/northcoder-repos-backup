const createStack = require("../stack");

// create test suite for stack data structure here
describe("tests for stack factory function", () => {
  describe("properties - quantity", () => {

    });
    test("quantity property initialises at 0", () => {

    });
  });

  describe("properties - object", () => {
    test("create stack has a property of storage", () => {

    });
    test("storage property initialises at {}", () => {

    });
  });

  describe("properties - maxSize", () => {
    test("create stack has a property of maxSize", () => {

    });
    test("maxSize property defaults to 10", () => {

    });
    test("maxSize property returns 5 when createStack passed 5 as an argument", () => {

    });
  });
  describe("method - push", () => {
    test("expect push method to add one item to stack", () => {

    });
    test("adds items to stack sequentially", () => {

    });
    test("if stack is full, does not push item", () => {

    });
  });
  describe("method - pop", () => {
    test("expect pop method to remove one item from stack", () => {

    });
    test("return deleted item when pop method used", () => {

    });
    test("expect pop method to remove multiple items from stack", () => {

    });
    test("if stack is empty, return undefined", () => {

    });
  });
  describe("method - isEmpty", () => {
    test("isEmpty method returns a boolean", () => {

    });
    test("returns true when quantity is 0 and stack storage is empty", () => {

    });
    test("returns false when quantity is more than 0 and stack storage is not empty", () => {

    });
  });
  describe("method - isFull", () => {
    test("returns true when quantity equals maxSize and stack storage is full", () => {

    });
    test("returns false when quantity is less than maxSize and stack storage is not full", () => {

    });
  });
  describe("method - peekLastItem", () => {
    test("returns the item in storage if only one item", () => {

    });
    test("returns last added item in storage if many items added", () => {
  });
});
