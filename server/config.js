const express = require("express");
const bodyParser = require("body-parser");
const compression = require('compression');
const route = require('../server/routes.js')
const db = require('../database/mysql.js')
const app = express();

//middleware
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + "/../client/dist"));

//HTTP Requests go here
app.get("/home", route.getStyles)

app.get("/home-images", route.imagesByStyle)

app.post("/book", route.getApp)

module.exports = app;