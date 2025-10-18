const Pokemon = require("../Pokemon");

class WaterPokemon extends Pokemon {
  constructor(name, hitPoints, attackDamage, move) {
    super(name, hitPoints, attackDamage, move);
    this.type = "water";
  }
  isEffectiveAgainst(otherPokemon) {
    if (otherPokemon.type === "fire") {
      return true;
    }
    return false;
  }
  isWeakTo(otherPokemon) {
    if (otherPokemon.type === "grass") {
      return true;
    }
    return false;
  }
}

module.exports = WaterPokemon;
