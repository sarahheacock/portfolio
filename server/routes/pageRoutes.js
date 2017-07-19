
const nodemailer = require('nodemailer');
const express = require("express");

const pageRoutes = express.Router();
const config = require('../configure/config');


pageRoutes.param("section", function(req, res, next, id){
  req.page = {};
  req.page[id] = config[id];
  if(!req.page[id]){
    var err = new Error("Not Found");
    err.status = 404;
    return next(err);
  }
  next();
});

pageRoutes.get("/:section", function(req, res){
  res.json(req.page);
});

module.exports = pageRoutes;
