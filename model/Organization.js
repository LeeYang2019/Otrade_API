const mongoose = require('mongoose');

//define schema
const OrganizationSchema = mongoose.Schema({
	name: {
		type: String,
		required: [true, 'Please add an organization name'],
	},
	political_division: {
		type: String,
		required: [true, 'Please add a political division'],
	},
	address: {
		type: String,
		required: [true, 'Please add an address'],
	},
	// stakeholders: {},
	email: {
		type: String,
		match: [
			/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
			'Please add a valid email',
		],
	},
	telephone: {
		type: String,
		match: [
			/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/,
			/^(\+0?1\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/,
			/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/,
		],
	},
	website: {
		type: String,
	},
});

//export schema as model
module.exports = mongoose.model('Organization', OrganizationSchema);
