const { check, runTest, skipTest } = require("../test-api/index.js");

// Exercise 11
function checkIfPropertyExists(obj, key) {
  // This function should take an object and a key as its arguments and return true if the input object contains the provided key and false otherwise
  return obj.hasOwnProperty(key) ? true : false;
}

runTest(
  "checkIfPropertyExists() checks if a property exists inside an object",
  function () {
    check(checkIfPropertyExists({ name: "Jonny", age: 32 }, "name")).isEqualTo(
      true
    );
    check(checkIfPropertyExists({ name: "Jonny", age: 32 }, "age")).isEqualTo(
      true
    );
    check(checkIfPropertyExists({ name: "Jonny", age: 32 }, "pets")).isEqualTo(
      false
    );
  }
);

// Exercise 12
function createObject(arr) {
  // This function should take an array consisting of two elements representing a key/ value pair as its argument and return an object with a single property based on the input
  let obj = {}
  let key = arr[0];
  let val = arr[1];
  obj[key] = val;
  return obj

  
}

runTest(
  "createObject() creates a new object from a key value pair",
  function () {
    check(createObject(["name", "Mezz"])).isEqualTo({ name: "Mezz" });
    check(createObject(["fruit", "apple"])).isEqualTo({ fruit: "apple" });
    check(createObject(["language", "haskell"])).isEqualTo({
      language: "haskell",
    });
  }
);

// Exercise 13
function getFirstNItems(arr, n) {
  // This function should take two arguments, an array and a number 'n', and return a new array containing the first 'n' items of the given array
  return arr.slice(0, n);
}

runTest("getFirstNItems() returns the first n items in an array", function () {
  check(getFirstNItems(["a", "b", "c", "d"], 2)).isEqualTo(["a", "b"]);
  check(getFirstNItems(["apple", "banana", "pear", "kiwi"], 0)).isEqualTo([]);
  check(getFirstNItems(["apple", "banana", "pear", "kiwi"], 3)).isEqualTo([
    "apple",
    "banana",
    "pear",
  ]);
});

// Exercise 14
function createArrow(str) {
  // This function should take a string representing a direction ("left", "right", "up" or "down") as its argument and return the corresponding arrow ("←", "→", "↑", "↓")
  // You don't need to utilise an object here, but try to consider how you might do so.
  let direction = {
    'left' : "←",
    'right' : "→",
    'up' : "↑",
    'down' : "↓",
  }
  return direction[str];
}

runTest(
  "createArrow() will return an arrow pointing in the right direction",
  function () {
    check(createArrow("left")).isEqualTo("←");
    check(createArrow("right")).isEqualTo("→");
    check(createArrow("up")).isEqualTo("↑");
    check(createArrow("down")).isEqualTo("↓");
  }
);

// Exercise 15
function moveItemToEnd(arr, ind) {
  // This function should take two arguments, an array and an index value, and should return a new array. In the new array, the item that was previously at the given index should have been moved to the end of the array
  // console.log(arr);
  let arr1 = arr.slice();
  let item = arr1.splice(ind, 1);
  // console.log(item);
  return arr1.concat(item);

}

runTest(
  "moveItemToEnd() removes an item at a given index and adds it to the end of the array",
  function () {
    check(moveItemToEnd(["a", "b", "c", "d"], 0)).isEqualTo([
      "b",
      "c",
      "d",
      "a",
    ]);
    check(moveItemToEnd(["a", "b", "c", "d"], 2)).isEqualTo([
      "a",
      "b",
      "d",
      "c",
    ]);
    check(moveItemToEnd(["a", "b", "c", "d"], 1)).isEqualTo([
      "a",
      "c",
      "d",
      "b",
    ]);
  }
);

