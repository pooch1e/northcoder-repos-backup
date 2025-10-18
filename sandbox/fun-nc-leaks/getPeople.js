const axios = require('axios');
const https = require('https');
const fs = require('fs/promises');

const getPeople = async () => {
  const options = {
    hostname: 'nc-leaks.herokuapp.com',
    port: 443,
    path: '/api/people',
    method: 'GET',
  };
  const ncWorkers = [];
  const req = https.request(options, (res) => {
    let data = '';

    res.on('data', (chunk) => {
      data += chunk;
    });
    res.on('end', async () => {
      const parsed = await JSON.parse(data);

      // console.log(stringify);
      const people = parsed.people;
      people.forEach((person) => {
        if (person.job.workplace === 'northcoders') {
          ncWorkers.push(person);
        }
      });
      await fs.writeFile(
        'northcoders.json',
        JSON.stringify(ncWorkers, null, 2)
      );
    });
  });
  req.on('error', (e) => {
    console.log(e);
  });
  req.end();
};
getPeople();
