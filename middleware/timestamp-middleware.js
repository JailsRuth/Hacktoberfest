// timestampMiddleware.js
function timestampMiddleware(req, res, next) {
  req.requestTime = new Date();
  next();
}

module.exports = timestampMiddleware;
