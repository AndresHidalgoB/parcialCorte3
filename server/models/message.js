const { Schema, model } = require("mongoose");

var MessageSchema = new Schema({
  id: Number,
});

module.exports = model("Message", MessageSchema);
