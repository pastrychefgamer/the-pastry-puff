const Foodie = require('../models/feed');

module.exports = {
    index,
    new: newFoodie,
    create
};

function index(req, res) {
    console.log(req.user);
    Foodie.find({}, function(err, foodies) {
        console.log(foodies);
        res.render('foodies/index', { title: 'Im here', foodies,
        user: req.user
        });
    });
}

function newFoodie(req, res) {
    console.log('req');
    res.render('foodies/new', {title: 'Hello!',
    user: req.user
});
}

function create(req, res) {
    console.log(req.body);
    const foodie = new Foodie(req.body);
    // console.log(foodie);
    foodie.save(function(err) {
        if (err) return res.redirect('/foodies/new');
        console.log(foodie);
        res.redirect('/foodies/:id')
    })
};