const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.set("port", process.env.port || 3001);
app.use(bodyParser.json());

module.exports = app;