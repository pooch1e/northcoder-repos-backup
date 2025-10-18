const GrassPokemon = require("../types/GrassPokemon");

class Bulbasaur extends GrassPokemon {
  constructor(name, hitPoints, attackDamage) {
    super(name, hitPoints, attackDamage);
    this.move = "vine whip";
  }
}

module.exports = Bulbasaur;
