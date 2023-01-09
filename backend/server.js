const express = require("express");
const cors = require("cors");
const routes= require("./routes/server.routes")
const connectToMongoDb= require("./database/connectToMongoDb")
require("dotenv").config();
const app = express();

connectToMongoDb()

app.use(cors());
app.use(express.json());
app.use(routes);

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log("Listing on port: " + port);
});