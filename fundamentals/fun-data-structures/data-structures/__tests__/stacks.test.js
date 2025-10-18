const createStack = require("../stack");

// create test suite for stack data structure here
describe("tests for stack factory function", () => {
  describe("properties - quantity", () => {
    // create stack has property of quantity
    test("create stack has a property of quantity", () => {
      const newObject = createStack("JoelTest");
      expect(Object.hasOwn(newObject, "quantity")).toBe(true);
    });
    test("quantity property initialises at 0", () => {
      const newObject = createStack("SimonTest");
      expect(newObject.quantity).toBe(0);
    });
  });

  describe("properties - object", () => {
    test("create stack has a property of storage", () => {
      const newObject = createStack("JoelTest");
      expect(Object.hasOwn(newObject, "storage")).toBe(true);
    });
    test("storage property initialises at {}", () => {
      const newObject = createStack("SimonTest");
      expect(newObject.storage).toEqual({});
    });
  });

  describe("properties - maxSize", () => {
    test("create stack has a property of maxSize", () => {
      const newObject = createStack("JoelTest");
      expect(Object.hasOwn(newObject, "maxSize")).toBe(true);
    });
    test("maxSize property defaults to 10", () => {
      const newObject = createStack("SimonTest");
      expect(newObject.maxSize).toEqual(10);
    });
    test("maxSize property returns 5 when createStack passed 5 as an argument", () => {
      const newObject = createStack("SimonTest", 5);
      expect(newObject.maxSize).toBe(5);
    });
  });
  describe("method - push", () => {
    test("expect push method to add one item to stack", () => {
      const newObject = createStack("testingPush", 5);
      newObject.addToStorage("apple");
      const actual = newObject.storage;
      expect(actual).toEqual({ 1: "apple" });
    });
    test("adds items to stack sequentially", () => {
      const newObject = createStack("testingPush", 5);
      newObject.addToStorage("apple");
      newObject.addToStorage("banana");
      newObject.addToStorage("pear");
      const actual = newObject.storage;
      expect(actual).toEqual({ 1: "apple", 2: "banana", 3: "pear" });
    });
    test("if stack is full, does not push item", () => {
      const newObject = createStack("Simon", 1);

      newObject.addToStorage("apple");
      newObject.addToStorage("grape");
      const actual = newObject.storage;
      expect(actual).toEqual({ 1: "apple" });
    });
  });
  describe("method - pop", () => {
    test("expect pop method to remove one item from stack", () => {
      const newObject = createStack("testingPop", 5);
      newObject.addToStorage("apple");
      newObject.addToStorage("banana");
      newObject.addToStorage("pear");
      newObject.removeFromStorage();
      const actual = newObject.storage;
      expect(actual).toEqual({ 1: "apple", 2: "banana" });
    });
    test("return deleted item when pop method used", () => {
      const newObject = createStack("testingPop", 5);
      newObject.addToStorage("apple");
      newObject.addToStorage("banana");
      newObject.addToStorage("pear");
      const actual = newObject.removeFromStorage();
      expect(actual).toEqual("pear");
    });
    test("expect pop method to remove multiple items from stack", () => {
      const newObject = createStack("testingPop", 5);
      newObject.addToStorage("apple");
      newObject.addToStorage("banana");
      newObject.addToStorage("pear");
      newObject.removeFromStorage();
      newObject.removeFromStorage();
      const actual = newObject.storage;
      expect(actual).toEqual({ 1: "apple" });
    });
    test("if stack is empty, return undefined", () => {
      const newObject = createStack("testingPop", 0);
      const actual = newObject.removeFromStorage();
      expect(actual).toBe(undefined);
    });
  });
  describe("method - isEmpty", () => {
    test("isEmpty method returns a boolean", () => {
      const newObject = createStack("testingisEmpty", 2);
      expect(typeof newObject.isEmpty()).toBe("boolean");
    });
    test("returns true when quantity is 0 and stack storage is empty", () => {
      const newObject = createStack("testingisEmpty", 2);
      expect(newObject.isEmpty()).toBe(true);
    });
    test("returns false when quantity is more than 0 and stack storage is not empty", () => {
      const newObject = createStack("testingisEmpty", 2);
      newObject.addToStorage("beans");
      expect(newObject.isEmpty()).toBe(false);
    });
  });
  describe("method - isFull", () => {
    test("isFull method returns a boolean", () => {
      const newObject = createStack("testingisFull", 1);
      expect(typeof newObject.isFull()).toBe("boolean");
    });
    test("returns true when quantity equals maxSize and stack storage is full", () => {
      const newObject = createStack("testingisFull", 1);
      newObject.addToStorage("bean");
      expect(newObject.isFull()).toBe(true);
    });
    test("returns false when quantity is less than maxSize and stack storage is not full", () => {
      const newObject = createStack("testingisFull", 1);
      expect(newObject.isFull()).toBe(false);
    });
  });
  describe("method - peekLastItem", () => {
    test("returns the item in storage if only one item", () => {
      const newObject = createStack("testingpeekLastItem", 1);
      newObject.addToStorage("bean");
      expect(newObject.peekLastItem()).toBe("bean");
    });
    test("returns last added item in storage if many items added", () => {
      const newObject = createStack("testingpeekLastItem", 3);
      newObject.addToStorage("apple");
      newObject.addToStorage("banana");
      newObject.addToStorage("pear");
      expect(newObject.peekLastItem()).toBe("pear");
    });
  });
});
