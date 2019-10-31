const mongoose = require('mongoose');

const LogSchema = new mongoose.Schema({
	_id: {
		type: mongoose.ObjectId,
		required: true,
		auto: true,
	},
	osID: mongoose.ObjectId,
	userID: mongoose.ObjectId,
	data: String,
	action: [String]
}, { versionKey: false });

module.exports = mongoose.model('log', LogSchema, 'log');