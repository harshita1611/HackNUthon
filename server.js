const express = require("express");
const cors = require("cors");
const entry = require("./entry")
const api = require("./api")
const bodyParser = require("body-parser");



const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use("/",entry)
app.use("/api",api)

app.listen(3000, () => {
  console.log("Server listening on port 3000.");
});
