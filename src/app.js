const express = require('express');
const path = require('path');
const morgan = require('morgan');
// const consolidate = require('consolidate');
const app = express();


//----Settings
app.set('port', process.env.PORT || 5000);
app.set('views', path.join(__dirname, 'views'));
// app.engine('hbs', consolidate.handlebars);
app.set('view engine', 'ejs');
//--Middlewares
app.use(morgan('dev'));


//--Routes
app.use(require('./routes/index.routes'))

module.exports = app;
