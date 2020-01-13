const Cookie = require('../models/feed');

module.exports = {
    index
};

function index(req, res) {
    Cookie.find({}, function(err, cookies) {
        res.render('cookies/index', { title: 'Cookies', cookies,
        user: req.user
        });
    });
}