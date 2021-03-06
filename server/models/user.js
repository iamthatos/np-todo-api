var mongoose = require('mongoose');

var User = mongoose.model('User', {
    email: {
        type: String,
        required: [true, 'Email is required'],
        minLength: 1,
        trim: true
    }
});

module.exports = {
    User
}
