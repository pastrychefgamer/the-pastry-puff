const Room = require('../models/room');

module.exports = {
    create,
    index,
    show,
    addComment,
    delete: deleteComment
};

function create(req, res) {
    Room.create(req.body, function(err, room) {
        res.json(room);
    });
};

function index(req, res) {
    Room.find({}, function(err, rooms) {
        res.render('rooms/index', { title: 'Which room would you like to pick?', rooms,
        user: req.user
        });
    });
};

function show(req, res) {
    Room.findById(req.params.id, function(err, room) {
        res.render('rooms/show', { title: 'Welcome to the room all about', room,
        user: req.user
        });
    });
};

function addComment(req, res) {
    Room.findById(req.params.id, function(err, room) {
        room.comments.push(req.body);
        room.save(function(){
            res.redirect(`/rooms/${room._id}`);
        });
    });
};

function deleteComment(req, res) {
    Room.findById(req.params.roomId, function (err, room) {
        room.comments.remove(req.params.commentId);
        room.save(function(){
            res.redirect(`/rooms/${room._id}`);
        });
    });
};