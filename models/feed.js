const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
    text: String
    }, {
    timestamps: true
});

const foodieSchema = new Schema({
    name: String,
    email: String,
    avatar: String,
    posts: [postSchema],
    googleId: String
    }, {
    timestamps: true
});

module.exports = mongoose.model('Foodie', foodieSchema);