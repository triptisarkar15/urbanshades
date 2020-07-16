const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
    filename: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model("Post", postSchema)