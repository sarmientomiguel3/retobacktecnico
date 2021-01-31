const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(bodyParser.json());

//const db = require(__dirname+'/models');

require(__dirname+'/routes')(app);


module.exports = app;

