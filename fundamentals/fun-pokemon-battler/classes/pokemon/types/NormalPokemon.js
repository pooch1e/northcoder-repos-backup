const Pokemon = require("../Pokemon");

class NormalPokemon extends Pokemon {
  constructor(name, hitPoints, attackDamage, move) {
    super(name, hitPoints, attackDamage, move);
    this.type = "normal";
  }
  isEffectiveAgainst(otherPokemon) {
    return false;
  }
  isWeakTo(otherPokemon) {
    return false;
  }
}

module.exports = NormalPokemon;
