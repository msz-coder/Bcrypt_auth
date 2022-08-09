const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Username is required"],
  },
  password: {
    type: String,
    required: [true, "Password is required"],
  },
});

userSchema.statics.findAndValidate = async (username, password) => {
  const foundUser = await this.findOne({ username });
  const isValid = await bcrypt.compare(password, foundUser.password);
  return isValid ? foundUser : false;
};

module.exports = mongoose.model("User", userSchema);
