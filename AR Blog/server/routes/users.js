var express = require("express");
var router = express.Router();
const querySql = require("../db/index");
const { PWD_SALT } = require("../utils/constant");
const { md5 } = require("../utils/index");

/* register api */
router.post("/register", async (req, res, next) => {
  let { username, password, nickname } = req.body;
  try {
    let user = await querySql("select * from user where username = ?", [
      username,
    ]);
    if (!user || user.length === 0) {
      password = md5(`${password}${PWD_SALT}`);
      await querySql(
        "insert into user(username,password,nickname) value(?,?,?)",
        [username, password, nickname]
      );
      res.send({ code: 0, msg: "register success" });
    } else {
      res.send({ code: -1, msg: "The username already exists" });
    }
  } catch (e) {
    console.log(e);
    next(e);
  }
});

module.exports = router;
