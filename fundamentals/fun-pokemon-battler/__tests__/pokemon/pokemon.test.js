const Pokemon = require("../../classes/pokemon/Pokemon");

describe("Pokemon", () => {
  describe("Properties", () => {
    it("sets the instance name, hitPoints, attackDamage and move", () => {
      const eevee = new Pokemon("Eevee", 55, 18, "Headbutt");
      expect(eevee.name).toBe("Eevee");
      expect(eevee.hitPoints).toBe(55);
      expect(eevee.attackDamage).toBe(18);
      expect(eevee.move).toBe("Headbutt");
    });
    it("sets the default move property to 'tackle' if a move is not passed", () => {
      const squirtle = new Pokemon("Squirtle", 44, 16);
      expect(squirtle.move).toBe("tackle");
    });
  });
  describe("Methods", () => {
    describe("takeDamage()", () => {
      it("doesnt change pokemon's health (hitPoints) when pokemon takes 0 attack damage", () => {
        const flareon = new Pokemon("Flareon", 65, 0, "Fire blast");
        flareon.takeDamage(0);
        expect(flareon.hitPoints).toBe(65);
      });
      it("reduces pokemon's health (hitPoints) when pokemon takes attack damage greater than 0", () => {
        const flareon = new Pokemon("Flareon", 65, 0, "Fire blast");
        flareon.takeDamage(23);
        expect(flareon.hitPoints).toBe(42);
      });
    });
    describe("useMove()", () => {
      it("returns pokemon's attack damage ", () => {
        const flareon = new Pokemon("Flareon", 65, 20, "Fire blast");
        const result = flareon.useMove();
        expect(result).toBe(20);
      });
    });
    describe("hasFainted()", () => {
      it("returns true if pokemon's health (hitPoints) is 0 or less after taking damage", () => {
        const flareon = new Pokemon("Flareon", 65, 20, "Fire blast");
        flareon.takeDamage(70);
        expect(flareon.hasFainted()).toBe(true);
      });
      it("returns false if pokemon's health (hitPoints) is greater than 0 after taking damage", () => {
        const flareon = new Pokemon("Flareon", 65, 20, "Fire blast");
        flareon.takeDamage(60);
        expect(flareon.hasFainted()).toBe(false);
      });
    });
  });
});
