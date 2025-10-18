function removeSmarterAgents(employees) {
  const moleRegex = /[mM].*o.*l.*e/;

  let filtered = employees.filter((person) => {
    return !(
      moleRegex.test(person.aboutMe) || moleRegex.test(person.interests)
    );
  });
  return filtered;
}

module.exports = removeSmarterAgents;
