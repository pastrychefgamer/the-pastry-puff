const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const Foodie = require('../models/feed');

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK
    },
    function(accessToken, refreshToken, profile, cb) {
        Foodie.findOne({ 'googleID': profile.id}, function(err, foodie) {
            if (err) return cb(err);
            if (foodie) {
                return cb(null, foodie);
            } else {
                const newFoodie = new Foodie({
                    name: profile.displayName,
                    email: profile.emails[0].value,
                    googleId: profile.id
                });
                newFoodie.save(function(err) {
                    if (err) return cb(err);
                    return cb(null, newFoodie);
                });
            }
        });
    }
));

passport.serializeUser(function(foodie, done) {
    done(null, foodie.id);
});

passport.deserializeUser(function(id, done) {
    Foodie.findById(id, function(err, foodie) {
        done(err, foodie);
    });
});