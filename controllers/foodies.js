const Foodie = require('../models/foodie');

module.exports = {
    index
};

function index(req, res) {
    Foodie.find({}, function(err, foodies) {
        res.render('foodies/index', { foodies,
        user: req.user
        });
    });
}