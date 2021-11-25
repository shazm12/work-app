const mongoose = require('mongoose');

const commentSchema = mongoose.Schema({

    name: String,
    comment : String,

});

const Comments = mongoose.model('Comments',commentSchema);

module.exports = Comments