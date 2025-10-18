function makeNameTags(guests) {
  const copyOfGuests = structuredClone(guests);
  return copyOfGuests.map((person) => {
    person.nameTag = `${person.title} ${person.forename} ${person.surname}, ${person.company}`;
    return person;
  });
}

module.exports = makeNameTags;
