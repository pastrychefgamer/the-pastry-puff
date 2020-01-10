const Foodie = require('../models/foodie');

module.exports = {
    index,
    show,
    addPost,
    delPost
};

function index(req, res) {
    Foodie.find({}, function(err, foodies) {
        res.render('foodies/index', { foodies,
        user: req.user
        });
    });
}

function show(req, res) {
    console.log("params:", req.params.id)
    res.render('foodies/show', {
        foodie: Foodie.getOne(req.params.id),
        foodiesNum: parseInt(req.params.id) + 1
    });
};

function addPost(req, res) {
    req.user.posts.push(req.body);
    req.user.save(function(err) {
        res.redirect('/foodies');
    });
}

function delPost(req, res) {
    Foodie.deleteOne(req.params.id);
    res.redirect('/foodies');
}