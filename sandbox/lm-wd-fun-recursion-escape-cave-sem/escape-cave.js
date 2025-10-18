function escapeCaveRecursive(caveSystem) {
  function findExit(route, path = [], index = 0) {
    if (route === "exit") {
      return path;
    }

    if (Array.isArray(route) && index < route.length) {
      const result = findExit(route[index], [...path, index]);
      if (result) return result;
      return findExit(route, path, index + 1);
    }

    return null;
  }

  return findExit(caveSystem);
}

function escapeCaveIterative(caveSystem) {}

// switch out escapeCaveRecursive for escapeCaveIterative once you're ready to test it
module.exports = { escapeCave: escapeCaveRecursive };
