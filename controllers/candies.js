const Candy = require('../models/feed');

module.exports = {
    index
};

function index(req, res) {
    Candy.find({}, function(err, candies) {
        res.render('candies/index', { title: 'Candies', candies,
        user: req.user
        });
    });
}