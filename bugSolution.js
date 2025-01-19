const http = require('http');

const requestListener = (request, response) => {
  response.writeHead(200);
  response.end('Hello, World!');
};

function startServer(port) {
  const server = http.createServer(requestListener);

  server.on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
      console.error(`Port ${port} is already in use. Retrying in 1 second...`);
      setTimeout(() => startServer(port), 1000);
    } else {
      console.error(`An error occurred: ${err.message}`);
    }
  });

  server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });
}

startServer(8080);