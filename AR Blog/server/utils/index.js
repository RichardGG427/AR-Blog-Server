const crypto = require("crypto");
function md5(s) {
  //parameter should be string
  return crypto.createHash("md5").update(String(s)).digest("hex");
}

module.exports = {
  md5,
};
