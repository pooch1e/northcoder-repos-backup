// Please do not change the name of this function
const csvfunc = require('csv-parser');
const fs = require('fs');
const path = require('path');

const csvParser = async (data) => {
  const results = [];
  const filePath = path.join(__dirname, './data/cities.csv');
  try {
    return fs.createReadStream(filePath)
      .pipe(csvfunc())
      .on('data', (data) => {
        return results.push(data);
      })
      .on('end', () => {
        console.log(results);
      });
  } catch (err) {
    console.log(err)
  }
};

module.exports = { csvParser };
