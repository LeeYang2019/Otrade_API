const mongoose = require('mongoose');

// Define the schema
const ProjectSchema = new mongoose.Schema({
	projectName: {
		type: String,
		required: [true, 'Please add a project name'],
	},
	projectClient: {
		type: String,
		required: [true, 'Please add a project client'],
	},
	// coordinates: {},
});

// Exports
module.exports = mongoose.model('Project', ProjectSchema);
