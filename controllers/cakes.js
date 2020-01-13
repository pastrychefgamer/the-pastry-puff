const Cake = require('../models/feed');

module.exports = {
    index
};

function index(req, res) {
    Cake.find({}, function(err, cakes) {
        res.render('cakes/index', { title: 'Cakes', cakes,
        user: req.user
        });
    });
}