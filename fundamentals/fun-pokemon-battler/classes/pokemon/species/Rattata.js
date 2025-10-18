const NormalPokemon = require("../types/NormalPokemon");

class Rattata extends NormalPokemon {
  constructor(name, hitPoints, attackDamage, move) {
    super(name, hitPoints, attackDamage, move);
  }
}

module.exports = Rattata;
