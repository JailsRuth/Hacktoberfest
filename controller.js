// handleRequest.js
function handleRequest(req, res) {
  // Default response type
  res.setHeader("Content-Type", "text/plain");

  // Routing logic
  switch (req.url) {
    // Root route
    case "/":
      res.writeHead(200);
      res.end("Hello, World!\n");
      break;

    // About page
    case "/about":
      res.writeHead(200);
      res.end("This is the About page.\n");
      break;

    // Contact page
    case "/contact":
      res.writeHead(200);
      res.end("You can reach us at contact@example.com\n");
      break;

    // Help page
    case "/help":
      res.writeHead(200);
      res.end("Help Page: Visit /api/data for API examples.\n");
      break;

    // API: JSON data
    case "/api/data":
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(
        JSON.stringify({
          message: "Hello from the API",
          time: new Date(),
        })
      );
      break;

    // API: Users list
    case "/api/users":
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(
        JSON.stringify({
          users: [
            { id: 1, name: "Balan", email: "Balan@bvr.com" },
            { id: 2, name: "Vijay", email: "Vijay@bvr.com" },
            { id: 3, name: "Ruth", email: "Ruth@bvr.com" },
          ],
        })
      );
      break;
    case "/health":
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ status: "ok", uptime: process.uptime() }));
      return;
    //New route: API version info
    case "/api/version":
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(
        JSON.stringify({
          version: "1.0.0",
          name: "MyApp",
          environment: process.env.NODE_ENV || "development",
        })
      );
      break;
    case "/api/random":
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(
        JSON.stringify({
          number: Math.floor(Math.random() * 100),
          generatedAt: new Date(),
        })
      );
      break;

    // 404 handler
    default:
      res.writeHead(404);
      res.end("404 Not Found\n");
      break;
  }
}

module.exports = handleRequest;
