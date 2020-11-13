const express = require('express');
const router = express.Router({ mergeParams: true });

// import stakeholder controller functions
const {
	getStakeholders,
	getStakeholder,
	addStakeholder,
	updateStakeholder,
	deleteStakeholder,
} = require('../controller/stakeholders');

const Stakeholder = require('../model/Stakeholder');
const advancedResults = require('../middleware/advancedResuts');

// define general route
router
	.route('/')
	.get(
		advancedResults(Stakeholder, {
			path: 'project',
			select: 'name, description',
		}),
		getStakeholders
	)
	.post(addStakeholder);

// define specific route
router
	.route('/:id')
	.get(getStakeholder)
	.put(updateStakeholder)
	.delete(deleteStakeholder);

// export router
module.exports = router;
