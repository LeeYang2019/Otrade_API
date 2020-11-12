const express = require('express');
const router = express.Router();

// import project controller methods
const {
	getProjects,
	getProject,
	addProject,
	updateProject,
	deleteProject,
} = require('../controller/projects');

//define general route
router.route('/').get(getProjects).post(addProject);

//define specific route
router.route('/:id').get(getProject).put(updateProject).delete(deleteProject);

module.exports = router;
