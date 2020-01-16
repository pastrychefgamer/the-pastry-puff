const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    text: {
        type: String
    }
});

const roomSchema = new Schema({
    title: String,
    comments: [commentSchema]
    }, {
    timestamps: true
});

module.exports = mongoose.model('Room', roomSchema);