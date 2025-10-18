//setting up server

const http = require('node:http');

// const server = http.createServer((req, res) => { //executed when client tries to connect
//   const { method, url } = request;
//   if (url === '/' && method === 'GET') {
//     res.setHeader('Content-Type', 'application/json'); //this is the response
//     res.statusCode = 200;
//     res.write(JSON.stringify({ msg: 'Server up and running' }));
//     res.end();
//   }
// }
// ///logic
//   if (url === '/users' && method === 'GET') {
//     // Logic to retrieve users and send the appropriate response
//   }

//   if (url === '/users' && method === 'POST') {
//     let body = '';

//     request.on('data', (packet) => {
//       body += packet.toString();
//     });

//     request.on('end', () => {
//       // The body can be handled here as a complete object
//     });
//   }
// });

const server = http.createServer((req, res) => {
  const { method, url } = req;
  if (url === '/' && method === 'GET') {
    res.setHeader('Content-Type', 'application/json');
    res.statusCode = 200;
    res.write(JSON.stringify({ msg: 'Server up and running' }));
    res.end();
    if (url === '/users' && method === 'POST') {
      let body = '';

      req.on('data', (packet) => {
        body += packet.toString();
      });

      req.on('end', () => {
        res.write(body);
      });
    }
  }
});

server.listen(8000, (err) => {
  if (err) console.log(err);
  else {
    console.log('server listening on port 8000');
  }
});
