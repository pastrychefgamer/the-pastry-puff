const express = require('express');
const router = express.Router();
const passport = require('passport');

router.get('/', function(req, res) {
    res.render('index', {title: 'The Pastry Puff',
        user:req.user
    });
});

router.get('/auth/google', passport.authenticate(
    'google',
    { scope: ['profile', 'email'] }
));

router.get('/oauth2callback', passport.authenticate(
    'google',
    {
        successRedirect : '/rooms',
        failureRedirect : '/'
    }
));

router.get('/logout', function(req, res){
    req.logout();
    res.redirect('/');
});

module.exports = router;