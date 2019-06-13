const bodyParser = require('body-parser');
const express = require('express');
const cors = require('cors');
const routes = require('./routes/index');
const server = express();


server.use(bodyParser.json());
server.use(cors());

routes(server);

module.exports = server;


