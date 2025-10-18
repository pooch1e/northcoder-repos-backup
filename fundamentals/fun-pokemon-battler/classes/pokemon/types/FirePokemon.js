const Pokemon = require("../Pokemon");

class FirePokemon extends Pokemon {
  constructor(name, hitPoints, attackDamage, move) {
    super(name, hitPoints, attackDamage, move);
    this.type = "fire";
  }
  isEffectiveAgainst(otherPokemon) {
    if (otherPokemon.type === "grass") {
      return true;
    }
    return false;
  }
  isWeakTo(otherPokemon) {
    if (otherPokemon.type === "water") {
      return true;
    }
    return false;
  }
}

module.exports = FirePokemon;
