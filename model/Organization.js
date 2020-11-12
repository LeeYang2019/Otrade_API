const mongoose = require('mongoose');

//define schema
const OrganizationSchema = mongoose.Schema({});

//export schema as model
module.exports = mongoose.model('Organization', OrganizationSchema);
