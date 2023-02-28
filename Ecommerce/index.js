const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const dotenv = require('dotenv');
dotenv.config();
const app = express();
app.set("view engine", "ejs");
const db = async()=>{
  try {
    mongoose.connect(process.env.DATABASE_LINK);
    
  } catch (err) {
    console.log("fucked up");
  }
}
db();

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + "/public"));
app.use("/", require("./Routes/api"));

app.listen(process.env.port || 3000, function () {
  console.log("listening to port");
});
