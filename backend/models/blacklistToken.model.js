const mongoose = require("mongoose");
const schema = mongoose.Schema;
const blacklistTokenSchema = new schema({
  token: {
    type: String,
    required: true,
    unique: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    expires: 86400, // 24 hrs
  },
});
module.exports = mongoose.model("BlacklistToken", blacklistTokenSchema);
