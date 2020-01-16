const Foodie = require('../models/feed');
const Comment = require('../models/room');

module.exports = {
    index,
    new: newFoodie,
    create,
    // show
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
    foodie.save(function(err) {
        if (err) return res.redirect('/foodies/new');
        console.log(foodie);
        res.redirect('/foodies/:id')
    })
};

// function show(req, res) {
//     Foodie.findById(req.params.id, function(err, foodie) {
//         Comment.find({ foodie: foodie._id }, function (err, comments) {
//             res.render('foodies/show', { title: 'Details', foodie, comments });
//         });
//     });
// }