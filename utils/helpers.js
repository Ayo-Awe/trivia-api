function handleAsync(routeHandler) {
  return async (req, res, next) => {
    try {
      await routeHandler(req, res, next);
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  };
}

module.exports = { handleAsync };
