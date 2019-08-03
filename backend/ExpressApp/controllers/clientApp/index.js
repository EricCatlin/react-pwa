var compression = require('compression');
const express = require('express');
const path = require('path');
const app = express.Router();
app.use(compression());

// Serves app files from /
app.use(express.static(__dirname + './../../../../frontend/build'));
app.get('*', (req, res) => {
  res.sendFile(
    path.resolve(__dirname + '../../../../../frontend/build/index.html')
  );
});
module.exports = app;
