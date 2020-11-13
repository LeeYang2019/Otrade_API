const mongoose = require('mongoose');

//define schema
const StakeholderSchema = new mongoose.Schema(
	{
		firstName: {
			type: String,
			required: [true, 'Please enter a firstName'],
		},
		lastName: {
			type: String,
			required: [true, 'Please enter a lastName'],
		},
		gender: {
			type: String,
			require: [true, 'Please enter a gender'],
			enum: ['male', 'female', 'other'],
		},
		birthDate: {
			type: String,
			require: false,
		},
		telephone: {
			type: String,
			match: [
				/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/,
				/^(\+0?1\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/,
				/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/,
			],
		},
		email: {
			type: String,
			match: [
				/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
				'Please add a valid email',
			],
		},
		social: {
			youtube: {
				type: String,
			},
			twitter: {
				type: String,
			},
			facebook: {
				type: String,
			},
			linkedin: {
				type: String,
			},
		},
		project: {
			type: mongoose.Schema.ObjectId,
			ref: 'Project',
			required: true,
		},
	},
	{
		toJSON: { virtuals: true },
		toObject: { virtuals: true },
	}
);

// populate stakeholders with activities, comments, organization


//export schema as model
module.exports = mongoose.model('Stakeholder', StakeholderSchema);
