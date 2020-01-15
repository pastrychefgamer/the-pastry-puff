const Foodie = require('../models/feed');

module.exports = {
    index
};

function index(req, res) {
    Foodie.find({}, function(err, foodies) {
        console.log(foodies);
        res.render('foodies/index', { title: 'Breads', foodies,
        user: req.user
        });
    });
}