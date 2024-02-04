var express = require("express");
var router = express.Router();
const jwt = require("jsonwebtoken");
var UserModel = require("../schemas/ValidationSchemas");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});



module.exports = router;
