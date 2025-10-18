const Pokemon = require("../Pokemon");

class GrassPokemon extends Pokemon {
  constructor(name, hitPoints, attackDamage, move) {
    super(name, hitPoints, attackDamage, move);
    this.type = "grass";
  }
  isEffectiveAgainst(otherPokemon) {
    if (otherPokemon.type === "water") {
      return true;
    }
    return false;
  }
  isWeakTo(otherPokemon) {
    if (otherPokemon.type === "fire") {
      return true;
    }
    return false;
  }
}

module.exports = GrassPokemon;
