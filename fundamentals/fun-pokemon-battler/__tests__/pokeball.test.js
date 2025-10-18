const Pokeball = require('../classes/Pokeball');
const Charmander = require('../classes/pokemon/species/Charmander');

describe('Pokeball', () => {
  describe('Methods', () => {
    describe('throw()', () => {
      it('catches (stores) pokemon when ball is empty', () => {
        const ball = new Pokeball();
        const charmander = new Charmander('Charmander', 10, 10);
        ball.throw(charmander);
        expect(ball.isEmpty()).toBe(false);
      });
      it('does not catch pokemon when ball is occupied', () => {
        const ball = new Pokeball();
        const charmander = new Charmander('Charmander', 10, 10);
        const charizard = new Charmander('Charizard', 20, 20);
        ball.throw(charmander);
        ball.throw(charizard);

        expect(ball.isEmpty()).toBe(false);
        expect(ball.pokemon).toEqual(charmander);
      });
      it('return the stored pokemon if pokeball is full', () => {
        const ball = new Pokeball();
        const charmander = new Charmander('Charmander', 10, 10);
        const charizard = new Charmander('Charizard', 20, 20);

        ball.throw(charmander);

        expect(ball.throw(charizard)).toEqual(charmander);
      });
      it('releases stored pokemon when thrown() is called with no argument', () => {
        const ball = new Pokeball();
        const charmander = new Charmander('Charmander', 10, 10);
        ball.throw(charmander);
        const released = ball.throw();
        expect(released).toEqual(ball.pokemon);
        expect(ball.isEmpty()).toBe(true);
      });

      describe('isEmpty()', () => {
        it('if pokeball is empty, return true', () => {
          const ball = new Pokeball();
          expect(ball.isEmpty()).toBe(true);
        });
        it.skip('if pokeball is full, return false', () => {
          const charmander = new Charmander('Charmander', 10, 10);
          const ball = new Pokeball();
          ball.throw(charmander);
          expect(ball.isEmpty()).toBe(false);
        });
      });
    });
  });
});

/*  being able to store a Pokemon.
    throw it to catch a Pokemon.
    throw it to release it for battle.
    check which Pokemon is in the pokeball.
*/

// isEmpty()
// if pokeball(storage) is empty, return true if empty, and false is full

// throw
// 1. throw method should catch (store) pokemon when ball is empty
// 2. throw method should not catch a second pokemon is ball is full
// 3. if passed no pokemon, method should return stored pokemon//also console log stored pokemon
// 4. if no pokemon is passed, and there is nothing in storage, consolelog "empty ball"
