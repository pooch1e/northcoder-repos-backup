const { escapeCave } = require("./escape-cave");

describe("escapeCave", () => {
  test("returns array of index values when passed a single-element array", () => {
    const caveSystem = ["exit"];
    expect(escapeCave(caveSystem)).toEqual([0]);
  });
  test("returns array of index values for nested single-element arrays", () => {
    const caveSystem = [["exit"]];
    expect(escapeCave(caveSystem)).toEqual([0, 0]);
  });
  test("returns array of index values for deeply nested single-element arrays", () => {
    const caveSystem = [[[[["exit"]]]]];
    expect(escapeCave(caveSystem)).toEqual([0, 0, 0, 0, 0]);
  });

  test("returns array of index values for variable-length nested arrays", () => {
    let caveSystem = [
      [[], [], [], [], []],
      [[], [[], [], "exit", []], []],
      [],
      [[], [], [], []],
    ];
    expect(escapeCave(caveSystem)).toEqual([1, 1, 2]);

    caveSystem = [[[], [], []], [[[[], ["exit"]]]], []];
    expect(escapeCave(caveSystem)).toEqual([1, 0, 0, 1, 0]);
  });

  test("returns null if exit not found", () => {
    const caveSystem = [[], [[]], [[[], []]]];
    expect(escapeCave(caveSystem)).toBeNull();
  });
});
