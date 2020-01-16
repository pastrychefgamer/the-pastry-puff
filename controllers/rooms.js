const Room = require('../models/room');

module.exports = {
    create,
    index,
    show,
    addComment
};

function create(req, res) {
    Room.create(req.body, function(err, room) {
        res.json(room);
    });
};

function index(req, res) {
    Room.find({}, function(err, rooms) {
        res.render('rooms/index', { rooms })
    });
};

function show(req, res) {
    Room.findById(req.params.id, function(err, room) {
        res.render('rooms/show', {room})
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