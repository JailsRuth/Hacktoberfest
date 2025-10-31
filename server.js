// server.js
const http = require("http");
const handleRequest = require("./controller");
const connectDB = require("./config");

const PORT = 3000;

// Simple request logger
function logRequest(req, res) {
  const start = Date.now();
  res.on("finish", () => {
    const duration = Date.now() - start;
    console.log(`${req.method} ${req.url} → ${res.statusCode} [${duration}ms]`);
  });
}

// Wrap the handler
const server = http.createServer((req, res) => {
  logRequest(req, res);
  handleRequest(req, res);
});

connectDB();

server.listen(PORT, "localhost", () => {
  console.log(`🌐 Server running at http://localhost:${PORT}/`);
});
