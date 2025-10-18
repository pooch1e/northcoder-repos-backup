const FirePokemon = require("../../classes/pokemon/types/FirePokemon");
const WaterPokemon = require("../../classes/pokemon/types/WaterPokemon");
const GrassPokemon = require("../../classes/pokemon/types/GrassPokemon");
const NormalPokemon = require("../../classes/pokemon/types/NormalPokemon");

describe("FirePokemon", () => {
  describe("Properties", () => {
    it("has a 'type' property of 'fire'", () => {
      const Charmander = new FirePokemon("Charmander", 44, 17, "flamethrower");

      expect(Charmander.type).toBe("fire");
    });
  });
  describe("Methods", () => {
    describe("isEffectiveAgainst()", () => {
      it("returns true vs a Grass-type pokemon", () => {
        const Charmander = new FirePokemon("Charmander", 44, 17, "flamethrower");
        const leafeon = new GrassPokemon("Leafeon", 65, 17, "giga drain");

        expect(Charmander.isEffectiveAgainst(leafeon)).toBe(true);
      });
      it("returns false vs a non-Grass-type pokemon", () => {
        const Charmander = new FirePokemon("Charmander", 44, 17, "flamethrower");
        const squirtle = new WaterPokemon("Squirtle", 44, 16, "surf");

        expect(Charmander.isEffectiveAgainst(squirtle)).toBe(false);
      });
    });
    describe("isWeakTo()", () => {
      it("returns true vs a Water-type pokemon", () => {
        const Charmander = new FirePokemon("Charmander", 44, 17, "flamethrower");
        const squirtle = new WaterPokemon("Squirtle", 44, 16, "surf");

        expect(Charmander.isWeakTo(squirtle)).toBe(true);
      });
    });
  });
});

describe("WaterPokemon", () => {
  describe("Properties", () => {
    it("has a 'type' property of 'water'", () => {
      const squirtle = new WaterPokemon("Squirtle", 44, 16, "surf");

      expect(squirtle.type).toBe("water");
    });
  });
  describe("Methods", () => {
    describe("isEffectiveAgainst()", () => {
      it("returns true vs a Fire-type pokemon", () => {
        const squirtle = new WaterPokemon("Squirtle", 44, 16, "surf");
        const charmander = new FirePokemon("Charmander", 44, 17, "flamethrower");

        expect(squirtle.isEffectiveAgainst(charmander)).toBe(true);
      });
      it("returns false vs a non-Fire-type pokemon", () => {
        const squirtle = new WaterPokemon("Squirtle", 44, 16, "surf");
        const leafeon = new GrassPokemon("Leafeon", 65, 17, "giga drain");

        expect(squirtle.isEffectiveAgainst(leafeon)).toBe(false);
      });
    });
    describe("isWeakTo()", () => {
      it("returns true vs a Grass-type pokemon", () => {
        const squirtle = new WaterPokemon("Squirtle", 44, 16, "surf");
        const leafeon = new GrassPokemon("Leafeon", 65, 17, "giga drain");

        expect(squirtle.isWeakTo(leafeon)).toBe(true);
      });
    });
  });
});

describe("GrassPokemon", () => {
  describe("Properties", () => {
    it("has a 'type' property of 'grass'", () => {
      const leafeon = new GrassPokemon("Leafeon", 65, 17, "giga drain");

      expect(leafeon.type).toBe("grass");
    });
  });
  describe("Methods", () => {
    describe("isEffectiveAgainst()", () => {
      it("returns true vs a Water-type pokemon", () => {
        const leafeon = new GrassPokemon("Leafeon", 65, 17, "giga drain");
        const squirtle = new WaterPokemon("Squirtle", 44, 16, "surf");

        expect(leafeon.isEffectiveAgainst(squirtle)).toBe(true);
      });
      it("returns false vs a non-Water-type pokemon", () => {
        const leafeon = new GrassPokemon("Leafeon", 65, 17, "giga drain");
        const eevee = new NormalPokemon("Eevee", 55, 18, "headbutt");

        expect(leafeon.isEffectiveAgainst(eevee)).toBe(false);
      });
    });
  });
  describe("isWeakTo()", () => {
    it("returns true vs a Fire-type pokemon)", () => {
      const leafeon = new GrassPokemon("Leafeon", 65, 17, "giga drain");
      const charmander = new FirePokemon("Charmander", 44, 17, "flamethrower");

      expect(leafeon.isWeakTo(charmander)).toBe(true);
    });
  });
});

describe("NormalPokemon", () => {
  describe("Properties", () => {
    it("has a 'type' property of 'normal'", () => {
      const eevee = new NormalPokemon("Eevee", 55, 18, "headbutt");

      expect(eevee.type).toBe("normal");
    });
  });
  describe("methods", () => {
    describe("isEffectiveAgainst()", () => {
      it("returns false vs any type of pokemon", () => {
        const eevee = new NormalPokemon("Eevee", 55, 18, "headbutt");
        const charmander = new FirePokemon("Charmander", 44, 17, "flamethrower");
        const squirtle = new WaterPokemon("Squirtle", 44, 16, "surf");
        const leafeon = new GrassPokemon("Leafeon", 65, 17, "giga drain");

        expect(eevee.isEffectiveAgainst(charmander)).toBe(false);
        expect(eevee.isEffectiveAgainst(squirtle)).toBe(false);
        expect(eevee.isEffectiveAgainst(leafeon)).toBe(false);
      });
    });
    describe("isWeakTo()", () => {
      it("returns false vs any type of pokemon", () => {
        const eevee = new NormalPokemon("Eevee", 55, 18, "headbutt");
        const charmander = new FirePokemon("Charmander", 44, 17, "flamethrower");
        const squirtle = new WaterPokemon("Squirtle", 44, 16, "surf");
        const leafeon = new GrassPokemon("Leafeon", 65, 17, "giga drain");

        expect(eevee.isWeakTo(charmander)).toBe(false);
        expect(eevee.isWeakTo(squirtle)).toBe(false);
        expect(eevee.isWeakTo(leafeon)).toBe(false);
      });
    });
  });
});
