// mongoose is a mongodb library that help to create models easyer and faster
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const designSchema = new Schema({
  name: { type: String, maxlength: 50, required: true },
  courses: { type: String, maxlength: 4, required: true },
  wales: { type: String, maxlength: 4, required: true },
  lastUpdated: {
    type: Date,
    require: true,
    default: Date.now(),
  },
  by: { type: String, maxlength: 50, required: true },
});

const Design = mongoose.model("Design", designSchema);
module.exports = Design;
