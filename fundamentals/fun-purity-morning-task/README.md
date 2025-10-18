# Purity Morning Task

## Objective

Today's morning task is focussed on writing tests that ensure purity. More information on purity can be found in the notes on [Functional Programming](https://l2c.northcoders.com/courses/sd-notes/fundamentals#sectionId=functional-programming,step=intro).

Oh no! There's been a Zombie outbreak amongst the Northcoders staff! But you've got an NC help request pending, and you're nothing if not polite, so you want to make sure you're addressing the team with their new, Zombified names.

The function (`zombifyTutors`) should take an array of tutor names, and translate these into their Zombie alternatives. Fortunately, translation is pretty straight forward: if the tutor's name appears at an index in the array that is even (including 0), their Zombie name is just their original name with 'uugghh' added to the _end_. Otherwise, if the index is odd, the Zombie name is the original name with 'mmuuhh' added to the _start_. Of course, capitalisation has been taken into account, because Zombies love grammar.

The above has already been achieved, but Zombies love mutation and have forgotten how to pass the tests that check for purity. This is where you come in.

## Intructions

1. In the `morning-task.js` file you will find a (somewhat) complete function. Have a read of this and make sense of what each line of code is doing.
2. In the `__tests__/zombieNamesGenerator.test.js` file you will find the supporting tests.
3. Jest has been set up for you. If you run `npm test`, you will see that not all of these tests are passing. 
4. Amend the code in `morning-task.js` to make the remaining tests pass. 
5. Make sure you see each test pass before moving on to pass the next one.

**Note:** There is no need to amend the code in the test file.

