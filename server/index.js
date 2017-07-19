
const express = require('express');
const app = express();
const refreshRoutes = express.Router();
const pageRoutes = require("./routes/pageRoutes");

const path = require('path');
const jsonParser = require("body-parser").json;
const logger = require("morgan");
//const config = require('./configure/config');

const PORT = process.env.PORT || 5000;

//======CONFIGURATION=========================================
app.use(jsonParser());
app.use(logger("dev"));

// Priority serve any static files.
refreshRoutes.use(express.static(path.resolve(__dirname, '../react-ui/build')));

// All remaining requests return the React app, so it can handle routing.
refreshRoutes.get('*', function(request, response) {
  response.sendFile(path.resolve(__dirname, '../react-ui/build', 'index.html'));
});

//========ROUTES===========================================================
app.use('/page', pageRoutes);
app.use(refreshRoutes);


//======START SERVER====================================================
app.listen(PORT, function () {
  console.log(`Listening on port ${PORT}`);
});
