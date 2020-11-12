const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');

// import stakeholder model
const Stakeholder = require('../model/Stakeholder');

// @desc    Get all stakeholders
// @route   GET /api/v1/stakeholders
// @access  Private
exports.getStakeholders = asyncHandler(async (req, res, next) => {
	const stakeholders = await Stakeholder.find();
	res
		.status(200)
		.json({ success: true, count: stakeholders.length, data: stakeholders });
});

// @desc    Get a stakeholder
// @route   GET /api/v1/stakeholders/:id
// @access  Private
exports.getStakeholder = asyncHandler(async (req, res, next) => {
	const stakeholder = await Stakeholder.findById(req.params.id);
	res.status(200).json({ success: true, data: stakeholder });
});

// @desc    Add a stakeholder
// @route   POST /api/v1/stakeholders/:id
// @access  Private
exports.addStakeholder = asyncHandler(async (req, res, next) => {
	console.log(req.body);
	const stakeholder = await Stakeholder.create(req.body);
	res.status(200).json({ success: true, data: stakeholder });
});

// @desc    Update a stakeholder
// @route   PUT /api/v1/stakeholders/:id
// @access  Private
exports.updateStakeholder = asyncHandler(async (req, res, next) => {
	let stakeholder = await Stakeholder.findById(req.params.id);
	stakeholder = await Stakeholder.findByIdAndUpdate(req.params.id, req.body, {
		new: true,
		runValidators: true,
	});
	res.status(200).json({ success: true, data: stakeholder });
});

// @desc    Delete a stakeholder
// @route   DELETE /api/v1/stakeholders/:id
// @access  Private
exports.deleteStakeholder = asyncHandler(async (req, res, next) => {
	await Stakeholder.findOneAndDelete(req.params.id);
	res.status(200).json({ success: true, data: {} });
});
