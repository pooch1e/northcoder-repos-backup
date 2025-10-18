function removeAgents(employees) {
  const copyOfEmployees = structuredClone(employees);

  return copyOfEmployees.filter((employee) => employee.profession !== 'mole');
}

module.exports = removeAgents;
