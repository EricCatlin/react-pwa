require('dotenv').config();
// Express App
const http = require('http');
const app = require('../ExpressApp');
const server = http.createServer(app);

// Http Event handlers
const HttpListenError = error => {
  console.error('server_initialization_failure');
  process.exit(1);
  throw error;
};

const HttpListenSuccess = () => {
  const { address, port, family } = server.address();
  console.info(
    'server_initialized',
    `NODE_ENV: ${
      process.env.NODE_ENV
    },  HTTP: { address: ${address}, port: ${port}, family: ${family})}`
  );
};
server.listen(process.env.PORT || 8080);
server.on('error', HttpListenError);
server.on('listening', HttpListenSuccess);