// Exercise 16
function updateUserAge(obj) {
  /*
  The user of our website is having a birthday!

  This function should take an object representing a user's account information

  A user object will look something like:
  {
    admin: false,
    username: "xoxoTuftyoxo",
    personalDetails: {
      name: "Tufty",
      age: 2,
      favFood: "gooseberry fool"
    }
  }
  The user's age should be increased by 1 to reflect their recent birthday

  NOTE: This function does NOT need to return anything!
  */

  obj['personalDetails'].age += 1;
}

runTest("updateUserAge() updates the user's age", function () {
  const user1 = {
    admin: false,
    username: "xoxoTuftyoxo",
    personalDetails: {
      name: "Tufty",
      age: 2,
      favFood: "gooseberry fool",
    },
  };

  updateUserAge(user1);

  check(user1).isEqualTo({
    admin: false,
    username: "xoxoTuftyoxo",
    personalDetails: {
      name: "Tufty",
      age: 3,
      favFood: "gooseberry fool",
    },
  });

  const user2 = {
    admin: true,
    username: "brum4life",
    personalDetails: {
      name: "Poonam",
      age: 27,
      favFood: "caviar",
    },
  };

  updateUserAge(user2);

  check(user2).isEqualTo({
    admin: true,
    username: "brum4life",
    personalDetails: {
      name: "Poonam",
      age: 28,
      favFood: "caviar",
    },
  });
});

// Exercise 17
function checkInfinitive(str) {
  // This function should take a string representing a French word as an argument, and return true if it is an infinitive verb, and false otherwise
  // A French infinitive verb is a word that ends with either "re", "ir" or "er"
  let regex = /(er|ir|re)$/
  return regex.test(str);
}

runTest(
  "checkInfinitive() checks if a french word is an infinitive",
  function () {
    check(checkInfinitive("manger")).isEqualTo(true);
    check(checkInfinitive("faire")).isEqualTo(true);
    check(checkInfinitive("aller")).isEqualTo(true);
    check(checkInfinitive("finir")).isEqualTo(true);
    check(checkInfinitive("rendre")).isEqualTo(true);
    check(checkInfinitive("savoir")).isEqualTo(true);

    check(checkInfinitive("suis")).isEqualTo(false);
    check(checkInfinitive("ai")).isEqualTo(false);
    check(checkInfinitive("ete")).isEqualTo(false);
    check(checkInfinitive("sais")).isEqualTo(false);
    check(checkInfinitive("allons")).isEqualTo(false);
  }
);

// Exercise 18
function collectPlurals(arr) {
  // This function should take an array of strings as an argument and return an array containing all strings ending with an 's' from the input (retaining the order)
  let endsWith = /s$/
  let arrMap = arr.filter((el) => el.match(endsWith));
  // console.log(arrMap);
  return arrMap;
}

runTest(
  "collectPlurals() can collect all the strings ending in an s",
  function () {
    check(
      collectPlurals(["dogs", "cat", "apples", "kittens", "kiwi"])
    ).isEqualTo(["dogs", "apples", "kittens"]);

    check(
      collectPlurals([
        "abcs",
        "humans",
        "thoughts",
        "cloud",
        "computer",
        "cups",
      ])
    ).isEqualTo(["abcs", "humans", "thoughts", "cups"]);
  }
);

// Exercise 19
function makeAllAdmins(user) {
  /*
  This function should take an array of 'user' objects as an argument
  Each user will be an object with a 'name' and 'admin' property
  The 'admin' property will be a boolean value
  You should return an array of user objects each with the 'admin' property set to true
  */
  for (let key in user) {
    // console.log(user[key]);
    user[key].admin = true;

  }
  return user;
}

runTest(
  "makeAllAdmins() updates the admin property for each user",
  function () {
    check(
      makeAllAdmins([
        { name: "Barry", admin: false },
        { name: "Sandeep", admin: true },
        { name: "Kavita", admin: false },
      ])
    ).isEqualTo([
      { name: "Barry", admin: true },
      { name: "Sandeep", admin: true },
      { name: "Kavita", admin: true },
    ]);
  }
);

// Mark your progress on the Learn 2 Code platform before moving on to the next set of challenges!
