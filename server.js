// server.js
const http = require("http");
const handleRequest = require("./controller");
const connectDB = require("./config"); // Connect to DB

const PORT = 3000;

connectDB(); // Connect before starting the server

const server = http.createServer(handleRequest);

server.listen(PORT, "localhost", () => {
  console.log(`🚀 Server running at http://localhost:${PORT}/`);
});

// Graceful shutdown
process.on("SIGINT", () => {
  console.log("\n🛑 Shutting down gracefully...");
  server.close(() => {
    console.log("💤 Server closed.");
    process.exit(0);
  });
});
