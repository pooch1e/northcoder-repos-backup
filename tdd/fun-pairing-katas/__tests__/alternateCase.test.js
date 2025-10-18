const alternateCase = require("../katas/day-1/alternateCase");

describe("alternateCase is a function to alternate the case", () => {
  test("test that it returns a string", () => {
    const result = alternateCase("Strings");
    expect(typeof result).toBe("string");
  });
  test("test that odd numbers are capitalised", () => {
    const stringTest = "bhakdfada";
    expect(alternateCase(stringTest)).toBe("BhAkDfAdA");
    // expect that the characters of the odd index numbers are === toUpperCase of the odd index number characters
  });
});

//Test 1: returns a string

//Test 2: Odd numbers are charAt method are capitalised

//Test 3: even numbers are not capitalised

//Test 4: contents of the string are the same while the capitalisation might not be?
