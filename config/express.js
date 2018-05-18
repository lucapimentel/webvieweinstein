const express = require("express");
const parser = require("body-parser");
//const facebook = require('./facebook');
const router = require("./router");
const path = require('path');

let app = express();

app.use(express.static('public'));
//app.use('*', facebook.setupIFrame);
app.use("/", router);
app.set("view engine", "ejs");

module.exports = app;
