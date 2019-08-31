const express = require('express');
const bodyParser = require('body-parser');
const router = require('./routes/cardRouter');

const app = express();
app.set("port", process.env.port || 3001);
app.use(bodyParser.json());

router(app);

module.exports = app;