// server.js
const http = require("http");
const handleRequest = require("./controller");
const connectDB = require("./config");
const timestampMiddleware = require("./timestampMiddleware");

const PORT = 3000;
let requestCount = 0; // ✅ New counter

function logRequest(req, res) {
  const start = Date.now();
  res.on("finish", () => {
    const duration = Date.now() - start;
    requestCount++;
    console.log(`${req.method} ${req.url} → ${res.statusCode} [${duration}ms]`);
  });
}

const server = http.createServer((req, res) => {
  timestampMiddleware(req, res, () => {
    logRequest(req, res);
    handleRequest(req, res);
  });
});

connectDB();

server.listen(PORT, "localhost", () => {
  console.log(`🌐 Server running at http://localhost:${PORT}/`);
});

// ✅ Graceful shutdown with request summary
process.on("SIGINT", () => {
  console.log(`\n🛑 Shutting down. Total requests handled: ${requestCount}`);
  server.close(() => {
    console.log("💤 Server closed gracefully.");
    process.exit(0);
  });
});
