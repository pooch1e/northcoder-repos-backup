// Takes an array of numbers and returns a new array with the last number removed.

function removeLastNumber(numbers) {
  return numbers.slice(0, -1);
}

function raiseSalaries(employees, percentageIncrease) {
  const percentage = percentageIncrease / 100;
  return employees.map((employee) => {
    employee.salary = employee.salary + employee.salary * percentage;
    return employee;
  });
}

function updateTasks(person, ...newTasks) {
  if (Object.keys(person).length === 0) {
    return {};
  }
  person.tasks = person.tasks.concat([...newTasks]);
  return person;
}

function cloneObject(target, source) {
  console.log(target);
  const newTarget = { ...target };
  return Object.assign(newTarget, source);
}

module.exports = { removeLastNumber, raiseSalaries, updateTasks, cloneObject };
