module.exports = {
    index
};

function index(req, res) {
    console.log(req.user);
    res.render('index', {title: 'Im here',
        user: req.user
    });
}