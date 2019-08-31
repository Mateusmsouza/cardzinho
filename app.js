const express = require('express');
const bodyParser = require('body-parser');
const router = require('./routes/cardRouter');
const database = require('./database/database');
const datasync = require('./database/sync');
const modeluser = require('./models/modelUser');
const modelsolicitation = require('./models/modelSolicitation');

const app = express();
app.set("port", process.env.port || 3001);
app.use(bodyParser.json());

// init router
router(app);
// init models database
app.set("sequelize", database());
app.set("modelUser", modeluser(app.get("sequelize")));
app.set("modelsolicitation", modelsolicitation(app.get("sequelize")));

// associations
app.get("modelUser").hasOne(app.get("modelsolicitation"), {as: 'Association'});
app.get("modelsolicitation").belongsTo(app.get("modelUser"), {as: 'association'});
// sync database
datasync(app.get("sequelize"));

module.exports = app;