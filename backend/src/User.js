const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    fullname: String,
    email: String
});

module.exports = mongoose.model('users', UserSchema);