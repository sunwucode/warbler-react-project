require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const errorHandler = require("./handlers/error");
const authRoutes = require("./routes/auth");

const PORT = 8080;

app.use(cors());
app.use(bodyParser.json());

app.use("/api/auth", authRoutes);
//ALL my routes here !!!//

app.use(function (req, res, next) {
  let err = new Error("not found");
  err.status = 404;
  next(err);
});




app.use(errorHandler);

app.listen(PORT, function(){
  console.log(`Server is running on port ${PORT}`);
});