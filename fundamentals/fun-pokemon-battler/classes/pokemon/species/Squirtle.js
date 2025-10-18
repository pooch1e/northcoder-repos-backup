const WaterPokemon = require("../types/WaterPokemon");

class Squirtle extends WaterPokemon {
  constructor(name, hitPoints, attackDamage) {
    super(name, hitPoints, attackDamage);
    this.move = "water gun";
  }
}

module.exports = Squirtle;
