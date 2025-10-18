const { owners } = require('../utils/database');
const server = require('../utils/server');
// Do not change anything above this line

function checkServerStatus(callback) {
  server.request('/status', callback);
}

function fetchBannerContent(callback) {
  server.request('/banner', (err, data) => {
    if (err) {
      console.log(err);
    } else {
      data.copyrightYear = 2025;
      callback(err, { ...data });
    }
  });
}

function fetchAllOwners(callback) {
  server.request('/owners', (err, data) => {
    if (err) {
      console.log(err);
    } else {
      data = data.map(x => x.toLowerCase());
      callback(err, data);
    }
  });
}

function fetchCatsByOwner(ownerName, callback) {
  server.request(`/owners/${ownerName}/cats`, (err, data) => {
    if (err) {
      callback(err);
    } else {
      callback(null, data);
    }
  });
}

function fetchCatPics(catNames, callBack) {
  const matchingCatPics = [];
  let counter = 0;
  for (let i = 0; i < catNames.length; i++) {
    server.request(`/pics/${catNames[i]}`, (err, data) => {
      if (err) {
        matchingCatPics.push('placeholder.jpg');
        counter++;
      } else {
        matchingCatPics.push(data);
        counter++;
      }

      if (counter === catNames.length) callBack(null, matchingCatPics);
    });
  }
}

/*
This function should take a callback function as its only argument.
This function should make use of both fetchAllOwners and fetchCatsByOwner in order to retrieve an array of all the cats from the server.
Be mindful of the casing of your requests! fetchCatsByOwner only works with lowercase owner names.
You must finally pass the array of all those adorable cats to the callback function, sorted in alphabetical order.
*/

function fetchAllCats(callback) {
  

  fetchAllOwners(owners, (err, cb) => {
    if (err) {
      return cb(err)
    } else {
      let catsArray = [];
      let counter = 0;
      return cb(null, []);
    }
  })

  for (let i = 0; i < owners.length; i++) {
    const ownerName = owners[i];
    fetchCatsByOwner(ownerName, (err, cats) => {
      if (err) {
        return callback(err);
      } else {
        catsArray.push(cats);
        counter++;

        if (counter === owners.length) {
          callback(null, cats);
        }
      }
    });
  }
}

function fetchOwnersWithCats() {}

function kickLegacyServerUntilItWorks() {}

function buySingleOutfit() {}

// Do not change anything below this line
module.exports = {
  buySingleOutfit,
  checkServerStatus,
  kickLegacyServerUntilItWorks,
  fetchAllCats,
  fetchCatPics,
  fetchAllOwners,
  fetchBannerContent,
  fetchOwnersWithCats,
  fetchCatsByOwner,
  server
};
