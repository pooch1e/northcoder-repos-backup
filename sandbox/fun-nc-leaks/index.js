//  https://nc-leaks.herokuapp.com

const axios = require('axios');
const https = require('https');
const fs = require('fs/promises');
const getInstructions = async () => {
  try {
    const config = {
      method: 'get',
      url: 'https://nc-leaks.herokuapp.com/api/confidential',
    };
    const data = await axios(config);

    const dataString = JSON.stringify(data.data, null, 2);

    await fs.writeFile('instructions.md', dataString);
  } catch (err) {
    throw err;
  }
};
getInstructions();
