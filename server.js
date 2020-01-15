const express = require('express');
const logger = require('morgan');
const session = require('express-session');
const passport = require('passport');
const port = process.env.PORT || 3000; 

require('dotenv').config()

const app = express();

// Connect to DB
require('./config/database');
require('./config/passport');

const indexRouter = require('./routes/index');
const foodieRouter = require('./routes/foodies');
const breadRouter = require('./routes/breads');
const cakeRouter = require('./routes/cakes')
const cookieRouter = require('./routes/cookies')
const candyRouter = require('./routes/candies')
const pieRouter = require('./routes/pies')
const miscRouter = require('./routes/misc')

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
app.use('/', breadRouter);
app.use('/', cakeRouter);
app.use('/', cookieRouter);
app.use('/', candyRouter);
app.use('/', pieRouter);
app.use('/', miscRouter);

// Tell App to listen
app.listen(port, () => {
    console.log(`Express is listening on port:${port}`);
});