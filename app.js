const express = require('express');
const routes = require('./routes/index');

const app = express();
app.set('view engine', 'ejs')
app.use('/', routes)
app.use('/images', express.static('assets/images'))
app.use('/public', express.static('node_modules/material-design-lite'))

module.exports = app;