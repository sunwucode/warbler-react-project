const mongoose = require("mongoose");
mongoose.set("debug", true);
mongoose.Promise = Promise;
mongoose.connect("mongode://localhost/warbler", {
  keepAlive: true,
  useMongoClient: true
});

module.exports.User = require("./user");