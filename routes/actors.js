//bring in express
const express = require('express');

//bring in controller functions
const {
	getActors,
	getActor,
	addActor,
	updateActor,
	deleteActor,
} = require('../controller/actors');

//create router
const router = express.Router();

//generic route
router.route('/').get(getActors).post(addActor);

//route with id
router.route('/:id').get(getActor).put(updateActor).delete(deleteActor);

module.exports = router;
