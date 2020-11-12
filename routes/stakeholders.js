const express = require('express');
const router = express.Router();

// import stakeholder controller functions
const {
	getStakeholders,
	getStakeholder,
	addStakeholder,
	updateStakeholder,
	deleteStakeholder,
} = require('../controller/stakeholders');

// define general route
router.route('/').get(getStakeholders).post(addStakeholder);

// define specific route
router
	.route('/:id')
	.get(getStakeholder)
	.put(updateStakeholder)
	.delete(deleteStakeholder);

// export router
module.exports = router;
