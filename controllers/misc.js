const Misc = require('../models/feed');

module.exports = {
    index
};

function index(req, res) {
    Misc.find({}, function(err, misc) {
        res.render('misc/index', { title: 'All Others', misc,
        user: req.user
        });
    });
}