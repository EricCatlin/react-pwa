const proxy = require('http-proxy-middleware');

const getProxyConfig = {
  '/api': {
    target: `http://localhost:${process.env.API_PORT || 3001}`
  }
};

module.exports = app => {
  Object.keys(getProxyConfig).forEach(key => {
    app.use(proxy(key, getProxyConfig[key]));
  });
};
