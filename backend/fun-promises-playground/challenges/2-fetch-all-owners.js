const request = require('../utils/request');

const fetchAllOwners = async () => {
  try {
    const getOwner = await request('/owners');
    return getOwner.map((name) => name.toLowerCase());
  } catch (err) {
    return err;
  }
};

module.exports = fetchAllOwners;
