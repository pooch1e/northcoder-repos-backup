const FirePokemon = require("../types/FirePokemon");

class Charmander extends FirePokemon {
  constructor(name, hitPoints, attackDamage) {
    super(name, hitPoints, attackDamage);
    this.move = "ember";
  }
}

module.exports = Charmander;
