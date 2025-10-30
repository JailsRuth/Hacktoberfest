function handleRequest(req, res) {
  res.setHeader('Content-Type', 'text/plain');

  if (req.url === '/') {
    res.writeHead(200);
    res.end('Hello, World!\n');
  } else if (req.url === '/about') {
    res.writeHead(200);
    res.end('This is the About page.\n');
  } else if (req.url === '/api/data') {
    // Example of returning JSON data
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ message: 'Hello from the API', time: new Date() }));
  } else {
    res.writeHead(404);
    res.end('404 Not Found\n');
  }
}

module.exports = handleRequest;
