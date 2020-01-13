const Pie = require('../models/feed');

module.exports = {
    index
};

function index(req, res) {
    Pie.find({}, function(err, misc) {
        res.render('pies/index', { title: 'Pies',
        user: req.user
        });
    });
}