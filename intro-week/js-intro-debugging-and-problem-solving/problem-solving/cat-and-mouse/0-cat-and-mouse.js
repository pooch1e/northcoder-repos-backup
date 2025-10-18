const { check, runTest, skipTest } = require("../../test-api/index.js");

function calculateJump(locations, jumpLength) {
/*
You will be given an array containing string representations of the locations of a cat and a mouse. 
You will also be given a positive integer which represents how far the cat can jump.

Your task is to calculate if the cat can jump far enough to catch the mouse. Each space "x" in the array expends 1 from the cat's movement.
It does not matter if the cat is before or after the mouse in the array.
*/

// work out if jumpLength is greater than distance between cat and mouse

let length = locations.length; // total length
let catLocation = locations.indexOf('cat'); // index of cat
let mouseLocation = locations.indexOf('mouse'); // index of mouse
console.log(catLocation)
console.log(mouseLocation)

let distance = Math.abs(mouseLocation - catLocation);
if (jumpLength < distance) {
  return false
} else {
  return true;
}

}

runTest(
  "cat catches the mouse when it's closer than the jump length",
  function () {
    check(calculateJump(["cat", "mouse"], 5)).isEqualTo(true);
    check(calculateJump(["cat", "x", "x", "mouse"], 3)).isEqualTo(true);
    check(calculateJump(["x", "mouse", "x", "x", "cat"], 4)).isEqualTo(true);
  }
);

runTest(
  "cat fails to catch the mouse when jump length is smaller than distance",
  function () {
    check(calculateJump(["cat", "x", "mouse"], 1)).isEqualTo(false);
    check(calculateJump(["x", "cat", "x", "x", "mouse"], 2)).isEqualTo(false);
    check(calculateJump(["mouse", "x", "x", "x", "x", "cat"], 3)).isEqualTo(
      false
    );
  }
);
