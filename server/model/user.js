var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    email: {
        type: String
    },
    password: {
        type: String
    },
    name: {
    	type: String
    },
    location: {
    	type: String
    }
});

module.exports = mongoose.model('User', userSchema);
