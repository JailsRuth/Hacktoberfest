const http = require('http');
const handleRequest = require('./controller'); // Import the controller

const PORT = 3000;

// Create and start the server
const server = http.createServer(handleRequest);

server.listen(PORT, 'localhost', () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
