const express = require('express');
const bodyParser = require('body-parser');
const router = require('./routes/cardRouter');
const database = require('./database/database');
const datasync = require('./database/sync');
const modelsolicitation = require('./models/modelSolicitation');
const path = require('path')

const app = express();
app.set("port", process.env.PORT || 3002);
app.use(bodyParser.json());

// init router
router(app);
// init models database
app.use(express.static(path.join(__dirname, './client/build/')));
app.set("sequelize", database());
app.set("modelSolicitation", modelsolicitation(app.get("sequelize")));

// sync database 
datasync(app.get("sequelize"));

module.exports = app;