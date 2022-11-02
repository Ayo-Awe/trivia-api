const mongoose = require("mongoose");
const lodash = require("lodash");
const { Schema } = mongoose;

const CategorySchema = new Schema(
  {
    name: {
      type: String,
      unique: true,
      required: true,
    },
  },
  { timestamps: true }
);

// Capitalize name before saving name
CategorySchema.pre("save", function (next) {
  this.name = lodash.capitalize(this.name);
  next();
});

module.exports = mongoose.model("Category", CategorySchema);
