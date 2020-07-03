const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
    file_name: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model("Post", postSchema)