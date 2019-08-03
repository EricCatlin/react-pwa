const compression = require('compression');
const app = require('express').Router();
app.use(compression());

app.get('/ping', (req, res, next) => {
  return res.send('OK');
});

module.exports = app;
