const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');

// @desc    GET all projects
// @route   GET /api/v1/projects
// @access  Public
exports.getProjects = asyncHandler(async (req, res, next) => {
	res.status(200).json({ success: true, data: 12345 });
});

// @desc    GET a project
// @route   GET /api/v1/project/:id
// @access  Private
exports.getProject = asyncHandler(async (req, res, next) => {
	res.status(200).json({ sucess: true, data: req.params.id });
});
