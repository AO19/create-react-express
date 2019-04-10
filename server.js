const express = require('express');
const routes = require('./routes/index');

// create our Express App
const app = express();

// Takes the raw requests and turns them into usable properties
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// use routes
app.use('/', routes);

module.exports = app;
