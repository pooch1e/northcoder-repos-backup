const fetchCatsByOwner = require('./1-fetch-cats-by-owner');
const fetchAllOwners = require('./2-fetch-all-owners');

const fetchAllCats = async () => {
  try {
    const ownersArray = await fetchAllOwners();
    const catArray = await Promise.all(
      ownersArray.map((owner) => fetchCatsByOwner(owner))
    );
    return catArray.flat().sort();
  } catch (err) {
    return err;
  }
};

module.exports = fetchAllCats;
