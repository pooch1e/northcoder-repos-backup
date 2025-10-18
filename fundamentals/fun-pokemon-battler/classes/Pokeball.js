class Pokeball {
  constructor() {
    this.pokemon = null;
  }

  throw(pokemon) {
    if (this.isEmpty() && pokemon) {
      // if ball is empty, catch the pokemon
      this.pokemon = pokemon;
      console.log(`you caught ${pokemon.name}`);
      return pokemon;
    }
    if (!this.isEmpty() && pokemon) {
      console.log("You can't catch a pokemon!");
      return this.pokemon;
    }
    //release pokemon -- up to here!
    if (this.isEmpty()) {
      return null;
    }
    let releasePokemon = this.pokemon;
    this.pokemon = null;
  }

  isEmpty() {
    return this.pokemon === null ? true : false;
    // return this.pokemon === null;
  }

  contains() {}
}

module.exports = Pokeball;
