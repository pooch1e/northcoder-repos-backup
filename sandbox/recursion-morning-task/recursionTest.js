function findTarget(target, solution) {
  //solution === 'exit'
  for (const element of target) {
    if (element === solution) {
      return solution;
    } else {
      const result = findTarget(element, solution); //element will be array index?
      if (result !== undefined) {
        //found the result
        return solution;
      }
    }
  }
  return undefined;
}

//rewrite this to show the current element? WRONG
function findTargetWithNumberOfSteps(target, solution) {
  for (const element of target) {
    if (element === solution) {
      const index = element.indexOf(element);
      return solution, `index was ${index}`;
    } else {
      const result = findTargetWithNumberOfSteps(element, solution);
      if (result !== undefined) {
        const index = element.indexOf(element);
        return solution, index;
      }
    }
  }
  return undefined;
}

const testArray = [
  [[], [], [], [], []],
  [[], [[], [], ['exit'], []], []],
  [],
  [[], [], [], []],
];

console.log(findTargetWithNumberOfSteps(testArray, 'exit'));
