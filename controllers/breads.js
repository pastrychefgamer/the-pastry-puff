const Bread = require('../models/feed');

module.exports = {
    index
};

function index(req, res) {
    Bread.find({}, function(err, breads) {
        res.render('breads/index', { title: 'Breads', breads,
        user: req.user
        });
    });
}