
function errorHandler(error, request, res, next) {
  return res.status(error.status || 500).json({
    error: {
      message: error.message || "oops something went wrong"
    }
  });
}

module.exports = errorHandler;