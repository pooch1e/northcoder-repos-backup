const request = require('../utils/request');

const fetchCatsByOwner = async (owner) => {
  try {
    const arrayOfCats = await request(`/owners/${owner}/cats`);
    return arrayOfCats;
  } catch (err) {
    return err;
  }
};



module.exports = fetchCatsByOwner;
