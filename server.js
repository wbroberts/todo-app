const http = require('http');
const c = require('ansi-colors');
require('dotenv').config();
require('./db/mongoose');

const app = require('./app');

const port = process.env.PORT || 5000;

const server = http.createServer(app);

server.listen(port, () => {
  console.log(`Server running on port ${c.cyan(port)}`);
});
