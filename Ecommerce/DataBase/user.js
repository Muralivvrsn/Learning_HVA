const mongoose = require("mongoose");
const schema = mongoose.Schema;
const user = new schema({
  fname: {
    type: String,
    required: true,
  },
  lname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  number: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    
  }
});
const userSchema = mongoose.model("UserDetails", user);

module.exports = userSchema;
