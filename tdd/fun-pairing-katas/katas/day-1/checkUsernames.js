function checkUsernames(usernameArray) {
  let usernames = [...usernameArray];
  const characterRegex = /^[a-z0-9]+$/;

  for (let i = 0; i < usernames.length; i++) {
    const element = usernames[i];
    if (
      element.length > 5 &&
      element.length < 20 &&
      characterRegex.test(element)
    ) {
      return true;
    }
  }
  return false;
}

module.exports = checkUsernames;
