const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const { json } = require("stream/consumers");
const app = express();
app.set("view engine", "ejs");
try {
  mongoose.connect(
    "mongodb+srv://murali:murali1889@cluster0.ev7pbcx.mongodb.net/?retryWrites=true&w=majority"
  );
} catch (err) {
  console.log(err);
}
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + "/public"));
app.use("/blog", require("./Routes/api"));

app.listen(process.env.port || 3000, function () {
  console.log("listening to port");
});
