const app = require('express').Router();

const client = require('./clientApp');
const api = require('./api');

app.use('/api', api);

// Serves frontend build folder
app.use('/', client);

module.exports = app;
