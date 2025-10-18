const updateRemoteStudents = require("../katas/day-2/updateRemoteStudents");

// test: that each object has a location key (if it has then leave it)
// test: test that object has key added if missing, and is set to remote
// test: that the og object is unmutated
// test: return a new array

describe("test for updateRemoteStudents to add key if missing", () => {
  const testObject = [
    { name: "Hypatia", age: 31, location: "leeds" },
    { name: "Ramanujan", age: 22 },
    { name: "Tao", age: 47, location: "manchester" },
  ];

  test("when passed an object, checks for location key", () => {
    const actual = updateRemoteStudents(testObject);
    actual.forEach((obj) => {
      expect(obj).toHaveProperty("location");
    });
  });
  test("test that object has key added if missing and is set to remote", () => {
    const actual = updateRemoteStudents(testObject); // Should we be testing more generic cases?
    expect(actual[1].location).toBe("remote");
  });
  test("test: that the og object is unmutated", () => {
    const redefinedObject = [
      { name: "Hypatia", age: 31, location: "leeds" },
      { name: "Ramanujan", age: 22 },
      { name: "Tao", age: 47, location: "manchester" },
    ];
    const unmutatedArray = structuredClone(redefinedObject);
    console.log(unmutatedArray);
    updateRemoteStudents(redefinedObject);
    expect(redefinedObject).toEqual(unmutatedArray);
  });
});
