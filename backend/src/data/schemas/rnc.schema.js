const mongoose = require('mongoose');

const RNCSchema = new mongoose.Schema({
	_id: {
		type: mongoose.ObjectId,
		required: true,
		auto: true,
	},
	name: String
}, { versionKey: false });

module.exports = mongoose.model('rnc', RNCSchema, 'rnc');