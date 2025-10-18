const Charmander = require("../../classes/pokemon/species/Charmander");
const Squirtle = require("../../classes/pokemon/species/Squirtle");
const Bulbasaur = require("../../classes/pokemon/species/Bulbasaur");
const Rattata = require("../../classes/pokemon/species/Rattata");

describe("Charmander", () => {
  describe("Properties", () => {
    it("has a 'move' property of 'ember'", () => {
      const charmander = new Charmander("Charmander", 44, 17, "flamethrower");

      expect(charmander.move).toBe("ember");
    });
  });
});

describe("Squirtle", () => {
  describe("Properties", () => {
    it("has a 'move' property of 'water gun'", () => {
      const squirtle = new Squirtle("Squirtle", 44, 16, "surf");

      expect(squirtle.move).toBe("water gun");
    });
  });
});

describe("Bulbasaur", () => {
  describe("Properties", () => {
    it("has a 'move' property of 'vine whip'", () => {
      const bulbasaur = new Bulbasaur("Bulbasaur", 45, 16, "razor leaf");

      expect(bulbasaur.move).toBe("vine whip");
    });
  });
});

describe("Rattata", () => {
  describe("Properties", () => {
    it("is a NormalPokemon", () => {
      const rattata = new Rattata("Rattata", 24, 6);

      expect(rattata.type).toBe("normal");
      expect(rattata.move).toBe("tackle");
    });
  });
});
