const Foodie = require('../models/feed');

module.exports = {
    index
};

function index(req, res) {
    Foodie.find({}, function(err, foodies) {
        res.render('foodies/index', { title: 'Im here', foodies,
        user: req.user
        });
    });
}