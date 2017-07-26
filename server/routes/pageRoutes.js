
const express = require("express");
const pageRoutes = express.Router();
const config = require('../configure/config');

const Slack = require('node-slack');
const slack = new Slack(config.url);

pageRoutes.post("/sayHello", function(req, res){
  slack.send({
    text: req.body.message,
    channel: '#portfolio',
    username: req.body.name,
    attachments: [
      {
        title: 'Phone Number',
        text: req.body.phone
      },
      {
        title: 'Email Address',
        text: req.body.email
      }
    ]
  });
  res.json({success: true});
});

// pageRoutes.param("section", function(req, res, next, id){
//   req.page = {};
//   req.page[id] = config[id];
//   if(!req.page[id]){
//     var err = new Error("Not Found");
//     err.status = 404;
//     return next(err);
//   }
//   next();
// });
//
// pageRoutes.get("/:section", function(req, res){
//   res.json(req.page);
// });

module.exports = pageRoutes;
