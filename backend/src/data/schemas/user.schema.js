const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    _id: {
        type: mongoose.ObjectId,
        required: true,
        auto: true,
    },
    username: { type: String, unique: true, required: true },
    fullname: String,
    password: String,
    email: String,
    permissions: [String],
    attributes: [String],
    city: [String],
    empresa: String,
    home: String,
    type: String,
    terceiro: String
}, { versionKey: false });

module.exports = mongoose.model('users', UserSchema, 'users');