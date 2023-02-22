const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();
const os = require('node:os');
console.log("this",os);
async function connect() {
  try {
    mongoose.connect(
      "mongodb+srv://murali:pNuDdMJESgA276Tr@cluster0.ev7pbcx.mongodb.net/?retryWrites=true&w=majority"
    );
    console.log("connected to mongodb");
  } catch (err) {
    console.log("failed to connect", err);
  }
}
connect();
app.use(express.static("public"));
app.use(bodyParser.json());
app.use("/api", require("./routes/api"));
app.use(function (err, req, res, next) {
  console.log(err);
  res.status(422).send({ error: err.message });
});
app.listen(process.env.port || 3000, function () {
  console.log("now listening for requests");
});
