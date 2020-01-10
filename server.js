const express = require('express');
const logger = require('morgan');
const session = require('express-session');
const passport = require('passport');
const port = 3000; 

require('dotenv').config()

const app = express();

// Connect to DB
require('./config/database');
require('./config/passport');

const indexRouter = require('./routes/index');
const foodieRouter = require('./routes/foodies');

// Configure Express App app.set()
app.set('view engine', 'ejs');

// Mount middleware app.use()
app.use(logger('dev'));
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(session({
    secret: 'FoodiesRock!',
    resave: false,
    saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());

// Mount Routes app.use()
app.use('/', indexRouter);
app.use('/', foodieRouter);

// Tell App to listen
app.listen(port, () => {
    console.log(`Express is listening on port:${port}`);
});